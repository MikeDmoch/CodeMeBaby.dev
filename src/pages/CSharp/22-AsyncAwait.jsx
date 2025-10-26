import CodeBlock from "../../components/CodeBlock";

export const title = "Asynchroniczność i async/await";

export default function AsyncAwait() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Asynchroniczność to kluczowy element nowoczesnych aplikacji C#. Pozwala
        wykonywać operacje wejścia–wyjścia (I/O), sieciowe lub plikowe bez
        blokowania głównego wątku programu. Dzięki słowom kluczowym{" "}
        <code>async</code> i <code>await</code> można pisać kod asynchroniczny w
        sposób przejrzysty i zrozumiały.
      </p>

      <h3>Problem z kodem synchronicznym</h3>
      <p>
        Kod synchroniczny wykonuje się liniowo — dopóki jedna operacja się nie
        zakończy, kolejne nie zostaną rozpoczęte. Może to blokować interfejs
        użytkownika lub opóźniać inne działania.
      </p>

      <CodeBlock
        language="csharp"
        code={`void PobierzDane()
{
    Thread.Sleep(3000);
    Console.WriteLine("Dane pobrane!");
}

Console.WriteLine("Pobieranie...");
PobierzDane();
Console.WriteLine("Zakończono.");`}
      />

      <p>
        Powyższy kod blokuje wątek na 3 sekundy. W aplikacji GUI oznaczałoby to
        „zamrożenie” interfejsu.
      </p>

      <h3>Asynchroniczne podejście</h3>
      <p>
        Dzięki <code>async</code> i <code>await</code> możemy wykonywać
        długotrwałe operacje w tle bez blokowania głównego wątku.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.Threading.Tasks;

class Program
{
    static async Task PobierzDaneAsync()
    {
        Console.WriteLine("Rozpoczynam pobieranie...");
        await Task.Delay(3000); // symulacja oczekiwania
        Console.WriteLine("Dane pobrane!");
    }

    static async Task Main()
    {
        await PobierzDaneAsync();
        Console.WriteLine("Program zakończony.");
    }
}`}
      />

      <p>
        Słowo kluczowe <code>await</code> wstrzymuje wykonanie metody do momentu
        zakończenia zadania, ale nie blokuje wątku – program może w tym czasie
        wykonywać inne operacje.
      </p>

      <h3>Słowo kluczowe async</h3>
      <p>
        Aby móc używać <code>await</code>, metoda musi być oznaczona słowem{" "}
        <code>async</code>. Oznacza to, że metoda może działać asynchronicznie i
        zwykle zwraca <code>Task</code>
        lub <code>Task&lt;T&gt;</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`async Task PobierzDaneAsync()
{
    await Task.Delay(2000);
    Console.WriteLine("Dane gotowe!");
}`}
      />

      <h3>Zwracanie wartości z async</h3>
      <p>
        Asynchroniczne metody mogą również zwracać wartości. W tym celu używa
        się <code>Task&lt;T&gt;</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`async Task<int> DodajAsync(int a, int b)
{
    await Task.Delay(1000);
    return a + b;
}

int wynik = await DodajAsync(3, 5);
Console.WriteLine("Wynik: " + wynik);`}
      />

      <h3>Uruchamianie kilku zadań równocześnie</h3>
      <p>
        Możesz uruchamiać kilka metod asynchronicznych równocześnie i poczekać
        na wszystkie za pomocą <code>Task.WhenAll()</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`async Task PobierzPlikAsync(string nazwa)
{
    Console.WriteLine($"Pobieranie {nazwa}...");
    await Task.Delay(2000);
    Console.WriteLine($"{nazwa} pobrany.");
}

await Task.WhenAll(
    PobierzPlikAsync("plik1.txt"),
    PobierzPlikAsync("plik2.txt"),
    PobierzPlikAsync("plik3.txt")
);

