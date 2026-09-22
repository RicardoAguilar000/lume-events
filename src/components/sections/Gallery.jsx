import { galeria } from "../../data/galeriaData";
import { useInView } from "../../hooks/useInView";

const Gallery = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="galeria" className="bg-black py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lume-gold tracking-[0.3em] text-xs uppercase mb-4">
            Nuestro Trabajo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white italic">
            Galería de Momentos
          </h2>
        </div>

        {/* Grid de imágenes */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* FOTO 1: Grande (ocupa 2 columnas y 2 filas) */}
          <div className="md:col-span-2 md:row-span-2 overflow-hidden">
            <img
              src={galeria[0].imagen}
              alt={galeria[0].alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* FOTO 2: Arriba derecha */}
          <div className="overflow-hidden">
            <img
              src={galeria[1].imagen}
              alt={galeria[1].alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* FOTO 3: Abajo derecha */}
          <div className="overflow-hidden">
            <img
              src={galeria[2].imagen}
              alt={galeria[2].alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* FOTO 4: Abajo izquierda (dentro de la columna grande) */}
          <div className="overflow-hidden">
            <img
              src={galeria[3].imagen}
              alt={galeria[3].alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* FOTO 5: Abajo centro (dentro de la columna grande) */}
          <div className="overflow-hidden">
            <img
              src={galeria[4].imagen}
              alt={galeria[4].alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;