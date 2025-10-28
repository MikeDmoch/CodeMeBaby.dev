import CodeBlock from "../../components/CodeBlock";

export const title = "Zmienne: var, let, const";

export default function Variables() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Deklaracje, zasięg i dobre praktyki</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Zmienne to jeden z najważniejszych elementów programowania - służą do
        przechowywania danych, które mogą zmieniać się w trakcie działania
        programu. W JavaScript mamy trzy słowa kluczowe do deklaracji zmiennych:{" "}
        <code>var</code>, <code>let</code> i <code>const</code>. Różnią się one
        zakresem widoczności, sposobem działania i bezpieczeństwem.
      </p>

      <h3>Podstawowa deklaracja zmiennej</h3>
      <p>
        Wartość można przypisać do zmiennej w momencie jej utworzenia. W
        nowoczesnym kodzie stosuje się głównie <code>let</code> i{" "}
        <code>const</code>, ponieważ są one bezpieczniejsze i bardziej
        przewidywalne niż <code>var</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Ala";
const wiek = 25;
var miasto = "Warszawa";

console.log(imie, wiek, miasto);`}
      />

      <h2>var - starszy sposób deklaracji</h2>
      <p>
        <code>var</code> pochodzi z początków JavaScriptu (1995) i ma zasięg{" "}
        <strong>funkcyjny</strong> lub <strong>globalny</strong>. Nie jest
        ograniczona przez bloki kodu (np. <code>if</code>, <code>for</code>), co
        może prowadzić do nieoczekiwanych zachowań.
      </p>

      <CodeBlock
        language="javascript"
        code={`var liczba = 10;

if (true) {
  var liczba = 20;
}

console.log(liczba); // 20 - ta sama zmienna, mimo innego bloku`}
      />

      <p>
        Zmienna zadeklarowana przez <code>var</code> zostanie podniesiona (tzw.
        <strong>hoisting</strong>) na początek funkcji lub globalnego zakresu,
        co oznacza, że istnieje już przed momentem deklaracji - ale ma wartość{" "}
        <code>undefined</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(x); // undefined
var x = 5;`}
      />

      <p>
        W tym przykładzie nie otrzymamy błędu, ale wynik to{" "}
        <code>undefined</code>, ponieważ zmienna została „zadeklarowana” przed
        wykonaniem kodu, ale jeszcze nie „zainicjalizowana”.
      </p>

      <h3>let - nowoczesna zmienna</h3>
      <p>
        Wprowadzony w standardzie ES6 (2015) <code>let</code> ma{" "}
        <strong>zasięg blokowy</strong> i nie pozwala na ponowną deklarację w
        tym samym zakresie. Działa bardziej intuicyjnie niż <code>var</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba = 10;

if (true) {
  let liczba = 20; // nowa zmienna tylko w tym bloku
  console.log(liczba); // 20
}

console.log(liczba); // 10 - zewnętrzna zmienna nie została zmieniona`}
      />

      <p>
        <strong>let</strong> jest również objęty hoistingiem, ale w odróżnieniu
        od <code>var</code>, nie jest inicjalizowany. Występuje w tzw.{" "}
        <strong>Temporal Dead Zone (TDZ)</strong> - obszarze, w którym zmienna
        już istnieje, ale nie można jej użyć, dopóki nie zostanie zadeklarowana.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(a); // ReferenceError - zmienna w TDZ
let a = 5;`}
      />

      <h3>const - stałe wartości</h3>
      <p>
        <code>const</code> również ma zasięg blokowy, ale wartość przypisana do
        niej nie może zostać ponownie nadpisana. Używamy jej, gdy chcemy
        zabezpieczyć dane przed przypadkową zmianą.
      </p>

      <CodeBlock
        language="javascript"
        code={`const PI = 3.14;
