import CodeBlock from "../../components/CodeBlock";

export const title = "Wprowadzenie";

export default function JS_Wprowadzenie() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy przewodnik po języku JavaScript</h1>
      </div>

      <h2>Historia</h2>
      <p>
        JavaScript został stworzony w 1995 roku przez{" "}
        <strong>Brendana Eicha</strong> w firmie Netscape. Jego zadaniem było
        umożliwienie prostych interakcji z przeglądarką. Początkowo nazywał się
        <em> Mocha</em>, później <em>LiveScript</em>, aż w końcu przyjął nazwę
        JavaScript (dla marketingowego skojarzenia z popularną wtedy Javą).
      </p>

      <p>
        Dziś JS to jeden z najważniejszych języków świata - używany nie tylko w
        przeglądarkach, ale też na serwerach (Node.js), w aplikacjach mobilnych,
        desktopowych, a nawet w urządzeniach IoT.
      </p>

      <h3>Dlaczego warto poznać JavaScript?</h3>
      <ul>
        <li>Uniwersalny - działa po stronie klienta i serwera.</li>
        <li>Interpretowany - nie wymaga kompilacji.</li>
        <li>
          Dynamicznie typowany - typ zmiennej ustalany w czasie działania.
        </li>
        <li>Wspiera paradygmaty obiektowy i funkcyjny.</li>
        <li>
          Ogromna społeczność i liczba bibliotek (React, Vue, Angular,
          Express...)
        </li>
      </ul>

      <h3>Środowiska uruchomieniowe</h3>
      <p>JavaScript można uruchomić w różnych środowiskach:</p>
      <ul>
        <li>
          <strong>Przeglądarka</strong> - np. Chrome, Firefox, Edge (z
          wbudowanym silnikiem JS).
        </li>
        <li>
          <strong>Node.js</strong> - do uruchamiania kodu JS na serwerze.
        </li>
        <li>
          <strong>Deno</strong> i <strong>Bun</strong> - nowoczesne alternatywy
          Node.js.
        </li>
      </ul>

      <h3>Pierwszy kod JavaScript</h3>
      <p>
        Najprostszym sposobem na rozpoczęcie pracy jest umieszczenie skryptu w
        tagu <code>{`<script>`}</code> w dokumencie HTML.
      </p>

      <CodeBlock
        language="html"
        code={`<!DOCTYPE html>
<html>
  <head>
    <title>Witaj, świecie!</title>
  </head>
  <body>
    <script>
      console.log("Witaj, świecie!");
    </script>
  </body>
</html>`}
      />

      <p>
        Po otwarciu strony w przeglądarce i otwarciu konsoli (np.{" "}
        <em>Ctrl + Shift + J</em> w Chrome), zobaczysz komunikat{" "}
        <code>Witaj, świecie!</code>.
      </p>

      <h3>Komentarze</h3>
      <p>
        Komentarze pomagają dokumentować kod. W JS istnieją dwa sposoby ich
        zapisu:
      </p>

      <CodeBlock
        language="javascript"
        code={`// Komentarz jednoliniowy
/*
  Komentarz
  wieloliniowy
*/`}
      />

      <h3>Zmienne i stałe</h3>
      <p>
        W JS używamy <code>let</code> do zmiennych, <code>const</code> do
        stałych, a <code>var</code> tylko w starym kodzie.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Ala";
const wiek = 25;
var miasto = "Warszawa";

console.log(imie, wiek, miasto);`}
      />

      <ul>
        <li>
          <code>let</code> - zmienna o zasięgu blokowym, można ją zmieniać.
        </li>
        <li>
          <code>const</code> - wartość stała, nie można jej ponownie przypisać.
        </li>
        <li>
          <code>var</code> - starsza składnia o zasięgu funkcyjnym.
        </li>
      </ul>

      <h3>Typy danych</h3>
      <p>Podstawowe typy w JS:</p>
      <ul>
        <li>
          <code>string</code> - tekst, np. "Hello"
        </li>
        <li>
          <code>number</code> - liczby całkowite i zmiennoprzecinkowe
        </li>
        <li>
          <code>boolean</code> - wartości logiczne (<code>true</code> /{" "}
          <code>false</code>)
        </li>
        <li>
          <code>null</code> - celowy brak wartości
        </li>
        <li>
          <code>undefined</code> - zmienna bez przypisania
        </li>
        <li>
          <code>object</code> - złożone struktury danych
        </li>
        <li>
          <code>symbol</code> - unikalny identyfikator
        </li>
        <li>
          <code>bigint</code> - liczby większe niż 2⁵³ - 1
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`let liczba = 42;
let tekst = "Hello";
let aktywny = true;
let nic = null;
let niezdefiniowane;

