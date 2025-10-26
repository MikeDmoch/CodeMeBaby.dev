import CodeBlock from "../../components/CodeBlock";

export const title = "Wprowadzenie do JavaScript";

export default function JS_Wprowadzenie() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Historia</h2>
      <p>
        JavaScript został stworzony w 1995 roku przez Brendana Eicha w firmie
        Netscape. Początkowo jego celem było umożliwienie prostych interakcji
        użytkownika z przeglądarką. Dziś jest jednym z najpopularniejszych
        języków na świecie – wykorzystywany zarówno w przeglądarkach, jak i na
        serwerach (Node.js), urządzeniach mobilnych i desktopowych.
      </p>

      <h3>Dlaczego warto poznać JavaScript?</h3>
      <p>
        JavaScript jest językiem uniwersalnym – pozwala tworzyć zarówno
        front-end, jak i back-end. Dzięki niemu strony internetowe mogą reagować
        dynamicznie na działania użytkownika, komunikować się z serwerami i
        zmieniać zawartość bez przeładowania strony.
      </p>

      <ul>
        <li>Język interpretowany – działa bez potrzeby kompilacji.</li>
        <li>
          Dynamicznie typowany – typ zmiennej ustalany jest w trakcie działania
          programu.
        </li>
        <li>Obiektowy i funkcyjny – wspiera oba paradygmaty.</li>
        <li>Wykonywany w środowisku przeglądarki i Node.js.</li>
      </ul>

      <h3>Pierwszy kod JavaScript</h3>
      <p>
        Najprostszym sposobem na rozpoczęcie pracy z JavaScriptem jest
        umieszczenie kodu w tagu <code>{`<script>`}</code> wewnątrz dokumentu
        HTML.
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
        Po otwarciu strony w przeglądarce i uruchomieniu konsoli (np.{" "}
        <em>Ctrl + Shift + J</em> w Chrome), zobaczysz komunikat{" "}
        <code>Witaj, świecie!</code>.
      </p>

      <h3>Zmienne i stałe</h3>
      <p>
        W JavaScript możemy przechowywać dane w zmiennych i stałych. Do ich
        deklaracji używamy słów kluczowych <code>let</code>, <code>const</code>{" "}
        lub <code>var</code>.
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
          <code>let</code> – zmienna o zasięgu blokowym, może być zmieniana,
        </li>
        <li>
          <code>const</code> – stała, której wartość nie może być ponownie
          przypisana,
        </li>
        <li>
          <code>var</code> – starszy sposób deklaracji (unika się go w
          nowoczesnym JS).
        </li>
      </ul>

      <h3>Typy danych</h3>
      <p>JavaScript posiada kilka podstawowych typów danych:</p>
      <ul>
        <li>
          <code>string</code> – tekst,
        </li>
        <li>
          <code>number</code> – liczby całkowite i zmiennoprzecinkowe,
        </li>
        <li>
          <code>boolean</code> – wartości logiczne (<code>true</code> /{" "}
          <code>false</code>),
        </li>
        <li>
          <code>null</code> – celowy brak wartości,
        </li>
        <li>
          <code>undefined</code> – niezainicjowana zmienna,
        </li>
        <li>
          <code>object</code> – złożone struktury danych,
        </li>
        <li>
          <code>symbol</code> – unikalny identyfikator.
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

      <h3>Funkcje</h3>
      <p>
        Funkcje to podstawowy sposób organizacji kodu w JavaScript. Pozwalają
        grupować instrukcje w logiczne bloki, które można wielokrotnie
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
        Od wersji ES6 dostępny jest też nowoczesny zapis funkcji – tzw.
        wyrażenia strzałkowe.
      </p>

      <CodeBlock
        language="javascript"
        code={`const przywitaj = (imie) => {
  console.log(\`Cześć, \${imie}!\`);
};

przywitaj("Tomek");`}
      />

      <h3>Instrukcje warunkowe</h3>
      <p>
        Aby podejmować decyzje w programie, używamy instrukcji <code>if</code>{" "}
        lub operatora trójargumentowego.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba = 10;

if (liczba > 5) {
  console.log("Większa niż 5");
} else {
  console.log("Mniejsza lub równa 5");
}

// Skrócona wersja:
console.log(liczba > 5 ? "Większa" : "Mniejsza lub równa");`}
      />

      <h3>Pętle</h3>
      <p>
        Pętle pozwalają wykonywać kod wielokrotnie. W JavaScript dostępne są
        m.in.:
      </p>
      <ul>
        <li>
          <code>for</code>
        </li>
        <li>
          <code>while</code>
        </li>
        <li>
          <code>for...of</code>
        </li>
        <li>
          <code>for...in</code>
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`for (let i = 0; i < 3; i++) {
  console.log("Iteracja:", i);
}`}
      />

      <h3>Obiekty i tablice</h3>
      <p>Obiekty i tablice to podstawowe struktury danych w JavaScript.</p>

      <CodeBlock
        language="javascript"
        code={`const osoba = {
  imie: "Ala",
  wiek: 25
};

const liczby = [1, 2, 3, 4];

console.log(osoba.imie);
console.log(liczby[0]);`}
      />

      <h3>Podsumowanie</h3>
      <p>
        JavaScript to wszechstronny język programowania, który napędza
        nowoczesny internet. W tej lekcji poznaliśmy podstawowe pojęcia —
        zmienne, typy danych, funkcje i pętle. W kolejnych krokach zagłębimy się
        w bardziej zaawansowane zagadnienia, takie jak operatory, obiekty,
        asynchroniczność i moduły.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
