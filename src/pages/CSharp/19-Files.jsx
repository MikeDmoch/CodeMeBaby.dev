import CodeBlock from "../../components/CodeBlock";

export const title = "Praca z plikami";

export default function Files() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Praca z plikami to jeden z najczęstszych elementów aplikacji
        desktopowych, serwerowych czy narzędzi administracyjnych. W języku C#
        dostęp do plików i katalogów zapewniają przestrzenie nazw{" "}
        <code>System.IO</code> oraz klasy takie jak <code>File</code>,
        <code>StreamReader</code>, <code>StreamWriter</code>,{" "}
        <code>FileStream</code> i <code>Directory</code>.
      </p>

      <h3>Podstawowe operacje na plikach</h3>
      <p>
        Najprostszy sposób pracy z plikami to użycie statycznych metod klasy{" "}
        <code>File</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.IO;

class Program
{
    static void Main()
    {
        string sciezka = "dane.txt";

        // Zapis do pliku
        File.WriteAllText(sciezka, "Witaj w C#!");

        // Odczyt z pliku
        string zawartosc = File.ReadAllText(sciezka);
        Console.WriteLine(zawartosc);
    }
}`}
      />

      <p>
        Klasa <code>File</code> jest idealna do prostych operacji, takich jak
        zapis i odczyt całych plików tekstowych.
      </p>

      <h3>Sprawdzanie istnienia pliku</h3>
      <CodeBlock
        language="csharp"
        code={`string sciezka = "plik.txt";

if (File.Exists(sciezka))
{
    Console.WriteLine("Plik istnieje.");
}
else
{
    Console.WriteLine("Plik nie istnieje.");
}`}
      />

      <h3>Odczyt i zapis wielu linii</h3>
      <CodeBlock
        language="csharp"
        code={`string[] linie = { "Linia 1", "Linia 2", "Linia 3" };

// Zapis
File.WriteAllLines("linie.txt", linie);

// Odczyt
string[] wczytane = File.ReadAllLines("linie.txt");

foreach (var linia in wczytane)
    Console.WriteLine(linia);`}
      />

      <h3>Użycie StreamWriter i StreamReader</h3>
      <p>
        Klasy <code>StreamWriter</code> i <code>StreamReader</code> dają większą
        kontrolę nad procesem odczytu i zapisu, szczególnie gdy operujemy na
        dużych plikach lub chcemy zapisywać dane krok po kroku.
      </p>

      <CodeBlock
        language="csharp"
        code={`using (StreamWriter writer = new StreamWriter("log.txt"))
{
    writer.WriteLine("Start programu");
    writer.WriteLine(DateTime.Now);
}

using (StreamReader reader = new StreamReader("log.txt"))
{
    string zawartosc = reader.ReadToEnd();
    Console.WriteLine(zawartosc);
}`}
      />

      <h3>FileStream - niskopoziomowy dostęp do pliku</h3>
      <p>
        <code>FileStream</code> pozwala na bezpośredni dostęp do danych
        binarnych w pliku. Jest używany np. przy pracy z obrazami, archiwami czy
        plikami konfiguracyjnymi.
      </p>

      <CodeBlock
        language="csharp"
        code={`byte[] dane = { 1, 2, 3, 4, 5 };

using (FileStream fs = new FileStream("dane.bin", FileMode.Create))
{
    fs.Write(dane, 0, dane.Length);
}

using (FileStream fs = new FileStream("dane.bin", FileMode.Open))
{
    byte[] bufor = new byte[fs.Length];
    fs.Read(bufor, 0, bufor.Length);

    Console.WriteLine(string.Join(", ", bufor));
}`}
      />

      <h3>Tworzenie i usuwanie katalogów</h3>
      <p>
        Do pracy z katalogami służy klasa <code>Directory</code> oraz{" "}
        <code>DirectoryInfo</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`string folder = "TestowyFolder";

