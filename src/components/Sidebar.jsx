// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="pt-3 bg-zinc-800 rounded">
      {/* <img src={logo} alt="Logo" /> */}
      <ul>
        <li className="px-4 py-2">
          <Link to="/JavaScript" className=" text-gray-100">
            JavaScript
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link to="/HTML&CSS" className="text-gray-100">
            HTML & CSS
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link to="/React" className="text-gray-100">
            React
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link to="/CSharp" className="text-gray-100">
            CSharp
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link to="/CPLusPlus" className="text-gray-100">
            C++
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
