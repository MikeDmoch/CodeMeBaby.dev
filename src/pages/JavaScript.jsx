import { Link, Routes, Route, useLocation } from "react-router-dom";

export default function JavaScript() {
  const pages = import.meta.glob("./JavaScript/*.jsx", { eager: true });
  const lessons = [];
  const location = useLocation();
  let i = 0;
  let pagesArr = [];
  let paths = [];

  for (const path in pages) {
    pagesArr[i] = pages[path];
    paths[i] = path.replace(".", "").replace(".jsx", "");
    i++;
  }

  const isLessonPage = location.pathname !== "/JavaScript";
  const currentLessonIndex = paths.findIndex((path) =>
    location.pathname.includes(path)
  );

  return (
    <div>
      {!isLessonPage ? (
        <>
          <h1>JavaScript</h1>
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
              path={routePath.replace("/JavaScript", "")}
              element={<component.default />}
            />
          );
        })}
      </Routes>
    </div>
  );
}
