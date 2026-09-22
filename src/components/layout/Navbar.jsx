import logoLume from "../../assets/img/logoLume.jfif";
import { useState } from "react";

const Navbar = () => {
  const [movil, setMovl] = useState(false);

  const enlaces = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galeria", href: "#galeria" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black text-white pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="w-20 md:w-28 lg:w-32 ">
            <a href="">
              <img
                src={logoLume}
                alt="Logo Lumé"
                className="w-full h-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 text-sm ">
            {enlaces.map((enlace) => {
              return (
                <a
                  key={enlace.name}
                  href={enlace.href}
                  className="  hover:text-lume-gold transition-colors duration-300 "
                >
                  {enlace.name}
                </a>
              );
            })}
          </div>

          {/* Boton hamburguesa - Solo movil */}

          <button
            onClick={() => setMovl(!movil)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {movil ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu desplegable */}

      <div
        className={`md:hidden bg-black/95 absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out border-t border-gray-800 ${
          movil ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-sm">
          {enlaces.map((enlace) => (
            <a
              key={enlace.name}
              href={enlace.href}
              onClick={() => setMovil(false)}
              className="hover:text-lume-gold transition-colors duration-300"
            >
              {enlace.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
