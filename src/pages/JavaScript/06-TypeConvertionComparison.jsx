import CodeBlock from "../../components/CodeBlock";

export const title = "Konwersje typów i porównania";

export default function TypeConversionComparison() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Zrozumienie i dobre praktyki</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        JavaScript jest językiem o <strong>dynamicznym typowaniu</strong>, co
        oznacza, że typ wartości może się zmieniać w trakcie działania programu.
        W praktyce bardzo często dochodzi do sytuacji, w której dane różnych
        typów są ze sobą porównywane lub przekształcane. Zrozumienie zasad
        konwersji i różnicy między operatorami <code>==</code> i{" "}
        <code>===</code> to klucz do pisania przewidywalnego kodu.
      </p>

      <h3>Rodzaje konwersji</h3>
      <p>W JavaScript istnieją dwa główne rodzaje konwersji typów:</p>
      <ul>
        <li>
          <strong>Konwersja jawna</strong> – wykonywana świadomie przez
          programistę za pomocą funkcji lub operatorów.
        </li>
        <li>
          <strong>Konwersja niejawna</strong> – wykonywana automatycznie przez
          interpreter, gdy wymagają tego operacje lub porównania.
        </li>
      </ul>

      <h2>Konwersja jawna (ang. explicit coercion)</h2>
      <p>
        Jawna konwersja to sytuacja, gdy sam programista decyduje o zmianie typu
        danych. Można to zrobić przy pomocy funkcji <code>String()</code>,{" "}
        <code>Number()</code>, <code>Boolean()</code>, <code>parseInt()</code> i{" "}
        <code>parseFloat()</code>.
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

      <h4>parseInt() vs Number()</h4>
      <p>
        Funkcje <code>parseInt()</code> i <code>parseFloat()</code> konwertują
        tylko początek tekstu, jeśli przypomina liczbę. Natomiast{" "}
        <code>Number()</code> wymaga, aby cała wartość była poprawną liczbą.
      </p>

      <CodeBlock
        language="javascript"
        code={`parseInt("100px");   // 100
parseFloat("3.14m"); // 3.14
Number("100px");     // NaN`}
      />

      <h4>Konwersja logiczna</h4>
      <p>
        Możesz jawnie konwertować wartość na typ logiczny przy pomocy{" "}
        <code>Boolean()</code> lub podwójnego operatora negacji <code>!!</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(Boolean("tekst")); // true
console.log(Boolean(""));      // false
console.log(!!123);            // true
console.log(!!0);              // false`}
      />

      <h2>Konwersja niejawna (ang. implicit coercion)</h2>
      <p>
        Interpreter automatycznie konwertuje typy danych, gdy są używane w
        operacjach wymagających innego typu. Najczęściej dzieje się to w
        operacjach matematycznych i łańcuchowych.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log("5" * 2); // 10 - string zamieniony na number
console.log("5" + 2); // "52" - liczba zamieniona na string (łączenie tekstów)
console.log(1 + true); // 2 - true konwertowane na 1`}
      />

      <p>
        Mechanizm ten nazywamy <strong>type coercion</strong>. W wielu
        przypadkach ułatwia on pisanie kodu, ale bywa też źródłem trudnych do
        znalezienia błędów.
      </p>

      <h3>Konwersja w kontekście operatorów</h3>
      <p>
        Warto znać zasady działania automatycznych konwersji przy różnych
        operatorach:
      </p>

      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Działanie</th>
            <th>Przykład</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>+</code>
            </td>
            <td>Łączy stringi lub dodaje liczby</td>
            <td>
              <code>"5" + 1 → "51"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>-</code>, <code>*</code>, <code>/</code>
            </td>
            <td>Zawsze konwertują operand na liczbę</td>
            <td>
              <code>"10" - 5 → 5</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>==</code>
            </td>
            <td>Porównuje po konwersji typów</td>
            <td>
              <code>0 == false → true</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Falsy i Truthy wartości</h3>
      <p>
        Przy konwersji do <code>boolean</code> każda wartość w JavaScript jest
        traktowana jako prawdziwa (truthy) lub fałszywa (falsy).
      </p>

      <CodeBlock
        language="javascript"
        code={`// Falsy values:
false, 0, -0, "", null, undefined, NaN

// Wszystko inne jest truthy:
true, "tekst", 123, [], {}, function(){} 

if ("") console.log("Prawda"); // nie wykona się
if ("Hello") console.log("Prawda"); // wykona się`}
      />

      <h2>Porównania typów</h2>

      <h3>Operator == (porównanie luźne)</h3>
      <p>
        Operator <code>==</code> porównuje wartości po dokonaniu automatycznej
        konwersji typów. Jest elastyczny, ale niebezpieczny, ponieważ może dawać
        nieintuicyjne wyniki.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(5 == "5"); // true
