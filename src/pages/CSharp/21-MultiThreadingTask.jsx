import CodeBlock from "../../components/CodeBlock";

export const title = "Wielowątkowość i Task";

export default function MultithreadingTask() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Wielowątkowość (ang. multithreading) pozwala programowi wykonywać wiele
        operacji jednocześnie. Dzięki temu aplikacja może pozostać responsywna,
        nawet podczas wykonywania czasochłonnych zadań. W C# wielowątkowość
        można realizować na wiele sposobów – od klasy <code>Thread</code> po
        nowoczesne mechanizmy <code>Task</code> i <code>async/await</code>.
      </p>

      <h3>Podstawy wątków</h3>
      <p>
        Wątek (ang. thread) to niezależna ścieżka wykonania kodu. Każdy program
        C# zaczyna od głównego wątku, ale można tworzyć kolejne, by wykonywać
        operacje równolegle.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.Threading;

class Program
{
    static void Watek()
    {
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"Wątek: {i}");
            Thread.Sleep(500);
        }
    }

    static void Main()
    {
        Thread t = new Thread(Watek);
        t.Start();

        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"Główny: {i}");
            Thread.Sleep(500);
        }
    }
}`}
      />

      <p>
        W powyższym przykładzie dwa wątki działają równolegle – główny i
        dodatkowy, który wywołuje metodę
        <code>Watek()</code>.
      </p>

      <h3>Właściwości klasy Thread</h3>
      <ul>
        <li>
          <code>IsAlive</code> – informuje, czy wątek nadal działa,
        </li>
        <li>
          <code>Join()</code> – blokuje główny wątek do zakończenia danego
          wątku,
        </li>
        <li>
          <code>Sleep(ms)</code> – wstrzymuje działanie wątku,
        </li>
        <li>
          <code>Priority</code> – ustawia priorytet wykonania.
        </li>
      </ul>

      <CodeBlock
        language="csharp"
        code={`Thread t = new Thread(Watek);
t.Start();
t.Join(); // czekaj, aż wątek się zakończy
Console.WriteLine("Wątek zakończony.");`}
      />

      <h2>Task - nowoczesny sposób pracy z wątkami</h2>
      <p>
        Klasa <code>Task</code> jest częścią przestrzeni nazw{" "}
        <code>System.Threading.Tasks</code> i służy do asynchronicznego
        uruchamiania zadań. Zastępuje ręczne zarządzanie wątkami.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        Task zadanie = Task.Run(() =>
        {
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine($"Task działa {i}");
                Task.Delay(500).Wait();
            }
        });

        zadanie.Wait();
        Console.WriteLine("Zadanie zakończone.");
    }
}`}
      />

      <h3>Zwracanie wartości z Task</h3>
      <p>
        Task może zwracać wartość, jeśli użyjesz wersji generycznej{" "}
        <code>Task&lt;T&gt;</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`Task<int> wynik = Task.Run(() =>
{
    int suma = 0;
    for (int i = 1; i <= 10; i++)
        suma += i;
    return suma;
});

Console.WriteLine($"Suma: {wynik.Result}");`}
      />

      <h3>Task.WaitAll i Task.WhenAll</h3>
      <p>
        Jeśli chcesz uruchomić kilka zadań jednocześnie, możesz użyć{" "}
        <code>Task.WhenAll()</code> (asynchronicznie) lub{" "}
        <code>Task.WaitAll()</code> (blokująco).
      </p>

      <CodeBlock
        language="csharp"
        code={`Task t1 = Task.Run(() => Console.WriteLine("Zadanie 1"));
Task t2 = Task.Run(() => Console.WriteLine("Zadanie 2"));
Task t3 = Task.Run(() => Console.WriteLine("Zadanie 3"));

Task.WaitAll(t1, t2, t3);
Console.WriteLine("Wszystkie zadania zakończone.");`}
      />

      <h3>Async i await</h3>
      <p>
        Słowa kluczowe <code>async</code> i <code>await</code> umożliwiają
        asynchroniczne wykonywanie metod w czytelny sposób, bez blokowania
        głównego wątku.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.Threading.Tasks;

