// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="pt-3 bg-zinc-800 rounded">
      {/* <img src={logo} alt="Logo" /> */}
      <ul>
        <li className="px-4 py-2">
          <Link to="/home" className=" text-gray-100">
            O mnie
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link to="/services" className="text-gray-100">
            Zakres usług
          </Link>
        </li>
        <li className="px-4 py-2">
          <Link to="/contact" className="text-gray-100">
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
