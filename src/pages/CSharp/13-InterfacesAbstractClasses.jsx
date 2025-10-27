import CodeBlock from "../../components/CodeBlock";

export const title = "Interfejsy i klasy abstrakcyjne";

export default function InterfejsyKlasyAbstrakcyjne() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} – Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Interfejsy i klasy abstrakcyjne to zaawansowane konstrukcje
        programowania obiektowego, które pozwalają tworzyć elastyczne,
        rozszerzalne i dobrze zaprojektowane systemy. Oba mechanizmy służą do
        definiowania wspólnych zachowań dla różnych klas, ale różnią się
        sposobem implementacji i zastosowaniem.
      </p>

      <h3>Klasy abstrakcyjne</h3>
      <p>
        Klasa abstrakcyjna to taka, której nie można utworzyć (nie można
        stworzyć jej obiektu). Może zawierać zarówno metody z implementacją, jak
        i metody abstrakcyjne - czyli takie, które muszą zostać zdefiniowane w
        klasach pochodnych.
      </p>

      <CodeBlock
        language="csharp"
        code={`public abstract class Zwierze
{
    public string Imie { get; set; }

    public abstract void DajGlos();

    public void Spij()
    {
        Console.WriteLine($"{Imie} śpi.");
    }
}

public class Pies : Zwierze
{
    public override void DajGlos()
    {
        Console.WriteLine("Hau hau!");
    }
}

public class Kot : Zwierze
{
    public override void DajGlos()
    {
        Console.WriteLine("Miau!");
    }
}

// Użycie:
Zwierze pies = new Pies { Imie = "Reksio" };
pies.DajGlos();
pies.Spij();`}
      />

      <p>
        Klasa <code>Zwierze</code> nie może być bezpośrednio utworzona, ale
        określa wspólne zachowanie dla wszystkich zwierząt. Klasy{" "}
        <code>Pies</code> i <code>Kot</code> dziedziczą po niej i implementują
        własne wersje metody <code>DajGlos()</code>.
      </p>

      <h3>Metody abstrakcyjne</h3>
      <p>
        Metoda abstrakcyjna to taka, która nie ma implementacji w klasie bazowej
        i musi zostać przesłonięta w klasie pochodnej. Może istnieć tylko w
        klasie oznaczonej jako <code>abstract</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`public abstract class Figura
{
    public abstract double Pole();
}

public class Kolo : Figura
{
    public double Promien { get; set; }

    public override double Pole()
    {
        return Math.PI * Promien * Promien;
    }
}

public class Kwadrat : Figura
{
    public double Bok { get; set; }

    public override double Pole()
    {
        return Bok * Bok;
    }
}

// Użycie:
Figura[] figury = { new Kolo { Promien = 3 }, new Kwadrat { Bok = 4 } };

foreach (var f in figury)
{
    Console.WriteLine(f.Pole());
}`}
      />

      <h3>Interfejsy</h3>
      <p>
        Interfejs definiuje zestaw metod, właściwości lub zdarzeń, które klasa
        musi zaimplementować. Nie zawiera implementacji - określa tylko, co dana
        klasa ma potrafić.
      </p>

      <CodeBlock
        language="csharp"
        code={`public interface IPojazd
{
    void Jedz();
    void Zatrzymaj();
}

public class Samochod : IPojazd
{
    public void Jedz()
    {
        Console.WriteLine("Samochód jedzie");
    }

    public void Zatrzymaj()
    {
        Console.WriteLine("Samochód się zatrzymał");
    }
}

// Użycie:
IPojazd pojazd = new Samochod();
pojazd.Jedz();
pojazd.Zatrzymaj();`}
      />

      <p>
        Interfejs określa „umowę” - każda klasa, która go implementuje, musi
        dostarczyć definicje wszystkich jego elementów.
      </p>

      <h3>Właściwości i interfejsy</h3>
      <p>
        Interfejs może również zawierać właściwości, które klasy muszą
        zaimplementować.
      </p>

      <CodeBlock
        language="csharp"
        code={`public interface IPracownik
{
    string Imie { get; set; }
    void Pracuj();
}

public class Programista : IPracownik
{
    public string Imie { get; set; }

    public void Pracuj()
    {
        Console.WriteLine($"{Imie} pisze kod.");
    }
}

// Użycie:
IPracownik p = new Programista { Imie = "Adam" };
p.Pracuj();`}
      />

      <h3>Wielokrotne dziedziczenie interfejsów</h3>
      <p>
        W przeciwieństwie do klas, C# pozwala implementować wiele interfejsów w
        jednej klasie. Dzięki temu można łączyć różne zachowania.
      </p>

      <CodeBlock
        language="csharp"
        code={`public interface ILatajacy
{
    void Lec();
}

public interface IPlywajacy
{
    void Plywaj();
}

public class Kaczka : ILatajacy, IPlywajacy
{
    public void Lec()
    {
        Console.WriteLine("Kaczka leci");
    }

    public void Plywaj()
    {
        Console.WriteLine("Kaczka pływa");
    }
}

// Użycie:
Kaczka k = new Kaczka();
k.Lec();
k.Plywaj();`}
      />

      <h3>Dziedziczenie interfejsów</h3>
      <p>
        Interfejsy mogą również dziedziczyć po innych interfejsach, rozszerzając
        ich funkcjonalność.
      </p>

      <CodeBlock
        language="csharp"
        code={`public interface IUruchamialny
{
    void Uruchom();
}

public interface IUrzadzenie : IUruchamialny
{
    void Wylacz();
}

public class Komputer : IUrzadzenie
{
    public void Uruchom()
    {
        Console.WriteLine("Komputer włączony");
    }

    public void Wylacz()
    {
        Console.WriteLine("Komputer wyłączony");
    }
}`}
      />

      <h3>Interfejsy a klasy abstrakcyjne – różnice</h3>
      <table>
        <thead>
          <tr>
            <th>Cecha</th>
            <th>Klasa abstrakcyjna</th>
            <th>Interfejs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Implementacja metod</td>
            <td>Może zawierać implementację</td>
            <td>Nie zawiera implementacji (do C# 8)</td>
          </tr>
          <tr>
            <td>Dziedziczenie</td>
            <td>Tylko jedno</td>
            <td>Można implementować wiele</td>
          </tr>
          <tr>
            <td>Konstruktory</td>
            <td>Może posiadać konstruktor</td>
            <td>Nie może mieć konstruktora</td>
          </tr>
          <tr>
            <td>Pola</td>
            <td>Może mieć pola</td>
            <td>Nie może mieć pól</td>
          </tr>
          <tr>
            <td>Cel</td>
            <td>Dziedziczenie wspólnego zachowania</td>
            <td>Określenie zestawu funkcji (umowy)</td>
          </tr>
        </tbody>
      </table>

      <h3>Łączenie interfejsów z klasami abstrakcyjnymi</h3>
      <p>
        Często w dużych projektach wykorzystuje się oba mechanizmy razem -
        interfejs definiuje, co klasa powinna robić, a klasa abstrakcyjna
        dostarcza część wspólnej logiki.
      </p>

      <CodeBlock
        language="csharp"
        code={`public interface ILogowalny
{
    void Zaloguj(string uzytkownik);
}

public abstract class Aplikacja : ILogowalny
{
    public abstract void Uruchom();

    public void Zaloguj(string uzytkownik)
    {
        Console.WriteLine($"Zalogowano jako {uzytkownik}");
    }
}

public class Gra : Aplikacja
{
    public override void Uruchom()
    {
        Console.WriteLine("Gra została uruchomiona");
    }
}

// Użycie:
Gra g = new Gra();
g.Zaloguj("Admin");
g.Uruchom();`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Klasy abstrakcyjne i interfejsy to kluczowe narzędzia projektowania w
        C#. Klasy abstrakcyjne pozwalają definiować wspólne zachowania i
        częściową logikę, natomiast interfejsy określają wspólny zestaw funkcji,
        które różne klasy mogą implementować.
      </p>

      <p>
        W praktyce - jeśli potrzebujesz wspólnego kodu, użyj klasy
        abstrakcyjnej. Jeśli chcesz zdefiniować tylko „umowę” zachowania, użyj
        interfejsu. Umiejętne łączenie tych dwóch mechanizmów prowadzi do
        bardziej elastycznego i zrozumiałego kodu.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
