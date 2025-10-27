// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-zinc-800 rounded h-fit">
      {/* <img src={logo} alt="Logo" /> */}
      <ul>
        <li className="border-b border-zinc-700 rounded-t hover:bg-zinc-700">
          <Link
            to="/JavaScript"
            className="block w-full h-full px-4 py-2 text-gray-100"
          >
            JavaScript
          </Link>
        </li>
        <li className="border-b border-zinc-700 hover:bg-zinc-700">
          <Link
            to="/HTML&CSS"
            className="block w-full h-full px-4 py-2 text-gray-100"
          >
            HTML & CSS
          </Link>
        </li>
        <li className="border-b border-zinc-700 hover:bg-zinc-700">
          <Link
            to="/React"
            className="block w-full h-full px-4 py-2 text-gray-100"
          >
            React
          </Link>
        </li>
        <li className="border-b border-zinc-700 hover:bg-zinc-700">
          <Link
            to="/CSharp"
            className="block w-full h-full px-4 py-2 text-gray-100"
          >
            CSharp
          </Link>
        </li>
        <li className="hover:bg-zinc-700 rounded-b">
          <Link
            to="/CPlusPlus"
            className="block w-full h-full px-4 py-2 text-gray-100"
          >
            C++
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