console.log(0 == false);  // true
console.log("" == 0);     // true
console.log(null == undefined); // true`}
      />

      <p>
        Dzieje się tak, ponieważ interpreter próbuje „dopasować” typy. Dla
        przykładu: pusty string <code>""</code> zostanie przekonwertowany na{" "}
        <code>0</code>, a <code>false</code> również na <code>0</code>.
      </p>

      <h3>Operator === (porównanie ścisłe)</h3>
      <p>
        Operator <code>===</code> porównuje wartości bez konwersji. Dwa elementy
        są równe tylko wtedy, gdy mają ten sam typ i wartość.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(5 === "5"); // false
console.log(0 === false);  // false
console.log("" === 0);     // false
console.log(null === undefined); // false`}
      />

      <p>
        Z tego powodu <strong>porównanie ścisłe</strong> jest bezpieczniejsze i
        zalecane w każdej sytuacji.
      </p>

      <h3>Porównania w praktyce</h3>
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
              <code>"0" i false</code>
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
        </tbody>
      </table>

      <h2>Typowe błędy i pułapki</h2>
      <ul>
        <li>
          Użycie <code>==</code> prowadzi do nieoczywistych wyników, np.{" "}
          <code>[] == false</code> daje <code>true</code>.
        </li>
        <li>
          <code>NaN</code> nigdy nie jest równy samemu sobie –{" "}
          <code>NaN === NaN</code> zwraca <code>false</code>.
        </li>
        <li>
          Porównanie obiektów działa po referencji – dwa obiekty z tymi samymi
          danymi nie są równe.
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`console.log(NaN === NaN); // false
console.log({} === {}); // false
console.log([] == ![]); // true (![] to false → [] == false → true)`}
      />

      <h2>Quiz - sprawdź się</h2>
      <CodeBlock
        language="javascript"
        code={`console.log("10" - 5);
console.log("10" + 5);
console.log(0 == []);
console.log([] == ![]);
console.log(false == "0");`}
      />

      <p>
        💡 Odpowiedzi:
        <br />
        <strong>"10" - 5 → 5</strong> (tekst zamieniony na liczbę)
        <br />
        <strong>"10" + 5 → "105"</strong> (łączenie stringów)
        <br />
        <strong>0 == [] → true</strong> (pusta tablica → 0)
        <br />
        <strong>[] == ![] → true</strong> (po konwersji do 0)
        <br />
        <strong>false == "0" → true</strong> (oba konwertują się do 0)
      </p>

      <h2>Dobre praktyki</h2>
      <ul>
        <li>
          Używaj <code>===</code> i <code>!==</code> zamiast <code>==</code>.
        </li>
        <li>
          Dokonuj konwersji jawnej, np. <code>Number(value)</code>,{" "}
          <code>Boolean(value)</code>, <code>String(value)</code>.
        </li>
        <li>
          Pamiętaj, że <code>NaN</code> ≠ <code>NaN</code> – używaj{" "}
          <code>Number.isNaN()</code>.
        </li>
        <li>Unikaj polegania na automatycznej konwersji (type coercion).</li>
        <li>Porównuj obiekty po właściwościach, nie po referencji.</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        Konwersje typów i porównania to jedne z najczęstszych źródeł błędów w
        JavaScript. Zrozumienie różnicy między porównaniem luźnym i ścisłym oraz
        mechanizmu automatycznej konwersji to klucz do przewidywalnego kodu.
      </p>

      <p>
        W praktyce <strong>zawsze</strong> używaj porównania ścisłego{" "}
        <code>===</code> i stosuj <strong>konwersję jawną</strong> – dzięki temu
        Twój kod będzie bardziej czytelny i odporny na błędy.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
