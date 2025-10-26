import CodeBlock from "../../components/CodeBlock";

export const title = "Delegaty i zdarzenia";

export default function DelegatesEvents() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Delegaty i zdarzenia to jedne z najważniejszych mechanizmów w języku C#,
        które pozwalają budować elastyczne i reaktywne aplikacje. Dzięki nim
        można przekazywać metody jako parametry, reagować na akcje użytkownika i
        implementować wzorzec obserwatora.
      </p>

      <h3>Czym jest delegat?</h3>
      <p>
        Delegat to typ, który reprezentuje referencję do metody. Można go
        porównać do "wskaźnika na funkcję" z języków niskopoziomowych, ale z
        pełnym bezpieczeństwem typów.
      </p>

      <CodeBlock
        language="csharp"
        code={`public delegate void Powiadomienie(string wiadomosc);

public class Powiadamiacz
{
    public static void Wyswietl(string tekst)
    {
        Console.WriteLine("Wiadomość: " + tekst);
    }

    public static void PokazDuzeLitery(string tekst)
    {
        Console.WriteLine(tekst.ToUpper());
    }
}

// Użycie:
Powiadomienie d1 = Powiadamiacz.Wyswietl;
Powiadomienie d2 = Powiadamiacz.PokazDuzeLitery;

d1("Hello World");
d2("Delegaty są super!");`}
      />

      <h3>Delegaty wielometodowe</h3>
      <p>
        Delegaty mogą wskazywać na więcej niż jedną metodę. W takim przypadku
        wszystkie zostaną wywołane w kolejności dodania.
      </p>

      <CodeBlock
        language="csharp"
        code={`Powiadomienie delegat = Powiadamiacz.Wyswietl;
delegat += Powiadamiacz.PokazDuzeLitery;

delegat("C# delegaty!");`}
      />

      <p>
        Tutaj obie metody zostaną wywołane. Można też usuwać metody z listy
        wywołań przy pomocy operatora <code>-=</code>.
      </p>

      <h3>Delegaty z wartościami zwracanymi</h3>
      <p>
        Delegaty mogą także zwracać wartości. W przypadku kilku metod, zwracana
        jest wartość ostatniej.
      </p>

      <CodeBlock
        language="csharp"
        code={`public delegate int Obliczanie(int x, int y);

public class Matematyka
{
    public static int Dodaj(int a, int b) => a + b;
    public static int Pomnoz(int a, int b) => a * b;
}

// Użycie:
Obliczanie d = Matematyka.Dodaj;
d += Matematyka.Pomnoz;

int wynik = d(2, 3); // Zwróci 6 (wynik ostatniej metody)
Console.WriteLine(wynik);`}
      />

      <h3>Anonimowe metody</h3>
      <p>
        Delegaty mogą być tworzone również bez jawnego wskazywania metody, przy
        użyciu tzw. anonimowych metod.
      </p>

      <CodeBlock
        language="csharp"
        code={`Powiadomienie powiadom = delegate (string msg)
{
    Console.WriteLine("Anonimowa metoda: " + msg);
};

powiadom("To działa!");`}
      />

      <h3>Wyrażenia lambda</h3>
      <p>
        Wyrażenia lambda to skrócony zapis funkcji anonimowych. Są szeroko
        używane w LINQ i programowaniu funkcyjnym.
      </p>

      <CodeBlock
        language="csharp"
        code={`Powiadomienie p = (msg) => Console.WriteLine("Lambda: " + msg);
p("Przykład wyrażenia lambda");`}
      />

      <h3>Typy wbudowane delegatów</h3>
      <p>C# dostarcza trzy podstawowe wbudowane typy delegatów:</p>
      <ul>
        <li>
          <code>Action</code> - metoda bez wartości zwracanej, przyjmuje 0–16
          parametrów,
        </li>
        <li>
          <code>Func</code> - metoda zwracająca wartość,
        </li>
        <li>
          <code>Predicate</code> - metoda zwracająca <code>bool</code>.
        </li>
      </ul>

      <CodeBlock
        language="csharp"
        code={`Action<string> wypisz = t => Console.WriteLine(t);
wypisz("Hello Action!");

Func<int, int, int> dodaj = (a, b) => a + b;
Console.WriteLine(dodaj(3, 4)); // 7

Predicate<int> czyParzysta = x => x % 2 == 0;
Console.WriteLine(czyParzysta(6)); // True`}
      />

      <h3>Zdarzenia (events)</h3>
      <p>
        Zdarzenia w C# opierają się na delegatach i służą do informowania o
        wystąpieniu pewnych akcji. Najczęściej używa się ich w interfejsach
        użytkownika, ale można też stosować w dowolnych klasach.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Przycisk
{
    public delegate void KlikHandler(string info);
    public event KlikHandler Kliknieto;

    public void Klik()
    {
        Console.WriteLine("Kliknięto przycisk");
        Kliknieto?.Invoke("Wysłano zdarzenie!");
    }
}

