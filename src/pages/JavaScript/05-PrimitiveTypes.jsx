import CodeBlock from "../../components/CodeBlock";

export const title = "Typy danych prymitywnych";

export default function PrimitiveTypes() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Podstawowe wartości w JavaScript</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        JavaScript posiada kilka wbudowanych typów danych, które są fundamentem
        języka. Typy prymitywne to najprostsze, niepodzielne wartości, które{" "}
        <strong>nie są obiektami</strong> i nie posiadają metod. Są one{" "}
        <strong>niezmienne (immutable)</strong> – każda operacja na nich tworzy
        nową wartość.
      </p>

      <h3>Lista typów prymitywnych</h3>
      <ul>
        <li>
          <code>string</code> - tekst
        </li>
        <li>
          <code>number</code> - liczby
        </li>
        <li>
          <code>boolean</code> - wartości logiczne
        </li>
        <li>
          <code>null</code> - brak wartości
        </li>
        <li>
          <code>undefined</code> - niezainicjowana zmienna
        </li>
        <li>
          <code>symbol</code> - unikalny identyfikator
        </li>
        <li>
          <code>bigint</code> - duże liczby całkowite
        </li>
      </ul>

      <h3>string - tekst</h3>
      <p>
        Typ <code>string</code> służy do reprezentowania tekstu. Można go
        zapisywać w pojedynczych (<code>' '</code>), podwójnych (
        <code>" "</code>) lub odwrotnych (<code>{"` ` "}</code>) cudzysłowach.
        Te ostatnie to <strong>template stringi</strong>, które umożliwiają
        interpolację zmiennych i wieloliniowy zapis.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Ala";
let powitanie = 'Cześć';
let tekst = \`\${powitanie}, \${imie}!\`;

console.log(tekst); // Cześć, Ala!`}
      />

      <h4>Łączenie tekstów</h4>
      <CodeBlock
        language="javascript"
        code={`let a = "Hello";
let b = "World";
console.log(a + " " + b); // "Hello World"`}
      />

      <h3>number - liczby</h3>
      <p>
        W JavaScript wszystkie liczby (całkowite i zmiennoprzecinkowe) są typu{" "}
        <code>number</code>. Działa w systemie 64-bitowym (IEEE 754), co
        oznacza, że może wystąpić utrata precyzji przy bardzo dużych liczbach.
      </p>

      <CodeBlock
        language="javascript"
        code={`let a = 10;
let b = 3.14;
let suma = a + b;

console.log(suma); // 13.14`}
      />

      <p>Istnieją też specjalne wartości liczbowe:</p>

      <ul>
        <li>
          <code>Infinity</code> - dodatnia nieskończoność
        </li>
        <li>
          <code>-Infinity</code> - ujemna nieskończoność
        </li>
        <li>
          <code>NaN</code> - wartość „Not a Number”
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`console.log(10 / 0);      // Infinity
console.log(-10 / 0);     // -Infinity
console.log("tekst" * 3); // NaN`}
      />

      <p>
        <code>NaN</code> jest typu <code>number</code>! Aby sprawdzić, czy
        wartość jest poprawną liczbą, użyj <code>Number.isNaN()</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("tekst")); // false`}
      />

      <h3>boolean - wartości logiczne</h3>
      <p>
        Typ <code>boolean</code> przyjmuje jedną z dwóch wartości:{" "}
        <code>true</code> lub <code>false</code>. Stosowany jest w warunkach i
        logice programu.
      </p>

      <CodeBlock
        language="javascript"
        code={`let aktywny = true;
let zalogowany = false;

if (aktywny) {
  console.log("Użytkownik aktywny");
} else {
  console.log("Nieaktywny");
}`}
      />

      <h4>Falsy i Truthy</h4>
      <p>
        W JavaScript każda wartość może zostać zinterpretowana jako logiczna.
        Wartości „fałszywe” (falsy) to:
      </p>

      <ul>
        <li>
          <code>false</code>
        </li>
        <li>
          <code>0</code> lub <code>-0</code>
        </li>
        <li>
          <code>""</code> (pusty string)
        </li>
        <li>
          <code>null</code>
        </li>
        <li>
          <code>undefined</code>
        </li>
        <li>
          <code>NaN</code>
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`if ("") console.log("Prawda"); else console.log("Fałsz"); // Fałsz
if ("tekst") console.log("Prawda"); // Prawda`}
      />

      <h3>null - brak wartości</h3>
      <p>
        <code>null</code> reprezentuje świadomy brak wartości – przypisujemy go
        zmiennej, aby oznaczyć „pusty stan”.
      </p>

      <CodeBlock
        language="javascript"
        code={`let dane = null;

console.log(dane);      // null
console.log(typeof dane); // "object" (błąd w specyfikacji JS od 1995 roku)`}
      />

      <h3>undefined - niezainicjowana zmienna</h3>
      <p>
        <code>undefined</code> oznacza, że zmienna została zadeklarowana, ale
        nie otrzymała żadnej wartości.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba;
