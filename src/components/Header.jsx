import { Link } from "react-router-dom";

export default function Header() {
  //   return (
  //     <header className="bg-blue-500 flex justify-center">
  //       <nav>
  //         <ul className="flex">
  //           <li className="px-8 py-4">
  //             <Link to="/home" className="text-white">
  //               O mnie
  //             </Link>
  //           </li>
  //           <li className="px-8 py-4">
  //             <Link to="/services" className="text-white">
  //               Zakres usług
  //             </Link>
  //           </li>
  //           <li className="px-8 py-4">
  //             <Link to="/contact" className="text-white">
  //               Kontakt
  //             </Link>
  //           </li>
  //         </ul>
  //       </nav>
  //     </header>
  return (
    <header className="bg-zinc-800 flex text-gray-100 p-2 border-b border-zinc-700">
      <Link to="/home" className=" hover:rotate-3 transition">
        CodeMeBaby.dev{" "}
        {console.log(`
              /$$$$$$                  /$$          
             /$$__  $$                | $$          
            | $$  \__/  /$$$$$$   /$$$$$$$  /$$$$$$ 
            | $$       /$$__  $$ /$$__  $$ /$$__  $$
            | $$      | $$  \ $$| $$  | $$| $$$$$$$$
            | $$    $$| $$  | $$| $$  | $$| $$_____/
            |  $$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$$
            \______/  \______/  \_______/ \_______/

                😃 Witaj, deweloperze! Miłego kodowania! 🚀
            `)}
      </Link>
    </header>
  );
}
