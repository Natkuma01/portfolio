import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuBurger from "../../assets/nav/menuBurger.png";
import cross from "../../assets/nav/cross.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: "/about", label: "About Me" },
    { path: "/projects", label: "My Projects" },
    { path: "/skill", label: "My Skills" },
    { path: "/contact", label: "Contact Me" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-secondary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/portfolio"
          onClick={closeMenu}
          className="text-gray-700 font-extrabold text-2xl sm:text-3xl tracking-tight hover:text-gray-900 transition-colors"
        >
          Home
        </Link>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-bold text-base lg:text-lg transition-colors ${
                  isActive
                    ? "text-gray-900 underline decoration-2 underline-offset-4"
                    : "text-zinc-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 hover:bg-black/5 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? cross : menuBurger}
              alt={isOpen ? "Close menu" : "Open menu"}
              className="h-7 w-7 object-contain opacity-75"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-black/10 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md font-bold text-base ${
                  isActive
                    ? "bg-black/10 text-gray-900"
                    : "text-zinc-700 hover:bg-black/5 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
