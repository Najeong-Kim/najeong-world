"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-[#D32F2F]/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-title text-white neon-text-red">
          <span className="flicker-slow">T</span>hrill<span className="flicker-fast">D</span>eck
        </h1>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#" className="nav-link active">
              Home
            </a>
            <a href="#" className="nav-link">
              Reviews
            </a>
            <a href="#" className="nav-link">
              Horror Cards
            </a>
            <a href="#" className="nav-link">
              Community
            </a>
          </nav>
          <button className="px-4 py-2 bg-[#D32F2F] text-white rounded hover:bg-[#B71C1C] transition-all neon-glow-red">
            Login
          </button>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-black/90 backdrop-blur-md transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"}`}
      >
        <nav className="flex flex-col space-y-4 px-4 pb-4">
          <a href="#" className="nav-link active">
            Home
          </a>
          <a href="#" className="nav-link">
            Reviews
          </a>
          <a href="#" className="nav-link">
            Horror Cards
          </a>
          <a href="#" className="nav-link">
            Community
          </a>
          <button className="px-4 py-2 bg-[#D32F2F] text-white rounded hover:bg-[#B71C1C] transition-all neon-glow-red">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
