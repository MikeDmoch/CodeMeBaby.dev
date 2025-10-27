import CodeBlock from "../../components/CodeBlock";

export const title = "Przerywanie działania";

export default function FlowControl() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - break, continue, return</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Podczas wykonywania pętli lub funkcji często zachodzi potrzeba
        wcześniejszego przerwania działania programu, pominięcia jednej iteracji
        lub zwrócenia wyniku. Do tego służą trzy kluczowe instrukcje:{" "}
        <code>break</code>, <code>continue</code> i <code>return</code>.
      </p>

      <h3>Instrukcja break</h3>
      <p>
        Instrukcja <code>break</code> natychmiast przerywa działanie bieżącej
        pętli, niezależnie od tego, czy warunek został spełniony.
      </p>

      <CodeBlock
        language="javascript"
        code={`for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // kończy pętlę po osiągnięciu 5
    }
    console.log("i =", i);
}
console.log("Koniec pętli");`}
      />

      <p>Wynik działania powyższego kodu:</p>
      <pre>
        {`i = 0
i = 1
i = 2
i = 3
i = 4
Koniec pętli`}
      </pre>

      <p>
        <code>break</code> kończy jedynie pętlę, w której została użyta. Jeśli
        jest to pętla zagnieżdżona, kończy tylko tę najbliższą.
      </p>

      <h3>Instrukcja continue</h3>
      <p>
        Instrukcja <code>continue</code> pomija bieżącą iterację pętli i
        przechodzi do następnego przebiegu.
      </p>

      <CodeBlock
        language="javascript"
        code={`for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // pomija 2
    }
    console.log(i);
}`}
      />

      <p>Wynik działania:</p>
      <pre>
        {`0
1
3
4`}
      </pre>

      <p>
        W tym przykładzie pętla nie wykonuje kodu dla <code>i = 2</code>, lecz
        kontynuuje od następnej wartości.
      </p>

      <h3>Instrukcja return</h3>
      <p>
        Instrukcja <code>return</code> służy do natychmiastowego zakończenia
        działania funkcji i opcjonalnie zwrócenia wartości do miejsca, z którego
        funkcja została wywołana.
      </p>

      <CodeBlock
        language="javascript"
        code={`function znajdzParzysta(liczby) {
    for (let liczba of liczby) {
        if (liczba % 2 === 0) {
            return liczba; // kończy funkcję i zwraca pierwszą parzystą liczbę
        }
    }
    return null; // gdy brak parzystych liczb
}

const wynik = znajdzParzysta([1, 3, 5, 8, 9]);
console.log(wynik); // 8`}
      />

      <p>
        Po napotkaniu <code>return</code> dalszy kod w funkcji nie zostanie
        wykonany. To bardzo ważne w kontekście kontroli przepływu programu.
      </p>

      <h3>Różnice i zastosowanie</h3>
      <table>
        <thead>
          <tr>
            <th>Instrukcja</th>
            <th>Działa w</th>
            <th>Działanie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>break</code>
            </td>
            <td>pętle, switch</td>
            <td>kończy działanie pętli lub bloku switch</td>
          </tr>
          <tr>
            <td>
              <code>continue</code>
            </td>
            <td>pętle</td>
            <td>pomija bieżącą iterację i przechodzi do następnej</td>
          </tr>
          <tr>
            <td>
              <code>return</code>
            </td>
            <td>funkcje</td>
            <td>kończy funkcję i zwraca wartość</td>
          </tr>
        </tbody>
      </table>

      <h3>Przykład łączący break, continue i return</h3>
      <p>
        W tym przykładzie zobaczysz, jak każda z tych instrukcji wpływa na
        przepływ programu:
      </p>

      <CodeBlock
        language="javascript"
        code={`function testLiczby() {
    for (let i = 0; i < 10; i++) {
        if (i === 3) continue; // pomija 3
        if (i === 6) break;    // kończy pętlę przy 6
        console.log("i =", i);
    }
    return "Zakończono działanie funkcji";
}

console.log(testLiczby());`}
      />

      <p>Wynik:</p>
      <pre>
        {`i = 0
i = 1
i = 2
i = 4
i = 5
Zakończono działanie funkcji`}
      </pre>

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj <code>break</code> do kontrolowanego kończenia pętli, nie do
          "uciekania" z błędów logicznych.
        </li>
        <li>
          <code>continue</code> stosuj, gdy chcesz pominąć konkretne przypadki,
          a nie całe działanie.
        </li>
        <li>
          W funkcjach zawsze używaj <code>return</code> w sposób czytelny i
          jednoznaczny.
        </li>
        <li>
          Unikaj nadmiernego zagnieżdżania pętli i wielu instrukcji{" "}
          <code>break</code> w jednym miejscu.
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Instrukcje <code>break</code>, <code>continue</code> i{" "}
        <code>return</code> dają pełną kontrolę nad przebiegiem programu.
        Pozwalają kończyć działania, przeskakiwać iteracje lub zwracać wyniki z
        funkcji w dowolnym momencie.
      </p>

      <p>
        Ich umiejętne użycie sprawia, że kod staje się bardziej przewidywalny i
        elastyczny, a logika programu - czytelniejsza.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
