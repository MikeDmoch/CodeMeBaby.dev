import CodeBlock from "../../components/CodeBlock";

export const title = "Zmienne: var, let, const";

export default function Variables() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Deklaracje i różnice w działaniu</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Zmienne to podstawowy element każdego języka programowania - służą do
        przechowywania danych, które mogą być wykorzystywane i modyfikowane w
        trakcie działania programu. W tym rozdziale przyjrzymy się trzem
        sposobom deklarowania zmiennych:
        <code>var</code>, <code>let</code> i <code>const</code>.
      </p>

      <h3>Podstawowa deklaracja zmiennej</h3>
      <p>
        Zmienną można utworzyć przypisując jej wartość. W nowoczesnym kodzie
        najczęściej używa się
        <code>let</code> lub <code>const</code>, ponieważ są one bezpieczniejsze
        i bardziej przewidywalne niż starsze <code>var</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "Ala";
const wiek = 25;
var miasto = "Warszawa";

console.log(imie, wiek, miasto);`}
      />

      <h3>var - starszy sposób deklaracji</h3>
      <p>
        <code>var</code> to pierwotny sposób tworzenia zmiennych. Działa w całej
        funkcji, w której została zadeklarowana (lub globalnie, jeśli poza
        funkcją). Nie jest ograniczona zasięgiem blokowym, co może prowadzić do
        nieoczekiwanych zachowań.
      </p>

      <CodeBlock
        language="javascript"
        code={`var liczba = 10;

if (true) {
    var liczba = 20;
}

console.log(liczba); // 20 - ta sama zmienna!`}
      />

      <p>
        Powyższy przykład pokazuje, że zmienna <code>var</code> nie respektuje
        zasięgu bloku (<code>{`{ }`}</code>), co bywa źródłem błędów. Dodatkowo{" "}
        <code>var</code> jest poddawany tzw. <strong>hoistingowi</strong> - jest
        przenoszony na początek zakresu, zanim kod zostanie wykonany.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(x); // undefined
var x = 5;`}
      />

      <p>
        Zmienna istnieje, ale jej wartość jest początkowo niezdefiniowana.
        Hoisting działa tylko dla <code>var</code>, nie dla <code>let</code> i{" "}
        <code>const</code>.
      </p>

      <h3>let - nowoczesna zmienna</h3>
      <p>
        <code>let</code> wprowadzono w standardzie ES6 jako bezpieczniejszy
        sposób deklaracji zmiennych. Ma zasięg blokowy i nie pozwala na ponowne
        deklarowanie w tym samym zakresie.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba = 10;

if (true) {
    let liczba = 20;
    console.log(liczba); // 20 - osobna zmienna w bloku
}

console.log(liczba); // 10 - nie została nadpisana`}
      />

      <p>
        Dzięki temu <code>let</code> jest bezpieczniejszy i bardziej
        przewidywalny niż <code>var</code>. Jeśli spróbujesz ponownie
        zadeklarować zmienną w tym samym zakresie, otrzymasz błąd.
      </p>

      <CodeBlock
        language="javascript"
        code={`let a = 5;
let a = 10; // Błąd - zmienna już istnieje`}
      />

      <h3>const - stałe wartości</h3>
      <p>
        <code>const</code> działa podobnie do <code>let</code>, ale służy do
        deklarowania stałych, których nie można ponownie przypisać. Używa się
        go, gdy wartość nie powinna się zmieniać.
      </p>

      <CodeBlock
        language="javascript"
        code={`const PI = 3.14;
PI = 3.14159; // Błąd - nie można zmienić wartości stałej`}
      />

      <p>
        Ważne: <code>const</code> nie oznacza, że dane są całkowicie niezmienne
        - oznacza jedynie, że <strong>referencja</strong> nie może zostać
        zmieniona. W przypadku obiektów lub tablic, zawartość nadal można
        modyfikować.
      </p>

      <CodeBlock
        language="javascript"
        code={`const user = { name: "Ola", age: 20 };
user.age = 21; // OK - zmieniono właściwość

// user = { name: "Ewa" }; // Błąd - nie można przypisać nowego obiektu`}
      />

      <h3>Różnice w zasięgu</h3>
      <p>
        Największe różnice między tymi trzema słowami kluczowymi dotyczą{" "}
        <strong>zasięgu (scope)</strong>
        oraz możliwości ponownej deklaracji:
      </p>

      <table>
        <thead>
          <tr>
            <th>Słowo kluczowe</th>
            <th>Zasięg</th>
            <th>Hoisting</th>
            <th>Ponowna deklaracja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>var</code>
            </td>
            <td>funkcyjny lub globalny</td>
            <td>tak (wartość = undefined)</td>
            <td>tak</td>
          </tr>
          <tr>
            <td>
              <code>let</code>
            </td>
            <td>blokowy</td>
            <td>tak (bez inicjalizacji)</td>
            <td>nie</td>
          </tr>
          <tr>
            <td>
              <code>const</code>
            </td>
            <td>blokowy</td>
            <td>tak (bez inicjalizacji)</td>
            <td>nie</td>
          </tr>
        </tbody>
      </table>

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj <code>const</code> domyślnie - jeśli zmienna się nie zmienia,
          powinna być stała.
        </li>
        <li>
          Używaj <code>let</code> wtedy, gdy wartość będzie modyfikowana.
        </li>
        <li>
          Unikaj <code>var</code> - zachowuje się nieintuicyjnie i może
          prowadzić do błędów.
        </li>
        <li>
          Nadaj zmiennym czytelne i opisowe nazwy, np. <code>userName</code>,{" "}
          <code>totalPrice</code>.
        </li>
        <li>Nie twórz zmiennych globalnych bez potrzeby.</li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Sposób deklaracji zmiennych ma ogromny wpływ na stabilność i
        bezpieczeństwo kodu.
        <code>var</code> to starsze rozwiązanie o zasięgu funkcyjnym,
        <code>let</code> to nowoczesna zmienna o zasięgu blokowym, a{" "}
        <code>const</code> to stała, której wartość nie może być ponownie
        przypisana.
      </p>

      <p>
        Dobra praktyka to stosowanie <code>const</code> wszędzie tam, gdzie to
        możliwe - a <code>let</code> tylko wtedy, gdy naprawdę trzeba zmieniać
        wartość. Dzięki temu kod staje się bardziej przewidywalny i odporny na
        błędy.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
