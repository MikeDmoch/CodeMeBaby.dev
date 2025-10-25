import CodeBlock from "../../components/CodeBlock";
export const title = "Właściwości";

export default function Properties() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} – Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Właściwości w języku C# pozwalają na bezpieczny i kontrolowany dostęp do
        pól klasy. Umożliwiają one ukrycie pól przed bezpośrednim dostępem z
        zewnątrz, a jednocześnie dają możliwość ich odczytu lub modyfikacji
        według określonych zasad.
      </p>

      <h3>Dlaczego warto używać właściwości</h3>
      <ul>
        <li>Pozwalają kontrolować dostęp do danych w klasie.</li>
        <li>Mogą zawierać logikę sprawdzającą poprawność danych.</li>
        <li>Zwiększają bezpieczeństwo i czytelność kodu.</li>
        <li>Ułatwiają rozwój i utrzymanie aplikacji.</li>
      </ul>

      <h3>Podstawowy przykład</h3>
      <p>
        Zamiast udostępniać pole klasy jako publiczne, można użyć właściwości,
        aby chronić dane przed niepożądanymi zmianami.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Osoba
{
    private string imie;

    public string Imie
    {
        get { return imie; }
        set { imie = value; }
    }
}`}
      />

      <p>
        Tutaj pole <code>imie</code> jest prywatne, ale właściwość{" "}
        <code>Imie</code> pozwala je odczytywać i modyfikować z zewnątrz w
        kontrolowany sposób.
      </p>

      <CodeBlock
        language="csharp"
        code={`Osoba osoba = new Osoba();
osoba.Imie = "Anna";
Console.WriteLine(osoba.Imie); // Anna`}
      />

      <h3>Automatyczne właściwości</h3>
      <p>
        Gdy nie potrzebujesz dodatkowej logiki w metodach <code>get</code> i{" "}
        <code>set</code>, możesz użyć automatycznych właściwości.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Samochod
{
    public string Marka { get; set; }
    public int RokProdukcji { get; set; }
}

// Użycie:
Samochod auto = new Samochod { Marka = "BMW", RokProdukcji = 2020 };
Console.WriteLine($"{auto.Marka}, {auto.RokProdukcji}");`}
      />

      <h3>Właściwości tylko do odczytu</h3>
      <p>
        Czasami chcemy, aby właściwość mogła być tylko odczytywana, na przykład
        gdy jej wartość jest ustalana podczas tworzenia obiektu i nie powinna
        się później zmieniać.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Produkt
{
    public string Nazwa { get; }
    public decimal Cena { get; }

    public Produkt(string nazwa, decimal cena)
    {
        Nazwa = nazwa;
        Cena = cena;
    }
}`}
      />

      <h3>Właściwości tylko do zapisu</h3>
      <p>
        Można również stworzyć właściwość, którą można tylko ustawić, bez
        możliwości odczytu.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Sekret
{
    private string haslo;

    public string Haslo
    {
        set { haslo = value; }
    }

    public void Wyswietl()
    {
        Console.WriteLine($"Hasło: {haslo}");
    }
}`}
      />

      <p>
        W tym przykładzie można ustawić hasło, ale nie można go odczytać z
        zewnątrz. Takie rozwiązanie sprawdza się np. przy tworzeniu klas
        logowania.
      </p>

      <h3>Właściwości z walidacją danych</h3>
      <p>
        Właściwości często używa się do sprawdzania poprawności danych przy
        przypisywaniu wartości.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class KontoBankowe
{
    private decimal saldo;

    public decimal Saldo
    {
        get { return saldo; }
        set
        {
            if (value < 0)
                Console.WriteLine("Saldo nie może być ujemne!");
            else
                saldo = value;
        }
    }
}`}
      />

      <CodeBlock
        language="csharp"
        code={`KontoBankowe konto = new KontoBankowe();
konto.Saldo = 1000;
Console.WriteLine(konto.Saldo); // 1000

konto.Saldo = -200; // Wyświetli komunikat: "Saldo nie może być ujemne!"`}
      />

      <h3>Właściwości obliczane</h3>
      <p>
        Można też tworzyć właściwości, które nie przechowują danych, ale
        obliczają je na podstawie innych pól lub właściwości klasy.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Prostokat
{
    public double Szerokosc { get; set; }
    public double Wysokosc { get; set; }

    public double Pole
    {
        get { return Szerokosc * Wysokosc; }
    }
}

// Użycie:
Prostokat p = new Prostokat { Szerokosc = 4, Wysokosc = 5 };
Console.WriteLine(p.Pole); // 20`}
      />

      <h3>Właściwości z inicjalizacją tylko raz (init)</h3>
      <p>
        Od wersji C# 9 można tworzyć właściwości, które można ustawić tylko
        podczas tworzenia obiektu.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Uzytkownik
{
    public string Login { get; init; }
    public string Email { get; init; }
}

// Użycie:
var u = new Uzytkownik { Login = "admin", Email = "admin@test.com" };
// u.Login = "inny"; // Błąd – właściwości init można ustawić tylko przy tworzeniu obiektu`}
      />

      <h3>Automatyczna właściwość z prywatnym set</h3>
      <p>
        Można ograniczyć możliwość modyfikowania właściwości tylko do wnętrza
        klasy.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Silnik
{
    public int Obroty { get; private set; }

    public void ZwiekszObroty()
    {
        Obroty += 500;
    }
}`}
      />

      <CodeBlock
        language="csharp"
        code={`Silnik s = new Silnik();
s.ZwiekszObroty();
Console.WriteLine(s.Obroty); // 500`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Właściwości w C# są podstawowym elementem programowania obiektowego.
        Pozwalają ukryć dane, kontrolować ich dostęp i zapewnić spójność stanu
        obiektów. Dzięki nim kod staje się bardziej przejrzysty, bezpieczny i
        łatwiejszy w utrzymaniu.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
