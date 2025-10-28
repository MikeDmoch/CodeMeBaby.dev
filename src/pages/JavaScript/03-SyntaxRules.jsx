import CodeBlock from "../../components/CodeBlock";

export const title = "Składnia i zasady pisania kodu";

export default function SyntaxRules() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kluczowe elementy i dobre praktyki</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Składnia języka JavaScript określa reguły, według których należy pisać
        kod, aby interpreter (np. przeglądarka lub Node.js) mógł go zrozumieć i
        wykonać. Znajomość zasad pisania kodu, jego organizacji i konwencji to
        podstawa czytelnych, stabilnych i łatwych do utrzymania aplikacji.
      </p>

      <h3>Podstawowa struktura programu</h3>
      <p>
        Program w JavaScript to zestaw instrukcji, które wykonują określone
        działania - od prostych obliczeń po złożone operacje na danych. Każdą
        instrukcję można zakończyć średnikiem (<code>;</code>), choć JS często
        sam dodaje go automatycznie (tzw. ASI - Automatic Semicolon Insertion).
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Ala";
console.log("Cześć, " + imie + "!");`}
      />

      <p>
        Dla zachowania spójności i uniknięcia błędów zaleca się jednak
        konsekwentne stosowanie średników.
      </p>

      <h3>Instrukcje i bloki kodu</h3>
      <p>
        Wiele instrukcji można pogrupować w tzw. blok kodu, otoczony nawiasami
        klamrowymi <code>{`{ }`}</code>. Bloki występują w pętlach, funkcjach,
        instrukcjach warunkowych i definicjach klas.
      </p>

      <CodeBlock
        language="javascript"
        code={`if (true) {
  console.log("To jest blok kodu");
  let liczba = 5;
  console.log("Liczba:", liczba);
}`}
      />

      <h3>Komentarze w kodzie</h3>
      <p>
        Komentarze nie są wykonywane przez interpreter, ale są niezwykle ważne
        dla osób czytających kod. Pomagają zrozumieć intencję programisty.
      </p>

      <CodeBlock
        language="javascript"
        code={`// komentarz jednoliniowy

