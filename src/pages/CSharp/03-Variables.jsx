import CodeBlock from "../../components/CodeBlock";
export const title = "Zmienne";
export default function Variables() {
  const code1 = `int liczba = 10;`;
  const code2 = `
int wiek = 25;
double temperatura = 36.6;
bool czyPada = false;
char litera = 'A';`;
  const code3 = `string imie = "Tomasz";
object dowolnaZmienna = 42;
dynamic zmienna = "Tekst";
zmienna = 100; // Może zmieniać typ w czasie działania`;
  const code4 = `// Deklaracja i inicjalizacja
int liczba = 5;

// Deklaracja i późniejsze przypisanie wartości
string nazwisko;
nazwisko = "Kowalski";`;
  const code5 = `const double Pi = 3.14159;`;
  const code6 = `void Przyklad()
{
    int x = 10; // x istnieje tylko wewnątrz tej metody
}`;
  const code7 = `class Program {
    static int globalnaZmienna = 10; // Zmienna globalna

    static void Main() {
        Console.WriteLine(globalnaZmienna); // Dostęp do zmiennej globalnej
        ZmienGlobalna();
        Console.WriteLine(globalnaZmienna); // Zmieniona wartość zmiennej globalnej
    }

    static void ZmienGlobalna() {
       globalnaZmienna = 20; // Zmiana wartości zmiennej globalnej
    }
}`;
  return (
    <>
      <main>
        <div>
          <h1>{title} - Kompleksowy przewodnik</h1>
        </div>
        <p>
          Zmienne to podstawowe elementy każdego języka programowania, a C# nie
          jest wyjątkiem. Dzięki nim możemy przechowywać i manipulować danymi w
          programach. W tym artykule dokładnie omówimy zmienne w C#, ich typy,
          zakresy, inicjalizację oraz najlepsze praktyki ich używania. Dowiesz
          się, jak poprawnie deklarować zmienne, jakie typy danych są dostępne i
          jak unikać błędów związanych z ich użyciem.
        </p>
        <h3>Czym jest zmienna?</h3>
        <p>
          Zmienne można porównać do pojemników, które przechowują wartości
          różnego typu i pozwalają na ich późniejszą modyfikację.
          <br />
          <br />
          <b>Zmienną charakteryzują:</b>
        </p>
        <ul>
          <li>
            <strong>Nazwa (identyfikator)</strong> - powinna być unikalna i
            opisowa
          </li>
          <li>
            <strong>Typ danych</strong> - określa, jakie wartości może
            przechowywać
          </li>
          <li>
            <strong>Wartość</strong> - może być przypisana od razu lub później w
            programie
          </li>
        </ul>
        <p>Przykładowa deklaracja zmiennej:</p>
        <CodeBlock code={code1} language="csharp" />
        <p>
          Powyższa linia kodu deklaruje zmienną liczba typu int i przypisuje jej
          wartość 10. Warto zaznaczyć, że typ int oznacza liczbę całkowitą (od
          ang. integer - liczba całkowita).
        </p>
        <br />
        <h3>Dlaczego warto używać zmiennych?</h3>
        <p>
          Pozwalają one na dynamiczne zarządzanie danymi w trakcie działania
          programu. Dzięki nim możemy przechowywać dane wejściowe użytkownika,
          wyniki obliczeń czy informacje pobrane z bazy danych.
        </p>
        <h3>Typy danych</h3>
        <p>
          C# obsługuje różnorodne typy danych, które można podzielić na typy
          wartościowe i typy referencyjne.
        </p>
        <br />
        <h4>Typy wartościowe</h4>
        <p>
          Typy wartościowe przechowują rzeczywiste dane i są umieszczane na
          stosie pamięci. Oznacza to, że każda zmienna posiada swoją własną
          kopię wartości.
        </p>

        <table>
          <thead>
            <tr>
              <th>
                <strong>Typ</strong>
              </th>
              <th>
                <strong>Rozmiar</strong>
              </th>
              <th>
                <strong>Zakres</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>byte</strong>
              </td>
              <td>1 bajt</td>
              <td>0 do 255</td>
            </tr>
            <tr>
              <td>
                <strong>short</strong>
              </td>
              <td>2 bajty</td>
              <td>-32 768 do 32 767</td>
            </tr>
            <tr>
              <td>
                <strong>int</strong>
              </td>
              <td>4 bajty</td>
              <td>-2 147 483 648 do 2 147 483 647</td>
            </tr>
            <tr>
              <td>
                <strong>long</strong>
              </td>
              <td>8 bajtów</td>
              <td>-9 223 372 036 854 775 808 do 9 223 372 036 854 775 807</td>
            </tr>
            <tr>
              <td>
                <strong>float</strong>
              </td>
              <td>4 bajty</td>
              <td>±1.5 × 10⁻⁴⁵ do ±3.4 × 10³⁸</td>
            </tr>
            <tr>
              <td>
                <strong>double</strong>
              </td>
              <td>8 bajtów</td>
              <td>±5.0 × 10⁻³²⁴ do ±1.7 × 10³⁰⁸</td>
            </tr>
            <tr>
              <td>
                <strong>decimal</strong>
              </td>
              <td>16 bajtów</td>
              <td>±1.0 × 10⁻²⁸ do ±7.9 × 10²⁸</td>
            </tr>
            <tr>
              <td>
                <strong>char</strong>
              </td>
              <td>2 bajty</td>
              <td>0 do 65 535</td>
            </tr>
            <tr>
              <td>
                <strong>bool</strong>
              </td>
              <td>1 bajt</td>
              <td>true lub false</td>
            </tr>
          </tbody>
        </table>

        <p>Przykłady</p>
        <CodeBlock code={code2} language="csharp" />
        <p>
          Warto zauważyć, że typy zmiennoprzecinkowe (float, double, decimal)
          różnią się precyzją - decimal jest zalecany do obliczeń finansowych,
          gdzie dokładność ma kluczowe znaczenie.
        </p>
        <br />
        <h4>Typy referencyjne</h4>
        <p>
          Typy referencyjne przechowują adresy w pamięci, a nie bezpośrednie
          wartości. Zmienna ta przechowuje wskaźnik do rzeczywistej wartości
          znajdującej się na stercie pamięci.
        </p>

        <table>
          <thead>
            <tr>
              <th>
                <strong>Typ</strong>
              </th>
              <th>
                <strong>Opis</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>string</strong>
              </td>
              <td>Przechowuje ciąg znaków</td>
            </tr>
            <tr>
              <td>
                <strong>object</strong>
              </td>
              <td>Podstawowy typ dla wszystkich innych typów</td>
            </tr>
            <tr>
              <td>
                <strong>dynamic</strong>
              </td>
              <td>Typ określany w czasie wykonywania</td>
            </tr>
          </tbody>
        </table>
        <CodeBlock code={code3} language="csharp" />
        <p>
          Każda wartość może być przypisana do typu object. dynamic z kolei
          pozwala na zmianę typu zmiennej w trakcie działania programu, co może
          prowadzić do potencjalnych błędów.
        </p>
        <br />
        <h3>Inicjalizacja i przypisywanie wartości</h3>
        <p>
          Deklarując zmienną, możemy od razu przypisać jej wartość lub zrobić to
          później:
        </p>
        <CodeBlock code={code4} language="csharp" />
        <p>
          Należy pamiętać, że zmienne muszą być inicjalizowane przed ich
          użyciem. W przeciwnym razie kompilator zgłosi błąd.
        </p>
        <h4>Zmienna a stała</h4>
        <p>
          Jeśli nie chcemy, aby wartość zmiennej uległa zmianie, możemy użyć
          słów kluczowych const lub readonly.
        </p>
        <CodeBlock code={code5} language="csharp" />
        <h3>Zakres działania zmiennych</h3>
        <p>
          Zakres zmiennej odnosi się do obszaru w kodzie, w którym można jej
          używać.
        </p>
        <br />
        <h4>Zmienne lokalne</h4>
        <p>
          Te deklarowane w blokach kodu tj. pomiędzy nawiasami klamerkowymi {}{" "}
          są dostępne tylko w obszarze tego bloku, np. w metodach dostępne są
          tylko wewnątrz tej metody. Temat metod został szczegółowo omówiony w
          późniejszym artykule.
        </p>
        <CodeBlock code={code6} language="csharp" />
        <h4>Zmienne globalne</h4>
        <p>
          Te zadeklarowane poza pomniejszymi blokami kodu (np. poza metodami) są
          dostępne w całym programie. Należy jednak unikać nadmiernego używania
          zmiennych globalnych, ponieważ mogą prowadzić do błędów i utrudniać
          debugowanie.
        </p>
        <CodeBlock code={code7} language="csharp" />
        <h3>Podsumowanie</h3>
        <p>
          W tym artykule szczegółowo omówiliśmy zmienne w C#, ich typy oraz
          zakres. Warto pamiętać, że dobrze dobrane typy zmiennych zwiększają
          czytelność kodu oraz poprawiają wydajność aplikacji. Korzystaj z const
          dla wartości stałych, readonly dla pól, które powinny być przypisane
          raz, a var dla zmiennych, których typ jest oczywisty. Pamiętaj
          również, że nadmierne użycie dynamic może prowadzić do trudniejszych
          do wykrycia błędów.
          <br />
          Mam nadzieję, że ten przewodnik pomógł Ci lepiej zrozumieć, jak
          zarządzać zmiennymi w C#!
        </p>
        <br />
        <br />
        <br />
      </main>
    </>
  );
}
