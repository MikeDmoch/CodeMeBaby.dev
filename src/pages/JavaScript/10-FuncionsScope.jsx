import CodeBlock from "../../components/CodeBlock";

export const title = "Funkcje i zakres";

export default function FunctionsAndScope() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - podstawy funkcji, zakresu i hoistingu</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Funkcje to serce JavaScriptu - pozwalają grupować kod w logiczne,
        wielokrotnego użytku fragmenty. Dzięki nim możemy uniknąć powtórzeń i
        lepiej organizować logikę programu.
      </p>
      <p>
        Każda funkcja wprowadza <strong>własny zakres</strong> (ang.{" "}
        <em>scope</em>), czyli przestrzeń, w której istnieją zmienne.
        Zrozumienie tego, jak działa zakres i funkcje, to absolutna podstawa
        języka JS.
      </p>

      <h3>Tworzenie funkcji</h3>
      <p>Funkcje można zdefiniować na kilka sposobów:</p>

      <h4>1. Deklaracja funkcji</h4>
      <CodeBlock
        language="javascript"
        code={`function powitaj(imie) {
    console.log("Cześć, " + imie + "!");
}

powitaj("Ola"); // Cześć, Ola!`}
      />
      <p>
        Deklaracje funkcji są przenoszone (hoistowane), więc można ich używać
        przed definicją w kodzie.
      </p>

      <h4>2. Wyrażenie funkcyjne</h4>
      <CodeBlock
        language="javascript"
        code={`const powitaj = function(imie) {
    console.log("Hej, " + imie);
};

powitaj("Tomek");`}
      />
      <p>
        Funkcja przypisana do zmiennej nie jest hoistowana - musi być
        zdefiniowana zanim zostanie użyta.
      </p>

      <h4>3. Funkcja strzałkowa</h4>
      <CodeBlock
        language="javascript"
        code={`const powitaj = (imie) => {
    console.log(\`Cześć, \${imie}!\`);
};`}
      />
      <p>
        Skrócona, nowoczesna składnia. Jeśli funkcja ma tylko jeden parametr i
        jedno wyrażenie, można ją zapisać jeszcze krócej:
      </p>
      <CodeBlock
        language="javascript"
        code={`const podwoj = x => x * 2;
console.log(podwoj(5)); // 10`}
      />
      <p>
        Uwaga! Funkcje strzałkowe <strong>nie mają własnego</strong>{" "}
        <code>this</code> ani <code>arguments</code> — dziedziczą je z kontekstu
        nadrzędnego. To często używane w React, np. przy event handlerach.
      </p>

      <h3>Parametry i wartości zwracane</h3>
      <CodeBlock
        language="javascript"
        code={`function suma(a, b) {
    return a + b;
}

const wynik = suma(3, 4);
console.log(wynik); // 7`}
      />
      <p>
        Instrukcja <code>return</code> kończy działanie funkcji i zwraca wynik.
        Jeśli jej zabraknie, funkcja domyślnie zwraca <code>undefined</code>.
      </p>

      <h4>Parametry domyślne</h4>
      <CodeBlock
        language="javascript"
        code={`function powitaj(imie = "Gościu") {
    console.log("Cześć, " + imie);
}

powitaj(); // Cześć, Gościu`}
      />

      <h4>Operator rest</h4>
      <p>
        Gdy nie wiemy, ile argumentów otrzyma funkcja, można użyć{" "}
        <code>...rest</code>.
      </p>
      <CodeBlock
        language="javascript"
        code={`function suma(...liczby) {
    return liczby.reduce((acc, n) => acc + n, 0);
}

console.log(suma(1, 2, 3, 4)); // 10`}
      />

      <h3>Funkcje jako wartości</h3>
      <p>
        W JS funkcje są <strong>pierwszej klasy obywatelami</strong> - można je
        przekazywać jako argumenty, zwracać z innych funkcji, przypisywać do
        zmiennych itd.
      </p>
      <CodeBlock
        language="javascript"
        code={`function wykonaj(funkcja) {
    funkcja();
}

const przywitaj = () => console.log("Hej!");

wykonaj(przywitaj); // Hej!`}
      />

      <h3>Zakres zmiennych (scope)</h3>
      <p>
        Zakres zmiennych definiuje, gdzie dana wartość jest widoczna i dostępna.
        JavaScript ma zasięg:
      </p>

      <ul>
        <li>
          <strong>globalny</strong> - widoczny wszędzie,
        </li>
        <li>
          <strong>funkcyjny</strong> - zmienne w funkcji są prywatne,
        </li>
        <li>
          <strong>blokowy</strong> - tylko dla <code>let</code> i{" "}
          <code>const</code>.
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`let globalna = "Jestem globalna";

function pokazZakres() {
    let lokalna = "Jestem lokalna";
    console.log(globalna); // działa
    console.log(lokalna);  // działa
}

pokazZakres();

console.log(globalna); // działa
console.log(lokalna);  // ❌ Błąd`}
      />

      <h3>Różnice między var, let i const</h3>
      <table>
        <thead>
          <tr>
            <th>Słowo kluczowe</th>
            <th>Zakres</th>
            <th>Możliwość ponownego przypisania</th>
            <th>Hoisting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>var</code>
            </td>
            <td>funkcyjny</td>
            <td>✅ tak</td>
            <td>hoistowany (bez inicjalizacji)</td>
          </tr>
          <tr>
            <td>
              <code>let</code>
            </td>
            <td>blokowy</td>
            <td>✅ tak</td>
            <td>nieużywalny przed deklaracją</td>
          </tr>
          <tr>
            <td>
              <code>const</code>
            </td>
            <td>blokowy</td>
            <td>❌ nie</td>
            <td>nieużywalny przed deklaracją</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        language="javascript"
        code={`if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10
console.log(b); // ❌ Błąd
console.log(c); // ❌ Błąd`}
      />

      <h3>Hoisting</h3>
      <p>
        „Podnoszenie” (ang. hoisting) oznacza, że JS najpierw rejestruje
        deklaracje zmiennych i funkcji, zanim uruchomi kod.
      </p>

      <CodeBlock
        language="javascript"
        code={`foo(); // działa

function foo() {
    console.log("Funkcja wywołana przed deklaracją!");
}

bar(); // ❌ TypeError

const bar = function() {
    console.log("Nie działa, bo to wyrażenie funkcyjne");
};`}
      />

      <h3>Closures (domknięcia)</h3>
      <p>
        Domknięcie to mechanizm, dzięki któremu funkcja „pamięta” zmienne z
        miejsca, w którym została utworzona, nawet po zakończeniu działania tej
        funkcji nadrzędnej.
      </p>
      <CodeBlock
        language="javascript"
        code={`function licznik() {
    let liczba = 0;
    return function() {
        liczba++;
        return liczba;
    };
}

const dodaj = licznik();
console.log(dodaj()); // 1
console.log(dodaj()); // 2
console.log(dodaj()); // 3`}
      />

      <p>
        Funkcja wewnętrzna ma dostęp do zmiennej <code>liczba</code> nawet po
        zakończeniu działania funkcji <code>licznik()</code>. To klucz do
        rozumienia np. stanu w React.
      </p>

      <h3>Przekazywanie danych do funkcji</h3>
      <p>
        W JavaScript wartości proste (<code>number</code>, <code>string</code>,
        <code>boolean</code>, itp.) przekazywane są{" "}
        <strong>przez wartość</strong>, a obiekty i tablice -{" "}
        <strong>przez referencję</strong>.
      </p>
      <CodeBlock
        language="javascript"
        code={`function zmien(x) {
    x = 10;
}
let a = 5;
zmien(a);
console.log(a); // 5 (wartość niezależna)

function dodajElement(tablica) {
    tablica.push("nowy");
}
let arr = ["a", "b"];
dodajElement(arr);
console.log(arr); // ["a", "b", "nowy"]`}
      />

      <h3>Częste błędy</h3>
      <ul>
        <li>
          Używanie <code>var</code> zamiast <code>let</code>/<code>const</code>{" "}
          - prowadzi do błędów z zakresem.
        </li>
        <li>
          Brak <code>return</code> w funkcji, która ma coś zwracać.
        </li>
        <li>Nadpisywanie zmiennych globalnych w funkcjach.</li>
        <li>
          Próba użycia funkcji lub zmiennej przed jej deklaracją (bez
          hoistingu).
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Funkcje i zakres to filary JavaScriptu. Wiedza o tym, jak działają
        deklaracje, hoisting, closures i przekazywanie wartości, pozwala pisać
        czytelny, przewidywalny i bezpieczny kod.
      </p>
      <p>
        Zrozumienie tych zasad to też klucz do pracy z Reactem - bo komponenty,
        hooki i eventy opierają się dokładnie na tych samych zasadach.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
