import CodeBlock from "../../components/CodeBlock";

export const title = "Operatory";

export default function Operatory() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Podstawowe działania i zastosowanie</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Operatory to specjalne symbole lub słowa kluczowe, które pozwalają
        wykonywać operacje na wartościach i zmiennych. Mogą służyć do obliczeń
        matematycznych, porównań, przypisań czy działań logicznych. Znajomość
        operatorów to podstawa skutecznego programowania.
      </p>

      <h3>Operatory arytmetyczne</h3>
      <p>
        Służą do wykonywania podstawowych działań matematycznych na liczbach.
      </p>

      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Opis</th>
            <th>Przykład</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>+</code>
            </td>
            <td>dodawanie</td>
            <td>
              <code>5 + 2</code> → <code>7</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>-</code>
            </td>
            <td>odejmowanie</td>
            <td>
              <code>5 - 2</code> → <code>3</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>*</code>
            </td>
            <td>mnożenie</td>
            <td>
              <code>5 * 2</code> → <code>10</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>/</code>
            </td>
            <td>dzielenie</td>
            <td>
              <code>5 / 2</code> → <code>2.5</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>%</code>
            </td>
            <td>reszta z dzielenia (modulo)</td>
            <td>
              <code>5 % 2</code> → <code>1</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>**</code>
            </td>
            <td>potęgowanie</td>
            <td>
              <code>2 ** 3</code> → <code>8</code>
            </td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        language="javascript"
        code={`let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(a ** b); // 1000`}
      />

      <h3>Operatory przypisania</h3>
      <p>
        Używane do przypisywania wartości do zmiennych. Mogą łączyć przypisanie
        z inną operacją.
      </p>

      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Opis</th>
            <th>Przykład</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>=</code>
            </td>
            <td>przypisanie wartości</td>
            <td>
              <code>x = 5</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>+=</code>
            </td>
            <td>dodaj i przypisz</td>
            <td>
              <code>x += 3</code> → <code>x = x + 3</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>-=</code>
            </td>
            <td>odejmij i przypisz</td>
            <td>
              <code>x -= 2</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>*=</code>
            </td>
            <td>pomnóż i przypisz</td>
            <td>
              <code>x *= 4</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>/=</code>
            </td>
            <td>podziel i przypisz</td>
            <td>
              <code>x /= 2</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>%=</code>
            </td>
            <td>reszta z dzielenia i przypisz</td>
            <td>
              <code>x %= 2</code>
            </td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        language="javascript"
        code={`let x = 10;
x += 5; // x = 15
x *= 2; // x = 30
console.log(x);`}
      />

      <h3>Operatory porównania</h3>
      <p>
        Porównują dwie wartości i zwracają wynik logiczny <code>true</code> lub{" "}
        <code>false</code>.
      </p>

      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Opis</th>
            <th>Przykład</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>==</code>
            </td>
            <td>porównanie luźne (z konwersją typów)</td>
            <td>
              <code>5 == "5"</code> → <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>===</code>
            </td>
            <td>porównanie ścisłe (bez konwersji)</td>
            <td>
              <code>5 === "5"</code> → <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>!=</code>
            </td>
            <td>różne wartości (luźne)</td>
            <td>
              <code>5 != "5"</code> → <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>!==</code>
            </td>
            <td>różne wartości (ścisłe)</td>
            <td>
              <code>5 !== "5"</code> → <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>&gt;</code>
            </td>
            <td>większe niż</td>
            <td>
              <code>10 &gt; 5</code> → <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;</code>
            </td>
            <td>mniejsze niż</td>
            <td>
              <code>3 &lt; 7</code> → <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>&gt;=</code>
            </td>
            <td>większe lub równe</td>
            <td>
              <code>5 &gt;= 5</code> → <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;=</code>
            </td>
            <td>mniejsze lub równe</td>
            <td>
              <code>4 &lt;= 3</code> → <code>false</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Operatory logiczne</h3>
      <p>
        Służą do wykonywania operacji logicznych na wartościach typu{" "}
        <code>boolean</code>. Ich wynik również jest wartością logiczną.
      </p>

      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Opis</th>
            <th>Przykład</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>&amp;&amp;</code>
            </td>
            <td>
              AND - zwraca <code>true</code>, jeśli oba warunki są prawdziwe
            </td>
            <td>
              <code>true &amp;&amp; true</code> → <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>||</code>
            </td>
            <td>
              OR - zwraca <code>true</code>, jeśli przynajmniej jeden warunek
              jest prawdziwy
            </td>
            <td>
              <code>false || true</code> → <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>!</code>
            </td>
            <td>NOT - neguje wartość logiczną</td>
            <td>
              <code>!true</code> → <code>false</code>
            </td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        language="javascript"
        code={`let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false`}
      />

      <h3>Operatory inkrementacji i dekrementacji</h3>
      <p>Służą do zwiększania lub zmniejszania wartości liczbowych o 1.</p>

      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Opis</th>
            <th>Przykład</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>++</code>
            </td>
            <td>inkrementacja (zwiększa wartość o 1)</td>
            <td>
              <code>x++</code> lub <code>++x</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--</code>
            </td>
            <td>dekrementacja (zmniejsza wartość o 1)</td>
            <td>
              <code>x--</code> lub <code>--x</code>
            </td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        language="javascript"
        code={`let x = 5;
console.log(x++); // 5 (postinkrementacja)
console.log(x);   // 6
console.log(++x); // 7 (preinkrementacja)`}
      />

      <h3>Operator trójargumentowy (ternary)</h3>
      <p>
        Jest skróconą formą instrukcji warunkowej <code>if...else</code>.
        Składnia: <code>warunek ? wartość1 : wartość2</code>
      </p>

      <CodeBlock
        language="javascript"
        code={`let wiek = 18;
let wynik = (wiek >= 18) ? "Dorosły" : "Niepełnoletni";
console.log(wynik); // "Dorosły"`}
      />

      <h3>Operatory łańcuchowe i przypisania warunkowego</h3>
      <p>
        W nowoczesnych wersjach języka dostępne są dodatkowe operatory
        ułatwiające pracę z danymi.
      </p>

      <ul>
        <li>
          <code>??</code> - operator łączenia z wartością domyślną (nullish
          coalescing)
        </li>
        <li>
          <code>?.</code> - bezpieczny operator dostępu (optional chaining)
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`let user = { name: "Ala" };
console.log(user?.name); // "Ala"
console.log(user?.age ?? "brak danych"); // "brak danych"`}
      />

      <h3>Podsumowanie</h3>
      <p>
        Operatory są podstawowym narzędziem w codziennym programowaniu -
        pozwalają wykonywać obliczenia, porównania i podejmować decyzje. Warto
        znać ich działanie oraz różnice między operatorami o podobnym
        przeznaczeniu, takimi jak <code>==</code> i <code>===</code>.
      </p>

      <p>
        Świadome stosowanie operatorów i znajomość ich priorytetów ułatwia
        tworzenie czytelnego i poprawnego kodu.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
