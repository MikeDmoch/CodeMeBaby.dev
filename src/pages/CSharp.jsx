import { Link, Routes, Route, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CSharp() {
  const pages = import.meta.glob("./CSharp/*.jsx", { eager: true });
  const lessons = Object.values(pages).map(
    (page) => page.title || "Bez tytułu"
  );
  const location = useLocation();
  let i = 0;
  let pagesArr = [];
  let paths = [];

  for (const path in pages) {
    pagesArr[i] = pages[path];
    paths[i] = path.replace(".", "").replace(".jsx", "");
    i++;
  }

  const isLessonPage = location.pathname !== "/CSharp";

  return (
    <div>
      {!isLessonPage ? (
        <>
          <h1>C# --- UNDER CONSTRUCTION ---</h1>
          <ul className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-1">
            {lessons.map((lesson, index) => (
              <li
                className="p-5 m-2 bg-zinc-800 rounded hover:bg-zinc-700"
                key={index}
              >
                <Link to={paths[index]}>{index + 1 + ". " + lesson}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <Link to={"/CSharp"}>
            <ArrowLeft />
          </Link>
        </div>
      )}

      <Routes>
        {Object.entries(pages).map(([path, component]) => {
          const routePath = path.replace(".", "").replace(".jsx", "");
          return (
            <Route
              key={routePath}
              path={routePath.replace("/CSharp", "")}
              element={<component.default />}
            />
          );
        })}
      </Routes>
    </div>
  );
}
