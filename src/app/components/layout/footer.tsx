import Link from "next/link";


export default function Footer(){
    return ( 
        <footer className=" dark:text-[#ffffff] text-[#111111] mb-12  w-11/12 mx-auto text-pretty [&>p>a>strong]:text-[#44b544] mt-16 "   >
            <p >&copy; 2025 misdi. Casi todos los derechos reservados </p>
            <p >Agradecimiento especial a <a href="https://midu.dev" target="_blank" rel="noopener noreferrer"> <strong>midudev</strong> </a> por la inspiración para realizar este portafolio.</p>
            <ul className="flex gap-4 mt-4" >
                <li>
                    <Link href="/#sobre-mi" className=" hover:underline ">Sobre mí</Link>
                </li>
                <li>
                    <a href="mailto:michaelsrd02@gmail.com"   className=" hover:underline ">Contacto</a>
                </li>
            </ul>
        </footer>
    )
}