class Program
{
    static async Task PobierzDaneAsync()
    {
        Console.WriteLine("Pobieranie danych...");
        await Task.Delay(2000);
        Console.WriteLine("Dane pobrane.");
    }

    static async Task Main()
    {
        await PobierzDaneAsync();
        Console.WriteLine("Program zakończony.");
    }
}`}
      />

      <h3>Synchronizacja wątków - słowo kluczowe lock</h3>
      <p>
        Gdy wiele wątków korzysta z tych samych danych, może dojść do konfliktów
        (race condition). Aby temu zapobiec, używa się <code>lock</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`object blokada = new object();
int licznik = 0;

void Zwieksz()
{
    for (int i = 0; i < 1000; i++)
    {
        lock (blokada)
        {
            licznik++;
        }
    }
}

Task t1 = Task.Run(Zwieksz);
Task t2 = Task.Run(Zwieksz);

Task.WaitAll(t1, t2);
Console.WriteLine("Licznik: " + licznik);`}
      />

      <h3>Parallel.For i Parallel.ForEach</h3>
      <p>
        Dla operacji powtarzalnych na dużych zbiorach danych można używać metod
        z klasy <code>Parallel</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.Threading.Tasks;

Parallel.For(1, 6, i =>
{
    Console.WriteLine($"Iteracja {i} - wątek: {Thread.CurrentThread.ManagedThreadId}");
});`}
      />

      <h3>Przykład: równoległe przetwarzanie danych</h3>
      <CodeBlock
        language="csharp"
        code={`string[] pliki = { "a.txt", "b.txt", "c.txt" };

Parallel.ForEach(pliki, plik =>
{
    Console.WriteLine($"Przetwarzanie {plik} w wątku {Thread.CurrentThread.ManagedThreadId}");
    Thread.Sleep(500);
});`}
      />

      <h3>Anulowanie zadania - CancellationToken</h3>
      <p>
        Możesz anulować działanie zadania przy pomocy{" "}
        <code>CancellationTokenSource</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System.Threading;
using System.Threading.Tasks;

var cts = new CancellationTokenSource();
var token = cts.Token;

Task zadanie = Task.Run(() =>
{
    for (int i = 0; i < 10; i++)
    {
        if (token.IsCancellationRequested)
        {
            Console.WriteLine("Zadanie anulowane.");
            return;
        }
        Console.WriteLine($"Iteracja {i}");
        Thread.Sleep(500);
    }
}, token);

Thread.Sleep(2000);
cts.Cancel(); // anulowanie zadania
zadanie.Wait();`}
      />

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj <code>Task</code> zamiast <code>Thread</code> – jest
          wydajniejszy i prostszy w zarządzaniu.
        </li>
        <li>
          Unikaj nadmiernego tworzenia wątków – każdy zajmuje zasoby systemowe.
        </li>
        <li>
          Stosuj <code>lock</code> lub inne mechanizmy synchronizacji przy
          dostępie do współdzielonych danych.
        </li>
        <li>
          Do pracy z dużymi zbiorami używaj <code>Parallel</code> lub{" "}
          <code>PLINQ</code>.
        </li>
        <li>
          W aplikacjach interfejsowych używaj <code>async/await</code>, aby nie
          blokować UI.
        </li>
        <li>
          Pamiętaj o anulowaniu zadań przy użyciu <code>CancellationToken</code>
          .
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Wielowątkowość i zadania asynchroniczne to potężne narzędzia
        zwiększające wydajność i responsywność aplikacji. Współczesne aplikacje
        C# coraz częściej korzystają z <code>Task</code> i{" "}
        <code>async/await</code>, które ułatwiają pisanie czytelnego i
        bezpiecznego kodu wielowątkowego.
      </p>

      <p>
        W praktyce: używaj klasy <code>Task</code> do zadań asynchronicznych,{" "}
        <code>Parallel</code> do operacji na danych i pamiętaj o synchronizacji
        współdzielonych zasobów.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
