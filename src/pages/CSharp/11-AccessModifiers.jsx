import CodeBlock from "../../components/CodeBlock";

export const title = "Modyfikatory dostępu";

export default function AccessModifiers() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} – Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Modyfikatory dostępu w C# określają, które elementy programu (np. pola,
        metody, klasy) są widoczne i dostępne z innych części kodu. Umożliwiają
        one kontrolę nad tym, które dane mogą być modyfikowane lub odczytywane
        spoza danej klasy lub przestrzeni nazw.
      </p>

      <p>
        Dzięki modyfikatorom dostępu można wprowadzić tzw. enkapsulację – czyli
        ukrycie wewnętrznych szczegółów implementacji i udostępnienie tylko
        tego, co jest niezbędne użytkownikowi klasy.
      </p>

      <h3>Podstawowe modyfikatory dostępu</h3>
      <ul>
        <li>
          <strong>public</strong> – dostępny z każdego miejsca w programie.
        </li>
        <li>
          <strong>private</strong> – dostępny tylko wewnątrz danej klasy lub
          struktury.
        </li>
        <li>
          <strong>protected</strong> – dostępny w danej klasie i klasach
          pochodnych.
        </li>
        <li>
          <strong>internal</strong> – dostępny tylko w obrębie tego samego
          zestawu (projektu).
        </li>
        <li>
          <strong>protected internal</strong> – połączenie{" "}
          <code>protected</code> i <code>internal</code>.
        </li>
        <li>
          <strong>private protected</strong> – dostępny tylko w klasie bazowej i
          jej klasach pochodnych, ale wyłącznie w tym samym zestawie.
        </li>
      </ul>

      <h3>public</h3>
      <p>
        Element oznaczony jako <code>public</code> jest dostępny z dowolnego
        miejsca w programie lub w innych projektach, które odwołują się do tego
        zestawu.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Samochod
{
    public string Marka;

    public void Uruchom()
    {
        Console.WriteLine("Samochód uruchomiony!");
    }
}

// Użycie:
Samochod auto = new Samochod();
auto.Marka = "Audi";
auto.Uruchom();`}
      />

      <h3>private</h3>
      <p>
        Modyfikator <code>private</code> oznacza, że element jest dostępny tylko
        wewnątrz danej klasy lub struktury. Jest to domyślny poziom dostępu,
        jeśli nie określisz innego.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Konto
{
    private decimal saldo;

    public void UstawSaldo(decimal kwota)
    {
        saldo = kwota;
    }

    public void PokazSaldo()
    {
        Console.WriteLine($"Saldo: {saldo}");
    }
}

// Użycie:
Konto k = new Konto();
k.UstawSaldo(1000);
k.PokazSaldo();
// k.saldo = 2000; // Błąd – pole prywatne`}
      />

      <h3>protected</h3>
      <p>
        Element oznaczony jako <code>protected</code> jest dostępny w klasie
        bazowej oraz w klasach pochodnych, ale nie jest widoczny dla innych klas
        spoza hierarchii dziedziczenia.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Zwierze
{
    protected void Oddychaj()
    {
        Console.WriteLine("Zwierzę oddycha");
    }
}

public class Pies : Zwierze
{
    public void Szczekaj()
    {
        Oddychaj(); // Dostępne, bo dziedziczy po Zwierze
        Console.WriteLine("Hau!");
    }
}

// Użycie:
Pies p = new Pies();
p.Szczekaj();
// p.Oddychaj(); // Błąd – niedostępne spoza klasy`}
      />

      <h3>internal</h3>
      <p>
        Modyfikator <code>internal</code> ogranicza dostęp do elementu tylko do
        bieżącego projektu. Nie można go używać z kodu zewnętrznego, nawet jeśli
        klasa jest publiczna.
      </p>

      <CodeBlock
        language="csharp"
        code={`internal class Narzedzie
{
    public void Uzyj()
    {
        Console.WriteLine("Używam narzędzia");
    }
}`}
      />

      <p>
        Klasa <code>Narzedzie</code> będzie widoczna tylko w projekcie, w którym
        została zdefiniowana.
      </p>

      <h3>protected internal</h3>
      <p>
        Element oznaczony jako <code>protected internal</code> jest dostępny w
        tym samym projekcie oraz w klasach pochodnych, nawet jeśli znajdują się
        w innym zestawie.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Urzadzenie
{
    protected internal void Wlacz()
    {
        Console.WriteLine("Urządzenie włączone");
    }
}`}
      />

      <h3>private protected</h3>
      <p>
        Ten modyfikator łączy <code>private</code> i <code>protected</code>.
        Oznacza to, że element jest dostępny tylko w tej samej klasie oraz w
        klasach pochodnych, ale tylko wtedy, gdy znajdują się w tym samym
        projekcie.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Maszyna
{
    private protected void Start()
    {
        Console.WriteLine("Maszyna uruchomiona");
    }
}

public class Robot : Maszyna
{
    public void Test()
    {
        Start(); // Działa, bo ta sama biblioteka i dziedziczenie
    }
}`}
      />

      <h3>Porównanie modyfikatorów dostępu</h3>
      <table>
        <thead>
          <tr>
            <th>Modyfikator</th>
            <th>Dostęp w tej samej klasie</th>
            <th>Dostęp w klasach pochodnych</th>
            <th>Dostęp w tym samym projekcie</th>
            <th>Dostęp z zewnątrz</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>public</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>private</td>
            <td>✔</td>
            <td>✖</td>
            <td>✖</td>
            <td>✖</td>
          </tr>
          <tr>
            <td>protected</td>
            <td>✔</td>
            <td>✔</td>
            <td>✖</td>
            <td>✖</td>
          </tr>
          <tr>
            <td>internal</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✖</td>
          </tr>
          <tr>
            <td>protected internal</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✖</td>
          </tr>
          <tr>
            <td>private protected</td>
            <td>✔</td>
            <td>✔ (tylko w tym samym projekcie)</td>
            <td>✔</td>
            <td>✖</td>
          </tr>
        </tbody>
      </table>

      <h3>Podsumowanie</h3>
      <p>
        Modyfikatory dostępu są kluczowym elementem programowania obiektowego w
        C#. Dzięki nim można kontrolować widoczność pól, metod i klas, co
        pozwala chronić dane przed niepożądanym dostępem i utrzymać kod w
        czystości i porządku.
      </p>

      <p>
        W praktyce najczęściej używa się <code>private</code> dla pól i{" "}
        <code>public</code> dla metod, które stanowią interfejs klasy. W
        bardziej złożonych systemach przydają się również <code>protected</code>{" "}
        i <code>internal</code> dla zachowania odpowiednich granic między
        modułami.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
