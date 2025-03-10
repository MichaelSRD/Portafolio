'use client'
import { useEffect, useState } from "react";  
import AboutSection from "./components/layout/aboutSection";
import Footer from "./components/layout/footer";
import Header from "./components/layout/Header";
import TecSection from "./components/layout/tecSection";
import WorkSection from "./components/layout/works";
import Image from "next/image";
export default function Home() {

     // Estado para controlar si el usuario ha hecho scroll
     const [hasScrolled, setHasScrolled] = useState(false);

     const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }, // El 60% de la sección debe estar visible
    )

    // Observar todas las secciones
    document.querySelectorAll("section[id]").forEach((section) => {
      sectionObserver.observe(section)
    })

    return () => {
      sectionObserver.disconnect()
    }
  }, []);

     // Efecto para detectar el scroll
     useEffect(() => {
       const handleScroll = () => {
         if (window.scrollY > 0) {
           setHasScrolled(true); // Si el scroll es mayor que 0, cambia el estado
         } else {
           setHasScrolled(false); // Si no, vuelve al estado inicial
         }
       };
       
       handleScroll();
       // Agrega el listener para el evento de scroll
       window.addEventListener('scroll', handleScroll);
   
       // Limpia el listener al desmontar el componente
       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, []);
     
  const widthContent = "md:max-w-xl ";

  return (
    <div className=" grid grid-cols-1  justify-items-center  ">
      <div className={`${widthContent} pt-4 w-full `}>
        <div
          className={` w-max   sticky top-2 transition-colors duration-100 rounded-[20px] py-2 px-5 z-10 mx-auto bg-opacity-60 ${
            hasScrolled ? 'bg-white backdrop-blur-sm shadow-md  ' : 'bg-transparent'
            } `}
        >
          <Header activeSection={activeSection} />
        </div>
        <main className="container mx-auto grid justify-item-center ">
          <section id="inicio" className=" max-w-xl  grid mx-auto mt-8 md:mt-20  ">
            <div className="flex items-center space-x-4   ">
              <picture className=" flex rounded-full justify-center overflow-hidden w-[70px] h-[70px] ">
                <img
                  src="/fotoperfil.png"
                  alt="Imagen de perfil"
                  className=" max-w-fit "
                />
              </picture>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-[#56e356] rounded-2xl text-sm relative  hover:blur-[0.7px]   "
              >
                <span className="absolute inset-0 border-2 border-[#3ca03c] rounded-2xl animate-pulse  "></span>
                Disponible para trabajar
              </a>
            </div>

            <h1 className=" text-4xl font-black text-[#111111] dark:text-[#ffffff] mb-6 mt-8 ">
              Hey, Soy MISDI
            </h1>
            <p className=" text-[#111111] dark:text-[#ffffff] text-xl text-pretty ">
              Soy un apasionado del{" "}
              <strong className="text-[#56e356] ">
                desarrollo web de Colombia, especializado en front-end
              </strong>
              , Actualmente, estoy ampliando mis conocimientos estudiando
              back-end, con el objetivo de convertirme en un desarrollador
              full-stack.
            </p>
            <div className="flex gap-4 mt-8">
            <button className=" gap-3  hover:bg-[#56e356] hover:border-[#56e356] hover:text-[#ffffff]  flex items-center space-x-2 px-3 py-2 border border-[#111111] dark:border-[#ffffff] rounded-xl text-[#111111] dark:text-[#ffffff] dark:hover:border-[#56e356] " >
              <span>
                <Image  alt="" src="/enviar-correo.png" width={25} height={25} className="block dark:hidden"  />
                <Image  alt="" src="/enviar-correoWhite.png" width={25} height={25} className="hidden dark:block"  />
              </span>
              <a href="mailto:michaelsrd02@gmail.com">Contáctame</a>
              
            </button>
            <button className=" gap-3  hover:bg-[#56e356] hover:border-[#56e356] hover:text-[#ffffff]  flex items-center space-x-2 px-3 py-2 border border-[#111111] rounded-xl text-[#111111] dark:border-[#ffffff] dark:text-[#ffffff]  dark:hover:border-[#56e356]  " >
               <span>
                <Image alt="" src="/usuario.png" width={20} height={20} className="block dark:hidden" /> 
                <Image alt="" src="/usuarioWhite.png" width={20} height={20} className="hidden dark:block" /> 
               </span>
               <a href="/#sobre-mi">Sobre Mí</a>
            </button>
            </div>
            
          </section>
          <section className=" w-full mt-16 mb-7 flex  md:mt-10    ">
            <TecSection />
          </section>

          <section id="proyectos" className=" mt-8 w-11/12 mx-auto ">
            <WorkSection />
          </section>

          <section id="sobre-mi" className="mt-8 w-11/12 mx-auto  ">
            <AboutSection />
          </section>
        </main>
        <Footer/>
      </div>
    </div>
  );
}
