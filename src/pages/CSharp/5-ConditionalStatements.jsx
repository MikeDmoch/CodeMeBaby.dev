import CodeBlock from "../../components/CodeBlock";
export default function ConditionalStatements() {
  return (
    <main>
      <div>
        <h1>Instrukcje Warunkowe w C# – Kompleksowy Przewodnik</h1>
      </div>
      <p>
        Instrukcje warunkowe pozwalają na sterowanie przepływem programu na
        podstawie określonych warunków. W tym artykule omówimy wszystkie
        kluczowe aspekty instrukcji warunkowych w C#, od podstawowych po
        bardziej zaawansowane konstrukcje.
      </p>
      <h3>Podstawowa instrukcja if</h3>
      <p>
        Najczęściej stosowaną instrukcją warunkową w C# jest <code>if</code>.
        Umożliwia ona wykonanie bloku kodu tylko wtedy, gdy dany warunek
        zostanie spełniony.
      </p>
      <br /> <p>Składnia:</p>
      <CodeBlock
        code={`if (warunek)
{
    // kod do wykonania, jeśli warunek jest spełniony
}`}
        language="csharp"
      />
      <p>Przykład:</p>
      <CodeBlock
        code={`int liczba = 10;
if (liczba > 5)
{
    Console.WriteLine("Liczba jest większa niż 5.");
}`}
        language="csharp"
      />
      <h3>Instrukcja else</h3>
      <p>
        Jeżeli chcemy wykonać jedną operację w przypadku spełnienia warunku i
        inną w przeciwnym przypadku, możemy użyć konstrukcji{" "}
        <code>if-else</code>.
      </p>
      <CodeBlock
        code={`
int liczba = 3;
if (liczba > 5)
{
    Console.WriteLine("Liczba jest większa niż 5.");
}
else
{
    Console.WriteLine("Liczba jest mniejsza lub równa 5.");
}`}
        language="csharp"
      />
      <h3>Instrukcja else if</h3>
      <p>Warto stosować, gdy mamy więcej niż 2 warunki.</p>
      <CodeBlock
        code={`
int liczba = 0;
if (liczba > 0)
{
    Console.WriteLine("Liczba jest dodatnia.");
}
else if (liczba < 0)
{
    Console.WriteLine("Liczba jest ujemna.");
}
else
{
    Console.WriteLine("Liczba jest równa zero.");
}`}
        language="csharp"
      />
      <h3>Operator trójargumentowy :?</h3>
      <p>
        Został omówiony przy temacie Operatory. Przypomnijmy jednak jego użycie.
        Operator trójargumentowy (?:) to skrócona forma instrukcji warunkowej
        if-else.
      </p>
      <p>Składnia:</p>
      <CodeBlock
        code={`
warunek ? wartość_jeśli_prawda : wartość_jeśli_fałsz;`}
        language="csharp"
      />
      <p>Przykład:</p>
      <CodeBlock
        code={`int liczba = 7;
string wynik = (liczba % 2 == 0) ? "Parzysta" : "Nieparzysta";
Console.WriteLine(wynik);
`}
        language="csharp"
      />
      <h3>Switch</h3>
      <p>
        Instrukcja <code>switch</code> pozwala na wybór jednej z wielu opcji na
        podstawie wartości wyrażenia. Jest lepszym rozwiązaniem niż
        wielokrotność wyrażeń <code>else if</code>
        jeśli sprawdzamy wartość tylko jednej zmiennej.
      </p>
      <CodeBlock
        code={`
int dzienTygodnia = 3;
switch (dzienTygodnia)
{
    case 1:
        Console.WriteLine("Poniedziałek");
        break;
    case 2:
        Console.WriteLine("Wtorek");
        break;
    case 3:
        Console.WriteLine("Środa");
        break;
    default:
        Console.WriteLine("Inny dzień tygodnia");
        break;
}`}
        language="csharp"
      />
      <h4>Switch w nowoczesnej wersji C#</h4>
      <p>Od C# 8.0 można stosować switch w wersji wyrażeniowej.</p>
      <CodeBlock
        code={`
int dzien = 3;
string nazwaDnia = dzien switch
{
    1 => "Poniedziałek",
    2 => "Wtorek",
    3 => "Środa",
    _ => "Inny dzień tygodnia"
};
Console.WriteLine(nazwaDnia);
`}
        language="csharp"
      />
      <h3>Zagnieżdżone instrukcje warunkowe</h3>
      <p>
        Instrukcje warunkowe mogą być zagnieżdżane, czyli umieszczane wewnątrz
        siebie.
      </p>
      <CodeBlock
        code={`
int a = 10;
int b = 20;
if (a > 5)
{
    if (b > 15)
    {
        Console.WriteLine("Oba warunki są spełnione.");
    }
}`}
        language="csharp"
      />
      <h3>Podsumowanie</h3>
      <p>
        Instrukcje warunkowe są niezbędnym elementem każdego języka
        programowania, w tym C#. Pozwalają one na podejmowanie decyzji w kodzie
        na podstawie określonych kryteriów. Znajomość tych konstrukcji pozwala
        na tworzenie bardziej elastycznych i dynamicznych aplikacji.
      </p>
      <p>
        W kolejnych artykułach omówimy bardziej zaawansowane techniki
        programowania w C#, które pozwolą na jeszcze lepsze wykorzystanie
        możliwości tego języka.
      </p>
      <br />
      <br />
      <br />
    </main>
  );
}
