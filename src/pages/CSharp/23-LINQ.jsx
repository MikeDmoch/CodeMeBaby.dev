import CodeBlock from "../../components/CodeBlock";

export const title = "LINQ";

export default function LINQ() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title}</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        LINQ (Language Integrated Query) to potężne narzędzie w języku C#, które
        umożliwia wykonywanie zapytań na kolekcjach danych w sposób zbliżony do
        SQL. Dzięki LINQ możesz filtrować, sortować, grupować i przekształcać
        dane z tablic, list, baz danych czy plików XML w prosty i czytelny
        sposób.
      </p>

      <h3>Podstawy LINQ</h3>
      <p>
        Aby używać LINQ, należy dodać przestrzeń nazw <code>System.Linq</code>.
        Zapytania LINQ można pisać w dwóch formach: składni zapytań (query
        syntax) i składni metod (method syntax).
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.Linq;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> liczby = new List<int> { 1, 2, 3, 4, 5, 6 };

        // Składnia zapytań
        var parzyste = from l in liczby
                       where l % 2 == 0
                       select l;

        // Składnia metod
        var nieparzyste = liczby.Where(l => l % 2 != 0);

        Console.WriteLine("Parzyste: " + string.Join(", ", parzyste));
        Console.WriteLine("Nieparzyste: " + string.Join(", ", nieparzyste));
    }
}`}
      />

      <h3>Filtrowanie danych - where</h3>
      <CodeBlock
        language="csharp"
        code={`var osoby = new List<string> { "Adam", "Ewa", "Marek", "Ola" };

var wynik = osoby.Where(o => o.StartsWith("A"));

foreach (var o in wynik)
    Console.WriteLine(o);`}
      />

      <h3>Projekcja danych - select</h3>
      <p>
        Operator <code>select</code> pozwala przekształcać elementy kolekcji do
        nowego formatu.
      </p>

      <CodeBlock
        language="csharp"
        code={`var liczby = new List<int> { 1, 2, 3, 4, 5 };
var kwadraty = liczby.Select(x => x * x);

Console.WriteLine(string.Join(", ", kwadraty));`}
      />

      <h3>Sortowanie - orderby i orderby descending</h3>
      <CodeBlock
        language="csharp"
        code={`var imiona = new List<string> { "Zosia", "Adam", "Ewa", "Bartek" };

var posortowane = from i in imiona
                  orderby i
                  select i;

var odwrotnie = imiona.OrderByDescending(i => i);

Console.WriteLine("Rosnąco: " + string.Join(", ", posortowane));
Console.WriteLine("Malejąco: " + string.Join(", ", odwrotnie));`}
      />

      <h3>Grupowanie - group by</h3>
      <p>LINQ pozwala grupować dane według dowolnego klucza.</p>

      <CodeBlock
        language="csharp"
        code={`var osoby = new[]
{
    new { Imie = "Adam", Miasto = "Warszawa" },
    new { Imie = "Ewa", Miasto = "Kraków" },
    new { Imie = "Marek", Miasto = "Warszawa" },
    new { Imie = "Ola", Miasto = "Kraków" }
};

var grupy = from o in osoby
            group o by o.Miasto into g
            select new { Miasto = g.Key, Osoby = g };

foreach (var g in grupy)
{
    Console.WriteLine($"Miasto: {g.Miasto}");
    foreach (var osoba in g.Osoby)
        Console.WriteLine(" - " + osoba.Imie);
}`}
      />

      <h3>Łączenie danych - join</h3>
      <p>
        LINQ obsługuje łączenia kolekcji, podobnie jak SQL. Najczęściej używanym
        typem jest <code>inner join</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`var klienci = new[]
{
    new { Id = 1, Imie = "Adam" },
    new { Id = 2, Imie = "Ewa" }
};

var zamowienia = new[]
{
    new { Id = 1, KlientId = 1, Produkt = "Laptop" },
    new { Id = 2, KlientId = 1, Produkt = "Telefon" },
    new { Id = 3, KlientId = 2, Produkt = "Monitor" }
};

var wynik = from k in klienci
            join z in zamowienia on k.Id equals z.KlientId
            select new { Klient = k.Imie, z.Produkt };

foreach (var e in wynik)
    Console.WriteLine($"{e.Klient} - {e.Produkt}");`}
      />

      <h3>Agregacje - Count, Sum, Average, Max, Min</h3>
      <p>
        LINQ posiada zestaw metod agregujących, które zwracają pojedyncze
        wartości.
      </p>

      <CodeBlock
        language="csharp"
        code={`int[] liczby = { 1, 2, 3, 4, 5, 6 };

