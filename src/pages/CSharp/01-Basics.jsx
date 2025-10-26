export const title = "Wprowadzenie do pisania kodu";

export default function CSharp_Basics() {
  return (
    <main>
      <div className="header-container">
        <h1>{title} - Kompleksowy Przewodnik</h1>
      </div>

      <h2>Historia</h2>
      <p>
        C# to język programowania stworzony przez Microsoft na początku lat 2000
        jako część platformy .NET - pierwsza wersja pojawiła się w 2002 roku i
        od tego czasu C# dynamicznie się rozwija. Język ten łączy cechy C++ i
        Javy, oferując nowoczesną składnię, obiektowe podejście do programowania
        oraz wsparcie dla różnych paradygmatów, w tym programowania funkcyjnego.
      </p>

      <h2>Zastosowania</h2>
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

      <h2>Platforma .NET</h2>
      <p>
        .NET to wszechstronne i wydajne środowisko programistyczne stworzone
        przez Microsoft, które pozwala na budowanie różnorodnych aplikacji.
        Umożliwia programowanie zarówno dla systemów Windows, jak i innych
        platform. .NET łączy w sobie wiele technologii, co czyni go uniwersalnym
        ekosystemem do tworzenia nowoczesnych rozwiązań.
      </p>

      <h3>Kluczowe cechy platformy .NET</h3>
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
          <strong>Bogaty zestaw narzędzi</strong> – dostęp do frameworków,
          bibliotek i gotowych komponentów znacząco przyspiesza rozwój
          oprogramowania.
        </li>
        <li>
          <strong>Integracja z chmurą</strong> – pełna współpraca z Microsoft
          Azure umożliwia łatwe wdrażanie i skalowanie aplikacji chmurowych.
        </li>
      </ul>

      <h2>Środowisko programistyczne</h2>
      <p>
        Aby pisać aplikacje w C#, potrzebne jest odpowiednie środowisko pracy –
        czyli edytor lub IDE (zintegrowane środowisko programistyczne).
        Najpopularniejsze z nich to <strong>Visual Studio</strong> i{" "}
        <strong>Visual Studio Code</strong>.
      </p>
      <p>
        Visual Studio to w pełni funkcjonalne IDE, zawierające wszystkie
        potrzebne narzędzia do tworzenia i debugowania aplikacji. Visual Studio
        Code (VS Code) jest natomiast lekkim edytorem tekstu, który dzięki
        rozszerzeniom można dostosować do wielu języków i frameworków.
      </p>

      <h3>Porównanie Visual Studio i Visual Studio Code</h3>
      <table>
        <thead>
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
            <td>Tworzenie aplikacji .NET, C++, Python, Java</td>
            <td>Uniwersalny edytor dla wielu języków</td>
          </tr>
          <tr>
            <td>Wydajność</td>
            <td>Wymaga więcej zasobów</td>
            <td>Lekkie i szybkie</td>
          </tr>
          <tr>
            <td>Obsługiwane języki</td>
            <td>C#, F#, VB, C++, Python</td>
            <td>JavaScript, TypeScript, Python, Go i inne</td>
          </tr>
          <tr>
            <td>Obsługa projektów</td>
            <td>Rozbudowane zarządzanie projektami</td>
            <td>Prostsze – opiera się na folderach</td>
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
            <td>Pluginy (mniej niż VS Code)</td>
            <td>Bogaty marketplace z tysiącami rozszerzeń</td>
          </tr>
          <tr>
            <td>Cena</td>
            <td>Wersja Community darmowa, Pro/Enterprise płatne</td>
            <td>Całkowicie darmowy</td>
          </tr>
          <tr>
            <td>Platformy</td>
            <td>Tylko Windows</td>
            <td>Windows, macOS, Linux</td>
          </tr>
        </tbody>
      </table>

      <p>
        Wybór pomiędzy Visual Studio a VS Code zależy od rodzaju projektu i
        preferencji użytkownika. Do dużych aplikacji .NET lepiej sprawdza się
        Visual Studio, natomiast VS Code to świetne narzędzie do lżejszych
        projektów, skryptów i nauki programowania.
      </p>
    </main>
  );
}
