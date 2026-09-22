import { useInView } from "../../hooks/useInView";
import video1 from "../../assets/video/video 1.mp4"; 
import video2 from "../../assets/video/video 2.mp4"; 

const Feature = () => {
  return (
    <>
      {/* BLOQUE 1: Pequeños gestos, grandes historias */}
      <FeatureBlock
        id="nosotros"
        subtitulo="Detalles que enamoran"
        titulo="Pequeños gestos, grandes historias"
        descripcion="Cada detalle cuenta. Creamos momentos especiales con ideas únicas que hacen que tus celebraciones sean realmente inolvidables."
        videoSrc={video1}
        fondo="bg-white"
        colorTexto="text-lume-black"
        invertido={false}
      />

      {/* BLOQUE 2: Casate conmigo */}
      <FeatureBlock
        subtitulo="Pedidas de matrimonio"
        titulo="Casate conmigo"
        descripcion="Hacemos de ese gran momento algo inolvidable. Sorprende a esa persona especial con una experiencia única, llena de emoción, luz y detalles que lo harán eterno."
        videoSrc={video2}
        fondo="bg-black"
        colorTexto="text-white"
        invertido={true}
      />
    </>
  );
};

// Sub-componente reutilizable
const FeatureBlock = ({
  id,
  subtitulo,
  titulo,
  descripcion,
  videoSrc,
  fondo,
  colorTexto,
  invertido,
}) => {
  const { ref, isInView } = useInView();

  return (
    <section
      id={id}
      className={`${fondo} py-20 md:py-28 px-6 md:px-10`}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Bloque de texto */}
        <div className={`${invertido ? "lg:order-2" : "lg:order-1"}`}>
          
          {/* Línea decorativa + subtítulo */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-lume-gold"></div>
            <p className="text-lume-gold tracking-[0.3em] text-xs uppercase">
              {subtitulo}
            </p>
            <div className="h-px w-10 bg-lume-gold"></div>
          </div>

          {/* Título */}
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl ${colorTexto} mb-6 leading-tight`}
          >
            {titulo}
          </h2>

          {/* Descripción */}
          <p
            className={`text-sm md:text-base leading-relaxed mb-8 ${
              invertido ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {descripcion}
          </p>

          {/* Ícono de corazón */}
          <svg
            className="w-8 h-8 text-lume-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>

        {/* Bloque de video */}
        <div
          className={`overflow-hidden shadow-xl ${
            invertido ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="aspect-video w-full bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;