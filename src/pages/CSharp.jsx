import { Link, Routes, Route, useLocation } from "react-router-dom";

export default function CSharp() {
  const pages = import.meta.glob("./CSharp/*.jsx", { eager: true });
  const lessons = ["CSharp Basics", "First Code"];
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
  const currentLessonIndex = paths.findIndex((path) =>
    location.pathname.includes(path)
  );

  return (
    <div>
      {!isLessonPage ? (
        <>
          <h1>CSharp</h1>
          <ul>
            {lessons.map((lesson, index) => (
              <li key={index}>
                <Link to={paths[index]}>{lesson}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="flex justify-center">
          <h1>{lessons[currentLessonIndex]}</h1>
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