console.log(liczba); // undefined`}
      />

      <p>
        Różnica: <code>null</code> to brak wartości celowy,{" "}
        <code>undefined</code> to brak przypisania.
      </p>

      <h3>symbol - unikalny identyfikator</h3>
      <p>
        <code>symbol</code> tworzy unikalne wartości, które nigdy się nie
        powtarzają. Używany np. jako klucz w obiekcie, który nie może być
        przypadkowo nadpisany.
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

      <h3>bigint - bardzo duże liczby</h3>
      <p>
        Typ <code>bigint</code> pozwala na reprezentowanie liczb większych niż{" "}
        <code>Number.MAX_SAFE_INTEGER</code> (czyli 2⁵³ - 1). Tworzy się go
        poprzez dodanie litery <code>n</code> na końcu liczby.
      </p>

      <CodeBlock
        language="javascript"
        code={`const duzaLiczba = 900719925474099112345n;
console.log(duzaLiczba + 5n);`}
      />

      <h3>Porównania typów</h3>
      <p>
        W JavaScript istnieją dwa typy porównań:
        <code>==</code> (porównanie z konwersją) i <code>===</code> (porównanie
        ścisłe).
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(5 == "5");  // true  - konwersja typu
console.log(5 === "5"); // false - różne typy`}
      />

      <p>
        Zawsze używaj <code>===</code>, aby uniknąć nieprzewidywalnych wyników
        automatycznej konwersji.
      </p>

      <h3>Konwersje typów</h3>
      <p>JavaScript często automatycznie konwertuje typy danych:</p>

      <CodeBlock
        language="javascript"
        code={`console.log("5" + 1); // "51" (łączenie tekstu)
console.log("5" - 1); // 4 (konwersja stringa na number)`}
      />

      <p>
        Można też dokonać konwersji jawnej, np. za pomocą <code>String()</code>,{" "}
        <code>Number()</code> lub <code>Boolean()</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(Number("10")); // 10
console.log(String(123)); // "123"
console.log(Boolean(0)); // false`}
      />

      <h3>Niezmienność typów prymitywnych</h3>
      <p>
        Typy prymitywne są niezmienne. Operacje na nich tworzą nowe wartości, a
        nie modyfikują istniejących.
      </p>

      <CodeBlock
        language="javascript"
        code={`let tekst = "Hello";
tekst.toUpperCase();
console.log(tekst); // "Hello" - oryginał nie został zmieniony`}
      />

      <h3>Quiz - sprawdź się</h3>
      <CodeBlock
        language="javascript"
        code={`console.log(typeof null);
console.log(typeof NaN);
console.log(Boolean("false"));`}
      />

      <p>
        Odpowiedzi:
        <br />– <code>"object"</code> (bug w JS),
        <br />– <code>"number"</code>,
        <br />– <code>true</code> (bo każdy niepusty string to „truthy”).
      </p>

      <h3>Dobre praktyki</h3>
      <ul>
        <li>Zawsze sprawdzaj typ danych przed wykonaniem operacji.</li>
        <li>
          Używaj <code>===</code> zamiast <code>==</code>.
        </li>
        <li>
          Nie zakładaj, że <code>null</code> i <code>undefined</code> są tym
          samym.
        </li>
        <li>Unikaj niejawnych konwersji typów.</li>
        <li>
          Używaj <code>Number.isNaN()</code> zamiast <code>isNaN()</code>.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Typy prymitywne są podstawą działania JavaScriptu. Zrozumienie ich
        natury – zwłaszcza niezmienności i automatycznych konwersji – to klucz
        do pisania niezawodnego kodu.
      </p>

      <p>
        W kolejnych rozdziałach przyjrzymy się typom złożonym:{" "}
        <strong>obiektom</strong> i <strong>tablicom</strong>, które pozwalają
        przechowywać i organizować dane w bardziej zaawansowany sposób.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
