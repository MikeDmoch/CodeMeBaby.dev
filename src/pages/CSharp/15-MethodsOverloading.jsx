import CodeBlock from "../../components/CodeBlock";

export const title = "Metody i przeciążanie metod";

export default function MethodsAndOverloading() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Metody to podstawowy element programowania w C#. Pozwalają one grupować
        instrukcje w logiczne jednostki, które można wielokrotnie wywoływać.
        Dzięki nim kod staje się bardziej przejrzysty, modularny i łatwiejszy w
        utrzymaniu.
      </p>

      <h3>Definicja metody</h3>
      <p>
        Metoda to blok kodu, który wykonuje określone działanie. Może przyjmować
        argumenty i zwracać wartość lub być typu <code>void</code>, jeśli nic
        nie zwraca.
      </p>

      <CodeBlock
        language="csharp"
        code={`[modyfikator_dostępu] [typ_zwracany] [nazwa_metody]([parametry])
{
    // ciało metody
}`}
      />

      <p>Przykład prostej metody:</p>

      <CodeBlock
        language="csharp"
        code={`public class Kalkulator
{
    public int Dodaj(int a, int b)
    {
        return a + b;
    }
}

// Użycie:
Kalkulator k = new Kalkulator();
Console.WriteLine(k.Dodaj(3, 5)); // 8`}
      />

      <h3>Metody bez wartości zwracanej</h3>
      <p>
        Metody oznaczone jako <code>void</code> nie zwracają żadnej wartości.
        Służą do wykonywania czynności, np. wyświetlania komunikatów.
      </p>

      <CodeBlock
        language="csharp"
        code={`public void Przywitaj(string imie)
{
    Console.WriteLine($"Cześć, {imie}!");
}

// Użycie:
Przywitaj("Jan");`}
      />

      <h3>Parametry metod</h3>
      <p>
        Metody mogą przyjmować parametry, które pozwalają przekazać dane
        wejściowe. Można też ustalać wartości domyślne dla parametrów.
      </p>

      <CodeBlock
        language="csharp"
        code={`public void PokazWiadomosc(string tekst = "Brak wiadomości")
{
    Console.WriteLine(tekst);
}

// Użycie:
PokazWiadomosc();            // Brak wiadomości
PokazWiadomosc("Hello!");    // Hello!`}
      />

      <h3>Słowo kluczowe return</h3>
      <p>
        Jeśli metoda zwraca wartość, musi zawierać instrukcję{" "}
        <code>return</code>. Określa ona, co ma zostać przekazane jako wynik
        działania metody.
      </p>

      <CodeBlock
        language="csharp"
        code={`public int Pomnoz(int a, int b)
{
    return a * b;
}

int wynik = Pomnoz(4, 5);
Console.WriteLine(wynik); // 20`}
      />

      <h3>Metody statyczne</h3>
      <p>
        Metody statyczne należą do klasy, a nie do jej instancji. Można je
        wywoływać bez tworzenia obiektu.
      </p>

      <CodeBlock
        language="csharp"
        code={`public static class Narzedzia
{
    public static void Info()
    {
        Console.WriteLine("To jest metoda statyczna");
    }
}

// Użycie:
Narzedzia.Info();`}
      />

      <h3>Przeciążanie metod (Overloading)</h3>
      <p>
        Przeciążanie metod pozwala tworzyć kilka metod o tej samej nazwie, ale
        różniących się listą parametrów (typem, liczbą lub kolejnością
        argumentów). Dzięki temu można pisać bardziej elastyczny i czytelny kod.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Kalkulator
{
    public int Dodaj(int a, int b)
    {
        return a + b;
    }

    public double Dodaj(double a, double b)
    {
        return a + b;
    }

    public int Dodaj(int a, int b, int c)
    {
        return a + b + c;
    }
}

// Użycie:
Kalkulator k = new Kalkulator();
Console.WriteLine(k.Dodaj(2, 3));        // 5
Console.WriteLine(k.Dodaj(2.5, 3.5));    // 6
Console.WriteLine(k.Dodaj(1, 2, 3));     // 6`}
      />

      <h4>Zasady przeciążania metod:</h4>
      <ul>
        <li>
          Każda wersja metody musi różnić się liczbą lub typem parametrów.
        </li>
        <li>Nie można przeciążać metod tylko na podstawie typu zwracanego.</li>
        <li>
          Przeciążanie działa również z parametrami opcjonalnymi i tablicami
          argumentów.
        </li>
      </ul>

      <h3>Parametry ref, out i params</h3>
      <p>
        C# udostępnia specjalne modyfikatory parametrów, które pozwalają
        przekazywać dane w różny sposób.
      </p>

      <h4>ref</h4>
      <p>
        Parametr <code>ref</code> przekazuje wartość przez referencję - metoda
        może zmieniać wartość zmiennej przekazanej jako argument.
      </p>

      <CodeBlock
        language="csharp"
        code={`public void Zmien(ref int x)
{
    x = x + 10;
}

// Użycie:
int liczba = 5;
Zmien(ref liczba);
Console.WriteLine(liczba); // 15`}
      />

      <h4>out</h4>
      <p>
        Parametr <code>out</code> pozwala metodzie zwrócić więcej niż jedną
        wartość. Zmienna przekazywana przez <code>out</code> nie musi być
        zainicjalizowana wcześniej.
      </p>

      <CodeBlock
        language="csharp"
        code={`public void Oblicz(int a, int b, out int suma, out int iloczyn)
{
    suma = a + b;
    iloczyn = a * b;
}

// Użycie:
int s, i;
Oblicz(3, 4, out s, out i);
Console.WriteLine($"Suma: {s}, Iloczyn: {i}");`}
      />

      <h4>params</h4>
      <p>
        Parametr <code>params</code> umożliwia przekazanie dowolnej liczby
        argumentów jako tablicy tego samego typu.
      </p>

      <CodeBlock
        language="csharp"
        code={`public int Suma(params int[] liczby)
{
    int wynik = 0;
    foreach (int n in liczby)
        wynik += n;
    return wynik;
}

// Użycie:
Console.WriteLine(Suma(1, 2, 3, 4, 5)); // 15`}
      />

      <h3>Przeciążanie metod statycznych</h3>
      <p>
        Metody statyczne również mogą być przeciążane, jeśli mają różne listy
        parametrów.
      </p>

      <CodeBlock
        language="csharp"
        code={`public static class Matematyka
{
    public static int Potega(int x)
    {
        return x * x;
    }

    public static int Potega(int x, int y)
    {
        return (int)Math.Pow(x, y);
    }
}

// Użycie:
Console.WriteLine(Matematyka.Potega(4));    // 16
Console.WriteLine(Matematyka.Potega(2, 3)); // 8`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Metody są kluczowym elementem struktury programów w C#. Pozwalają na
        organizowanie kodu w logiczne fragmenty, co poprawia czytelność i
        ponowne wykorzystanie. Przeciążanie metod natomiast umożliwia pisanie
        bardziej elastycznych funkcji, które dostosowują się do różnych potrzeb
        użytkownika.
      </p>

      <p>
        W praktyce, przeciążanie metod stosuje się często w klasach
        narzędziowych, bibliotekach matematycznych i API, aby umożliwić
        programiście wybór najbardziej odpowiedniej wersji metody bez
        konieczności pamiętania różnych nazw.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
