import { useInView } from "../../hooks/useInView";

const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="nosotros" className="bg-white py-20 md:py-28 px-6 md:px-10">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* ═══ MISIÓN ═══ */}
        <div className="mb-12 md:mb-16">
          <h3 className="font-serif italic text-4xl md:text-5xl text-lume-gold mb-4">
            Misión
          </h3>
          <p className="text-lume-black text-sm md:text-base leading-relaxed">
            Crear experiencias únicas y memorables, brindando un servicio de calidad, creativo y personalizado que permita a nuestros clientes disfrutar y hacer de cada celebración un momento verdaderamente especial.
          </p>
        </div>

        {/* ═══ VISIÓN ═══ */}
        <div>
          <h3 className="font-serif italic text-4xl md:text-5xl text-lume-gold mb-4">
            Visión
          </h3>
          <p className="text-lume-black text-sm md:text-base leading-relaxed">
            Ser una empresa reconocida por transformar momentos especiales en experiencias inolvidables, destacándonos por nuestra creatividad, innovación, calidad y compromiso con cada uno de nuestros clientes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;