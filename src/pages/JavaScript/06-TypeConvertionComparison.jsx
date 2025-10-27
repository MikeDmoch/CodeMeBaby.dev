import CodeBlock from "../../components/CodeBlock";

export const title = "Konwersje typów i porównania";

export default function TypeConversionComparison() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - dobre praktyki</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        W języku o dynamicznym typowaniu bardzo często dochodzi do sytuacji, w
        której różne typy danych są ze sobą porównywane lub przekształcane.
        Zrozumienie zasad konwersji typów i różnicy między operatorami{" "}
        <code>==</code> a <code>===</code> jest kluczowe, aby uniknąć
        nieoczekiwanych wyników.
      </p>

      <h3>Rodzaje konwersji</h3>
      <p>Istnieją dwa podstawowe rodzaje konwersji typów:</p>
      <ul>
        <li>
          <strong>Konwersja jawna</strong> - wykonywana przez programistę przy
          użyciu funkcji lub operatorów,
        </li>
        <li>
          <strong>Konwersja niejawna</strong> - wykonywana automatycznie przez
          interpreter, gdy to konieczne.
        </li>
      </ul>

      <h3>Konwersja jawna</h3>
      <p>
        Można świadomie zmieniać typ danych przy pomocy konstrukcji takich jak
        <code>Number()</code>, <code>String()</code>, <code>Boolean()</code> czy{" "}
        <code>parseInt()</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba = Number("42");
let tekst = String(123);
let wartoscLogiczna = Boolean(1);

console.log(liczba); // 42
console.log(tekst); // "123"
console.log(wartoscLogiczna); // true`}
      />

      <p>
        W przypadku funkcji <code>parseInt()</code> i <code>parseFloat()</code>{" "}
        można konwertować tekst na liczbę, dopóki początek tekstu przypomina
        wartość numeryczną.
      </p>

      <CodeBlock
        language="javascript"
        code={`parseInt("100px");   // 100
parseFloat("3.14m"); // 3.14
Number("100px");     // NaN`}
      />

      <h3>Konwersja niejawna</h3>
      <p>
        Interpreter automatycznie dokonuje konwersji, gdy dane różnych typów są
        używane razem. Najczęściej występuje w operacjach matematycznych i
        porównaniach.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log("5" * 2); // 10 - tekst zamieniony na liczbę
console.log("5" + 2); // "52" - liczba zamieniona na tekst (łączenie stringów)
console.log(1 + true); // 2 - true zamienione na 1`}
      />

      <p>
        Ten mechanizm, zwany <strong>type coercion</strong>, potrafi być
        przydatny, ale może również prowadzić do nieoczekiwanych rezultatów.
      </p>

      <h3>Konwersja na wartość logiczną</h3>
      <p>
        W niektórych sytuacjach wartości są automatycznie konwertowane do typu{" "}
        <code>boolean</code>, np. w instrukcjach warunkowych <code>if</code>.
        Wartości można podzielić na:
      </p>

      <ul>
        <li>
          <strong>Falsy</strong> - traktowane jako fałsz,
        </li>
        <li>
          <strong>Truthy</strong> - traktowane jako prawda.
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`// Wartości "falsy":
false, 0, "", null, undefined, NaN

// Wartości "truthy":
true, "tekst", 123, [], {}, function(){} 

if ("") console.log("Prawda"); // nie wykona się
if ("hello") console.log("Prawda"); // wykona się`}
      />

      <h3>Operator == (porównanie luźne)</h3>
      <p>
        Operator <code>==</code> porównuje wartości po dokonaniu automatycznej
        konwersji typów. To tzw. <strong>porównanie luźne</strong>, które może
        prowadzić do nieintuicyjnych wyników.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(5 == "5"); // true - konwersja tekstu na liczbę
console.log(0 == false);  // true
console.log("" == 0);     // true
console.log(null == undefined); // true`}
      />

      <p>
        Choć operator <code>==</code> bywa wygodny, często prowadzi do błędów,
        ponieważ wykonuje konwersję automatycznie i nie zawsze w oczywisty
        sposób.
      </p>

      <h3>Operator === (porównanie ścisłe)</h3>
      <p>
        Operator <code>===</code> porównuje wartości bez żadnej konwersji typów.
        Porównanie jest prawdziwe tylko wtedy, gdy zarówno typ, jak i wartość są
        identyczne.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(5 === "5"); // false
console.log(0 === false);  // false
console.log("" === 0);     // false
console.log(null === undefined); // false`}
      />

      <p>
        To tzw. <strong>porównanie ścisłe</strong> i jest ono rekomendowane w
        zdecydowanej większości przypadków. Zapewnia większą przewidywalność i
        eliminuje problemy z niejawna konwersją.
      </p>

      <h3>Różnice w praktyce</h3>
      <p>Poniższa tabela pokazuje różnicę między porównaniami:</p>

      <table>
        <thead>
          <tr>
            <th>Porównanie</th>
            <th>Wynik ==</th>
            <th>Wynik ===</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>5 i "5"</code>
            </td>
            <td>true</td>
            <td>false</td>
          </tr>
          <tr>
            <td>
              <code>0 i false</code>
            </td>
            <td>true</td>
            <td>false</td>
          </tr>
          <tr>
            <td>
              <code>null i undefined</code>
            </td>
            <td>true</td>
            <td>false</td>
          </tr>
          <tr>
            <td>
              <code>[] i false</code>
            </td>
            <td>true</td>
            <td>false</td>
          </tr>
          <tr>
            <td>
              <code>"0" i false</code>
            </td>
            <td>true</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Zawsze używaj <code>===</code> i <code>!==</code> zamiast{" "}
          <code>==</code> i <code>!=</code>.
        </li>
        <li>Stosuj jawne konwersje, jeśli potrzebujesz zmiany typu.</li>
        <li>
          Unikaj polegania na automatycznej konwersji - może prowadzić do
          nieoczekiwanych wyników.
        </li>
        <li>
          Używaj <code>Boolean()</code>, <code>Number()</code>,{" "}
          <code>String()</code> dla czytelności.
        </li>
        <li>
          Pamiętaj, że <code>null</code> i <code>undefined</code> są równe tylko
          w porównaniu luźnym.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Mechanizm konwersji typów jest potężny, ale może być zdradliwy.
        Porównania luźne (<code>==</code>) automatycznie przekształcają
        wartości, co prowadzi do nieintuicyjnych wyników. Dlatego w praktyce
        zawsze zaleca się stosowanie
        <strong>operatora ścisłego</strong> <code>===</code>, który porównuje
        wartości i typy bez konwersji.
      </p>

      <p>
        Dzięki świadomemu podejściu do konwersji i porównań można uniknąć wielu
        błędów i pisać bardziej przewidywalny kod.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
