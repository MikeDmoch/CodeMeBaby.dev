import CodeBlock from "../../components/CodeBlock";

export const title = "Historia i rola";

export default function JS_HistoriaRola() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Ewolucja i znaczenie we współczesnym świecie</h1>
      </div>

      <h2>Początki JavaScript</h2>
      <p>
        JavaScript został stworzony w 1995 roku przez{" "}
        <strong>Brendana Eicha</strong>, programistę pracującego w firmie
        Netscape. W tamtym czasie internet dopiero się rozwijał, a strony WWW
        były statyczne - można było je tylko przeglądać, bez interakcji.
      </p>

      <p>
        Eich stworzył pierwszą wersję JavaScriptu w zaledwie{" "}
        <strong>10 dni</strong>, aby umożliwić dodawanie interakcji po stronie
        użytkownika. Jego celem było stworzenie prostego języka, który będzie
        łatwy do nauki dla osób znających HTML i który pozwoli dodać logikę bez
        potrzeby używania języków takich jak Java czy C++.
      </p>

      <h3>JavaScript, a nie Java</h3>
      <p>
        Mimo podobnej nazwy, JavaScript nie ma wiele wspólnego z językiem Java.
        Nazwa została nadana głównie ze względów marketingowych, gdy Netscape
        współpracował z firmą Sun Microsystems (twórcą Javy). W rzeczywistości
        JavaScript ma zupełnie inną składnię, filozofię i zastosowanie.
      </p>

      <h3>Rozwój i standaryzacja</h3>
      <p>
        W 1996 roku Netscape przekazał specyfikację języka organizacji{" "}
        <strong>ECMA</strong>, co doprowadziło do stworzenia standardu{" "}
        <strong>ECMAScript</strong>. Od tego momentu wszystkie implementacje
        JavaScriptu (np. w przeglądarkach Chrome, Firefox, Safari) opierają się
        na wspólnej specyfikacji.
      </p>

      <ul>
        <li>
          <strong>1995</strong> - powstaje pierwsza wersja JavaScript
          (LiveScript → JavaScript).
        </li>
        <li>
          <strong>1997</strong> - publikacja pierwszej specyfikacji ECMAScript.
        </li>
        <li>
          <strong>2009</strong> - powstaje <strong>Node.js</strong>, dzięki
          czemu JS trafia na serwery.
        </li>
        <li>
          <strong>2015</strong> - wydanie <strong>ECMAScript 6 (ES6)</strong> -
          ogromna rewolucja w języku.
        </li>
        <li>
          <strong>dziś</strong> - JavaScript działa wszędzie: w przeglądarce, na
          serwerze, w aplikacjach mobilnych i desktopowych.
        </li>
      </ul>

      <h3>JavaScript a przeglądarki</h3>
      <p>
        Od samego początku JavaScript był silnie związany z przeglądarkami
        internetowymi. Każdy producent implementował własny silnik JS:
      </p>

      <ul>
        <li>
          <strong>V8</strong> - Google Chrome, Node.js
        </li>
        <li>
          <strong>SpiderMonkey</strong> - Mozilla Firefox
        </li>
        <li>
          <strong>JavaScriptCore</strong> - Safari
        </li>
        <li>
          <strong>Chakra</strong> - dawniej w Internet Explorer / Edge
        </li>
      </ul>

      <p>
        Dzięki rosnącej mocy przeglądarek i silników JavaScriptu, dziś język ten
        może wykonywać bardzo złożone operacje - od gier 3D po aplikacje biurowe
        działające całkowicie online.
      </p>

      <h3>Node.js i nowa era JavaScriptu</h3>
      <p>
        Przełomowym momentem w historii JavaScriptu było powstanie{" "}
        <strong>Node.js</strong> w 2009 roku. To środowisko uruchomieniowe
        pozwoliło wykonywać JavaScript poza przeglądarką, co umożliwiło
        tworzenie aplikacji serwerowych i narzędzi backendowych.
      </p>

      <CodeBlock
        language="javascript"
        code={`// prosty serwer Node.js
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
}).listen(3000);

console.log('Serwer działa na porcie 3000');`}
      />

      <p>
        Dzięki Node.js JavaScript stał się językiem „pełnego stosu” (full
        stack), używanym zarówno do front-endu, jak i back-endu.
      </p>

      <h3>ES6 i współczesny JavaScript</h3>
      <p>
        W 2015 roku ukazała się wersja ECMAScript 6 (ES6), która przyniosła
        ogromne zmiany i uczyniła JavaScript bardziej nowoczesnym i czytelnym.
        Wprowadzono m.in.:
      </p>

      <ul>
        <li>
          <code>let</code> i <code>const</code> - nowe sposoby deklaracji
          zmiennych,
        </li>
        <li>
          funkcje strzałkowe <code>=&gt;</code>,
        </li>
        <li>
          klasy <code>class</code>,
        </li>
        <li>importy i eksporty modułów,</li>
        <li>
          template stringi (np. <code>{"`Witaj, ${imie}`"}</code>),
        </li>
        <li>promisy i async/await do obsługi asynchroniczności.</li>
      </ul>

      <h3>Rola JavaScriptu dzisiaj</h3>
      <p>
        Obecnie JavaScript jest jednym z najważniejszych języków programowania
        na świecie. Stanowi fundament nowoczesnego internetu - od prostych
        animacji po rozbudowane aplikacje SPA (Single Page Application) tworzone
        w technologiach takich jak React, Vue czy Angular.
      </p>

      <p>
        Dzięki swojej elastyczności JavaScript przeniknął do wielu obszarów:
      </p>

      <ul>
        <li>
          <strong>Front-end</strong> - React, Vue, Angular, Svelte
        </li>
        <li>
          <strong>Back-end</strong> - Node.js, Express, NestJS
        </li>
        <li>
          <strong>Mobile</strong> - React Native, Ionic
        </li>
        <li>
          <strong>Desktop</strong> - Electron, Tauri
        </li>
        <li>
          <strong>AI i nauka danych</strong> - TensorFlow.js, Brain.js
        </li>
      </ul>

      <h3>JavaScript jako język uniwersalny</h3>
      <p>
        Współczesny JavaScript stał się językiem ogólnego przeznaczenia - można
        w nim pisać serwery, aplikacje mobilne, gry, a nawet oprogramowanie do
        urządzeń IoT. Jego siła tkwi w ogromnej społeczności, liczbie bibliotek
        (npm) oraz prostocie wdrożenia.
      </p>

      <CodeBlock
        language="javascript"
        code={`// przykład użycia biblioteki z npm
import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('JavaScript wszędzie!'));
app.listen(3000, () => console.log('Serwer działa na http://localhost:3000'));`}
      />

      <h3>Podsumowanie</h3>
      <p>
        JavaScript przeszedł drogę od prostego języka skryptowego uruchamianego
        w przeglądarce do potężnego narzędzia używanego w niemal każdym aspekcie
        programowania. Dziś to język, który napędza miliony aplikacji i stron na
        całym świecie.
      </p>

      <p>
        Można śmiało powiedzieć, że bez JavaScriptu współczesny internet po
        prostu
        <strong>nie mógłby istnieć</strong>.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