public class Aplikacja
{
    public void Start()
    {
        Przycisk p = new Przycisk();

        p.Kliknieto += WyswietlWiadomosc;
        p.Klik();

        p.Kliknieto -= WyswietlWiadomosc;
    }

    private void WyswietlWiadomosc(string msg)
    {
        Console.WriteLine("Odebrano zdarzenie: " + msg);
    }
}

// Użycie:
new Aplikacja().Start();`}
      />

      <h4>Co się tutaj dzieje?</h4>
      <ul>
        <li>
          <code>event</code> chroni delegata przed bezpośrednim wywołaniem spoza
          klasy,
        </li>
        <li>
          <code>Kliknieto?.Invoke()</code> wywołuje zdarzenie tylko wtedy, gdy
          są subskrybenci,
        </li>
        <li>
          Metoda <code>WyswietlWiadomosc()</code> reaguje na zdarzenie.
        </li>
      </ul>

      <h3>Standardowy wzorzec EventHandler</h3>
      <p>
        W praktyce najczęściej używa się wbudowanego typu{" "}
        <code>EventHandler</code> i klasy <code>EventArgs</code>. Pozwala to
        tworzyć zdarzenia w sposób zgodny z konwencją .NET.
      </p>

      <CodeBlock
        language="csharp"
        code={`public class Licznik
{
    public event EventHandler<EventArgs> Zmieniono;

    private int _wartosc;
    public int Wartosc
    {
        get => _wartosc;
        set
        {
            _wartosc = value;
            Zmieniono?.Invoke(this, EventArgs.Empty);
        }
    }
}

public class Obserwator
{
    public void Subskrybuj(Licznik licznik)
    {
        licznik.Zmieniono += (s, e) => Console.WriteLine("Wartość została zmieniona!");
    }
}

// Użycie:
var licznik = new Licznik();
var obs = new Obserwator();
obs.Subskrybuj(licznik);

licznik.Wartosc = 10;
licznik.Wartosc = 20;`}
      />

      <p>
        Wzorzec <code>EventHandler</code> zapewnia spójność i kompatybilność z
        mechanizmami systemu .NET.
      </p>

      <h3>Delegaty a zdarzenia - różnice</h3>
      <table>
        <thead>
          <tr>
            <th>Cecha</th>
            <th>Delegat</th>
            <th>Zdarzenie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cel</td>
            <td>Reprezentuje metodę lub listę metod</td>
            <td>Powiadamia o zdarzeniu</td>
          </tr>
          <tr>
            <td>Dostępność</td>
            <td>Można wywołać z dowolnego miejsca</td>
            <td>Tylko w klasie, w której jest zdefiniowane</td>
          </tr>
          <tr>
            <td>Operator += / -=</td>
            <td>Służy do łączenia metod</td>
            <td>Służy do subskrypcji i wypisania się z wydarzenia</td>
          </tr>
          <tr>
            <td>Bezpieczeństwo</td>
            <td>Mniej bezpieczny (można nadpisać listę metod)</td>
            <td>
              Bardziej bezpieczny (chroniony przez <code>event</code>)
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Podsumowanie</h3>
      <p>
        Delegaty i zdarzenia są podstawą reaktywnego programowania w C#.
        Delegaty pozwalają traktować metody jak dane i przekazywać je jako
        argumenty, natomiast zdarzenia umożliwiają informowanie o zajściu
        określonych akcji. Dzięki nim aplikacje stają się bardziej modularne,
        elastyczne i łatwe w rozbudowie.
      </p>

      <p>
        W praktyce: używaj <code>delegatów</code> do przekazywania logiki, a{" "}
        <code>zdarzeń</code> do komunikacji między obiektami.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
