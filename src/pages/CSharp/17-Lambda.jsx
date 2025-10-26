import CodeBlock from "../../components/CodeBlock";

export const title = "Wyrażenia lambda";

export default function Lambda() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Wyrażenia lambda to potężna i zwięzła forma zapisu metod anonimowych w
        języku C#. Pozwalają tworzyć małe funkcje w locie, bez konieczności ich
        jawnego definiowania. Są powszechnie używane w LINQ, delegatach,
        zdarzeniach i funkcjach wyższego rzędu.
      </p>

      <h3>Podstawy wyrażeń lambda</h3>
      <p>
        Wyrażenie lambda to krótka funkcja, która może przyjmować parametry i
        zwracać wartość. Składnia opiera się na operatorze <code>=&gt;</code>{" "}
        (czyt. „tak, że”).
      </p>

      <CodeBlock language="csharp" code={`(parametry) => wyrażenie`} />

      <p>Przykład:</p>
      <CodeBlock
        language="csharp"
        code={`Func<int, int> kwadrat = x => x * x;
Console.WriteLine(kwadrat(5)); // 25`}
      />

      <h3>Wyrażenia lambda z blokiem kodu</h3>
      <p>
        Jeśli ciało funkcji wymaga wielu instrukcji, można użyć nawiasów
        klamrowych i instrukcji <code>return</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`Func<int, int, int> dodaj = (a, b) =>
{
    int wynik = a + b;
    return wynik;
};

Console.WriteLine(dodaj(3, 4)); // 7`}
      />

      <h3>Lambda bez parametrów</h3>
      <p>Jeśli funkcja nie przyjmuje parametrów, używa się pustych nawiasów.</p>

      <CodeBlock
        language="csharp"
        code={`Action powitanie = () => Console.WriteLine("Cześć!");
powitanie();`}
      />

      <h3>Lambda z jednym parametrem</h3>
      <p>
        Gdy wyrażenie przyjmuje tylko jeden parametr, można pominąć nawiasy.
      </p>

      <CodeBlock
        language="csharp"
        code={`Action<string> wypisz = tekst => Console.WriteLine(tekst);
wypisz("Lambda z jednym parametrem");`}
      />

      <h3>Typy wbudowane: Func, Action i Predicate</h3>
      <p>
        Lambda najczęściej używana jest z trzema typami wbudowanych delegatów:
      </p>
      <ul>
        <li>
          <code>Action</code> - nie zwraca wartości,
        </li>
        <li>
          <code>Func</code> - zwraca wartość,
        </li>
        <li>
          <code>Predicate</code> - zwraca wartość logiczną (<code>bool</code>).
        </li>
      </ul>

      <CodeBlock
        language="csharp"
        code={`Action<string> komunikat = x => Console.WriteLine("Witaj, " + x);
komunikat("Jan");

Func<int, int, int> mnoz = (a, b) => a * b;
Console.WriteLine(mnoz(3, 4)); // 12

Predicate<int> parzysta = x => x % 2 == 0;
Console.WriteLine(parzysta(6)); // True`}
      />

      <h3>Wyrażenia lambda a kolekcje</h3>
      <p>
        Wyrażenia lambda są często używane z metodami kolekcji, takimi jak{" "}
        <code>Where</code>,<code>Select</code>, <code>OrderBy</code> itp.
      </p>

      <CodeBlock
        language="csharp"
        code={`List<int> liczby = new List<int> { 1, 2, 3, 4, 5, 6 };

var parzyste = liczby.Where(x => x % 2 == 0);
var kwadraty = liczby.Select(x => x * x);

Console.WriteLine("Parzyste: " + string.Join(", ", parzyste));
Console.WriteLine("Kwadraty: " + string.Join(", ", kwadraty));`}
      />

      <h3>Wyrażenia lambda a LINQ</h3>
      <p>
        Lambda jest podstawą działania LINQ. Dzięki niej można pisać zapytania w
        sposób deklaratywny.
      </p>

      <CodeBlock
        language="csharp"
        code={`var osoby = new List<string> { "Adam", "Ewa", "Marek", "Ola" };

var wynik = osoby
    .Where(o => o.StartsWith("A"))
    .Select(o => o.ToUpper());

foreach (var osoba in wynik)
    Console.WriteLine(osoba);`}
      />

      <h3>Lambda jako parametr metody</h3>
      <p>
        Wyrażenia lambda często przekazuje się jako argumenty do innych metod,
        co pozwala tworzyć elastyczne i czytelne funkcje.
      </p>

      <CodeBlock
        language="csharp"
        code={`void Wykonaj(Func<int, int> operacja)
{
    for (int i = 1; i <= 3; i++)
        Console.WriteLine(operacja(i));
}

// Użycie:
Wykonaj(x => x * 10);
Wykonaj(x => x + 5);`}
      />

      <h3>Lambda i zmienne z zewnętrznego zakresu (closure)</h3>
      <p>
        Lambda może korzystać ze zmiennych spoza swojego zakresu - jest to tzw.
        domknięcie (closure).
      </p>

      <CodeBlock
        language="csharp"
        code={`int mnoznik = 2;
Func<int, int> pomnoz = x => x * mnoznik;

Console.WriteLine(pomnoz(5)); // 10`}
      />

      <p>
        Zmienna <code>mnoznik</code> zostaje „zapamiętana” przez wyrażenie
        lambda nawet po zakończeniu swojego pierwotnego kontekstu.
      </p>

      <h3>Lambda w zdarzeniach</h3>
      <p>
        Lambda może być również używana do obsługi zdarzeń, zamiast klasycznej
        metody.
      </p>

      <CodeBlock
        language="csharp"
        code={`Button przycisk = new Button();
przycisk.Click += (s, e) => Console.WriteLine("Kliknięto przycisk!");`}
      />

      <h3>Wyrażenia lambda a wyrażenia drzew (Expression Trees)</h3>
      <p>
        C# umożliwia tworzenie wyrażeń lambda, które nie są tylko kodem, ale
        strukturą danych (tzw. drzewa wyrażeń). Używa się ich m.in. w ORM-ach,
        takich jak Entity Framework.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System.Linq.Expressions;

Expression<Func<int, int>> expr = x => x * x;
Console.WriteLine(expr); // x => (x * x)`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Wyrażenia lambda są nieodzownym elementem współczesnego C#. Pozwalają
        pisać krótszy, bardziej elegancki kod oraz ułatwiają pracę z kolekcjami,
        LINQ i zdarzeniami.
      </p>

      <p>
        W praktyce - jeśli potrzebujesz przekazać małą funkcję jako parametr,
        wyrażenie lambda będzie najbardziej czytelnym i wydajnym rozwiązaniem.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
