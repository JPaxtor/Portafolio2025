import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    // CAMBIO CLAVE REFORZADO: Aumentamos el padding-bottom a pb-32.
    // Esto debería asegurar que el contenido termine muy por encima de la navbar fija.
    <div className="z-20 w-full min-h-screen bg-darkBg/60 pb-32">
      {/* Contenedor del contenido: Centra el contenido y define la estructura de rejilla */}
      <div className="z-20 grid items-center h-full max-w-6xl gap-10 p-6 mx-auto py-20 md:py-0 md:grid-cols-2">
        {/*
          1. Sección de la Imagen/Avatar
        */}
        <div className="flex items-center justify-center">
          <Image
            src="/home-4.png"
            priority
            width="800"
            height="800"
            alt="Avatar"
            // Clases para que la imagen sea responsiva y se ajuste al contenedor
            className="object-cover w-full max-w-sm md:max-w-lg"
          />
        </div>

        {/*
          2. Sección del Texto y Botones
        */}
        <div className="flex flex-col justify-center max-w-lg mx-auto md:mx-0">
          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-center sm:text-4xl md:text-left lg:text-5xl md:mb-8">
            Si puedes imaginarlo,
            <br /> puedes
            <TypeAnimation
              sequence={[" programarlo", 1000, " hacerlo", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-6 text-base text-gray-300 md:text-lg md:mx-0 md:mb-10">
            Como desarrollador full stack, me dedico a combinar diseño y
            funcionalidad para crear experiencias digitales impactantes y
            accesibles.
          </p>

          {/* Contenedor de Botones */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start md:gap-8">
            <a
              href="/portfolio"
              className="w-full text-center sm:w-auto px-6 py-3 transition-all border-2 cursor-pointer text-md rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            <a
              href="/contact"
              className="w-full text-center sm:w-auto px-6 py-3 transition-all border-2 cursor-pointer text-md text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
