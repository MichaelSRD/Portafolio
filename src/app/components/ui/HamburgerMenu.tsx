import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  activeSection: string;
}
export default function HamburgerMenu({ activeSection }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "proyectos", label: "Proyectos" },
    { id: "sobre-mi", label: "Sobre Mí" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <div className="flex text-[#111111] dark:text-[#ffffff]  gap-3 ">
      <nav className={` flex  gap-3  `}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          if (item.id == 'contacto') {
            return <a href="mailto:michaelsrd02@gmail.com" key={item.id} >{item.label}</a>
          }
          return <button onClick={() => scrollToSection(item.id)} className={` ${ isActive ? 'text-green-700': '' } `}  key={item.id}>{item.label}</button>;
        })}
      </nav>
      <ThemeToggle/>
    </div>
  );
}
