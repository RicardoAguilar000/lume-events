import { servicios } from "../../data/serviceData";
import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28 px-6 md:px-10 ">
      <div className="max-7x1 mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-lume-gold tracking-[0.3rem] text-xs uppercase mb-4">
            Lo que creamos
          </p>
          <h2 className="font-serif text-4xl md:text-6 text-lume-black mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Cada celebración merece ser único. Desde la idea hasta el último
            detalle, nosotros lo hacemos posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Forma implicita -> Sin return, ni llave */}
          {servicios.map((servicio) => (
            <ServiceCard
              key={servicio.id}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              imagen={servicio.imagen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