// Tworzenie katalogu
Directory.CreateDirectory(folder);
Console.WriteLine("Katalog utworzony.");

// Sprawdzenie istnienia
if (Directory.Exists(folder))
{
    Console.WriteLine("Katalog istnieje.");
}

// Usuwanie katalogu
Directory.Delete(folder);
Console.WriteLine("Katalog usunięty.");`}
      />

      <h3>Uzyskiwanie informacji o plikach</h3>
      <p>
        Klasa <code>FileInfo</code> dostarcza szczegółowych informacji o pliku,
        takich jak rozmiar, data utworzenia czy ścieżka.
      </p>

      <CodeBlock
        language="csharp"
        code={`FileInfo info = new FileInfo("dane.txt");

Console.WriteLine("Nazwa: " + info.Name);
Console.WriteLine("Rozmiar: " + info.Length + " bajtów");
Console.WriteLine("Utworzono: " + info.CreationTime);`}
      />

      <h3>Kopiowanie, przenoszenie i usuwanie plików</h3>
      <CodeBlock
        language="csharp"
        code={`string zrodlo = "plik1.txt";
string kopia = "plik2.txt";
string cel = "nowy_folder/plik.txt";

File.WriteAllText(zrodlo, "Przykładowe dane");

File.Copy(zrodlo, kopia);      // kopiowanie
File.Move(kopia, cel);         // przenoszenie
File.Delete(zrodlo);           // usuwanie`}
      />

      <h3>Obsługa wyjątków przy operacjach na plikach</h3>
      <p>
        Operacje na plikach często powodują błędy – np. brak uprawnień, plik
        zablokowany przez inny proces, brak miejsca na dysku. Warto je zawsze
        obsługiwać.
      </p>

      <CodeBlock
        language="csharp"
        code={`try
{
    File.Copy("nieistnieje.txt", "kopia.txt");
}
catch (FileNotFoundException)
{
    Console.WriteLine("Plik źródłowy nie istnieje.");
}
catch (IOException ex)
{
    Console.WriteLine("Błąd wejścia/wyjścia: " + ex.Message);
}`}
      />

      <h3>Asynchroniczny odczyt i zapis plików</h3>
      <p>
        W nowoczesnych aplikacjach warto korzystać z metod asynchronicznych,
        które nie blokują wątku podczas operacji dyskowych.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System.IO;
using System.Threading.Tasks;

public async Task ZapiszOdczytajAsync()
{
    await File.WriteAllTextAsync("async.txt", "Zapis asynchroniczny");
    string dane = await File.ReadAllTextAsync("async.txt");
    Console.WriteLine(dane);
}`}
      />

      <h3>Dobre praktyki</h3>
      <ul>
        <li>
          Używaj konstrukcji <code>using</code> dla klas implementujących{" "}
          <code>IDisposable</code> (np. StreamReader).
        </li>
        <li>Zawsze sprawdzaj istnienie pliku lub katalogu przed użyciem.</li>
        <li>
          Stosuj metody asynchroniczne (<code>WriteAllTextAsync</code>,{" "}
          <code>ReadAllTextAsync</code>) w aplikacjach GUI lub webowych.
        </li>
        <li>Nie zapisuj danych bezpośrednio w katalogach systemowych.</li>
        <li>
          Wrażliwe dane przechowuj w bezpieczny sposób (np. szyfrowanie lub
          ograniczone uprawnienia).
        </li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Praca z plikami w C# jest prosta dzięki bogatemu zestawowi narzędzi w
        przestrzeni nazw <code>System.IO</code>. Od prostych operacji na
        tekstach po odczyt danych binarnych – wszystko można zrealizować w
        sposób czytelny, bezpieczny i wydajny.
      </p>

      <p>
        W praktyce: używaj klasy <code>File</code> do prostych operacji,{" "}
        <code>StreamReader</code> i <code>StreamWriter</code>
        do kontrolowanego odczytu i zapisu, a <code>FileStream</code> – do pracy
        na danych binarnych.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
