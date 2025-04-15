import { Outlet, Link } from "react-router";
import { useState } from "react";

export default function DefaultLayout() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/your-background.jpg')",
      }}
    >
      <header className="flex flex-col justify-between items-center p-4 border-2 sm:items-start  border-purple-600">

        <button className="sm:hidden self-start mb-2"
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`${menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 sm:gap-10`}>
          <Link to="/" className="hover:underline">Hem</Link>
          <Link to="/about" className="hover:underline">Om mig</Link>
          <Link to="/projects" className="hover:underline">Projekt</Link>
          <Link to="/contact" className="hover:underline">Kontakt</Link>
        </nav>
      </header>

      <main >
        <Outlet />
      </main>


    </div>
  );
}