import CodeBlock from "../../components/CodeBlock";
export const title = "Pętle";
export default function Loops() {
  return (
    <main>
      <div>
        <h1>{title} - Kompleksowy przewodnik</h1>
      </div>

      <p>
        Pętle to fundamentalny element każdego języka programowania, który
        pozwala na wielokrotne wykonywanie kodu przy spełnieniu określonych
        warunków. W języku C# mamy do dyspozycji kilka rodzajów pętli, każda z
        nich znajduje zastosowanie w różnych przypadkach. W tym artykule
        przyjrzymy się dokładnie każdej z nich, analizując ich strukturę,
        zastosowania oraz przykłady praktyczne.
      </p>

      <br />

      <h3>Pętla for</h3>
      <p>
        Jest jedną z najczęściej używanych konstrukcji w C#; idealna do
        sytuacji, gdy znamy dokładną liczbę iteracji, które muszą zostać
        wykonane.
      </p>

      <p>Składnia:</p>
      <CodeBlock
        code={`
for (inicjalizacja; warunek; inkrementacja/dekrementacja)
{
    // Blok kodu
}`}
        language="csharp"
      />

      <p>Przykład:</p>
      <CodeBlock
        code={`
using System;

class Program
{
    static void Main()
    {
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine($"Iteracja: {i}");
        }
    }
}`}
        language="csharp"
      />

      <p>Wynik:</p>
      <CodeBlock
        code={`
Iteracja: 0
Iteracja: 1
Iteracja: 2
Iteracja: 3
Iteracja: 4`}
        language="csharp"
      />

      <p>
        Pętla for często stosowana jest do iteracji po tablicach i kolekcjach.
      </p>

      <br />

      <h3>Pętla while</h3>
      <p>
        Pętla while wykonuje blok kodu tak długo, jak długo podany warunek
        zwraca true. Jest idealna, gdy nie znamy z góry liczby iteracji.
      </p>

      <p>Składnia:</p>
      <CodeBlock
        code={`
while (warunek)
{
    // Blok kodu
}`}
        language="csharp"
      />

      <p>Przykład:</p>
      <CodeBlock
        code={`
using System;

class Program
{
    static void Main()
    {
        int licznik = 0;
        while (licznik < 5)
        {
            Console.WriteLine($"Licznik: {licznik}");
            licznik++;
        }
    }
}`}
        language="csharp"
      />

      <p>Wynik:</p>
      <CodeBlock
        code={`
Licznik: 0
Licznik: 1
Licznik: 2
Licznik: 3
Licznik: 4`}
        language="csharp"
      />

      <p>
        Pętla while przydaje się w sytuacjach, gdzie liczba powtórzeń jest
        zależna od warunku dynamicznie zmieniającego się w czasie wykonania
        programu.
      </p>

      <br />

      <h3>Pętla do-while</h3>
      <p>
        Pętla do-while jest odmianą while, ale z tą różnicą, że kod wewnątrz
        pętli wykona się przynajmniej raz, nawet jeśli warunek od początku nie
        jest spełniony.
      </p>

      <p>Składnia:</p>
      <CodeBlock
        code={`
do
{
    // Blok kodu
} while (warunek);
`}
        language="csharp"
      />

      <p>Przykład:</p>
      <CodeBlock
        code={`
using System;

class Program
{
    static void Main()
    {
        int licznik = 0;
        do
        {
            Console.WriteLine($"Licznik: {licznik}");
            licznik++;
        } while (licznik < 5);
    }
}`}
        language="csharp"
      />

      <p>Wynik:</p>
      <CodeBlock
        code={`
Licznik: 0
Licznik: 1
Licznik: 2
Licznik: 3
Licznik: 4`}
        language="csharp"
      />

      <h3>Pętla foreach</h3>
      <p>
        Pętla foreach służy do iteracji po kolekcjach i tablicach w sposób
        bezpieczny i czytelny.
      </p>

      <p>Składnia:</p>
      <CodeBlock
        code={`
foreach (typ element in kolekcja)
{
    // Blok kodu
}`}
        language="csharp"
      />

      <p>Lub w praktyce:</p>
      <CodeBlock
        code={`
foreach (var element in kolekcja)
{
    // Blok kodu
}`}
        language="csharp"
      />

      <p>Przykład:</p>
      <CodeBlock
        code={`
using System;

class Program
{
    static void Main()
    {
        string[] imiona = {"Anna", "Krzysztof", "Piotr"};
        
        foreach (string imie in imiona)
        {
            Console.WriteLine($"Witaj, {imie}!");
        }
    }
}`}
        language="csharp"
      />

      <p>Wynik:</p>
      <CodeBlock
        code={`
Witaj, Anna!
Witaj, Krzysztof!
Witaj, Piotr!`}
        language="csharp"
      />

      <p>
        Pętla foreach eliminuje konieczność zarządzania indeksem i sprawia, że
        kod jest bardziej czytelny.
      </p>

      <br />

      <h3>Instrukcje break i continue</h3>
      <p>
        Instrukcje <code>break</code> i <code>continue</code> pozwalają
        kontrolować przebieg działania pętli.
      </p>

      <p>
        Przykład - <code>break</code>:
      </p>
      <CodeBlock
        code={`
using System;

class Program
{
    static void Main()
    {
        for (int i = 0; i < 10; i++)
        {
            if (i == 5)
                break;
            Console.WriteLine(i);
        }
    }
}`}
        language="csharp"
      />

      <p>Wynik:</p>
      <CodeBlock
        code={`
0
1
2
3
4`}
        language="csharp"
      />

      <p>
        Przykład - <code>continue</code>:
      </p>
      <CodeBlock
        code={`
using System;

class Program
{
    static void Main()
    {
        for (int i = 0; i < 10; i++)
        {
            if (i % 2 == 0)
                continue;
            Console.WriteLine(i);
        }
    }
}`}
        language="csharp"
      />

      <p>Wynik:</p>
      <CodeBlock
        code={`
1
3
5
7
9`}
        language="csharp"
      />

      <p>
        Instrukcja <code>continue</code> pozwala pominąć parzyste liczby i
        wykonać kod tylko dla nieparzystych wartości zmiennej <code>i</code>.
      </p>

      <br />

      <h3>Podsumowanie</h3>
      <p>
        Pętle są kluczowym elementem programowania w C#. Wybór odpowiedniej
        pętli zależy od konkretnego przypadku:
      </p>
      <ul>
        <li>
          <strong>for</strong> – kiedy znamy liczbę iteracji,
        </li>
        <li>
          <strong>while</strong> – kiedy liczba iteracji zależy od warunku,
        </li>
        <li>
          <strong>do-while</strong> – kiedy chcemy wykonać kod przynajmniej raz,
        </li>
        <li>
          <strong>foreach</strong> – kiedy iterujemy po kolekcjach.
        </li>
      </ul>

      <p>
        Zrozumienie tych mechanizmów i umiejętne ich stosowanie sprawi, że kod
        stanie się bardziej efektywny i czytelny. Jeśli dopiero zaczynasz
        przygodę z C#, warto poeksperymentować z różnymi pętlami, aby lepiej
        zrozumieć ich działanie!
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