int suma = liczby.Sum();
int max = liczby.Max();
double srednia = liczby.Average();

Console.WriteLine($"Suma: {suma}, Max: {max}, Średnia: {srednia}");`}
      />

      <h3>Distinct, Take, Skip</h3>
      <p>
        Te metody pozwalają na unikalne wartości, ograniczanie i pomijanie
        elementów.
      </p>

      <CodeBlock
        language="csharp"
        code={`var liczby = new List<int> { 1, 2, 2, 3, 4, 4, 5 };

var unikalne = liczby.Distinct();
var pierwsze3 = liczby.Take(3);
var pomin2 = liczby.Skip(2);

Console.WriteLine("Unikalne: " + string.Join(", ", unikalne));
Console.WriteLine("Pierwsze 3: " + string.Join(", ", pierwsze3));
Console.WriteLine("Po pominięciu 2: " + string.Join(", ", pomin2));`}
      />

      <h3>Any, All, Contains</h3>
      <p>Te metody zwracają wartości logiczne w zależności od warunku.</p>

      <CodeBlock
        language="csharp"
        code={`int[] liczby = { 1, 2, 3, 4, 5 };

bool czyJestParzysta = liczby.Any(x => x % 2 == 0);
bool czyWszystkieDodatnie = liczby.All(x => x > 0);
bool czyZawiera3 = liczby.Contains(3);

Console.WriteLine($"Parzysta: {czyJestParzysta}, Wszystkie dodatnie: {czyWszystkieDodatnie}, Zawiera 3: {czyZawiera3}");`}
      />

      <h3>Łańcuchowe zapytania LINQ</h3>
      <p>LINQ pozwala łączyć wiele operacji w jednym wyrażeniu.</p>

      <CodeBlock
        language="csharp"
        code={`var wynik = Enumerable.Range(1, 10)
    .Where(x => x % 2 == 0)
    .Select(x => x * x)
    .OrderByDescending(x => x);

Console.WriteLine(string.Join(", ", wynik));`}
      />

      <h3>Przykład praktyczny</h3>
      <p>
        Przykład łączenia wielu operatorów LINQ w celu przetworzenia danych.
      </p>

      <CodeBlock
        language="csharp"
        code={`var produkty = new[]
{
    new { Nazwa = "Laptop", Cena = 3000 },
    new { Nazwa = "Myszka", Cena = 100 },
    new { Nazwa = "Monitor", Cena = 1200 },
    new { Nazwa = "Klawiatura", Cena = 200 }
};

var tanieProdukty = produkty
    .Where(p => p.Cena < 1500)
    .OrderBy(p => p.Cena)
    .Select(p => $"{p.Nazwa} - {p.Cena} zł");

foreach (var p in tanieProdukty)
    Console.WriteLine(p);`}
      />

      <h3>PLINQ - równoległe zapytania LINQ</h3>
      <p>
        PLINQ (Parallel LINQ) pozwala wykonywać zapytania LINQ równolegle, co
        może znacznie przyspieszyć pracę przy dużych zbiorach danych.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System.Linq;

var liczby = Enumerable.Range(1, 20);

var kwadraty = liczby
    .AsParallel()
    .Where(x => x % 2 == 0)
    .Select(x => x * x);

Console.WriteLine(string.Join(", ", kwadraty));`}
      />

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj LINQ do przetwarzania danych w sposób deklaratywny i czytelny.
        </li>
        <li>
          Unikaj zagnieżdżonych pętli, jeśli możesz zastąpić je zapytaniem LINQ.
        </li>
        <li>
          Przy dużych zbiorach danych rozważ użycie <code>AsParallel()</code>.
        </li>
        <li>
          Pamiętaj, że LINQ jest leniwe – dane przetwarzane są dopiero przy
          enumeracji.
        </li>
        <li>
          Uważaj przy używaniu <code>ToList()</code> lub <code>ToArray()</code>{" "}
          – mogą wymusić natychmiastowe wykonanie zapytania.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        LINQ to jedno z najpotężniejszych narzędzi w C#. Umożliwia tworzenie
        czytelnych i zwięzłych zapytań na danych, niezależnie od źródła – czy to
        lista, tablica, baza danych czy plik XML.
      </p>

      <p>
        W praktyce: używaj LINQ do filtrowania, sortowania i przekształcania
        danych – to uczyni Twój kod krótszym, bardziej eleganckim i łatwiejszym
        w utrzymaniu.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
