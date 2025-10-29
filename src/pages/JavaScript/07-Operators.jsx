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
        Operatory to symbole lub słowa kluczowe, które pozwalają wykonywać
        operacje na wartościach i zmiennych. Umożliwiają m.in. obliczenia
        matematyczne, porównania, przypisania i operacje logiczne. Ich dobra
        znajomość to fundament pisania skutecznego i czytelnego kodu.
      </p>

      {/* --- ARYTMETYCZNE --- */}
      <h2>Operatory arytmetyczne</h2>
      <p>Służą do wykonywania podstawowych działań matematycznych.</p>

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
            <td>dodawanie lub łączenie stringów</td>
            <td>
              <code>5 + 2 → 7</code>, <code>"A" + "B" → "AB"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>-</code>
            </td>
            <td>odejmowanie</td>
            <td>
              <code>5 - 2 → 3</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>*</code>
            </td>
            <td>mnożenie</td>
            <td>
              <code>5 * 2 → 10</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>/</code>
            </td>
            <td>dzielenie</td>
            <td>
              <code>5 / 2 → 2.5</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>%</code>
            </td>
            <td>reszta z dzielenia (modulo)</td>
            <td>
              <code>5 % 2 → 1</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>**</code>
            </td>
            <td>potęgowanie</td>
            <td>
              <code>2 ** 3 → 8</code>
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

      {/* --- PRZYPISANIA --- */}
      <h2>Operatory przypisania</h2>
      <p>
        Używane do przypisywania wartości do zmiennych. Mogą łączyć przypisanie
        z operacją matematyczną.
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
              <code>x += 3 → x = x + 3</code>
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
x += 5; // 15
x *= 2; // 30
console.log(x);`}
      />

      {/* --- PORÓWNANIA --- */}
      <h2>Operatory porównania</h2>
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
              <code>5 == "5" → true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>===</code>
            </td>
            <td>porównanie ścisłe</td>
            <td>
              <code>5 === "5" → false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>!=</code>
            </td>
            <td>różne wartości (luźne)</td>
            <td>
              <code>5 != "5" → false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>!==</code>
            </td>
            <td>różne wartości (ścisłe)</td>
            <td>
              <code>5 !== "5" → true</code>
            </td>
          </tr>
        </tbody>
      </table>

      {/* --- LOGICZNE --- */}
      <h2>Operatory logiczne</h2>
      <p>
        Służą do wykonywania operacji logicznych. Wynikiem jest zwykle{" "}
        <code>true</code> lub <code>false</code>, ale mogą też zwracać inne
        wartości w zależności od kontekstu.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log(true && false); // false
console.log(false || "domyślna"); // "domyślna"
console.log(!true); // false`}
      />

      <h3>Short-circuit evaluation</h3>
      <p>
        Operatory <code>&amp;&amp;</code> i <code>||</code> mogą zwracać nie
        tylko <code>true</code> lub <code>false</code>. Zwracają pierwszą
        wartość, która decyduje o wyniku.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log("Hello" && 123); // 123
console.log(null || "Domyślna"); // "Domyślna"`}
      />

      {/* --- INKREMENTACJA --- */}
      <h2>Operatory inkrementacji i dekrementacji</h2>
      <p>Zwiększają lub zmniejszają wartość liczbową o 1.</p>

      <CodeBlock
        language="javascript"
        code={`let x = 5;
console.log(x++); // 5 (postinkrementacja)
console.log(x);   // 6
console.log(++x); // 7 (preinkrementacja)`}
      />

      {/* --- TERNARY --- */}
      <h2>Operator trójargumentowy (ternary)</h2>
      <p>
        Skrócona forma instrukcji warunkowej <code>if...else</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let wiek = 18;
