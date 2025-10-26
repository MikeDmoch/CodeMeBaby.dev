import CodeBlock from "../../components/CodeBlock";

export const title = "Obsługa wyjątków";

export default function Exceptions() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Wyjątki w C# są mechanizmem obsługi błędów, który pozwala reagować na
        nieoczekiwane sytuacje w czasie działania programu. Zamiast powodować
        jego awarię, można przechwycić błąd, obsłużyć go i kontynuować działanie
        aplikacji w kontrolowany sposób.
      </p>

      <h3>Co to jest wyjątek?</h3>
      <p>
        Wyjątek (ang. exception) to obiekt reprezentujący błąd, który wystąpił
        podczas działania programu. Kiedy wystąpi, program przerywa normalny
        przepływ wykonania i przechodzi do najbliższego bloku
        <code>catch</code> zdolnego go obsłużyć.
      </p>

      <CodeBlock
        language="csharp"
        code={`int x = 5;
int y = 0;

int wynik = x / y; // System.DivideByZeroException`}
      />

      <p>
        Powyższy kod spowoduje wyjątek <code>DivideByZeroException</code>,
        ponieważ dzielenie przez zero nie jest dozwolone. Aby uniknąć awarii
        programu, należy taki przypadek obsłużyć.
      </p>

      <h3>Podstawowa obsługa wyjątków - try i catch</h3>
      <p>
        Aby przechwycić wyjątek, należy umieścić kod potencjalnie niebezpieczny
        w bloku <code>try</code>i dodać przynajmniej jeden blok{" "}
        <code>catch</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`try
{
    int a = 10;
    int b = 0;
    int c = a / b;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Nie można dzielić przez zero!");
    Console.WriteLine("Szczegóły: " + ex.Message);
}`}
      />

      <p>
        Gdy w bloku <code>try</code> wystąpi wyjątek, sterowanie natychmiast
        przechodzi do odpowiedniego bloku <code>catch</code>. Jeśli żaden
        wyjątek nie wystąpi, blok <code>catch</code> jest pomijany.
      </p>

      <h3>Blok finally</h3>
      <p>
        Blok <code>finally</code> wykonywany jest zawsze, niezależnie od tego,
        czy wystąpił wyjątek, czy nie. Używa się go do zwalniania zasobów, np.
        zamykania plików lub połączeń.
      </p>

      <CodeBlock
        language="csharp"
        code={`try
{
    Console.WriteLine("Otwieranie pliku...");
    throw new Exception("Błąd podczas czytania pliku");
}
catch (Exception ex)
{
    Console.WriteLine("Wystąpił wyjątek: " + ex.Message);
}
finally
{
    Console.WriteLine("Zamykanie pliku...");
}`}
      />

      <h3>Obsługa wielu wyjątków</h3>
      <p>
        Można przechwytywać różne typy wyjątków, używając wielu bloków{" "}
        <code>catch</code>. Bloki są sprawdzane od góry do dołu, dlatego
        najpierw należy umieszczać bardziej szczegółowe typy wyjątków.
      </p>

      <CodeBlock
        language="csharp"
        code={`try
{
    int[] liczby = { 1, 2, 3 };
    Console.WriteLine(liczby[5]); // IndexOutOfRangeException
}
catch (IndexOutOfRangeException)
{
    Console.WriteLine("Próba odwołania się poza zakres tablicy.");
}
catch (Exception ex)
{
    Console.WriteLine("Inny błąd: " + ex.Message);
}`}
      />

      <h3>Rzucanie wyjątków - throw</h3>
      <p>
        Aby samodzielnie zgłosić wyjątek, używa się słowa kluczowego{" "}
        <code>throw</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`void Podziel(int a, int b)
{
    if (b == 0)
        throw new DivideByZeroException("Nie można dzielić przez zero!");

    Console.WriteLine(a / b);
}

// Użycie:
try
{
    Podziel(10, 0);
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Błąd: " + ex.Message);
}`}
      />

      <h3>Tworzenie własnych wyjątków</h3>
      <p>
        Możesz tworzyć własne klasy wyjątków, dziedzicząc po{" "}
        <code>Exception</code>. Dzięki temu komunikaty o błędach mogą być
        bardziej precyzyjne i dopasowane do logiki aplikacji.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class ZlyLoginException : Exception
{
    public ZlyLoginException(string message) : base(message)
    {
    }
}

