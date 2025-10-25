import CodeBlock from "../../components/CodeBlock";
export const title = "Konstruktory i destruktory";
export default function ConstructorsDestructors() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy przewodnik</h1>
      </div>

      <p>
        Kiedy tworzysz nowy obiekt w C#, potrzebujesz sposobu na jego
        inicjalizację. Tu właśnie na scenę wkraczają konstruktory — specjalne
        metody, które są wywoływane automatycznie podczas tworzenia obiektu.
      </p>

      <h3>Czym jest konstruktor?</h3>
      <p>
        Konstruktor to metoda, która ma taką samą nazwę jak klasa i nie posiada
        typu zwracanego (nawet void). Jej zadaniem jest przygotowanie nowej
        instancji obiektu do użycia.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Osoba
{
    public string Imie;

    // Konstruktor
    public Osoba(string imie)
    {
        Imie = imie;
    }
}`}
      />

      <p>
        W powyższym przykładzie mamy klasę <code>Osoba</code>, która ma
        konstruktor przyjmujący jeden argument — imię. Kiedy tworzysz nową
        instancję tej klasy, musisz podać imię:
      </p>

      <CodeBlock
        language="csharp"
        code={`Osoba osoba = new Osoba("Jan");
Console.WriteLine(osoba.Imie); // Wypisze "Jan"`}
      />

      <h3>Typy konstruktorów</h3>

      <h4>Konstruktor domyślny</h4>
      <p>
        To konstruktor bez parametrów. Jeśli nie zdefiniujesz żadnego
        konstruktora, automatycznie zostanie utworzony domyślny.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Produkt
{
    public string Nazwa;

    // Konstruktor domyślny
    public Produkt()
    {
        Nazwa = "Nieznana";
    }
}`}
      />

      <p>
        W tym przypadku, jeśli nie podasz nazwy produktu, domyślnie zostanie
        ustawiona na "Nieznana".
      </p>

      <h3>Konstruktor z parametrami</h3>
      <p>
        Jak już wspomniano, konstruktor może przyjmować parametry, co pozwala na
        bardziej elastyczną inicjalizację obiektów.
      </p>

      <CodeBlock
        language="csharp"
        code={`public Produkt(string nazwa)
{
    Nazwa = nazwa;
}`}
      />

      <h4>Przeciążanie konstruktorów</h4>
      <p>
        Możesz mieć wiele konstruktorów (o tej samej nazwie), ale z różnymi
        parametrami.
      </p>

      <CodeBlock
        language="csharp"
        code={`public Produkt() { Nazwa = "Nieznana"; }
public Produkt(string nazwa) { Nazwa = nazwa; }
public Produkt(string nazwa, double cena) { Nazwa = nazwa; Cena = cena; }`}
      />

      <h4>Konstruktor statyczny</h4>
      <p>
        Jest wywoływany tylko raz, zanim zostanie użyta pierwsza instancja lub
        członek statyczny. Służy do inicjalizacji statycznych danych.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Licznik
{
    public static int Wartosc;

    static Licznik()
    {
        Wartosc = 100;
    }
}`}
      />

      <p>
        W tym przypadku, kiedy klasa <code>Licznik</code> zostanie załadowana,{" "}
        <code>Wartosc</code> zostanie ustawiona na 100.
      </p>

      <h4>Konstruktor kopiujący</h4>
      <p>
        C# nie ma wbudowanego konstruktora kopiującego, ale możesz go
        zaimplementować samodzielnie:
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Samochod
{
    public string Marka;

    public Samochod(Samochod inny)
    {
        Marka = inny.Marka;
    }
}`}
      />

      <p>
        W tym przypadku, kiedy tworzysz nowy obiekt <code>Samochod</code>,
        możesz skopiować dane z innego obiektu tej samej klasy.
      </p>

      <p>Użycie:</p>
      <CodeBlock
        language="csharp"
        code={`Samochod samochod1 = new Samochod();
samochod1.Marka = "Toyota";
Samochod samochod2 = new Samochod(samochod1);
Console.WriteLine(samochod2.Marka); // Wypisze "Toyota"`}
      />

      <h4>Słowo kluczowe this</h4>
      <p>
        Możesz użyć słowa kluczowego <code>this</code>, aby odwołać się do
        bieżącego obiektu w konstruktorze. Jest to przydatne, gdy masz wiele
        konstruktorów i chcesz przekazać argumenty do innego konstruktora.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Uczen
{
    public string Imie;
    public int Wiek;
    public Uczen(string imie) : this(imie, 18) { } // Przekazuje do innego konstruktora
    public Uczen(string imie, int wiek)
    {
        Imie = imie;
        Wiek = wiek;
    }
}`}
      />

      <p>
        W tym przypadku, jeśli stworzysz nowego ucznia tylko z imieniem, wiek
        zostanie domyślnie ustawiony na 18.
      </p>

      <h4>Kiedy konstruktor może nie być potrzebny?</h4>
      <p>1. Gdy używasz inicjalizatorów obiektów:</p>

      <CodeBlock
        language="csharp"
        code={`Osoba osoba = new Osoba { Imie = "Jan" };`}
      />

      <p>
        2. Dla klas statycznych (nie mogą mieć konstruktorów instancyjnych).
      </p>

      <h3>Destruktory</h3>
      <p>
        Destruktor (znany również jako finalizator) to metoda wywoływana
        automatycznie tuż przed usunięciem obiektu przez garbage collector.
        Służy do zwalniania zasobów niezarządzanych (np. uchwyty do plików,
        połączenia sieciowe).
      </p>
      <p>
        Destruktor nie przyjmuje żadnych argumentów i nie może być przeciążany.
        Jego składnia przypomina konstruktor, ale z użyciem tyldy (~) przed
        nazwą klasy.
      </p>

      <CodeBlock
        language="csharp"
        code={`class Plik
{
    ~Plik()
    {
        // kod sprzątający
    }
}`}
      />

      <p>
        Warto jednak pamiętać, że destruktory są rzadko używane w C#, ponieważ
        garbage collector automatycznie zarządza pamięcią. W większości
        przypadków lepiej jest używać wzorca
        <code>IDisposable</code> i metody <code>Dispose()</code> do zarządzania
        zasobami.
      </p>

      <h3>Przykład użycia destruktora</h3>
      <p>
        W poniższym przykładzie mamy klasę <code>Plik</code>, która otwiera plik
        w konstruktorze i zamyka go w destruktorze:
      </p>

      <CodeBlock
        language="csharp"
        code={`class Plik
{
    private FileStream _plik;
    public Plik(string sciezka)
    {
        _plik = new FileStream(sciezka, FileMode.Open);
    }
    ~Plik()
    {
        _plik.Close(); // Zamyka plik
    }
}`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Konstruktory to fundament tworzenia i inicjalizacji obiektów. Dzięki nim
        możesz kontrolować, jak wygląda stan obiektu już na starcie. Warto
        zrozumieć ich typy, możliwości przeciążania oraz zastosowania{" "}
        <code>this</code>, by pisać bardziej elastyczny i czytelny kod.
      </p>
      <p>
        Destruktory, choć rzadziej używane, są istotne w kontekście zarządzania
        zasobami. Pamiętaj, że w większości przypadków lepiej jest korzystać z
        wzorca <code>IDisposable</code> i metody <code>Dispose()</code> do
        zarządzania zasobami.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
