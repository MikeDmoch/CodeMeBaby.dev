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
        Składnia języka określa sposób, w jaki należy pisać kod, aby był
        zrozumiały dla interpretera. Zrozumienie podstawowych zasad i konwencji
        to pierwszy krok do tworzenia czytelnych, poprawnych i wydajnych
        aplikacji.
      </p>

      <h3>Podstawowa struktura programu</h3>
      <p>
        Program składa się z instrukcji - każda z nich wykonuje konkretne
        działanie. Instrukcje kończy się średnikiem (<code>;</code>), choć w
        wielu przypadkach interpreter doda go automatycznie. Dla przejrzystości
        i spójności kodu zaleca się jednak ich stosowanie.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Ala";
console.log("Cześć, " + imie + "!");`}
      />

      <h3>Instrukcje i bloki kodu</h3>
      <p>
        Instrukcje można grupować w bloki za pomocą nawiasów klamrowych{" "}
        <code>{`{ }`}</code>. Bloki te mogą występować np. w funkcjach,
        instrukcjach warunkowych lub pętlach.
      </p>

      <CodeBlock
        language="javascript"
        code={`if (true) {
  console.log("To jest blok kodu");
}`}
      />

      <h3>Komentarze w kodzie</h3>
      <p>
        Komentarze pozwalają dokumentować kod, tłumaczyć jego działanie lub
        tymczasowo wyłączać fragmenty programu. Istnieją dwa rodzaje komentarzy:
      </p>

      <CodeBlock
        language="javascript"
        code={`// komentarz jednoliniowy

/*
  komentarz
  wieloliniowy
*/`}
      />

      <h3>Zmienne i stałe</h3>
      <p>
        Do przechowywania danych używa się słów kluczowych <code>let</code>,{" "}
        <code>const</code> lub <code>var</code>. Obecnie standardem jest
        stosowanie <code>let</code> i <code>const</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba = 10;      // zmienna
const stala = 3.14;   // stała

liczba = 20;          // OK
// stala = 5;        // Błąd - const nie można nadpisać`}
      />

      <h3>Konwencje nazewnictwa</h3>
      <p>Obowiązuje kilka konwencji, które poprawiają czytelność kodu:</p>
      <ul>
        <li>
          <strong>camelCase</strong> - używany dla zmiennych i funkcji, np.{" "}
          <code>userName</code>, <code>calculateSum()</code>
        </li>
        <li>
          <strong>PascalCase</strong> - dla nazw klas, np.{" "}
          <code>UserProfile</code>
        </li>
        <li>
          <strong>SCREAMING_SNAKE_CASE</strong> - dla stałych globalnych, np.{" "}
          <code>MAX_VALUE</code>
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`let userName = "Kasia";
function getUserAge() { return 25; }
class UserProfile {} 
const MAX_USERS = 100;`}
      />

      <h3>Wcięcia i formatowanie</h3>
      <p>
        Dobre formatowanie kodu sprawia, że jest on znacznie łatwiejszy do
        czytania. Najczęściej używa się wcięć o szerokości 2 lub 4 spacji. W
        projektach warto stosować narzędzia takie jak <code>Prettier</code> lub{" "}
        <code>ESLint</code>, które automatycznie utrzymują spójny styl kodu.
      </p>

      <CodeBlock
        language="javascript"
        code={`function pokazDane(uzytkownik) {
    if (uzytkownik.aktywny) {
        console.log("Użytkownik aktywny:", uzytkownik.imie);
    }
}`}
      />

      <h3>Cudzysłowy i template stringi</h3>
      <p>
        Do zapisywania tekstu można używać pojedynczych (<code>' '</code>),
        podwójnych (<code>" "</code>) lub tzw. <em>template stringów</em> (
        <code>{"` ` "}</code>), które pozwalają wstawiać zmienne bez łączenia
        tekstów znakiem <code>+</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Tomek";
console.log("Cześć, " + imie + "!");
console.log(\`Cześć, \${imie}!\`); // lepszy zapis`}
      />

      <h3>Używanie średników</h3>
      <p>
        Średniki są technicznie opcjonalne, ale ich brak może powodować błędy.
        Najlepszą praktyką jest konsekwentne ich stosowanie, aby uniknąć
        niejednoznaczności.
      </p>

      <CodeBlock
        language="javascript"
        code={`let x = 5;
let y = 10;
console.log(x + y); // Dobrze

// Zły przykład:
let a = b + c
(console.log(a)) // Może prowadzić do błędu`}
      />

      <h3>Stosowanie 'strict mode'</h3>
      <p>
        <code>"use strict";</code> to specjalna dyrektywa, która włącza tryb
        ścisły. Pomaga uniknąć niektórych błędów (np. tworzenia zmiennych bez{" "}
        <code>let</code> lub <code>const</code>).
      </p>

      <CodeBlock
        language="javascript"
        code={`"use strict";
x = 10; // Błąd! Zmienna nie została zadeklarowana`}
      />

      <h3>Przejrzystość i czytelność kodu</h3>
      <p>
        Dobrze napisany kod powinien być prosty, spójny i łatwy do zrozumienia.
        Warto unikać skrótów, zagnieżdżeń bez potrzeby i stosować znaczące nazwy
        zmiennych.
      </p>

      <CodeBlock
        language="javascript"
        code={`// Zły przykład
let a = 10; let b = 20; let c = a + b;

// Dobry przykład
let liczbaA = 10;
let liczbaB = 20;
let suma = liczbaA + liczbaB;`}
      />

      <h3>Narzędzia wspierające dobre praktyki</h3>
      <ul>
        <li>
          <strong>ESLint</strong> - wykrywa błędy składniowe i niezgodności ze
          stylem,
        </li>
        <li>
          <strong>Prettier</strong> - automatycznie formatuje kod,
        </li>
        <li>
          <strong>EditorConfig</strong> - utrzymuje jednolity styl w zespole.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Zrozumienie składni i stosowanie dobrych praktyk w pisaniu kodu to
        fundament pracy każdego programisty. Konsekwentne formatowanie, sensowne
        nazewnictwo, czytelne komentarze i użycie nowoczesnych konstrukcji (jak{" "}
        <code>let</code> czy <code>const</code>) znacznie podnoszą jakość kodu.
      </p>

      <p>
        Dobrze napisany kod to nie tylko kod, który działa - ale przede
        wszystkim taki, który można łatwo{" "}
        <strong>zrozumieć, utrzymać i rozwijać</strong>.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
