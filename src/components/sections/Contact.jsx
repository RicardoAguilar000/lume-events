import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "../../hooks/useInView";

const Contact = () => {
  const { ref, isInView } = useInView();
  const formRef = useRef();

  // Estado del formulario
  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    tipoEvento: "",
    mensaje: "",
  });

  // Estado para mostrar feedback al usuario
  const [estadoEnvio, setEstadoEnvio] = useState("idle"); // idle | enviando | exito | error

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar envío del formulario con EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setEstadoEnvio("enviando");

    // Credenciales de EmailJS (desde variables de entorno)
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setEstadoEnvio("exito");
        setFormulario({
          nombre: "",
          telefono: "",
          tipoEvento: "",
          mensaje: "",
        });
        // Resetear el mensaje de éxito después de 4 segundos
        setTimeout(() => setEstadoEnvio("idle"), 4000);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setEstadoEnvio("error");
        setTimeout(() => setEstadoEnvio("idle"), 4000);
      });
  };

  return (
    <section id="contacto" className="bg-black py-20 md:py-28 px-6 md:px-10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* ═══ ENCABEZADO ═══ */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-lume-gold tracking-[0.3em] text-xs uppercase mb-4">
            ¿Tienes una celebración en mente?
          </p>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Hagámosla <br />
            <span className="italic text-lume-gold">inolvidable</span>
          </h2>

          {/* Línea decorativa con estrella */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gray-700"></div>
            <span className="text-lume-gold text-2xl">✦</span>
            <div className="h-px w-16 bg-gray-700"></div>
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Cuéntanos tu sueño y nosotros lo convertimos en realidad.
            <br />
            Cada detalle importa, cada momento cuenta.
          </p>
        </div>

        {/* ═══ DOS COLUMNAS: INFO + FORMULARIO ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* COLUMNA IZQUIERDA: DATOS DE CONTACTO */}
          <div>
            <p className="text-lume-gold tracking-[0.3em] text-xs uppercase mb-3">
              Encuéntranos
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-8">
              Contacto
            </h3>

            {/* Teléfono */}
            <a
              href="tel:+523113423869"
              className="flex items-center gap-4 mb-6 group"
            >
              <div className="w-12 h-12 border border-gray-700 flex items-center justify-center group-hover:border-lume-gold transition-colors duration-300">
                <svg className="w-5 h-5 text-lume-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase">Teléfono</p>
                <p className="text-white text-sm">311-342-3869</p>
              </div>
            </a>

            {/* Correo */}
            <a
              href="mailto:lumee.events@gmail.com"
              className="flex items-center gap-4 mb-10 group"
            >
              <div className="w-12 h-12 border border-gray-700 flex items-center justify-center group-hover:border-lume-gold transition-colors duration-300">
                <svg className="w-5 h-5 text-lume-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase">Correo</p>
                <p className="text-white text-sm">lumee.events@gmail.com</p>
              </div>
            </a>

            {/* Redes sociales */}
            <p className="text-lume-gold tracking-[0.3em] text-xs uppercase mb-4">
              Redes sociales
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-700 flex items-center justify-center hover:border-lume-gold transition-colors duration-300"
                aria-label="Instagram">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-700 flex items-center justify-center hover:border-lume-gold transition-colors duration-300"
                aria-label="Facebook">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-700 flex items-center justify-center hover:border-lume-gold transition-colors duration-300"
                aria-label="TikTok">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div>
            <h3 className="text-white text-lg mb-6">
              Cuéntanos sobre tu evento
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

              {/* Fila: Nombre + Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-500 text-xs tracking-widest uppercase block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-gray-900 border border-gray-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-lume-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs tracking-widest uppercase block mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formulario.telefono}
                    onChange={handleChange}
                    required
                    placeholder="XXX XXX XXXX"
                    className="w-full bg-gray-900 border border-gray-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-lume-gold transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Tipo de evento */}
              <div>
                <label className="text-gray-500 text-xs tracking-widest uppercase block mb-2">
                  Tipo de evento
                </label>
                <select
                  name="tipoEvento"
                  value={formulario.tipoEvento}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-lume-gold transition-colors duration-300"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Letras Gigantes">Letras Gigantes</option>
                  <option value="Números Gigantes">Números Gigantes</option>
                  <option value="Chisperos & Pirotecnia">Chisperos & Pirotecnia</option>
                  <option value="Decoración con Globos">Decoración con Globos</option>
                  <option value="Cenas Románticas">Cenas Románticas</option>
                  <option value="Revelaciones de Género">Revelaciones de Género</option>
                  <option value="Baby Showers">Baby Showers</option>
                  <option value="Pedidas de Novia">Pedidas de Novia</option>
                  <option value="Tepees">Tepees</option>
                  <option value="Graduaciones">Graduaciones</option>
                  <option value="Cumpleaños">Cumpleaños</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="text-gray-500 text-xs tracking-widest uppercase block mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Cuéntanos los detalles de tu celebración..."
                  className="w-full bg-gray-900 border border-gray-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-lume-gold transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              {/* Botón con feedback visual */}
              <button
                type="submit"
                disabled={estadoEnvio === "enviando"}
                className={`w-full font-medium py-4 tracking-widest uppercase text-sm transition-colors duration-300 ${
                  estadoEnvio === "enviando"
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : estadoEnvio === "exito"
                    ? "bg-green-600 text-white"
                    : estadoEnvio === "error"
                    ? "bg-red-600 text-white"
                    : "bg-lume-orange text-lume-black hover:bg-lume-gold"
                }`}
              >
                {estadoEnvio === "enviando" && "Enviando..."}
                {estadoEnvio === "exito" && "¡Mensaje enviado! ✓"}
                {estadoEnvio === "error" && "Error, intenta de nuevo"}
                {estadoEnvio === "idle" && "Contactanos"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;