console.log(typeof liczba); // "number"`}
      />

      <h3>Operatory</h3>
      <p>
        JS posiada bogaty zestaw operatorów arytmetycznych, logicznych i
        porównawczych:
      </p>
      <ul>
        <li>
          <code>+</code> dodawanie lub konkatenacja
        </li>
        <li>
          <code>-</code> odejmowanie
        </li>
        <li>
          <code>*</code> mnożenie
        </li>
        <li>
          <code>/</code> dzielenie
        </li>
        <li>
          <code>**</code> potęgowanie
        </li>
        <li>
          <code>%</code> reszta z dzielenia
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`console.log(2 + 3 * 4); // 14
console.log("Hello " + "World"); // "Hello World"`}
      />

      <h4>Porównania</h4>
      <CodeBlock
        language="javascript"
        code={`console.log(5 == "5");  // true - porównanie bez typu
console.log(5 === "5"); // false - porównanie z typem
console.log(5 !== 3);   // true`}
      />

      <p>
        Używaj zawsze operatorów <code>===</code> i <code>!==</code> - są
        bezpieczniejsze i unikają automatycznej konwersji typów.
      </p>

      <h3>Konwersja typów</h3>
      <CodeBlock
        language="javascript"
        code={`console.log(Number("10")); // 10
console.log(String(123)); // "123"
console.log(Boolean(0)); // false`}
      />

      <p>
        JS automatycznie konwertuje typy w niektórych sytuacjach (tzw.{" "}
        <strong>type coercion</strong>), co czasem prowadzi do dziwnych wyników:
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log("5" + 1); // "51"
console.log("5" - 1); // 4`}
      />

      <h3>Funkcje</h3>
      <p>
        Funkcje grupują kod w logiczne bloki, które można wielokrotnie
        wywoływać.
      </p>

      <CodeBlock
        language="javascript"
        code={`function przywitaj(imie) {
  console.log("Cześć, " + imie + "!");
}

przywitaj("Kasia");`}
      />

      <p>
        Od ES6 dostępna jest skrócona składnia funkcji - tzw.{" "}
        <strong>arrow functions</strong>.
      </p>

      <CodeBlock
        language="javascript"
        code={`const przywitaj = (imie) => {
  console.log(\`Cześć, \${imie}!\`);
};

przywitaj("Tomek");`}
      />

      <h3>Instrukcje warunkowe</h3>
      <CodeBlock
        language="javascript"
        code={`let liczba = 10;

if (liczba > 5) {
  console.log("Większa niż 5");
} else {
  console.log("Mniejsza lub równa 5");
}

// Operator warunkowy
console.log(liczba > 5 ? "Większa" : "Mniejsza lub równa");`}
      />

      <h3>Pętle</h3>
      <p>Pętle pozwalają wykonywać kod wielokrotnie:</p>
      <ul>
        <li>
          <code>for</code>
        </li>
        <li>
          <code>while</code>
        </li>
        <li>
          <code>do...while</code>
        </li>
        <li>
          <code>for...of</code> - po tablicach
        </li>
        <li>
          <code>for...in</code> - po obiektach
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`const liczby = [1, 2, 3];
for (let liczba of liczby) {
  console.log(liczba);
}`}
      />

      <h3>Console API</h3>
      <p>
        Narzędzie <code>console</code> to Twój przyjaciel w debugowaniu:
      </p>
      <CodeBlock
        language="javascript"
        code={`console.log("Zwykła wiadomość");
console.warn("Ostrzeżenie!");
console.error("Błąd!");`}
      />

      <h3>Prosty quiz - sprawdź się!</h3>
      <p>Co zostanie wypisane w konsoli?</p>
      <CodeBlock
        language="javascript"
        code={`let a = "5";
let b = 5;
console.log(a == b);
console.log(a === b);`}
      />
      <p>
        Odpowiedź: <code>true</code> i <code>false</code>. Pierwsze porównanie
        konwertuje typ, drugie porównuje ściśle.
      </p>

      <h3>Podsumowanie</h3>
      <p>
        JavaScript to język wszechstronny, dynamiczny i potężny. W tej lekcji
        poznałeś podstawy składni i zasad działania - od zmiennych po funkcje i
        pętle. W następnych rozdziałach zajmiemy się obiektami, tablicami,
        funkcjami wyższego rzędu i asynchronicznością.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
