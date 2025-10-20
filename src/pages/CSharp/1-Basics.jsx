export default function CSharp_Basics() {
  return (
    <main>
      <div>
        <h1>Wprowadzenie do pisania kodu w języku C#</h1>
      </div>
      <h3>Historia</h3>
      <p>
        C# to język programowania stworzony przez Microsoft na początku lat 2000
        jako część platformy .NET - pierwsza wersja pojawiła się w 2002 roku i
        od tego czasu C# dynamicznie się rozwija. Język ten łączy cechy C++ i
        Javy, oferując nowoczesną składnię, obiektowe podejście do programowania
        oraz wsparcie dla różnych paradygmatów, w tym programowania funkcyjnego.
      </p>
      <h3>Zastosowania</h3>
      <ul>
        <li>
          <strong>Aplikacje desktopowe</strong> – dzięki Windows Forms
          (WinForms) i Windows Presentation Foundation (WPF).
        </li>
        <li>
          <strong>Aplikacje webowe</strong> – ASP.NET Core pozwala budować
          nowoczesne strony internetowe.
        </li>
        <li>
          <strong>Gry komputerowe</strong> – silnik Unity wykorzystuje C# jako
          główny język skryptowy.
        </li>
        <li>
          <strong>Aplikacje mobilne</strong> – Xamarin (teraz .NET MAUI)
          umożliwia tworzenie aplikacji na iOS i Androida.
        </li>
        <li>
          <strong>Aplikacje chmurowe</strong> – platforma Azure wykorzystuje
          .NET do różnych rozwiązań cloudowych.
        </li>
      </ul>
      <h3>Platforma .NET</h3>
      <p>
        Wszechstronne i wydajne środowisko programistyczne stworzone przez
        Microsoft, które pozwala na budowanie różnorodnych aplikacji. Umożliwia
        programowanie zarówno dla systemów Windows, jak i dla innych rozwiązań.
      </p>

      <h3>Kluczowe cechy .NET:</h3>
      <ul>
        <li>
          <strong>Jeden ekosystem</strong> – pozwala na tworzenie aplikacji
          desktopowych, webowych, mobilnych, chmurowych, IoT i gier w jednym
          środowisku.
        </li>
        <li>
          <strong>Wieloplatformowość</strong> – dzięki .NET można budować
          aplikacje działające na Windows, macOS i Linux.
        </li>
        <li>
          <strong>Wydajność i optymalizacja</strong> – .NET zapewnia wysoką
          wydajność, co sprawia, że jest często wybierany do aplikacji o dużym
          obciążeniu.
        </li>
        <li>
          <strong>Bogaty zestaw narzędzi</strong> – dostęp do rozbudowanych
          frameworków, narzędzi i gotowych komponentów ułatwia pracę
          programistów.
        </li>
        <li>
          <strong>Łatwość integracji z chmurą</strong> – świetna współpraca z
          Microsoft Azure umożliwia szybkie wdrażanie aplikacji chmurowych.
        </li>
      </ul>

      <h3>Środowisko programistyczne</h3>
      <p>
        Aby pisać aplikacje C# należy pobrać odpowiednie środowisko, które można
        powiedzieć, że jest zaawansowanym edytorem tekstu przeznaczonym do
        pisania kodu, które ma dodatkowe możliwości związane z głównym
        zastosowaniem. Najpopularniejsze środowiska to{" "}
        <strong>
          Visual Studio (IDE) i Visual Studio Code (edytor tekstu)
        </strong>
        . VSCode jest rozwiązaniem w pełni darmowym, natomiast Visual Studio
        posiada wersję Community, która również jest darmowa dla użytkowników
        indywidualnych i ma pewne ograniczenia w stosunku do płatnej wersji
        Professional. Co więcej, VSCode jest lżejszy i bardziej uniwersalny, a
        Visual Studio oferuje bardziej rozbudowane narzędzia i wsparcie dla
        różnych typów projektów.
      </p>
      <h3>Porównanie Visual Studio i Visual Studio Code</h3>
      <table className="min-w-full">
        <thead className="flex justify-center">
          <tr>
            <th>Cecha</th>
            <th>Visual Studio (VS)</th>
            <th>Visual Studio Code (VS Code)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typ narzędzia</td>
            <td>Pełne IDE</td>
            <td>Lekki edytor kodu</td>
          </tr>
          <tr>
            <td>Producent</td>
            <td>Microsoft</td>
            <td>Microsoft</td>
          </tr>
          <tr>
            <td>Zastosowanie</td>
            <td>Tworzenie aplikacji w .NET, C++, Python, Java</td>
            <td>Uniwersalny edytor dla wielu języków</td>
          </tr>
          <tr>
            <td>Waga i wydajność</td>
            <td>Cięższe, wymaga więcej zasobów</td>
            <td>Lekkie i szybkie</td>
          </tr>
          <tr>
            <td>Obsługiwane języki</td>
            <td>Głównie .NET (C#, VB, F#), C++, Python</td>
            <td>Wiele języków (JavaScript, Python, Go, itp.)</td>
          </tr>
          <tr>
            <td>Obsługa projektów</td>
            <td>Rozbudowane zarządzanie projektami</td>
            <td>Prostsze, opiera się na folderach</td>
          </tr>
          <tr>
            <td>Debugowanie</td>
            <td>Wbudowany debugger dla .NET i innych języków</td>
            <td>Debugger wymaga rozszerzeń</td>
          </tr>
          <tr>
            <td>Wsparcie dla Git</td>
            <td>Wbudowana obsługa Git</td>
            <td>Wbudowana obsługa Git</td>
          </tr>
          <tr>
            <td>Rozszerzalność</td>
            <td>Pluginy, ale mniej niż w VS Code</td>
            <td>Tysiące rozszerzeń w Marketplace</td>
          </tr>
          <tr>
            <td>Cena</td>
            <td>Community darmowa, ale wersje Pro i Enterprise płatne</td>
            <td>Całkowicie darmowy</td>
          </tr>
          <tr>
            <td>Platformy</td>
            <td>Windows</td>
            <td>Windows, Mac, Linux</td>
          </tr>
        </tbody>
      </table>
      <p>Wybór między oprogramowaniami zależy od indywidualnych preferencji.</p>
    </main>
  );
}
