import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Cierra sesión con Google
    googleLogout();

    // Cambia el estado de autenticación
    setIsAuthenticated(false);

    // Lógica adicional (opcional): redirigir al usuario, limpiar tokens, etc.
    console.log('Sesión cerrada correctamente.');
  };

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
            <Link to="/" className="hover:text-blue-400 transition duration-300">
              Home Post
            </Link>
          </li>
          {!isAuthenticated ? (
            <li>
              <Link
                to="/login"
                className="hover:text-blue-400 transition duration-300"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="hover:text-blue-400 transition duration-300"
              >
                Cerrar Sesión
              </button>
            </li>
          )}
          <li>
            <Link
              to="/users"
              className="hover:text-blue-400 transition duration-300"
            >
              {isAuthenticated ? 'Mostrar Usuarios' : ''}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
