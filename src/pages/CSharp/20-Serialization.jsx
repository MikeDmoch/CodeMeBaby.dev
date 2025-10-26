import CodeBlock from "../../components/CodeBlock";

export const title = "Serializacja danych";

export default function Serialization() {
  return (
    <main className="content">
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Wprowadzenie</h2>
      <p>
        Serializacja to proces zamiany obiektu na strumień bajtów lub tekst,
        który można zapisać do pliku, wysłać przez sieć lub zapisać w bazie
        danych. Deserializacja to proces odwrotny – odtwarzanie obiektu z
        zapisanej postaci. W C# istnieje wiele sposobów serializacji: binarna,
        XML i JSON.
      </p>

      <h3>Po co serializować dane?</h3>
      <ul>
        <li>Przechowywanie stanu obiektów między uruchomieniami programu,</li>
        <li>Wysyłanie danych przez sieć,</li>
        <li>Wymiana danych między aplikacjami,</li>
        <li>Tworzenie kopii zapasowych lub logów w postaci tekstowej.</li>
      </ul>

      <h3>Przykładowa klasa do serializacji</h3>
      <CodeBlock
        language="csharp"
        code={`[Serializable]
public class Osoba
{
    public string Imie { get; set; }
    public int Wiek { get; set; }

    public Osoba() { }

    public Osoba(string imie, int wiek)
    {
        Imie = imie;
        Wiek = wiek;
    }
}`}
      />

      <h2>Serializacja binarna</h2>
      <p>
        Serializacja binarna zapisuje dane w formacie binarnym – jest szybka i
        kompaktowa, ale nieczytelna dla człowieka. Wymaga oznaczenia klasy
        atrybutem <code>[Serializable]</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

class Program
{
    static void Main()
    {
        Osoba o = new Osoba("Jan", 30);
        BinaryFormatter bf = new BinaryFormatter();

        using (FileStream fs = new FileStream("osoba.dat", FileMode.Create))
        {
            bf.Serialize(fs, o);
        }

        // Deserializacja
        using (FileStream fs = new FileStream("osoba.dat", FileMode.Open))
        {
            Osoba odczytana = (Osoba)bf.Deserialize(fs);
            Console.WriteLine($"Odczytano: {odczytana.Imie}, {odczytana.Wiek}");
        }
    }
}`}
      />

      <p>
        <strong>Uwaga:</strong> od .NET 5 serializacja binarna jest przestarzała
        i niezalecana ze względów bezpieczeństwa.
      </p>

      <h2>Serializacja XML</h2>
      <p>
        XML (Extensible Markup Language) to format tekstowy przeznaczony do
        przenoszenia danych w sposób czytelny dla człowieka i maszyn.
        Serializację XML zapewnia klasa <code>XmlSerializer</code>.
      </p>

      <CodeBlock
        language="csharp"
        code={`using System;
using System.IO;
using System.Xml.Serialization;

class Program
{
    static void Main()
    {
        Osoba o = new Osoba("Ewa", 25);
        XmlSerializer serializer = new XmlSerializer(typeof(Osoba));

        using (FileStream fs = new FileStream("osoba.xml", FileMode.Create))
        {
            serializer.Serialize(fs, o);
        }

        // Deserializacja
        using (FileStream fs = new FileStream("osoba.xml", FileMode.Open))
        {
            Osoba odczytana = (Osoba)serializer.Deserialize(fs);
            Console.WriteLine($"Imię: {odczytana.Imie}, Wiek: {odczytana.Wiek}");
        }
    }
}`}
      />

      <h3>Wygląd pliku XML</h3>
      <CodeBlock
        language="xml"
        code={`<?xml version="1.0"?>
<Osoba xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <Imie>Ewa</Imie>
  <Wiek>25</Wiek>
</Osoba>`}
      />

      <h3>Atrybuty kontrolujące XML</h3>
      <p>Możesz dostosować strukturę XML za pomocą atrybutów:</p>
      <ul>
        <li>
          <code>[XmlElement("NazwaElementu")]</code> – zmienia nazwę pola,
        </li>
        <li>
          <code>[XmlAttribute]</code> – zapisuje dane jako atrybut XML,
        </li>
        <li>
          <code>[XmlIgnore]</code> – wyklucza pole z serializacji.
        </li>
      </ul>

      <CodeBlock
        language="csharp"
        code={`[Serializable]
public class Samochod
{
    [XmlAttribute]
    public string Marka { get; set; }

    [XmlElement("RokProdukcji")]
    public int Rok { get; set; }

    [XmlIgnore]
    public string HasloSerwisowe { get; set; }
}`}
      />

      <h2>Serializacja JSON</h2>
      <p>
        JSON (JavaScript Object Notation) to najpopularniejszy format wymiany
        danych. W C# można go obsłużyć za pomocą <code>System.Text.Json</code>{" "}
        lub <code>Newtonsoft.Json</code>.
      </p>

      <h3>Serializacja za pomocą System.Text.Json</h3>
      <CodeBlock
        language="csharp"
        code={`using System;
using System.IO;
using System.Text.Json;

class Program
{
    static void Main()
    {
        Osoba o = new Osoba("Kasia", 22);
        string json = JsonSerializer.Serialize(o);
        File.WriteAllText("osoba.json", json);

        Console.WriteLine(json);

        // Deserializacja
        string odczyt = File.ReadAllText("osoba.json");
        Osoba osoba2 = JsonSerializer.Deserialize<Osoba>(odczyt);

        Console.WriteLine($"Imię: {osoba2.Imie}, Wiek: {osoba2.Wiek}");
    }
}`}
      />

      <h3>Wygląd pliku JSON</h3>
      <CodeBlock
        language="json"
        code={`{
  "Imie": "Kasia",
  "Wiek": 22
}`}
      />

      <h3>Formatowanie JSON</h3>
      <CodeBlock
        language="csharp"
        code={`var opcje = new JsonSerializerOptions
{
    WriteIndented = true
};

string json = JsonSerializer.Serialize(o, opcje);
File.WriteAllText("osoba_format.json", json);`}
      />

      <h3>Serializacja kolekcji</h3>
      <p>Można również serializować całe kolekcje obiektów.</p>

      <CodeBlock
        language="csharp"
        code={`List<Osoba> osoby = new List<Osoba>
{
    new Osoba("Adam", 30),
    new Osoba("Ola", 25),
    new Osoba("Marek", 40)
};

string json = JsonSerializer.Serialize(osoby, new JsonSerializerOptions { WriteIndented = true });
File.WriteAllText("osoby.json", json);

List<Osoba> odczytane = JsonSerializer.Deserialize<List<Osoba>>(File.ReadAllText("osoby.json"));`}
      />

      <h2>Porównanie formatów</h2>
      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Zalety</th>
            <th>Wady</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Binary</td>
            <td>Bardzo szybki, kompaktowy</td>
            <td>Nieczytelny, mniej bezpieczny</td>
          </tr>
          <tr>
            <td>XML</td>
            <td>Czytelny, powszechnie wspierany</td>
            <td>Duży rozmiar pliku</td>
          </tr>
          <tr>
            <td>JSON</td>
            <td>Lekki, szybki, idealny do API</td>
            <td>Mniej dokładny przy typach złożonych</td>
          </tr>
        </tbody>
      </table>

      <h3>Dobre praktyki</h3>
      <ul>
        <li>Unikaj serializacji danych poufnych (np. haseł, kluczy API).</li>
        <li>Do plików konfiguracyjnych i API wybieraj JSON lub XML.</li>
        <li>
          Używaj opcji <code>WriteIndented</code> tylko w celach debugowania.
        </li>
        <li>Przy dużych zbiorach danych stosuj strumieniową serializację.</li>
        <li>Zawsze obsługuj wyjątki podczas odczytu i zapisu plików.</li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>
        Serializacja to potężne narzędzie pozwalające na zapis i odtwarzanie
        obiektów. W zależności od potrzeb możesz wybrać format binarny
        (szybkość), XML (czytelność) lub JSON (lekkość i popularność). W
        nowoczesnych aplikacjach najczęściej używa się właśnie formatu JSON.
      </p>

      <p>
        W praktyce: używaj <code>System.Text.Json</code> dla API i konfiguracji,
        a XML dla kompatybilności z systemami starszego typu.
      </p>

      <br />
      <br />
      <br />
    </main>
  );
}
