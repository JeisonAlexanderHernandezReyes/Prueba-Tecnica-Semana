import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Título o Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Blog App
          </Link>
        </div>

        {/* Menú */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-blue-400 transition duration-300"
            >
              Ingresar
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="hover:text-blue-400 transition duration-300"
            >
              Mostrar Usuarios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
