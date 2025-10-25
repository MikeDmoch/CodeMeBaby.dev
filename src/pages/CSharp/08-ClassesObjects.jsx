import CodeBlock from "../../components/CodeBlock";
export const title = "Klasy i Struktury";
export default function ClassesObjects() {
  return (
    <main>
      <div>
        <h1>{title} - Kompleksowy przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        W poprzednich lekcjach nauczyliśmy się tworzyć zmienne, operować na
        nich, korzystać z instrukcji warunkowych i pętli. Wszystko to było
        możliwe dzięki typom prostym, takim jak <code>int</code>,
        <code>string</code>, <code>bool</code> czy <code>double</code>. W
        programowaniu często jednak potrzebujemy bardziej złożonych elementów,
        które pozwolą nam na bardziej elastyczne zarządzanie danymi. W tym celu
        wykorzystujemy klasy i struktury.
      </p>

      <h3>Klasy</h3>
      <p>
        Klasy są jednym z podstawowych elementów programowania obiektowego.
        Pozwalają na tworzenie obiektów, które mogą przechowywać dane i metody.
        Klasy są szablonami, na podstawie których tworzymy obiekty. W klasie
        możemy zdefiniować pola, właściwości, metody, konstruktory, destruktory
        i wiele innych elementów. Klasa jest abstrakcyjnym pojęciem, które nie
        zajmuje miejsca w pamięci komputera. Obiekt natomiast jest instancją
        klasy, która zajmuje miejsce w pamięci i przechowuje konkretne dane.
      </p>

      <p>
        Klasa w C# jest typem referencyjnym (ang. reference type), co oznacza,
        że obiekty przechowywane są na stercie (ang. heap), a zmienne
        przechowują referencję do tych obiektów.
      </p>

      <h4>Pola</h4>
      <p>
        Pola to zmienne zdefiniowane wewnątrz klasy, które przechowują dane.
        Mogą być publiczne lub prywatne.
      </p>
      <CodeBlock
        language="csharp"
        code={`public class Osoba
{
    public string imie; // pole
    private int wiek;   // prywatne pole
}`}
      />

      <h4>Właściwości</h4>
      <p>
        Właściwości to sposób na kontrolowany dostęp do pól klasy. Mogą zawierać
        logikę odczytu i zapisu.
      </p>
      <CodeBlock
        language="csharp"
        code={`public class Osoba
{
    private int wiek;
    public int Wiek
    {
        get { return wiek; }
        set { if (value >= 0) wiek = value; }
    }
}`}
      />

      <h4>Metody</h4>
      <p>
        Metody to funkcje zdefiniowane wewnątrz klasy, które wykonują operacje
        na danych klasy.
      </p>

      <p>Składnia:</p>
      <CodeBlock
        language="csharp"
        code={`[modyfikator] [zwracany_typ] [nazwa_metody]([parametry])
{
    // ciało metody
}`}
      />

      <p>
        Modyfikator w definicji metody to słowo kluczowe, które określa
        dostępność i zachowanie tej metody.
      </p>

      <p>Przykład metody:</p>
      <CodeBlock
        language="csharp"
        code={`public int Dodaj(int a, int b)
{
    return a + b;
}`}
      />

      <h4>Konstruktory</h4>
      <p>
        Konstruktor to specjalna metoda, która uruchamia się przy tworzeniu
        obiektu. Służy do inicjalizacji pól.
      </p>
      <p>Przykład:</p>
      <CodeBlock
        language="csharp"
        code={`public class Osoba
{
    public string Imie { get; set; }

    public Osoba(string imie)
    {
        Imie = imie;
    }
}`}
      />

      <p>Przykład klasy:</p>
      <CodeBlock
        language="csharp"
        code={`public class Osoba
{
    // Właściwość przechowująca imię osoby
    public string Imie { get; set; }

    // Właściwość przechowująca wiek osoby
    public int Wiek { get; set; }

    // Konstruktor klasy Osoba, który inicjalizuje pola Imie i Wiek
    public Osoba(string imie, int wiek)
    {
        Imie = imie; // Przypisanie wartości do właściwości Imie
        Wiek = wiek; // Przypisanie wartości do właściwości Wiek
    }

    // Metoda, która wyświetla informacje o osobie
    public void PrzedstawSie()
    {
        Console.WriteLine($"Cześć, mam na imię {Imie} i mam {Wiek} lat.");
    }
}`}
      />

      <h3>Struktury</h3>
      <p>
        Typ wartościowy. Dane przechowywane są bezpośrednio w zmiennej, zwykle
        na stosie (stack). Struktury są bardziej "lekkie" i są kopiowane przy
        przekazywaniu do funkcji.
      </p>

      <p>Przykład struktury:</p>
      <CodeBlock
        language="csharp"
        code={`public struct Punkt
{
    public int X { get; set; }
    public int Y { get; set; }

    public Punkt(int x, int y)
    {
        X = x;
        Y = y;
    }

    public void Wyswietl()
    {
        Console.WriteLine($"Punkt: ({X}, {Y})");
    }
}`}
      />

      <p>
        Struktury, tak jak klasy, mogą zawierać pola, właściwości, metody i
        konstruktory.
      </p>
      <CodeBlock
        language="csharp"
        code={`public struct Punkt
{
    public int X { get; set; }
    public int Y { get; set; }

    public Punkt(int x, int y)
    {
        X = x;
        Y = y;
    }

    public void Wyswietl()
    {
        Console.WriteLine($"Punkt: ({X}, {Y})");
    }
}`}
      />

      <h3>Różnice między klasą a strukturą</h3>
      <table>
        <thead>
          <tr>
            <th>Cecha</th>
            <th>Klasa</th>
            <th>Struktura</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typ</td>
            <td>Referencyjny (Reference Type)</td>
            <td>Wartościowy (Value Type)</td>
          </tr>
          <tr>
            <td>Przechowywanie danych</td>
            <td>Sterta (Heap)</td>
            <td>Stos (Stack)</td>
          </tr>
          <tr>
            <td>Dziedziczenie</td>
            <td>Tak</td>
            <td>Nie</td>
          </tr>
          <tr>
            <td>Konstruktor domyślny</td>
            <td>Można zdefiniować</td>
            <td>Automatycznie generowany</td>
          </tr>
          <tr>
            <td>Wydajność</td>
            <td>Wolniejsza przy kopiowaniu</td>
            <td>Szybsza przy kopiowaniu</td>
          </tr>
          <tr>
            <td>Przekazywanie do metod</td>
            <td>Przekazywana jako referencja</td>
            <td>Przekazywana jako kopia</td>
          </tr>
          <tr>
            <td>Domyślne wartości</td>
            <td>Właściwości muszą być zainicjalizowane</td>
            <td>Wszystkie pola są automatycznie inicjalizowane</td>
          </tr>
        </tbody>
      </table>

      <h3>Podsumowanie</h3>
      <p>
        W tym artykule omówiliśmy klasy i struktury w języku C#. Klasy są
        podstawowym elementem programowania obiektowego, pozwalają na tworzenie
        obiektów, które przechowują dane i metody. Struktury są typami
        wartościowymi, które przechowują dane bezpośrednio w zmiennej. Wybór
        między klasą a strukturą zależy od konkretnego przypadku i wymagań
        projektu.
      </p>
      <p>
        W kolejnych artykułach omówimy bardziej zaawansowane zagadnienia
        związane z programowaniem obiektowym w języku C#. Zapraszam do lektury!
      </p>
    </main>
  );
}
