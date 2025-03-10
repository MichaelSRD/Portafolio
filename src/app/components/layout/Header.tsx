import HamburgerMenu from "../ui/HamburgerMenu"

interface NavbarProps {
    activeSection: string
  }
  
export default function Header({ activeSection }: NavbarProps ){
    return(

         <header className=" justify-center " >
            <HamburgerMenu activeSection={activeSection} />
         </header>
    )
}