Console.WriteLine("Wszystkie pliki pobrane.");`}
      />

      <h3>Obsługa wyjątków w kodzie asynchronicznym</h3>
      <p>
        Błędy w metodach asynchronicznych obsługuje się tak samo jak w kodzie
        synchronicznym, przy użyciu <code>try-catch</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`async Task PobierzDaneAsync()
{
    try
    {
        await Task.Delay(1000);
        throw new Exception("Błąd połączenia z serwerem!");
    }
    catch (Exception ex)
    {
        Console.WriteLine("Wyjątek: " + ex.Message);
    }
}`}
      />

      <h3>Równoległe przetwarzanie z Task.WhenAny()</h3>
      <p>
        Jeśli chcesz zakończyć operację po pierwszym ukończonym zadaniu, użyj{" "}
        <code>Task.WhenAny()</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`Task<int> t1 = Task.Run(async () =>
{
    await Task.Delay(3000);
    return 1;
});

Task<int> t2 = Task.Run(async () =>
{
    await Task.Delay(1000);
    return 2;
});

Task<int> pierwszy = await Task.WhenAny(t1, t2);
Console.WriteLine("Pierwszy zakończony: " + pierwszy.Result);`}
      />

      <h3>Asynchroniczne odczyty i zapisy plików</h3>
      <p>
        W przestrzeni nazw <code>System.IO</code> znajdują się metody
        asynchroniczne, takie jak <code>File.ReadAllTextAsync()</code> czy{" "}
        <code>File.WriteAllTextAsync()</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System.IO;
using System.Threading.Tasks;

string dane = "Zapis asynchroniczny do pliku.";
await File.WriteAllTextAsync("dane.txt", dane);

string odczyt = await File.ReadAllTextAsync("dane.txt");
Console.WriteLine(odczyt);`}
      />

      <h3>Asynchroniczne operacje sieciowe (HttpClient)</h3>
      <p>
        Asynchroniczność jest niezbędna przy pracy z siecią. Klasa{" "}
        <code>HttpClient</code> wykorzystuje metody asynchroniczne do pobierania
        danych.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System.Net.Http;

HttpClient client = new HttpClient();
string html = await client.GetStringAsync("https://example.com");

Console.WriteLine(html.Substring(0, 100));`}
      />

      <h3>Anulowanie zadań (CancellationToken)</h3>
      <p>
        Asynchroniczne operacje można anulować za pomocą{" "}
        <code>CancellationTokenSource</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System.Threading;

var cts = new CancellationTokenSource();
var token = cts.Token;

var zadanie = Task.Run(async () =>
{
    for (int i = 0; i < 10; i++)
    {
        token.ThrowIfCancellationRequested();
        Console.WriteLine($"Iteracja {i}");
        await Task.Delay(500);
    }
}, token);

cts.CancelAfter(2000);

try
{
    await zadanie;
}
catch (OperationCanceledException)
{
    Console.WriteLine("Zadanie anulowane.");
}`}
      />

      <h3>Async void - kiedy unikać</h3>
      <p>
        Metody asynchroniczne powinny zawsze zwracać <code>Task</code> lub{" "}
        <code>Task&lt;T&gt;</code>. Typ <code>async void</code> należy stosować
        tylko w obsłudze zdarzeń.
      </p>

      <CodeBlock
        language="csharp"
        code={`// Zła praktyka:
async void Pobierz() { await Task.Delay(1000); }

// Dobra praktyka:
async Task PobierzAsync() { await Task.Delay(1000); }`}
      />

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj <code>async</code> i <code>await</code> wszędzie tam, gdzie
          operacje trwają dłużej (I/O, sieć).
        </li>
        <li>
          Unikaj blokowania zadań przy pomocy <code>.Wait()</code> lub{" "}
          <code>.Result</code>.
        </li>
        <li>
          Stosuj <code>Task.WhenAll</code> zamiast pętli z <code>await</code>{" "}
          dla równoległości.
        </li>
        <li>
          Obsługuj błędy za pomocą <code>try-catch</code> w metodach async.
        </li>
        <li>
          Używaj <code>CancellationToken</code> do bezpiecznego przerywania
          operacji.
        </li>
        <li>
          Nie używaj <code>async void</code> poza zdarzeniami.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Mechanizm <code>async/await</code> znacząco upraszcza programowanie
        asynchroniczne w C#. Pozwala pisać kod, który wygląda jak synchroniczny,
        ale działa nieblokująco. W nowoczesnych aplikacjach .NET jest to
        standard przy operacjach sieciowych, plikowych i bazodanowych.
      </p>

      <p>
        W praktyce: zawsze wybieraj <code>await</code> zamiast blokowania, a
        Twoje aplikacje będą działać szybciej i płynniej.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
