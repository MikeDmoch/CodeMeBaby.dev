import CodeBlock from "../../components/CodeBlock";

export const title = "Static, const i readonly";

export default function StaticConstReadonly() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        W języku C# słowa kluczowe <code>static</code>, <code>const</code> i{" "}
        <code>readonly</code>
        służą do zarządzania sposobem przechowywania danych oraz ich
        dostępnością. Określają, czy wartość pola należy do całej klasy, czy do
        konkretnej instancji, oraz czy może być zmieniana po przypisaniu.
      </p>

      <h3>static</h3>
      <p>
        Słowo kluczowe <code>static</code> oznacza, że element (pole, metoda lub
        właściwość) należy do klasy, a nie do konkretnego obiektu. Nie trzeba
        tworzyć instancji klasy, aby z niego skorzystać.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Kalkulator
{
    public static double Pi = 3.14159;

    public static int Dodaj(int a, int b)
    {
        return a + b;
    }
}

// Użycie:
Console.WriteLine(Kalkulator.Pi);           // 3.14159
Console.WriteLine(Kalkulator.Dodaj(3, 5));  // 8`}
      />

      <p>
        W tym przykładzie zarówno pole <code>Pi</code>, jak i metoda{" "}
        <code>Dodaj()</code> są statyczne, co oznacza, że można ich używać bez
        tworzenia obiektu klasy <code>Kalkulator</code>.
      </p>

      <h4>Statyczne klasy</h4>
      <p>
        Klasy oznaczone jako <code>static</code> nie mogą być instancjonowane
        ani dziedziczone. Służą one jako zbiory metod pomocniczych (np. klasa{" "}
        <code>Math</code> w C#).
      </p>

      <CodeBlock
        language="csharp"
        code={`public static class Narzedzia
{
    public static void Wypisz(string tekst)
    {
        Console.WriteLine(tekst);
    }
}

// Użycie:
Narzedzia.Wypisz("Hello World");`}
      />

      <h3>const</h3>
      <p>
        Słowo kluczowe <code>const</code> oznacza stałą kompilacyjną - wartość,
        która nigdy się nie zmienia i jest znana już w momencie kompilacji.
        Stałe są zawsze niezmienne i nie mogą być modyfikowane.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Matematyka
{
    public const double Pi = 3.14159;
    public const int SekundyWMinucie = 60;
}

// Użycie:
Console.WriteLine(Matematyka.Pi);
Console.WriteLine(Matematyka.SekundyWMinucie);`}
      />

      <p>
        Pola oznaczone jako <code>const</code> są domyślnie <code>static</code>{" "}
        i należą do klasy, a nie do instancji. Nie można jednak ich
        inicjalizować w konstruktorze ani zmieniać w czasie działania programu.
      </p>

      <h3>readonly</h3>
      <p>
        Słowo kluczowe <code>readonly</code> pozwala oznaczyć pole, którego
        wartość może być ustawiona tylko raz - w momencie tworzenia obiektu lub
        w konstruktorze. W przeciwieństwie do <code>const</code>, wartość{" "}
        <code>readonly</code> może być ustalana dynamicznie.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Osoba
{
    public readonly string Imie;
    public readonly DateTime DataUrodzenia;

    public Osoba(string imie, DateTime data)
    {
        Imie = imie;
        DataUrodzenia = data;
    }

    public void Info()
    {
        Console.WriteLine($"{Imie}, ur. {DataUrodzenia:yyyy-MM-dd}");
    }
}

// Użycie:
Osoba o = new Osoba("Adam", new DateTime(1990, 5, 1));
o.Info();
// o.Imie = "Ewa"; // Błąd - readonly można ustawić tylko w konstruktorze`}
      />

      <p>
        W powyższym przykładzie pola <code>Imie</code> i{" "}
        <code>DataUrodzenia</code> można przypisać tylko w konstruktorze. Po
        utworzeniu obiektu ich wartości są niezmienne.
      </p>

      <h3>Porównanie static, const i readonly</h3>
      <table>
        <thead>
          <tr>
            <th>Cecha</th>
            <th>static</th>
            <th>const</th>
            <th>readonly</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Przynależność</td>
            <td>Do klasy</td>
            <td>Do klasy</td>
            <td>Do instancji lub klasy</td>
          </tr>
          <tr>
            <td>Zmiana wartości</td>
            <td>Można zmieniać</td>
            <td>Nie można zmieniać</td>
            <td>Tylko w konstruktorze lub deklaracji</td>
          </tr>
          <tr>
            <td>Wartość ustalana</td>
            <td>W czasie działania programu</td>
            <td>W czasie kompilacji</td>
            <td>W czasie działania programu</td>
          </tr>
          <tr>
            <td>Dziedziczenie</td>
            <td>Tak</td>
            <td>Nie dotyczy</td>
            <td>Tak</td>
          </tr>
          <tr>
            <td>Domyślny kontekst</td>
            <td>Globalny (wspólny dla wszystkich obiektów)</td>
            <td>Globalny (wspólny dla wszystkich obiektów)</td>
            <td>Oddzielny dla każdej instancji</td>
          </tr>
        </tbody>
      </table>

      <h3>static readonly</h3>
      <p>
        Można połączyć słowa kluczowe <code>static</code> i{" "}
        <code>readonly</code>, aby utworzyć pole statyczne, które można ustawić
        tylko raz w statycznym konstruktorze klasy.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Konfiguracja
{
    public static readonly DateTime DataStartu;

    static Konfiguracja()
    {
        DataStartu = DateTime.Now;
    }
}

// Użycie:
Console.WriteLine(Konfiguracja.DataStartu);`}
      />

      <p>
        Takie pola są wspólne dla całej klasy (jak <code>static</code>), ale ich
        wartość może być ustalona dynamicznie tylko raz (jak{" "}
        <code>readonly</code>).
      </p>

      <h3>Praktyczne zastosowania</h3>
      <ul>
        <li>
          <strong>static</strong> - gdy dane lub metoda mają być wspólne dla
          wszystkich obiektów (np. liczniki, narzędzia, konfiguracje globalne).
        </li>
        <li>
          <strong>const</strong> - gdy wartość jest znana na etapie kompilacji i
          nigdy się nie zmienia (np. liczba dni w tygodniu, wartość liczby π).
        </li>
        <li>
          <strong>readonly</strong> - gdy wartość ustalana jest w konstruktorze
          i ma być niezmienna po utworzeniu obiektu (np. identyfikatory, daty
          utworzenia).
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Słowa kluczowe <code>static</code>, <code>const</code> i{" "}
        <code>readonly</code>
        pozwalają kontrolować sposób przechowywania danych i ich trwałość w
        czasie działania programu. Ich właściwe użycie zwiększa czytelność kodu
        i zapobiega przypadkowym błędom.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
