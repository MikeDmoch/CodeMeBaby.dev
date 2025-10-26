import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-zinc-800 rounded self-start">
      <ul>
        {[
          { path: "/JavaScript", label: "JavaScript" },
          { path: "/HTML&CSS", label: "HTML & CSS" },
          { path: "/React", label: "React" },
          { path: "/CSharp", label: "C#" },
          { path: "/CPlusPlus", label: "C++" },
        ].map((item, index) => (
          <li
            key={item.path}
            className=" hover:bg-zinc-700 border-b border-zinc-700 last:border-b-0 rounded transition"
          >
            <Link to={item.path} className="px-4 py-2 block text-gray-100">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
