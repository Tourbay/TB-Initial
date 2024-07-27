import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-2xl font-bold">TourBay</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-700" onClick={toggleMenu}>
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-14 right-4 bg-white shadow-md rounded-lg w-48 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
