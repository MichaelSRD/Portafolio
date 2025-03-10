import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <div className=" order-1 flex items-center mb-12 ">
        <span>
          <img src="/individual.gif" alt="foto de perfil" className="w-[50px]  " />
        </span>
        <h3 className=" dark:text-[#ffffff] text-[#111111] text-4xl font-black ">Sobre Mí</h3>
      </div>
      <div className=" flex gap-8 flex-col items-center justify-center space-y-8 ">
        <Image
          width={200}
          height={200}
          src="/FotoPerfil2.png"
          alt="foto de perfil  "
          className="order-2 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl dark:bg-white/30 dark:ring-white/30 bg-black/20  ring-1 ring-black/70  "
        />
        <div className=" [&>p]:mb-4 order-3 dark:text-[#ffffff]  text-[#111111] text-pretty [&>p>strong]:text-[#44b544]  font-light ">
          <p className="   ">
            !Hola! Soy Michael Robayo Diaz, mi camino comenzó en el mundo
            multimedia, donde me gradué como <strong>Tecnólogo en Producción Multimedia.</strong> 
            Durante esa etapa, Descubrí mi fascinación por el mundo del        <strong>desarrollo web.</strong> 
          </p>
          <p>
           <strong>Mi especialidad es el front-end</strong>, sin embargo, el estudio del campo
            del desarrollo web me ha llevado a adquirir un  <strong> amplio conocimiento
            en back-end, permitiéndome desarrollar sitios web mas completos.</strong>
          </p>
          <p>
            Me considero un apasionado por aprender y mejorar constantemente.
            Disfruto enfrentando nuevos desafíos y trabajando en equipo para
            crear soluciones que generen una buena experiencia a los usuarios.
            <strong> ¡Siempre estoy listo para dar lo mejor de mí en cada proyecto!</strong>
          </p>
        </div>
      </div>
    </>
  );
}