let wynik = (wiek >= 18) ? "Dorosły" : "Niepełnoletni";
console.log(wynik); // "Dorosły"`}
      />

      {/* --- NOWOCZESNE OPERATORY (rozszerzona sekcja) --- */}
      <h2>Nowoczesne operatory</h2>
      <p>
        Wraz z nowszymi wersjami JavaScript pojawiły się operatory, które mają
        na celu uproszczenie kodu i zwiększenie jego bezpieczeństwa. Dwa z nich
        – <strong>optional chaining</strong> (<code>?.</code>) i{" "}
        <strong>nullish coalescing</strong> (<code>??</code>) – są szczególnie
        przydatne przy pracy z danymi, które mogą być <code>null</code> lub{" "}
        <code>undefined</code>.
      </p>

      <h3>Optional chaining (?.)</h3>
      <p>
        Operator <code>?.</code> pozwala bezpiecznie odwoływać się do
        właściwości obiektu, nawet jeśli niektóre z nich nie istnieją. Zamiast
        błędu <code>Cannot read property 'x' of undefined</code>, zwraca{" "}
        <code>undefined</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`const user = {
  name: "Ola",
  address: { city: "Warszawa" }
};

console.log(user.address.city);     // "Warszawa"
console.log(user.contact?.email);   // undefined (bez błędu!)
console.log(user.profile?.info.age); // undefined, mimo że 'profile' nie istnieje`}
      />

      <p>
        Dzięki temu kod jest bezpieczniejszy i czytelniejszy. Nie musisz
        sprawdzać każdego poziomu obiektu:
      </p>

      <CodeBlock
        language="javascript"
        code={`// Zamiast:
if (user && user.profile && user.profile.age) {
  console.log(user.profile.age);
}

// Można po prostu:
console.log(user?.profile?.age);`}
      />

      <p>
        Operator <code>?.</code> można stosować także przy wywoływaniu funkcji
        lub dostępie do elementów tablicy:
      </p>

      <CodeBlock
        language="javascript"
        code={`user.getName?.(); // wywoła tylko jeśli metoda istnieje
console.log(users?.[0]?.name); // bezpieczny dostęp do tablicy`}
      />

      <h3>Nullish coalescing (??)</h3>
      <p>
        Operator <code>??</code> pozwala ustawić wartość domyślną tylko wtedy,
        gdy dana zmienna ma wartość <code>null</code> lub <code>undefined</code>
        . Różni się od <code>||</code>, który traktuje także <code>0</code>,{" "}
        <code>""</code> czy <code>false</code> jako fałsz.
      </p>

      <CodeBlock
        language="javascript"
        code={`let imie = "";
let nazwisko = null;

console.log(imie || "Anonim"); // "Anonim"
console.log(imie ?? "Anonim"); // ""
console.log(nazwisko ?? "Nieznany"); // "Nieznany"`}
      />

      <p>
        Dzięki <code>??</code> możesz ustawiać domyślne wartości tylko wtedy,
        gdy naprawdę ich brak, bez nadpisywania pustych stringów, zera czy{" "}
        <code>false</code>.
      </p>

      <CodeBlock
        language="javascript"
        code={`let liczba = 0;
console.log(liczba || 10); // 10
console.log(liczba ?? 10); // 0`}
      />

      <p>
        🧠 <strong>Zapamiętaj różnicę:</strong>
      </p>
      <ul>
        <li>
          <code>||</code> – reaguje na każdą wartość falsy (<code>0</code>,{" "}
          <code>""</code>, <code>false</code>, <code>null</code>,{" "}
          <code>undefined</code>)
        </li>
        <li>
          <code>??</code> – reaguje tylko na <code>null</code> i{" "}
          <code>undefined</code>
        </li>
      </ul>

      <p>Często oba operatory łączy się razem:</p>

      <CodeBlock
        language="javascript"
        code={`const user = { profile: null };
console.log(user?.profile?.age ?? "brak danych"); // "brak danych"`}
      />

      <p>
        Dzięki temu Twój kod jest odporny na błędy i idealny do pracy z danymi z
        API w React lub Node.js.
      </p>

      <ul>
        <li>
          <code>?.</code> – „jeśli istnieje, idź dalej”
        </li>
        <li>
          <code>??</code> – „jeśli brak wartości, użyj domyślnej”
        </li>
      </ul>

      {/* --- PODSUMOWANIE --- */}
      <h2>Podsumowanie</h2>
      <p>
        Operatory są podstawowym narzędziem w codziennym programowaniu.
        Pozwalają wykonywać obliczenia, porównania i podejmować decyzje w
        kodzie. Świadome korzystanie z nich zwiększa czytelność, bezpieczeństwo
        i elastyczność aplikacji.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
