import CodeBlock from "../../components/CodeBlock";

export const title = "Pętle";

export default function Loops() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Powtarzanie instrukcji i iteracje</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Pętle to konstrukcje, które pozwalają wielokrotnie wykonywać ten sam
        fragment kodu. Dzięki nim można w prosty sposób przetwarzać dane, liczyć
        wartości czy iterować po elementach tablicy. W języku dostępnych jest
        kilka rodzajów pętli, z których każda ma swoje zastosowanie.
      </p>

      <h3>Pętla for</h3>
      <p>
        Najczęściej używana pętla, gdy z góry znana jest liczba iteracji. Składa
        się z trzech części: inicjalizacji, warunku i kroku.
      </p>

      <CodeBlock
        language="javascript"
        code={`for (let i = 0; i < 5; i++) {
    console.log("Iteracja:", i);
}`}
      />

      <ul>
        <li>
          <strong>Inicjalizacja</strong> - np. <code>let i = 0</code>{" "}
          (ustawienie zmiennej początkowej)
        </li>
        <li>
          <strong>Warunek</strong> - np. <code>{"i < 5"}</code> (pętla działa,
          dopóki jest prawdziwy)
        </li>
        <li>
          <strong>Krok</strong> - np. <code>i++</code> (zmiana wartości po
          każdej iteracji)
        </li>
      </ul>

      <p>
        Wynik powyższego kodu to wypisanie pięciu linii z numerami od 0 do 4.
      </p>

      <h3>Pętla while</h3>
      <p>
        Używana, gdy nie wiadomo, ile razy pętla ma się wykonać – dopóki warunek
        jest prawdziwy.
      </p>

      <CodeBlock
        language="javascript"
        code={`let licznik = 0;

while (licznik < 3) {
    console.log("Licznik:", licznik);
    licznik++;
}`}
      />

      <p>
        Jeśli warunek nigdy nie stanie się fałszywy, pętla wykona się w
        nieskończoność. Dlatego należy pamiętać o zwiększaniu liczników i
        warunkach kończących.
      </p>

      <h3>Pętla do...while</h3>
      <p>
        Działa podobnie do <code>while</code>, ale zawsze wykona się
        przynajmniej raz, ponieważ warunek sprawdzany jest dopiero po pierwszym
        przebiegu.
      </p>

      <CodeBlock
        language="javascript"
        code={`let x = 0;

do {
    console.log("x =", x);
    x++;
} while (x < 3);`}
      />

      <p>
        Nawet jeśli warunek jest od razu fałszywy, ciało pętli wykona się raz.
      </p>

      <h3>Pętla for...of</h3>
      <p>
        Umożliwia łatwe iterowanie po elementach tablic, łańcuchów tekstowych
        lub innych struktur iterowalnych.
      </p>

      <CodeBlock
        language="javascript"
        code={`const liczby = [10, 20, 30];

for (const liczba of liczby) {
    console.log(liczba);
}`}
      />

      <p>
        W powyższym przykładzie każda wartość z tablicy zostaje kolejno
        przypisana do zmiennej <code>liczba</code>.
      </p>

      <h3>Pętla for...in</h3>
      <p>
        Używana do iterowania po właściwościach obiektów. Zwraca klucze (nazwy
        pól), a nie ich wartości.
      </p>

      <CodeBlock
        language="javascript"
        code={`const user = { name: "Ala", age: 25, city: "Warszawa" };

for (const key in user) {
    console.log(key, "=", user[key]);
}`}
      />

      <p>
        Wynik to lista par klucz-wartość, np. <code>name = Ala</code>,{" "}
        <code>age = 25</code> itd.
      </p>

      <h3>Pętla zagnieżdżona</h3>
      <p>
        Pętle można umieszczać wewnątrz innych pętli. Umożliwia to np.
        przetwarzanie tablic wielowymiarowych.
      </p>

      <CodeBlock
        language="javascript"
        code={`for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log("i:", i, "j:", j);
    }
}`}
      />

      <h3>Instrukcje break i continue</h3>
      <p>
        W pętlach można sterować przepływem za pomocą dwóch specjalnych
        instrukcji:
      </p>

      <ul>
        <li>
          <code>break</code> - natychmiast przerywa działanie pętli,
        </li>
        <li>
          <code>continue</code> - pomija bieżącą iterację i przechodzi do
          następnej.
        </li>
      </ul>

      <CodeBlock
        language="javascript"
        code={`for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // pomija 2
    if (i === 4) break;    // kończy pętlę
    console.log(i);
}`}
      />

      <h3>Pętla po tablicy - forEach</h3>
      <p>
        Metoda <code>forEach()</code> pozwala iterować po elementach tablicy w
        bardziej deklaratywny sposób, przekazując funkcję wywołania zwrotnego
        (callback).
      </p>

      <CodeBlock
        language="javascript"
        code={`const kolory = ["czerwony", "zielony", "niebieski"];

kolory.forEach((kolor, index) => {
    console.log(index, kolor);
});`}
      />

      <p>
        W powyższym przykładzie funkcja jest wywoływana dla każdego elementu
        tablicy, z dostępem do wartości i indeksu.
      </p>

      <h3>Porównanie typów pętli</h3>
      <table>
        <thead>
          <tr>
            <th>Typ pętli</th>
            <th>Zastosowanie</th>
            <th>Sprawdzenie warunku</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>for</code>
            </td>
            <td>gdy znamy liczbę iteracji</td>
            <td>przed pierwszym przebiegiem</td>
          </tr>
          <tr>
            <td>
              <code>while</code>
            </td>
            <td>gdy liczba iteracji nieznana</td>
            <td>przed pierwszym przebiegiem</td>
          </tr>
          <tr>
            <td>
              <code>do...while</code>
            </td>
            <td>gdy chcemy wykonać kod przynajmniej raz</td>
            <td>po przebiegu</td>
          </tr>
          <tr>
            <td>
              <code>for...of</code>
            </td>
            <td>dla tablic i ciągów tekstowych</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <code>for...in</code>
            </td>
            <td>dla właściwości obiektów</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h3>Dobre praktyki</h3>
      <ul>
        <li>Unikaj nieskończonych pętli - zawsze zadbaj o warunek kończący.</li>
        <li>
          Wybieraj pętlę odpowiednią do rodzaju danych (np.{" "}
          <code>for...of</code> dla tablic).
        </li>
        <li>Nie modyfikuj tablicy podczas iteracji, jeśli to możliwe.</li>
        <li>
          Używaj <code>forEach()</code>, <code>map()</code> i innych metod
          wyższego rzędu dla czytelności.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Pętle to kluczowy element każdego języka programowania - pozwalają
        automatyzować powtarzalne operacje i efektywnie przetwarzać dane.
        Znajomość ich działania i różnic między nimi pozwala dobrać odpowiedni
        typ pętli do konkretnego problemu.
      </p>

      <p>
        W kolejnych lekcjach przejdziemy do pracy z tablicami i obiektami, które
        często stanowią główne źródło danych w iteracjach.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
