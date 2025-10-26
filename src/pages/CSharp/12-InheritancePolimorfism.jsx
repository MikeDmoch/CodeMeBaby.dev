import CodeBlock from "../../components/CodeBlock";

export const title = "Dziedziczenie i polimorfizm";

export default function DziedziczeniePolimorfizm() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} – Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Dziedziczenie i polimorfizm to dwa podstawowe filary programowania
        obiektowego. Pozwalają one na ponowne wykorzystanie kodu, rozszerzanie
        funkcjonalności oraz tworzenie elastycznych i łatwych w rozbudowie
        struktur klas.
      </p>

      <h3>Dziedziczenie</h3>
      <p>
        Dziedziczenie umożliwia tworzenie nowych klas na podstawie już
        istniejących. Klasa pochodna (dziecko) dziedziczy pola i metody klasy
        bazowej (rodzica), dzięki czemu nie trzeba ich ponownie definiować.
      </p>

      <h4>Przykład dziedziczenia</h4>
      <CodeBlock
        language="csharp"
        code={`public class Zwierze
{
    public string Imie;

    public void Oddychaj()
    {
        Console.WriteLine("Zwierzę oddycha");
    }
}

public class Pies : Zwierze
{
    public void Szczekaj()
    {
        Console.WriteLine("Hau!");
    }
}

// Użycie:
Pies p = new Pies();
p.Imie = "Reksio";
p.Oddychaj(); // odziedziczone z klasy Zwierze
p.Szczekaj();`}
      />

      <p>
        W powyższym przykładzie klasa <code>Pies</code> dziedziczy wszystkie
        pola i metody z klasy <code>Zwierze</code>. Oznacza to, że obiekt typu{" "}
        <code>Pies</code> może korzystać z metody <code>Oddychaj()</code> bez
        jej ponownego definiowania.
      </p>

      <h3>Słowo kluczowe base</h3>
      <p>
        Słowo kluczowe <code>base</code> pozwala odwołać się do elementów klasy
        bazowej – np. do konstruktora lub metody.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Zwierze
{
    public string Imie;

    public Zwierze(string imie)
    {
        Imie = imie;
    }
}

public class Kot : Zwierze
{
    public string Rasa;

    public Kot(string imie, string rasa) : base(imie)
    {
        Rasa = rasa;
    }

    public void PrzedstawSie()
    {
        Console.WriteLine($"Jestem kotem o imieniu {Imie}, rasy {Rasa}.");
    }
}

// Użycie:
Kot k = new Kot("Filemon", "Brytyjski");
k.PrzedstawSie();`}
      />

      <h3>Ukrywanie metod – słowo kluczowe new</h3>
      <p>
        Jeśli w klasie pochodnej zdefiniujesz metodę o tej samej nazwie jak w
        klasie bazowej, możesz użyć słowa kluczowego <code>new</code>, aby
        jawnie ukryć implementację z klasy bazowej.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Zwierze
{
    public void DajGlos()
    {
        Console.WriteLine("Zwierzę wydaje dźwięk");
    }
}

public class Pies : Zwierze
{
    public new void DajGlos()
    {
        Console.WriteLine("Hau hau!");
    }
}

// Użycie:
Zwierze z = new Pies();
z.DajGlos(); // Wywoła metodę z klasy Zwierze, bo nie jest wirtualna
`}
      />

      <h3>Polimorfizm</h3>
      <p>
        Polimorfizm pozwala na tworzenie różnych implementacji tej samej metody
        w klasach pochodnych. Dzięki temu możemy pisać kod, który działa z
        obiektami różnych typów w jednolity sposób.
      </p>

      <h4>Metody wirtualne i przesłanianie</h4>
      <p>
        Aby metoda mogła być przesłonięta, w klasie bazowej musi być oznaczona
        jako <code>virtual</code>. Klasa pochodna przesłania ją za pomocą słowa
        kluczowego <code>override</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Zwierze
{
    public virtual void DajGlos()
    {
        Console.WriteLine("Zwierzę wydaje dźwięk");
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
Zwierze z1 = new Pies();
Zwierze z2 = new Kot();

z1.DajGlos(); // Hau hau!
z2.DajGlos(); // Miau!`}
      />

      <p>
        W tym przykładzie metoda <code>DajGlos()</code> działa inaczej w
        zależności od typu obiektu, mimo że wywoływana jest przez referencję
        typu <code>Zwierze</code>.
      </p>

      <h3>Klasy abstrakcyjne</h3>
      <p>
        Klasy abstrakcyjne służą jako szablony dla innych klas. Nie można ich
        bezpośrednio tworzyć, a ich metody mogą być częściowo lub całkowicie
        abstrakcyjne.
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

    public Kolo(double promien)
    {
        Promien = promien;
    }

    public override double Pole()
    {
        return Math.PI * Promien * Promien;
    }
}

// Użycie:
Figura f = new Kolo(3);
Console.WriteLine(f.Pole());`}
      />

      <p>
        Klasa <code>Figura</code> definiuje metodę abstrakcyjną{" "}
        <code>Pole()</code>, którą każda klasa pochodna musi zaimplementować.
      </p>

      <h3>Polimorfizm a tablice i kolekcje</h3>
      <p>
        Dzięki polimorfizmowi możemy przechowywać różne obiekty dziedziczące po
        tej samej klasie w jednej tablicy lub liście i wywoływać na nich wspólne
        metody.
      </p>

      <CodeBlock
        language="csharp"
        code={`Zwierze[] zwierzeta = { new Pies(), new Kot(), new Pies() };

foreach (var z in zwierzeta)
{
    z.DajGlos();
}`}
      />

      <p>Wynik:</p>

      <CodeBlock
        language="csharp"
        code={`Hau hau!
Miau!
Hau hau!`}
      />

      <h3>Słowo kluczowe sealed</h3>
      <p>
        Modyfikator <code>sealed</code> uniemożliwia dalsze dziedziczenie po
        klasie lub przesłanianie metody.
      </p>

      <CodeBlock
        language="csharp"
        code={`public sealed class Samochod
{
    public void Uruchom()
    {
        Console.WriteLine("Silnik uruchomiony");
    }
}

// public class AutoSportowe : Samochod { } // Błąd – klasa sealed`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Dziedziczenie pozwala na ponowne wykorzystanie kodu i tworzenie
        hierarchii klas, a polimorfizm umożliwia stosowanie wspólnego interfejsu
        dla różnych typów obiektów.
      </p>

      <p>
        Te dwa mechanizmy są podstawą programowania obiektowego w C# i kluczowe
        dla tworzenia elastycznych, rozszerzalnych i łatwych w utrzymaniu
        aplikacji.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
