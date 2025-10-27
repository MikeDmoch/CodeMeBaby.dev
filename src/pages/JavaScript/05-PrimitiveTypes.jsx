import CodeBlock from "../../components/CodeBlock";

export const title = "Typy danych prymitywnych";

export default function PrimitiveTypes() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title}</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Każdy język programowania posiada zestaw wbudowanych typów danych, które
        stanowią jego fundament. Typy prymitywne to najprostsze, niepodzielne
        wartości, które nie są obiektami i nie mają metod. Są one niezmienne
        (immutable) - po utworzeniu nie można zmienić ich wartości.
      </p>

      <p>
        W języku istnieje{" "}
        <strong>siedem podstawowych typów prymitywnych</strong>:
      </p>

      <ul>
        <li>
          <code>string</code> - tekst
        </li>
        <li>
          <code>number</code> - liczby
        </li>
        <li>
          <code>boolean</code> - wartość logiczna
        </li>
        <li>
          <code>null</code> - celowy brak wartości
        </li>
        <li>
          <code>undefined</code> - niezainicjowana zmienna
        </li>
        <li>
          <code>symbol</code> - unikalny identyfikator
        </li>
        <li>
          <code>bigint</code> - liczby całkowite o bardzo dużej precyzji
        </li>
      </ul>

      <h3>string - tekst</h3>
      <p>
        Typ <code>string</code> reprezentuje ciąg znaków ujęty w pojedyncze,
        podwójne lub odwrotne cudzysłowy. Teksty można łączyć operatorem{" "}
        <code>+</code> lub stosować <em>template stringi</em> do interpolacji
        zmiennych.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Ala";
let powitanie = 'Cześć';
let tekst = \`\${powitanie}, \${imie}!\`;

console.log(tekst); // Cześć, Ala!`}
      />

      <h3>number - liczby</h3>
      <p>
        Typ <code>number</code> obejmuje zarówno liczby całkowite, jak i
        zmiennoprzecinkowe. W przeciwieństwie do wielu innych języków, nie ma tu
        osobnych typów dla int i float.
      </p>

      <CodeBlock
        language="javascript"
        code={`let a = 10;
let b = 3.14;
let suma = a + b;

console.log(suma); // 13.14`}
      />

      <p>Dodatkowo istnieją specjalne wartości liczbowe:</p>

      <ul>
        <li>
          <code>Infinity</code> - nieskończoność (np. wynik dzielenia przez 0),
        </li>
        <li>
          <code>-Infinity</code> - ujemna nieskończoność,
        </li>
        <li>
          <code>NaN</code> - „Not a Number”, czyli wynik niepoprawnej operacji
          matematycznej.
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`console.log(10 / 0);      // Infinity
console.log(-10 / 0);     // -Infinity
console.log("tekst" * 3); // NaN`}
      />

      <h3>boolean - wartości logiczne</h3>
      <p>
        Typ <code>boolean</code> może przyjmować tylko dwie wartości:{" "}
        <code>true</code> lub <code>false</code>. Wykorzystywany jest do
        podejmowania decyzji w instrukcjach warunkowych.
      </p>

      <CodeBlock
        language="javascript"
        code={`let aktywny = true;
let zalogowany = false;

if (aktywny) {
    console.log("Użytkownik jest aktywny");
}`}
      />

      <h3>null - brak wartości</h3>
      <p>
        <code>null</code> oznacza celowy brak wartości - przypisuje się go, aby
        wyraźnie zaznaczyć, że zmienna nie przechowuje żadnych danych.
      </p>

      <CodeBlock
        language="javascript"
        code={`let dane = null;

console.log(dane);      // null
console.log(typeof dane); // "object" (znany błąd w specyfikacji)`}
      />

      <h3>undefined - niezainicjowana zmienna</h3>
      <p>
        <code>undefined</code> oznacza, że zmienna została zadeklarowana, ale
        nie przypisano jej żadnej wartości. Jest to domyślny stan nowo
        utworzonych zmiennych.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba;
console.log(liczba); // undefined`}
      />

      <p>
        Różnica między <code>null</code> a <code>undefined</code> polega na tym,
        że <code>null</code> przypisuje się celowo, a <code>undefined</code>{" "}
        oznacza brak przypisania.
      </p>

      <h3>symbol - unikalny identyfikator</h3>
      <p>
        Typ <code>symbol</code> służy do tworzenia unikalnych identyfikatorów,
        które nigdy się nie powtarzają. Często używany jest w obiektach do
        tworzenia właściwości, których nie da się nadpisać ani przypadkowo
        odczytać.
      </p>

      <CodeBlock
        language="javascript"
        code={`const id = Symbol("userId");
const user = {
    [id]: 123,
    name: "Ola"
};

console.log(user[id]); // 123`}
      />

      <h3>bigint - duże liczby całkowite</h3>
      <p>
        Typ <code>bigint</code> pozwala na reprezentowanie bardzo dużych liczb
        całkowitych, przekraczających zakres typu <code>number</code>. Tworzy
        się go przez dodanie litery <code>n</code> na końcu liczby.
      </p>

      <CodeBlock
        language="javascript"
        code={`const duzaLiczba = 123456789012345678901234567890n;
console.log(duzaLiczba);`}
      />

      <h3>Porównanie typów</h3>
      <p>
        Możesz sprawdzić typ wartości przy pomocy operatora <code>typeof</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(typeof "tekst");     // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"
console.log(typeof Symbol());     // "symbol"
console.log(typeof 123n);         // "bigint"`}
      />

      <h3>Niezmienność typów prymitywnych</h3>
      <p>
        Wszystkie typy prymitywne są niezmienne - oznacza to, że po utworzeniu
        wartość nie może być zmodyfikowana. Jeśli wykonasz operację na wartości
        prymitywnej, powstanie nowa wartość, a nie modyfikacja starej.
      </p>

      <CodeBlock
        language="javascript"
        code={`let tekst = "Hello";
tekst.toUpperCase(); // tworzy nowy string, nie zmienia oryginału
console.log(tekst);  // "Hello"`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Typy prymitywne stanowią podstawę pracy z danymi w języku. Są proste,
        niezmienne i przechowywane bezpośrednio w pamięci. Zrozumienie ich
        zachowania to klucz do pisania bezpiecznego i przewidywalnego kodu.
      </p>

      <p>
        W kolejnych lekcjach przejdziemy do typów złożonych, takich jak{" "}
        <strong>obiekty</strong> i <strong>tablice</strong>, które pozwalają
        przechowywać i organizować większe ilości danych.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