/*
  komentarz
  wieloliniowy
*/`}
      />

      <ul>
        <li>
          Komentarze stosuj z umiarem - nie opisuj oczywistych rzeczy, tylko
          wyjaśniaj <strong>dlaczego</strong> coś robisz.
        </li>
        <li>Dłuższe komentarze dokumentacyjne warto pisać w formacie JSDoc.</li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`/**
 * Zwraca sumę dwóch liczb
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function suma(a, b) {
  return a + b;
}`}
      />

      <h3>Zmienne i stałe</h3>
      <p>
        JavaScript oferuje trzy sposoby deklarowania zmiennych: <code>var</code>
        , <code>let</code> i <code>const</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba = 10;      // zmienna
const stala = 3.14;   // stała
var tekst = "Hello";  // przestarzały zapis`}
      />

      <ul>
        <li>
          <code>let</code> - do zmiennych, których wartość może się zmienić.
        </li>
        <li>
          <code>const</code> - do stałych, których wartość nie powinna się
          zmieniać.
        </li>
        <li>
          <code>var</code> - ma zasięg funkcyjny, często powoduje błędy –
          unikaj.
        </li>
      </ul>

      <h3>Konwencje nazewnictwa</h3>
      <p>
        Nazwy zmiennych i funkcji mają ogromny wpływ na czytelność kodu. JS nie
        wymusza stylu, ale istnieją powszechnie przyjęte konwencje:
      </p>

      <ul>
        <li>
          <strong>camelCase</strong> - dla zmiennych i funkcji (
          <code>userName</code>, <code>getUserData()</code>)
        </li>
        <li>
          <strong>PascalCase</strong> - dla klas i konstruktorów (
          <code>UserProfile</code>)
        </li>
        <li>
          <strong>SCREAMING_SNAKE_CASE</strong> - dla stałych globalnych (
          <code>API_URL</code>)
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`let userName = "Kasia";
function getUserAge() { return 25; }
class UserProfile {}
const MAX_USERS = 100;`}
      />

      <h3>Deklaracje a wyrażenia</h3>
      <p>
        JavaScript rozróżnia między <strong>deklaracją</strong> (np. funkcji lub
        klasy), a <strong>wyrażeniem</strong> (np. przypisaniem funkcji do
        zmiennej).
      </p>

      <CodeBlock
        language="javascript"
        code={`// deklaracja
function witaj() {
  console.log("Hej!");
}

// wyrażenie funkcyjne
const pozegnaj = function() {
  console.log("Pa!");
};`}
      />

      <p>
        Deklaracje są przenoszone (hoistowane) na górę pliku, natomiast
        wyrażenia muszą być zdefiniowane przed użyciem.
      </p>

      <h3>Wcięcia i formatowanie</h3>
      <p>
        Wcięcia (ang. indentation) nadają kodowi strukturę. Zaleca się używanie{" "}
        2 lub 4 spacji – nigdy tabulatorów i spacji jednocześnie. W projektach
        zespołowych warto używać narzędzi takich jak <code>Prettier</code> lub{" "}
        <code>ESLint</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`function pokazDane(uzytkownik) {
  if (uzytkownik.aktywny) {
    console.log("Użytkownik aktywny:", uzytkownik.imie);
  } else {
    console.log("Użytkownik nieaktywny");
  }
}`}
      />

      <h3>Cudzysłowy i template stringi</h3>
      <p>
        W JS można używać pojedynczych (<code>' '</code>), podwójnych (
        <code>" "</code>) lub tzw. <strong>template stringów</strong> (
        <code>{"` ` "}</code>), które pozwalają łatwo wstawiać zmienne do
        tekstu.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Tomek";
console.log("Cześć, " + imie + "!");
console.log(\`Cześć, \${imie}!\`); // bardziej eleganckie rozwiązanie`}
      />

      <h3>Średniki - używać czy nie?</h3>
      <p>
        Choć interpreter JS często automatycznie wstawia średniki, ich brak może
        powodować błędy logiczne. Najlepiej <strong>zawsze je stosować</strong>{" "}
        dla przejrzystości.
      </p>

      <CodeBlock
        language="javascript"
        code={`let x = 5
let y = 10
console.log(x + y) // Działa, ale niebezpieczne!

// bezpieczniej:
let a = 5;
let b = 10;
console.log(a + b);`}
      />

      <h3>Tryb ścisły ('use strict')</h3>
      <p>
        Tryb ścisły (<code>"use strict"</code>) wymusza bardziej rygorystyczne
        zasady, np. zakazuje tworzenia zmiennych bez <code>let</code> lub{" "}
        <code>const</code>. Pomaga uniknąć ukrytych błędów.
      </p>

      <CodeBlock
        language="javascript"
        code={`"use strict";
x = 10; // Błąd - zmienna niezadeklarowana`}
      />

      <h3>Najczęstsze błędy składniowe</h3>
      <ul>
        <li>Pominięcie nawiasu lub klamry</li>
        <li>Brak cudzysłowów przy stringach</li>
        <li>Brak średnika przy sąsiadujących liniach kodu</li>
        <li>Nadpisanie zmiennej zadeklarowanej jako const</li>
        <li>
          Błędne użycie <code>=</code> zamiast <code>==</code> lub{" "}
          <code>===</code>
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`if (a = 5) {   // Błąd - przypisanie zamiast porównania
  console.log("Zawsze true!");
}`}
      />

      <h3>Dobre praktyki w dużych projektach</h3>
      <ul>
        <li>Stosuj jednolity styl kodu w całym projekcie.</li>
        <li>Grupuj logicznie funkcje i deklaracje.</li>
        <li>Używaj komentarzy tylko tam, gdzie naprawdę pomagają.</li>
        <li>Każdy plik powinien odpowiadać za jeden, spójny moduł.</li>
        <li>
          Nazwy funkcji i zmiennych niech opisują działanie, a nie typ danych.
        </li>
        <li>
          Unikaj nadmiernego skracania nazw i "magicznych liczb" w kodzie.
        </li>
      </ul>

      <h3>Narzędzia wspierające jakość kodu</h3>
      <ul>
        <li>
          <strong>ESLint</strong> - analizuje kod i wskazuje błędy składniowe,
        </li>
        <li>
          <strong>Prettier</strong> - automatycznie formatuje kod,
        </li>
        <li>
          <strong>EditorConfig</strong> - ujednolica styl w zespole,
        </li>
        <li>
          <strong>TypeScript</strong> - rozszerzenie JS dodające statyczne
          typowanie.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Składnia i styl kodu mają ogromne znaczenie dla jakości projektu.
        Stosowanie jasnych zasad, używanie <code>let</code> i <code>const</code>
        , czytelne nazwy zmiennych i spójny styl formatowania sprawiają, że kod
        jest nie tylko poprawny, ale też <strong>łatwy w utrzymaniu</strong>.
      </p>

      <p>
        Programowanie to nie tylko pisanie kodu, który działa - to również
        sztuka pisania kodu, który inni będą mogli bez trudu zrozumieć i
        rozwijać.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
