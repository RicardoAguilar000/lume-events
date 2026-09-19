import { useEffect, useRef, useState } from "react";

export const useInView = (opciones = {}) => {
  const ref = useRef(null); //*Referencia al elemento que queremos mostrar

  const [isInView, setIsInView] = useState(false); //!Obtener estado, de inicio es falso, despues cambia a true

  useEffect(() => {
    const observer = new IntersectionObserver( //*Crear el observer = IntersectionObserver Api del navegador
      ([entry]) => {
        //*Si el elemento entra en el viewport
        if (entry.isIntersecting) {
          //!Obtiene el estado y anima
          setIsInView(true);
        } else {
          //! Si sale del viewport → false (para que se pueda animar de nuevo)
          setIsInView(false);
        }
      },

      {
        threshold: 0.15, //! Se activa cuando el 15% del elemento es visible
        ...opciones,
      },
    );
    // Empezamos a observar la referencia
    if (ref.current) {
      observer.observe(ref.current);
    }
    // Cleanup: dejamos de observar cuando el componente se desmonta
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  // Devolvemos la ref y el estado
  return { ref, isInView };
};
