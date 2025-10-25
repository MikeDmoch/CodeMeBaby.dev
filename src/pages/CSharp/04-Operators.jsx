import CodeBlock from "../../components/CodeBlock";
export const title = "Operatory";
export default function Operators() {
  const code1 = `
int a = 10;
int b = 3;
Console.WriteLine(a + b);  // Wynik: 13
Console.WriteLine(a % b);  // Wynik: 1
Console.WriteLine(a++);    // Wynik: 10
Console.WriteLine(a);      // Wynik: 11
Console.WriteLine(++a);    // Wynik: 12`;
  const code2 = `
int x = 5;
x += 3;  // To samo co x = x + 3;
Console.WriteLine(x);  // Wynik: 8`;
  const code3 = `
int a = 10, b = 20;
Console.WriteLine(a < b);  // Wynik: True`;
  const code4 = `
bool x = true, y = false;
Console.WriteLine(x && y);  // Wynik: false
Console.WriteLine(x || y);  // Wynik: true
Console.WriteLine(!x);      // Wynik: false`;
  const code5 = `
int liczba = 10;
string wynik = (liczba > 0) ? "Dodatnia" : "Nie dodatnia";
Console.WriteLine(wynik);  // Wynik: Dodatnia`;
  const code6 = `
object obj = "Hello";
if (obj is string)
{
    Console.WriteLine("Obiekt jest stringiem");
}`;
  const code7 = `
object obj = "Hello";
string str = obj as string;
Console.WriteLine(str ?? "Nie jest stringiem");`;
  const code8 = `
string tekst = null;
Console.WriteLine(tekst ?? "Domyślny tekst");`;
  const code9 = `
string tekst = null;
tekst ??= "Nowa wartość";
Console.WriteLine(tekst);`;
  const code10 = `
Console.WriteLine(sizeof(int));  // Wynik: 4
Console.WriteLine(sizeof(double));  // Wynik: 8`;
  const code11 = `
Console.WriteLine(typeof(int));  // Wynik: System.Int32`;
  const code12 = `
class Osoba { public string Imie; }
Osoba osoba = new Osoba();
osoba.Imie = "Jan";
Console.WriteLine(osoba.Imie);`;
  const code13 = `
int a = 5;  // 0101 w binarnym
int b = 3;  // 0011 w binarnym

Console.WriteLine(a & b);  // Wynik: 1 (0001 w binarnym)
Console.WriteLine(a | b);  // Wynik: 7 (0111 w binarnym)
Console.WriteLine(a ^ b);  // Wynik: 6 (0110 w binarnym)
Console.WriteLine(~a);     // Wynik: -6 (w binarnym: 1010, czyli negacja bitowa)
Console.WriteLine(a << 1); // Wynik: 10 (1010 w binarnym, przesunięcie w lewo)
Console.WriteLine(a >> 1); // Wynik: 2 (0010 w binarnym, przesunięcie w prawo)`;
  return (
    <main>
      <div>
        <h1>{title} - Kompleksowy przewodnik</h1>
      </div>
      <p>
        Operatory w języku C# są kluczowym elementem umożliwiającym manipulację
        danymi i wykonywanie operacji na zmiennych. W tym artykule omówimy różne
        rodzaje operatorów dostępnych w C#, ich zastosowanie oraz przykłady
        użycia.
      </p>
      <h3>Operatory arytmetyczne</h3>
      <p>
        Operatory arytmetyczne służą do wykonywania podstawowych operacji
        matematycznych, takich jak dodawanie, odejmowanie, mnożenie i dzielenie.
        Są one wykorzystywane w niemal każdej aplikacji, szczególnie tam, gdzie
        przetwarzane są liczby.
      </p>
      <table>
        <thead>
          <tr>
            <th>
              <strong>Operator</strong>
            </th>
            <th>
              <strong>Opis</strong>
            </th>
            <th>
              <strong>Użycie</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>+</strong>
            </td>
            <td>Dodawanie</td>
            <td>a + b</td>
          </tr>
          <tr>
            <td>
              <strong>-</strong>
            </td>
            <td>Odejmowanie</td>
            <td>a - b</td>
          </tr>
          <tr>
            <td>
              <strong>*</strong>
            </td>
            <td>Mnożenie</td>
            <td>a * b</td>
          </tr>
          <tr>
            <td>
              <strong>/</strong>
            </td>
            <td>Dzielenie</td>
            <td>a / b</td>
          </tr>
          <tr>
            <td>
              <strong>%</strong>
            </td>
            <td>Modulo (reszta z dzielenia)</td>
            <td>a % b</td>
          </tr>
          <tr>
            <td>
              <strong>++</strong>
            </td>
            <td>Inkrementacja (zwiększenie o 1)</td>
            <td>a++ oraz ++a</td>
          </tr>
          <tr>
            <td>
              <strong>--</strong>
            </td>
            <td>Dekrementacja (zmniejszenie o 1)</td>
            <td>a--</td>
          </tr>
        </tbody>
      </table>
      <p>Przykład:</p>
      <CodeBlock code={code1} language="csharp" />
      <p>
        Należy pamiętać, że przy dzieleniu całkowitym wynik również będzie
        liczbą całkowitą – reszta zostanie odrzucona. Operator <code>++</code> w
        zależności od tego czy jest użyty z lewej czy prawej strony zmiennej (
        <code>++a</code>
        czy <code>a++</code>) ma różne działanie. W obydwu przypadkach wartość
        jest zwiększona o 1, jednak operator <code>++a</code> (preinkrementacja)
        zwraca wartość przed zwiększeniem jej o 1, w odróżnieniu od operatora{" "}
        <code>a++</code> (postikrementacja).
      </p>
      <h3>Operatory przypisania</h3>
      <p>
        Operatory przypisania służą do przypisywania wartości do zmiennych.
        Oprócz podstawowego operatora <code>=</code>, istnieją także jego
        skrócone wersje łączące przypisanie z operacjami arytmetycznymi.
      </p>
      <table>
        <tr>
          <th>
            <strong>Operator</strong>
          </th>
          <th>
            <strong>Opis</strong>
          </th>
          <th>
            <strong>Użycie</strong>
          </th>
        </tr>
        <tr>
          <td>
            <strong>=</strong>
          </td>
          <td>Przypisanie</td>
          <td>a = b</td>
        </tr>
        <tr>
          <td>
            <strong>+=</strong>
          </td>
          <td>Dodawanie i przypisanie</td>
          <td>a += b</td>
        </tr>
        <tr>
          <td>
            <strong>-=</strong>
          </td>
          <td>Odejmowanie i przypisanie</td>
          <td>a -= b</td>
        </tr>
        <tr>
          <td>
            <strong>*=</strong>
          </td>
          <td>Mnożenie i przypisanie</td>
          <td>a *= b</td>
        </tr>
        <tr>
          <td>
            <strong>/=</strong>
          </td>
          <td>Dzielenie i przypisanie</td>
          <td>a /= b</td>
        </tr>
        <tr>
          <td>
            <strong>%=</strong>
          </td>
          <td>Modulo i przypisanie</td>
          <td>a %= b</td>
        </tr>
      </table>
      <p>Przykład:</p>
      <CodeBlock code={code2} language="csharp" />
      <p>
        Dzięki operatorom takim jak <code>+=</code> kod staje się bardziej
        czytelny i krótszy.
      </p>
      <h3>Operatory porównania</h3>
      <p>
        Operatory porównania pozwalają na sprawdzenie zależności pomiędzy
        wartościami. Wynik każdej operacji porównania to wartość logiczna (
        <code>true</code> lub <code>false</code>).
      </p>
      <table>
        <tr>
          <th>
            <strong>Operator</strong>
          </th>
          <th>
            <strong>Opis</strong>
          </th>
          <th>
            <strong>Użycie</strong>
          </th>
        </tr>
        <tr>
          <td>
            <strong>==</strong>
          </td>
          <td>Równy</td>
          <td>a == b</td>
        </tr>
        <tr>
          <td>
            <strong>!=</strong>
          </td>
          <td>Różny</td>
          <td>a != b</td>
        </tr>
        <tr>
          <td>
            <strong>&gt;</strong>
          </td>
          <td>Większy</td>
          <td>a &gt; b</td>
        </tr>
        <tr>
          <td>
            <strong>&lt;</strong>
          </td>
          <td>Mniejszy</td>
          <td>a &lt; b</td>
        </tr>
        <tr>
          <td>
            <strong>&gt;=</strong>
          </td>
          <td>Większy lub równy</td>
          <td>a &gt;= b</td>
        </tr>
        <tr>
          <td>
            <strong>&lt;=</strong>
          </td>
          <td>Mniejszy lub równy</td>
          <td>a &lt;= b</td>
        </tr>
      </table>
      <p>Przykład:</p>
      <CodeBlock code={code3} language="csharp" />
      <p>
        Operatory porównania są często stosowani w instrukcjach warunkowych if
        oraz pętlach sterujących. Te tematy będą poruszone w dalszej części
        kursu.
      </p>
      <h3>Operatory logiczne</h3>
      Operatory logiczne są używane do operacji na wartościach <code>
        bool
      </code>{" "}
      (<code>true</code> - <code>false</code>), a także w warunkach sterujących
      programem.
      <table>
        <thead>
          <tr>
            <th>
              <strong>Operator</strong>
            </th>
            <th>
              <strong>Opis</strong>
            </th>
            <th>
              <strong>Użycie</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>&&</strong>
            </td>
            <td>AND (I)</td>
            <td>a && b</td>
          </tr>
          <tr>
            <td>
              <strong>||</strong>
            </td>
            <td>OR (LUB)</td>
            <td>a || b</td>
          </tr>
          <tr>
            <td>
              <strong>!</strong>
            </td>
            <td>NOT (Negacja)</td>
            <td>!a</td>
          </tr>
        </tbody>
      </table>
      <p>Przykład:</p>
      <CodeBlock code={code4} language="csharp" />
      <p>
        Operator <code>&&</code> zwraca true tylko wtedy, gdy oba warunki są
        spełnione. Operator <code>||</code> zwraca true, gdy przynajmniej jeden
        z warunków jest spełniony. Operator ! neguje wartość logiczną.
      </p>
      <h3>Operator warunkowy (trójargumentowy)</h3>
      <p>
        Operator warunkowy <code>?:</code> działa jak skrócona forma instrukcji
        if-else, dzięki czemu kod jest bardziej czytelny.
        <br />
        Przykład:
      </p>
      <CodeBlock code={code5} language="csharp" />
      <p>
        Ten operator przydaje się do krótkich warunków. Bezpośrednio za znakiem
        ? umieszczamy wartość zwracaną jeśli warunek jest spełniony, natomiast
        za znakiem : wartość zwracaną gdy warunek nie jest spełniony.
      </p>
      <h3>Operatory is oraz as</h3>
      <p>
        Operator is sprawdza, czy obiekt jest określonego typu, natomiast as
        dokonuje rzutowania obiektu na dany typ, jeśli jest to możliwe.
      </p>
      <p>Przykłady:</p>
      <CodeBlock code={code6} language="csharp" />
      <CodeBlock code={code7} language="csharp" />
      <p>
        Jeśli się nie udało rzutować operator as zwraca <code>null</code>.
      </p>
      <h3>Operatory ?? oraz ??=</h3>
      <p>
        Operator <code>??</code> zwraca wartość lewą, jeśli nie jest{" "}
        <code>null</code>, w przeciwnym razie zwraca prawą stronę. <br />
        Przykład:
      </p>
      <CodeBlock code={code8} language="csharp" />
      <p>
        Operator <code>??=</code> przypisuje wartość tylko wtedy, gdy zmienna
        jest <code>null</code>:
      </p>
      <CodeBlock code={code9} language="csharp" />
      <h3>Operatory sizeof oraz typeof</h3>
      <p>
        Operator <code>sizeof</code> zwraca rozmiar w bajtach danego typu.{" "}
        <br />
        Przykład:
      </p>
      <CodeBlock code={code10} language="csharp" />
      <p>
        Operator <code>typeof</code> zwraca typ zmiennej. Przykład:
      </p>
      <CodeBlock code={code11} language="csharp" />
      <h3>Operator new</h3>
      <p>
        Operator <code>new</code> tworzy nowe obiekty. Pozwala na alokację
        pamięci dla nowej instancji typu i wywołuje jego konstruktor. Zostanie
        omówiony dalej w części Klasy i Objekty <br />
        Przykład:
      </p>
      <CodeBlock code={code12} language="csharp" />
      <p>
        Bez użycia new niemożliwe byłoby tworzenie nowych instancji obiektów
        klas.
      </p>
      <h3>Operatory bitowe</h3>
      <p>
        Operatory bitowe działają na poziomie bitów i są przydatne w
        niskopoziomowych operacjach, takich jak manipulacja flagami, kompresja
        danych czy optymalizacje.
      </p>
      <table>
        <thead>
          <tr>
            <th>
              <strong>Operator</strong>
            </th>
            <th>
              <strong>Opis</strong>
            </th>
            <th>
              <strong>Użycie</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>&</strong>
            </td>
            <td>AND bitowy</td>
            <td>a & b</td>
          </tr>
          <tr>
            <td>
              <strong>|</strong>
            </td>
            <td>OR bitowy</td>
            <td>a | b</td>
          </tr>
          <tr>
            <td>
              <strong>^</strong>
            </td>
            <td>XOR bitowy</td>
            <td>a ^ b</td>
          </tr>
          <tr>
            <td>
              <strong>~</strong>
            </td>
            <td>NOT bitowy</td>
            <td>~a</td>
          </tr>
          <tr>
            <td>
              <strong>&lt;&lt;</strong>
            </td>
            <td>Przesunięcie w lewo</td>
            <td>a &lt;&lt; b</td>
          </tr>
          <tr>
            <td>
              <strong>&gt;&gt;</strong>
            </td>
            <td>Przesunięcie w prawo</td>
            <td>a &gt;&gt; b</td>
          </tr>
        </tbody>
      </table>
      <p>Przykład:</p>
      <CodeBlock code={code13} language="csharp" />
      <h3>Podsumowanie</h3>
      <p>
        Język C# oferuje szeroką gamę operatorów, które umożliwiają efektywne
        zarządzanie danymi. Znajomość ich działania jest wiedzą podstawową
        programisty, gdyż wpływają one na sposób wykonywania obliczeń,
        przetwarzania danych oraz kontrolę przepływu programu (kolejność
        wykonywania instrukcji w kodzie).
      </p>
      <p>
        Operatory wywołania <code>()</code> i indeksowania <code>[]</code>{" "}
        zostaną przedstawione w dalszej części kursu - odpowiednio w części
        Metody oraz Kolekcje.
      </p>
      <br />
      <br />
      <br />
    </main>
  );
}
