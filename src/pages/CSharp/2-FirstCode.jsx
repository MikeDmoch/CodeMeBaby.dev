import CodeBlock from "../../components/CodeBlock";

const code1 = `using System;
                        
class Program {
    static void Main() {
        Console.WriteLine("Witaj, świecie!");
    }
}`;

const code2 = "using System;";
const code3 = "class Program";
const code4 = "static void Main()";
const code5 = 'Console.WriteLine("Witaj, świecie!");';

export default function CSharp_FirstCode() {
  return (
    <main class="content">
      <div class="header-container">
        <h1>Pierwszy program w C#</h1>
      </div>
      <p>
        Jeśli dopiero zaczynasz swoją przygodę z językiem C#, pierwszym krokiem
        jest napisanie klasycznego programu "Hello, World!". W tym artykule
        omówimy, jak stworzyć ten prosty i klasyczny już program oraz
        przeanalizujemy jego działanie.
      </p>{" "}
      <br />
      <b>
        Oto najprostszy kod w C#, który wypisuje "Witaj, świecie!" na ekranie:
      </b>
      <CodeBlock code={code1} language="csharp" />
      <h3>Omówienie kodu</h3>
      <CodeBlock code={code2} language="csharp" />
      <p>
        Ta linia importuje przestrzeń nazw System, która zawiera podstawowe
        funkcje wejścia i wyjścia, w tym Console.WriteLine.
      </p>
      <CodeBlock code={code3} language="csharp" />
      <p>Deklaracja klasy Program, która jest punktem wejścia dla aplikacji.</p>
      <CodeBlock code={code4} language="csharp" />
      <p>
        Metoda Main jest główną metodą programu, od której zaczyna się jego
        wykonanie. Słowo kluczowe static oznacza, że metoda należy do klasy i
        nie wymaga utworzenia instancji obiektu. void oznacza, że metoda nie
        zwraca żadnej wartości.
      </p>
      <CodeBlock code={code5} language="csharp" />
      <p>
        Wywołujemy metodę WriteLine z klasy Console, aby wypisać tekst na
        standardowe wyjście (konsolę).
      </p>
      <h3>Alternatywna wersja kodu</h3>
      <p>
        W nowszych wersjach C# (od C# 9.0) można używać tzw. "top-level
        statements", co pozwala uprościć kod:
      </p>
      <CodeBlock code={code5} language="csharp" />
      <p>
        W tej wersji nie musimy definiować klasy ani metody Main(), ponieważ
        kompilator automatycznie tworzy punkt wejścia.
      </p>
      <br />
      <br />
      <br />
    </main>
  );
}
