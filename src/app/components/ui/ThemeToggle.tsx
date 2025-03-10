import Image from "next/image"
import { useEffect, useState } from "react"
export default function ThemeToggle(){
 const [darkMode, setDarkMode] = useState(false);

 useEffect(()=>{
    const saveTheme = localStorage.getItem('theme');
    if (saveTheme === 'dark') {
        setDarkMode(true);
        document.documentElement.classList.add('dark')
    }else{
       document.documentElement.classList.remove('dark')
    }
 },[]);
  // Función para alternar entre modo oscuro y claro
  const toggleDarkMode = ()=>{
    if (darkMode) {
        localStorage.setItem('theme','light');
        document.documentElement.classList.remove('dark');
    }else{
        localStorage.setItem('theme','dark');
        document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
}
  return (
    <button onClick={toggleDarkMode} >
        {darkMode ? '🌙' : '☀️'}
      </button>
  )
}