PI = 3.14159; // Błąd - nie można zmienić wartości stałej`}
      />

      <p>
        Uwaga - <code>const</code> blokuje zmianę referencji, ale nie wartości
        wewnątrz obiektów lub tablic.
      </p>

      <CodeBlock
        language="javascript"
        code={`const user = { name: "Ola", age: 20 };
user.age = 21; // OK
// user = { name: "Ewa" }; // Błąd - nie można przypisać nowego obiektu`}
      />

      <h3>Różnice w zasięgu i zachowaniu</h3>
      <p>
        Zasięg (ang. <em>scope</em>) określa, gdzie dana zmienna jest dostępna.
        <code>var</code> ma zasięg funkcyjny, a <code>let</code> i{" "}
        <code>const</code> - blokowy.
      </p>

      <CodeBlock
        language="javascript"
        code={`function test() {
  var x = 10;
  if (true) {
    let y = 20;
    const z = 30;
    console.log(x, y, z); // 10 20 30
  }
  console.log(x); // 10
  // console.log(y); // Błąd - y nie istnieje poza blokiem
}`}
      />

      <h3>Tabela porównawcza</h3>
      <table>
        <thead>
          <tr>
            <th>Słowo kluczowe</th>
            <th>Zasięg</th>
            <th>Hoisting</th>
            <th>TDZ</th>
            <th>Ponowna deklaracja</th>
            <th>Zmiana wartości</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>var</code>
            </td>
            <td>funkcyjny / globalny</td>
            <td>tak (wartość = undefined)</td>
            <td>nie</td>
            <td>tak</td>
            <td>tak</td>
          </tr>
          <tr>
            <td>
              <code>let</code>
            </td>
            <td>blokowy</td>
            <td>tak (bez inicjalizacji)</td>
            <td>tak</td>
            <td>nie</td>
            <td>tak</td>
          </tr>
          <tr>
            <td>
              <code>const</code>
            </td>
            <td>blokowy</td>
            <td>tak (bez inicjalizacji)</td>
            <td>tak</td>
            <td>nie</td>
            <td>nie (tylko wewnątrz obiektu/array)</td>
          </tr>
        </tbody>
      </table>

      <h3>Hoisting i kolejność wykonywania kodu</h3>
      <p>
        Interpreter JS najpierw analizuje kod, a dopiero potem go wykonuje.
        Zmienna zadeklarowana przez <code>var</code> zostanie zainicjalizowana z{" "}
        <code>undefined</code>, natomiast <code>let</code> i <code>const</code>{" "}
        pojawiają się dopiero w momencie faktycznej deklaracji.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;`}
      />

      <h3>Najczęstsze błędy i pułapki</h3>
      <ul>
        <li>Użycie zmiennej przed jej deklaracją (TDZ).</li>
        <li>
          Ponowna deklaracja tej samej zmiennej przy użyciu <code>let</code> lub{" "}
          <code>const</code>.
        </li>
        <li>
          Zakładanie, że <code>const</code> tworzy dane niezmienne (dotyczy
          tylko referencji).
        </li>
        <li>
          Tworzenie zmiennych globalnych przez pomyłkę (np. bez <code>let</code>
          ).
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`"use strict";
x = 100; // Błąd - niezadeklarowana zmienna`}
      />

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj <code>const</code> domyślnie, <code>let</code> tylko gdy
          wartość się zmienia.
        </li>
        <li>
          Unikaj <code>var</code> - jest przestarzały i mylący.
        </li>
        <li>
          Unikaj zmiennych globalnych - kapsułkuj dane w funkcjach lub modułach.
        </li>
        <li>
          Nazywaj zmienne jasno i opisowo - np. <code>userName</code>, nie{" "}
          <code>x</code>.
        </li>
        <li>
          Nie mieszaj typów danych w jednej zmiennej (np. liczby i tekstu).
        </li>
      </ul>

      <h3>Quiz - sprawdź się</h3>
      <p>Co wypisze ten kod?</p>

      <CodeBlock
        language="javascript"
        code={`var x = 1;
let y = 2;

function test() {
  var x = 10;
  let y = 20;
  console.log(x, y);
}

test();
console.log(x, y);`}
      />

      <p>
        Odpowiedź: w funkcji wypisze <code>10 20</code>, a poza nią{" "}
        <code>1 2</code> - różne zakresy!
      </p>

      <h3>Podsumowanie</h3>
      <p>
        <code>var</code>, <code>let</code> i <code>const</code> różnią się
        sposobem działania, zasięgiem i bezpieczeństwem. W nowoczesnym JS{" "}
        <strong>używaj zawsze const</strong>, a jeśli musisz zmienić wartość -
        wtedy <code>let</code>. Unikaj <code>var</code>, chyba że pracujesz nad
        starszym kodem.
      </p>

      <p>
        Świadome stosowanie odpowiednich deklaracji to krok w stronę czystego,
        bezpiecznego i łatwego w utrzymaniu kodu.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
