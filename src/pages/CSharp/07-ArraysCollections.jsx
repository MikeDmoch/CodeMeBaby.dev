import CodeBlock from "../../components/CodeBlock";
export const title = "Kolekcje i tablice";
export default function ArraysCollections() {
  return (
    <main>
      <div>
        <h1>{title} - Kompleksowy przewodnik</h1>
      </div>

      <h3>Wprowadzenie</h3>
      <p>
        Pracując w C#, często spotykamy się z koniecznością przechowywania i
        manipulowania danymi. Jednym z podstawowych sposobów przechowywania
        wielu elementów są tablice oraz kolekcje. W tym artykule omówimy oba
        podejścia, ich zalety, ograniczenia oraz najlepsze praktyki stosowania w
        rzeczywistych projektach.
      </p>

      <h3>Tablice</h3>
      <h4>Definicja i deklaracja</h4>
      <p>
        Tablica (ang. array) to struktura danych umożliwiająca przechowywanie
        wielu elementów tego samego typu w sposób sekwencyjny. Indeksowanie
        tablic zaczyna się od zera, a nie od jedynki.
      </p>

      <CodeBlock
        language="csharp"
        code={`int[] liczby = new int[5]; // Tablica z 5 elementami (domyślnie wypełnona zerami)
int[] liczby2 = {1, 2, 3, 4, 5}; // Inicjalizacja wartościami
string[] slowa = new string[] {"C#", "Java", "Python"}; // Inna składnia`}
      />

      <p>
        Tablice mogą być jednowymiarowe, wielowymiarowe oraz tablicami
        nieregularnymi (jagged arrays).
      </p>

      <h4>Operacje na tablicach</h4>
      <CodeBlock
        language="csharp"
        code={`int pierwszaLiczba = liczby2[0]; // Pobranie pierwszego elementu
liczby2[2] = 10; // Zmiana wartości trzeciego elementu
int dlugoscTablicy = liczby2.Length; // Pobranie długości tablicy`}
      />

      <p>Iteracja:</p>
      <CodeBlock
        language="csharp"
        code={`foreach (var liczba in liczby2) {
    Console.WriteLine(liczba);
}`}
      />

      <p>Sortowanie:</p>
      <CodeBlock language="csharp" code={`Array.Sort(liczby2);`} />

      <p>Kopiowanie:</p>
      <CodeBlock
        language="csharp"
        code={`int[] kopia = new int[liczby2.Length];
Array.Copy(liczby2, kopia, liczby2.Length);`}
      />

      <p>Znalezienie indeksu elementu:</p>
      <CodeBlock
        language="csharp"
        code={`int index = Array.IndexOf(liczby2, 3);`}
      />

      <p>Odwrócenie tablicy:</p>
      <CodeBlock language="csharp" code={`Array.Reverse(liczby2);`} />

      <p>Czyszczenie zawartości tablicy:</p>
      <CodeBlock
        language="csharp"
        code={`Array.Clear(liczby2, 0, liczby2.Length);`}
      />

      <p>Dynamiczne kopiowanie tablicy z rozszerzeniem:</p>
      <CodeBlock language="csharp" code={`Array.Resize(ref liczby2, 10);`} />

      <h3>Kolekcje</h3>
      <p>
        Kolekcje w C# to bardziej elastyczne struktury danych niż tablice. Nie
        mają one statycznie określonego rozmiaru i często oferują dodatkowe
        funkcje ułatwiające zarządzanie danymi.
      </p>

      <h4>Rodzaje kolekcji</h4>
      <p>Podstawowe typy:</p>
      <ul>
        <li>{`List<T>`}</li>
        <li>{`Dictionary<TKey, TValue>`}</li>
        <li>{`Queue<T>`}</li>
        <li>{`Stack<T>`}</li>
        <li>{`HashSet<T>`}</li>
      </ul>

      <h4>List – Najczęściej używana kolekcja</h4>
      <p>
        List to dynamiczna kolekcja elementów tego samego typu. Możemy dodawać,
        usuwać, sortować oraz wyszukiwać elementy w kolekcji.
      </p>
      <CodeBlock
        language="csharp"
        code={`List<int> liczby = new List<int> {1, 2, 3};
liczby.Add(4);
liczby.Remove(2);
Console.WriteLine(liczby.Count);
liczby.Sort();
liczby.ForEach(Console.WriteLine);
liczby.Clear();`}
      />

      <p>
        List pozwala na dynamiczne dodawanie i usuwanie elementów, co czyni ją
        bardziej elastyczną niż tablice.
      </p>

      <h4>Dictionary – Kolekcja klucz-wartość</h4>
      <p>
        Słownik pozwala na szybkie wyszukiwanie wartości na podstawie klucza:
      </p>
      <CodeBlock
        language="csharp"
        code={`// Tworzenie słownika, który przechowuje oceny studentów
Dictionary<string, int> oceny = new Dictionary<string, int>();

// Dodanie oceny dla Adama
oceny["Adam"] = 70;

// Dodanie oceny dla Ewy
oceny.Add("Ewa", 95);

// Wyświetlenie oceny Adama
Console.WriteLine(oceny["Adam"]);`}
      />

      <h4>Queue – Kolejka</h4>
      <p>
        Kolejka to kolekcja FIFO (First In, First Out), w której elementy są
        pobierane w kolejności, w jakiej zostały dodane.
      </p>
      <CodeBlock
        language="csharp"
        code={`// Tworzenie kolejki znaków
Queue<string> kolejka = new Queue<string>();

// Dodanie elementów do kolejki
kolejka.Enqueue("A");
kolejka.Enqueue("B");

// Usunięcie pierwszego elementu z kolejki
kolejka.Dequeue();`}
      />

      <h4>Stack – Stos</h4>
      <p>
        Stos to kolekcja LIFO (Last In, First Out), w której ostatni dodany
        element jest pierwszym, który zostanie usunięty. Stos jest często
        używany w algorytmach, takich jak przetwarzanie wyrażeń matematycznych,
        odwracanie kolejności elementów lub implementacja rekurencji.
      </p>
      <CodeBlock
        language="csharp"
        code={`// Tworzenie stosu liczb całkowitych
Stack<int> stos = new Stack<int>();

// Dodanie elementów na stos
stos.Push(1);
stos.Push(2);

// Usunięcie ostatniego elementu ze stosu
stos.Pop();`}
      />

      <h4>HashSet – Zbiór unikalnych wartości</h4>
      <p>
        HashSet to kolekcja, która przechowuje unikalne elementy i pozwala na
        szybkie operacje dodawania, usuwania oraz sprawdzania, czy element już
        istnieje.
      </p>
      <CodeBlock
        language="csharp"
        code={`// Tworzenie HashSet z unikalnymi liczbami
HashSet<int> liczby = new HashSet<int> {1, 2, 3, 4};

// Dodanie nowego elementu
liczby.Add(5);

// Próba dodania duplikatu (nie zostanie dodany)
liczby.Add(2);

// Sprawdzenie, czy element istnieje w zbiorze
Console.WriteLine(liczby.Contains(3)); // True

// Usunięcie elementu ze zbioru
liczby.Remove(4);`}
      />

      <p>Operacje Add, Remove i Contains działają w czasie O(1).</p>

      <h3>Podsumowanie</h3>
      <p>
        Tablice oferują wydajność i prostotę, ale są ograniczone sztywnym
        rozmiarem. Kolekcje zapewniają większą elastyczność i dodatkowe
        funkcjonalności, ale mogą być mniej wydajne pod względem pamięci i
        szybkości operacji. Wybór między nimi zależy od konkretnego scenariusza
        programistycznego.
      </p>
    </main>
  );
}
