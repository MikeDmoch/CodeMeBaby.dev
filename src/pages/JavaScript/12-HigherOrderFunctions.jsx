import CodeBlock from "../../components/CodeBlock";

export const title = "Funkcje wyższego rzędu";

export default function HigherOrderFunctions() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - serce programowania funkcyjnego w JS</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        W JavaScript funkcje są <strong>pierwszej klasy obywatelami</strong> -
        można je przekazywać jako argumenty, zwracać z innych funkcji i
        przypisywać do zmiennych. Dzięki temu możemy tworzyć bardzo elastyczny i
        czytelny kod.
      </p>
      <p>
        Funkcje, które przyjmują lub zwracają inne funkcje, nazywamy
        <strong> funkcjami wyższego rzędu</strong> (ang.{" "}
        <em>higher-order functions</em>).
      </p>

      <h3>Callback - funkcja przekazywana jako argument</h3>
      <p>
        Callback to funkcja przekazana jako argument do innej funkcji, która
        zostanie wywołana później - np. po wykonaniu jakiegoś zadania.
      </p>

      <CodeBlock
        language="javascript"
        code={`function zrobCos(callback) {
    console.log("Zaczynamy...");
    callback(); // wywołanie funkcji przekazanej w argumencie
}

function powiadom() {
    console.log("Zakończono!");
}

zrobCos(powiadom);`}
      />

      <p>
        Funkcja <code>zrobCos</code> przyjmuje inną funkcję jako argument. Po
        wykonaniu swojego kodu, wywołuje ją - to właśnie callback.
      </p>

      <h4>Callback w formie funkcji anonimowej</h4>
      <CodeBlock
        language="javascript"
        code={`zrobCos(function() {
    console.log("To jest callback anonimowy!");
});`}
      />

      <h4>Callback jako funkcja strzałkowa</h4>
      <CodeBlock
        language="javascript"
        code={`zrobCos(() => console.log("Callback jako arrow function!"));`}
      />

      <h3>Funkcje wyższego rzędu</h3>
      <p>
        Funkcja wyższego rzędu to taka, która <strong>przyjmuje</strong> funkcję
        jako argument lub <strong>zwraca</strong> funkcję jako wynik.
      </p>

      <CodeBlock
        language="javascript"
        code={`function powiel(funkcja, razy) {
    for (let i = 0; i < razy; i++) {
        funkcja();
    }
}

const witaj = () => console.log("Cześć!");

powiel(witaj, 3);
// Cześć!
// Cześć!
// Cześć!`}
      />

      <p>
        W tym przykładzie <code>powiel</code> to funkcja wyższego rzędu,
        ponieważ przyjmuje inną funkcję jako argument.
      </p>

      <h3>Funkcje zwracające inne funkcje</h3>
      <p>
        Często funkcje wyższego rzędu zwracają nowe funkcje - np. do tworzenia
        konfiguracji lub dynamicznego generowania zachowań.
      </p>

      <CodeBlock
        language="javascript"
        code={`function powitaj(imie) {
    return function() {
        console.log("Witaj, " + imie + "!");
    };
}

const przywitajKube = powitaj("Kuba");
przywitajKube(); // Witaj, Kuba!`}
      />

      <p>
        Funkcja <code>powitaj</code> zwraca nową funkcję, która pamięta wartość
        zmiennej <code>imie</code> - to przykład użycia{" "}
        <strong>domknięcia</strong> (closure).
      </p>

      <h3>Praktyczne zastosowania</h3>
      <h4>1. Callbacki w metodach tablicowych</h4>
      <p>
        Wbudowane metody tablic, takie jak <code>map</code>, <code>filter</code>
        i <code>reduce</code>, korzystają z callbacków.
      </p>

      <CodeBlock
        language="javascript"
        code={`const liczby = [1, 2, 3, 4, 5];

const podwojone = liczby.map(x => x * 2);
console.log(podwojone); // [2, 4, 6, 8, 10]

const parzyste = liczby.filter(x => x % 2 === 0);
console.log(parzyste); // [2, 4]

const suma = liczby.reduce((acc, n) => acc + n, 0);
console.log(suma); // 15`}
      />

      <p>
        Każda z tych metod przyjmuje funkcję jako argument, czyli callback. To
        klasyczny przykład funkcji wyższego rzędu.
      </p>

      <h4>2. Asynchroniczność i callbacki</h4>
      <p>
        Callbacki są też powszechnie używane w kodzie asynchronicznym, np. w
        <code>setTimeout</code> lub przy operacjach sieciowych.
      </p>

      <CodeBlock
        language="javascript"
        code={`console.log("Start");

setTimeout(() => {
    console.log("To działa po 2 sekundach!");
}, 2000);

console.log("Koniec");`}
      />

      <p>Wynik:</p>
      <pre>
        {`Start
Koniec
To działa po 2 sekundach!`}
      </pre>

      <h3>Unikanie callback hell</h3>
      <p>
        Gdy callbacki są zagnieżdżane w wielu poziomach, powstaje tzw.
        <strong>callback hell</strong> - trudny do czytania i utrzymania kod.
      </p>

      <CodeBlock
        language="javascript"
        code={`pobierzDane(() => {
    przetworzDane(() => {
        zapiszDane(() => {
            console.log("Gotowe!");
        });
    });
});`}
      />

      <p>
        Aby tego uniknąć, stosuje się <strong>Promises</strong> lub{" "}
        <strong>async/await</strong>. Ale callbacki wciąż są fundamentem tych
        mechanizmów.
      </p>

      <h3>Funkcje jako generatory logiki</h3>
      <p>
        Funkcje wyższego rzędu pozwalają tworzyć funkcje oparte o wspólną
        logikę. To sposób na reużywalny kod.
      </p>

      <CodeBlock
        language="javascript"
        code={`function stworzMnoznik(n) {
    return function(x) {
        return x * n;
    };
}

const podwoj = stworzMnoznik(2);
const potroj = stworzMnoznik(3);

console.log(podwoj(5)); // 10
console.log(potroj(5)); // 15`}
      />

      <p>
        W tym przykładzie jedna funkcja generuje inne funkcje o różnych
        zachowaniach. To bardzo podobny koncept do{" "}
        <strong>hooków w React</strong>.
      </p>

      <h3>Różnice - callback vs funkcja wyższego rzędu</h3>
      <table>
        <thead>
          <tr>
            <th>Pojęcie</th>
            <th>Opis</th>
            <th>Przykład</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Callback</strong>
            </td>
            <td>Funkcja przekazana jako argument do innej funkcji</td>
            <td>
              <code>forEach({"x => console.log(x))"}</code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Funkcja wyższego rzędu</strong>
            </td>
            <td>Funkcja przyjmująca lub zwracająca inną funkcję</td>
            <td>
              <code>map, filter, reduce</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj nazwanych funkcji zamiast anonimowych, jeśli są wielokrotnie
          używane.
        </li>
        <li>Unikaj zbyt głębokich zagnieżdżeń callbacków - łatwo o chaos.</li>
        <li>
          Jeśli funkcja zwraca funkcję, staraj się jasno opisać, co robi (np.{" "}
          <code>stworzMnoznik</code>).
        </li>
        <li>
          Korzystaj z metod tablicowych zamiast pętli for, gdy potrzebujesz
          przetworzyć dane w sposób funkcyjny.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Funkcje wyższego rzędu i callbacki to fundament nowoczesnego
        JavaScriptu. Umożliwiają tworzenie elastycznych, modularnych i
        czytelnych rozwiązań.
      </p>
      <p>
        Zrozumienie ich działania otwiera drogę do lepszego opanowania Reacta,
        hooków, programowania asynchronicznego i podejścia funkcyjnego.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
