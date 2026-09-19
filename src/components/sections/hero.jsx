import { useEffect, useState } from "react";
import portada from "../../assets/img/Portada 1.jpeg";
import portada2 from "../../assets/img/Portada 2.jpeg";
import portada3 from "../../assets/img/Portada 3.jpeg";

const Hero = () => {
  const imagenes = [portada, portada2, portada3];

  const [indice, setIndice] = useState(0);

  console.log(imagenes);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      id="inicio"
      className="relative m h-[80vh] md:h-[85vh] lg:h-screen  flex flex-col items-center justify-center text-center px-4 bg-cover bg-center "
      style={{ backgroundImage: `url(${imagenes[indice]})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}

      <div className="relative z-10 max-w-4x1">
        <p className="italic text-lume-gold tracking-[0.3em] text-[12px] md:text-sx mb-6 md:mb-8">
          Eventos Únicos, Detalles Inolvidables
        </p>
        <h1 className="font-serif text-white text-6xl md:text-8x1 lg:text-9x1 leading-none mb-8 md:mb-12">
          Lumé <br />
          <span className="italic">Events</span>
        </h1>

        <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          {/* Lienas doradas */}
          <div className="h-px w-10 md:w-16 bg-lume-gold"></div>
          <p className="text-lume-gold text-[12px] md:text-xs tracking-[0.2em] ">
            Creatividad * Pasión * Detalle
          </p>
          {/* Lienas doradas */}
          <div className="h-px w-10 md:w-16 bg-lume-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
