import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            Jason James Suministros Médicos
          </div>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a href="#inicio" className="hover:text-blue-200 transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#negocio" className="hover:text-blue-200 transition-colors">
                Empresa
              </a>
            </li>
            <li>
              <a href="#productos" className="hover:text-blue-200 transition-colors">
                Productos
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-blue-200 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
