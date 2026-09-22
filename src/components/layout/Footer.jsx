const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 md:py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenido del footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex-shrink-0">
            <p className="font-serif text-3xl md:text-4xl text-white italic">
              Lumé
            </p>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs md:text-sm text-center">
            2026 Lumé Events © Todos los derechos reservados
          </p>

          {/* Contacto rápido */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs md:text-sm">
            <a
              href="tel:+523113423869"
              className="text-gray-400 hover:text-lume-gold transition-colors duration-300"
            >
              311-342-3869
            </a>
            <span className="hidden md:inline text-gray-700">|</span>
            <a
              href="mailto:lumee.events@gmail.com"
              className="text-gray-400 hover:text-lume-gold transition-colors duration-300"
            >
              lumee.events@gmail.com
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;