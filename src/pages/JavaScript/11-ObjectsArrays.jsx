import CodeBlock from "../../components/CodeBlock";

export const title = "Obiekty i tablice";

export default function ObjectsAndArrays() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - struktury danych w JavaScript</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        W JavaScript dane często przechowujemy w dwóch podstawowych strukturach:
        <strong> obiektach</strong> i <strong>tablicach</strong>. Pozwalają one
        organizować dane w bardziej złożony sposób niż pojedyncze zmienne.
      </p>

      <p>
        Tablice przechowują dane w kolejności, natomiast obiekty działają jak
        mapy klucz-wartość. Obie te struktury są podstawą do budowania złożonych
        aplikacji, np. pracy z danymi z API.
      </p>

      <h3>Tablice</h3>
      <p>
        Tablica to uporządkowany zbiór wartości. Każdy element ma swój indeks,
        który zaczyna się od 0.
      </p>

      <CodeBlock
        language="javascript"
        code={`const liczby = [10, 20, 30, 40];
console.log(liczby[0]); // 10
console.log(liczby.length); // 4`}
      />

      <h4>Dodawanie i usuwanie elementów</h4>
      <CodeBlock
        language="javascript"
        code={`const owoce = ["jabłko", "banan"];
owoce.push("gruszka"); // dodaje na końcu
owoce.unshift("truskawka"); // dodaje na początku
owoce.pop(); // usuwa ostatni element
owoce.shift(); // usuwa pierwszy element

console.log(owoce);`}
      />

      <p>
        Metody <code>push</code> i <code>pop</code> operują na końcu tablicy,
        natomiast <code>unshift</code> i <code>shift</code> - na jej początku.
      </p>

      <h4>Iteracja po tablicy</h4>
      <p>
        Najczęściej do przechodzenia po elementach używa się metody{" "}
        <code>forEach</code>:
      </p>
      <CodeBlock
        language="javascript"
        code={`const liczby = [1, 2, 3, 4];
liczby.forEach((liczba, index) => {
    console.log(\`Element \${index}: \${liczba}\`);
});`}
      />

      <h4>Tworzenie nowej tablicy z istniejącej</h4>
      <CodeBlock
        language="javascript"
        code={`const liczby = [1, 2, 3, 4, 5];

const podwojone = liczby.map(n => n * 2);
console.log(podwojone); // [2, 4, 6, 8, 10]

const parzyste = liczby.filter(n => n % 2 === 0);
console.log(parzyste); // [2, 4]

const suma = liczby.reduce((acc, n) => acc + n, 0);
console.log(suma); // 15`}
      />
      <p>
        Metody <code>map</code>, <code>filter</code> i <code>reduce</code>
        nie zmieniają oryginalnej tablicy - tworzą nową.
      </p>

      <h4>Łączenie i rozdzielanie tablic</h4>
      <CodeBlock
        language="javascript"
        code={`const a = [1, 2];
const b = [3, 4];
const polaczona = [...a, ...b]; // [1, 2, 3, 4]

const tekst = "Hello";
const litery = tekst.split(""); // ["H","e","l","l","o"]
const znowuTekst = litery.join("-"); // "H-e-l-l-o"`}
      />

      <h4>Sprawdzanie zawartości</h4>
      <CodeBlock
        language="javascript"
        code={`const kolory = ["czerwony", "zielony", "niebieski"];

console.log(kolory.includes("zielony")); // true
console.log(kolory.indexOf("niebieski")); // 2`}
      />

      <h3>Obiekty</h3>
      <p>
        Obiekt to struktura przechowująca dane w formacie{" "}
        <strong>klucz: wartość</strong>. Każdy klucz (ang. property) jest
        unikalny w obrębie danego obiektu.
      </p>

      <CodeBlock
        language="javascript"
        code={`const osoba = {
    imie: "Kasia",
    wiek: 25,
    zawod: "programistka"
};

console.log(osoba.imie); // Kasia
console.log(osoba["wiek"]); // 25`}
      />

      <h4>Dodawanie i usuwanie właściwości</h4>
      <CodeBlock
        language="javascript"
        code={`const osoba = { imie: "Tomek" };
osoba.wiek = 30;
osoba["kraj"] = "Polska";

delete osoba.kraj;
console.log(osoba);`}
      />

      <h4>Iterowanie po właściwościach obiektu</h4>
      <CodeBlock
        language="javascript"
        code={`const osoba = { imie: "Ola", wiek: 22, zawod: "designer" };

for (let klucz in osoba) {
    console.log(klucz, osoba[klucz]);
}

console.log(Object.keys(osoba)); // ["imie", "wiek", "zawod"]
console.log(Object.values(osoba)); // ["Ola", 22, "designer"]
console.log(Object.entries(osoba)); // [["imie","Ola"],["wiek",22],["zawod","designer"]]`}
      />

      <h4>Obiekty zagnieżdżone</h4>
      <CodeBlock
        language="javascript"
        code={`const student = {
    imie: "Jan",
    adres: {
        miasto: "Warszawa",
        kod: "00-001"
    }
};

console.log(student.adres.miasto); // Warszawa`}
      />

      <h4>Kopiowanie obiektów</h4>
      <p>
        W JS obiekty są przekazywane przez referencję. Aby stworzyć ich kopię,
        trzeba użyć odpowiedniej metody.
      </p>
      <CodeBlock
        language="javascript"
        code={`const oryginal = { imie: "Ewa" };
const kopia = { ...oryginal }; // kopia płytka

kopia.imie = "Anna";

console.log(oryginal.imie); // Ewa
console.log(kopia.imie); // Anna`}
      />

      <h4>Łączenie obiektów</h4>
      <CodeBlock
        language="javascript"
        code={`const danePodstawowe = { imie: "Marek", wiek: 30 };
const adres = { miasto: "Gdańsk" };

const pelneDane = { ...danePodstawowe, ...adres };
console.log(pelneDane);`}
      />

      <h4>Destrukturyzacja</h4>
      <p>
        Destrukturyzacja to szybki sposób wyciągania danych z obiektów i tablic.
      </p>

      <CodeBlock
        language="javascript"
        code={`const osoba = { imie: "Kasia", wiek: 28 };
const { imie, wiek } = osoba;

console.log(imie); // Kasia
console.log(wiek); // 28

const kolory = ["czerwony", "zielony", "niebieski"];
const [pierwszy, drugi] = kolory;
console.log(pierwszy); // czerwony`}
      />

      <h3>Porównanie obiektów i tablic</h3>
      <table>
        <thead>
          <tr>
            <th>Cecha</th>
            <th>Obiekty</th>
            <th>Tablice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Organizacja danych</td>
            <td>klucz - wartość</td>
            <td>kolejność indeksów</td>
          </tr>
          <tr>
            <td>Dostęp</td>
            <td>po kluczu</td>
            <td>po indeksie</td>
          </tr>
          <tr>
            <td>Iteracja</td>
            <td>
              <code>for...in</code>, <code>Object.keys()</code>
            </td>
            <td>
              <code>for</code>, <code>forEach()</code>, <code>map()</code>
            </td>
          </tr>
          <tr>
            <td>Typowe użycie</td>
            <td>opisanie jednego elementu (np. użytkownika)</td>
            <td>lista elementów (np. użytkownicy)</td>
          </tr>
        </tbody>
      </table>

      <h3>Połączenie obiektów i tablic</h3>
      <p>
        W praktyce często łączymy te dwie struktury, np. listę obiektów
        reprezentujących dane użytkowników.
      </p>

      <CodeBlock
        language="javascript"
        code={`const users = [
    { id: 1, name: "Ola" },
    { id: 2, name: "Kuba" },
    { id: 3, name: "Ewa" }
];

const names = users.map(user => user.name);
console.log(names); // ["Ola", "Kuba", "Ewa"]`}
      />

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj <code>const</code> dla tablic i obiektów - to chroni przed ich
          nadpisaniem.
        </li>
        <li>
          Do kopiowania zawsze używaj operatora spread (<code>...</code>) lub
          metod jak <code>structuredClone</code>.
        </li>
        <li>
          Nie modyfikuj tablic w miejscu, jeśli możesz zwrócić nową (np.{" "}
          <code>map</code> zamiast <code>forEach</code>).
        </li>
        <li>
          Staraj się, by obiekty miały stałą strukturę - to ułatwia debugowanie
          i walidację danych.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Obiekty i tablice to fundamenty JavaScript. Tablice służą do
        przechowywania list, a obiekty - do opisywania pojedynczych elementów.
      </p>
      <p>
        Znajomość metod tablicowych i manipulacji obiektami pozwala efektywnie
        pracować z danymi, szczególnie w aplikacjach React, gdzie komponenty
        często otrzymują dane w tych formach.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