public class Logowanie
{
    public void Zaloguj(string login, string haslo)
    {
        if (login != "admin" || haslo != "1234")
            throw new ZlyLoginException("Nieprawidłowy login lub hasło");
        Console.WriteLine("Zalogowano pomyślnie!");
    }
}

// Użycie:
try
{
    new Logowanie().Zaloguj("user", "0000");
}
catch (ZlyLoginException ex)
{
    Console.WriteLine("Błąd logowania: " + ex.Message);
}`}
      />

      <h3>Rzucanie i ponowne zgłaszanie wyjątków</h3>
      <p>
        Można przechwycić wyjątek i ponownie go rzucić, aby przekazać dalej.
      </p>

      <CodeBlock
        language="csharp"
        code={`try
{
    try
    {
        throw new InvalidOperationException("Błąd operacji");
    }
    catch (InvalidOperationException ex)
    {
        Console.WriteLine("Lokalna obsługa błędu: " + ex.Message);
        throw; // ponowne zgłoszenie wyjątku
    }
}
catch (Exception ex)
{
    Console.WriteLine("Zewnętrzna obsługa: " + ex.Message);
}`}
      />

      <h3>Filtrowanie wyjątków (C# 6+)</h3>
      <p>
        Od wersji C# 6 można filtrować wyjątki przy pomocy słowa kluczowego{" "}
        <code>when</code>. Pozwala to obsłużyć wyjątek tylko wtedy, gdy
        spełniony jest określony warunek.
      </p>

      <CodeBlock
        language="csharp"
        code={`try
{
    int liczba = int.Parse("abc");
}
catch (FormatException ex) when (DateTime.Now.DayOfWeek == DayOfWeek.Monday)
{
    Console.WriteLine("Błąd parsowania - wystąpił w poniedziałek!");
}
catch (FormatException ex)
{
    Console.WriteLine("Błąd parsowania w inny dzień.");
}`}
      />

      <h3>Najczęstsze wyjątki w C#</h3>
      <ul>
        <li>
          <code>DivideByZeroException</code> - dzielenie przez zero,
        </li>
        <li>
          <code>IndexOutOfRangeException</code> - nieprawidłowy indeks tablicy,
        </li>
        <li>
          <code>NullReferenceException</code> - próba użycia
          niezainicjalizowanego obiektu,
        </li>
        <li>
          <code>FormatException</code> - błędny format danych,
        </li>
        <li>
          <code>InvalidOperationException</code> - nieprawidłowy stan obiektu,
        </li>
        <li>
          <code>FileNotFoundException</code> - plik nie został znaleziony,
        </li>
        <li>
          <code>ArgumentException</code> i <code>ArgumentNullException</code> -
          błędne argumenty metod.
        </li>
      </ul>

      <h3>Dobre praktyki</h3>
      <ul>
        <li>Obsługuj tylko te wyjątki, które możesz rzeczywiście naprawić.</li>
        <li>Nie używaj wyjątków do kontrolowania logiki programu.</li>
        <li>
          Zawsze zwalniaj zasoby w bloku <code>finally</code> lub korzystaj z{" "}
          <code>using</code>.
        </li>
        <li>
          Nie przechwytuj ogólnego wyjątku <code>Exception</code>, jeśli to
          możliwe.
        </li>
        <li>Twórz własne wyjątki tylko wtedy, gdy mają realne zastosowanie.</li>
      </ul>

      <h3>Obsługa zasobów - using</h3>
      <p>
        Konstrukcja <code>using</code> automatycznie zwalnia zasoby
        implementujące interfejs <code>IDisposable</code>. Dzięki temu nie
        trzeba ręcznie zamykać połączeń, plików czy strumieni.
      </p>

      <CodeBlock
        language="csharp"
        code={`using (StreamReader reader = new StreamReader("plik.txt"))
{
    string zawartosc = reader.ReadToEnd();
    Console.WriteLine(zawartosc);
} // reader zostanie automatycznie zamknięty`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Obsługa wyjątków to fundament stabilnych i bezpiecznych aplikacji w C#.
        Mechanizmy <code>try-catch-finally</code> oraz <code>throw</code>{" "}
        pozwalają kontrolować błędy, zapewniając, że aplikacja reaguje w
        przewidywalny sposób.
      </p>

      <p>
        W praktyce warto dbać o to, by wyjątki były czytelne, odpowiednio
        obsługiwane i nie maskowały prawdziwych problemów w kodzie.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
