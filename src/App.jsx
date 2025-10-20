import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import CSharp from "./pages/CSharp.jsx";
import "./index.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-zinc-900 text-zinc-200">
        <Header onToggle={() => setIsSidebarOpen((prev) => !prev)} />
        <div className="p-10 flex flex-1">
          <Sidebar
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          <div className="pl-10 flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/CSharp/*" element={<CSharp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
