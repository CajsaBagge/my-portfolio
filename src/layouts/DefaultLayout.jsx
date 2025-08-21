import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

export default function DefaultLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Navbar */}
      <header className="relative flex justify-between items-center p-4 border-b shadow-md bg-white">
        {/* Logo / Namn */}
        <h1 className="text-xl font-bold text-orange-600">C</h1>

        {/* Hamburger (endast mobil) */}
        <button
          className="sm:hidden p-2 rounded hover:bg-orange-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 sm:gap-8 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent p-4 sm:p-0 z-50`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }
          >
            Hem
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }
          >
            Om mig
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }
          >
            Projekt
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }
          >
            Kontakt
          </NavLink>
        </nav>
      </header>

      {/* Här laddas respektive sida */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-orange-600 text-white text-center py-4">
        © {new Date().getFullYear()} Cajsa Bagge - Portfolio
      </footer>
    </div>
  );
}
