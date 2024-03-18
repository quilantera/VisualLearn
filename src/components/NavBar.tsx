"use client"
import { useRef, useState, useEffect } from "react";
import { NavPagesSelect } from "./NavPagesSelect";
import { ArrowLeft, Menu } from "lucide-react";
import { coordinatorMenuItems, studentMenuItems, teacherMenuItems } from "@/utils/usersConstants";
import { useAccessibility } from "@/app/Context/AccessibilityContext";

interface NavigationLinks {
  icon: string;
  name: string;
  route: string;
}
interface NavBarProps {
  userRole: string;
}
export function NavBar({userRole}: NavBarProps) {
  const {zoom} = useAccessibility();
  const navRef = useRef<HTMLDivElement>(null);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        if (navTop <= 8) {
          setIsNavFixed(true);
        } else {
          setIsNavFixed(false);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

 

  let menuItems: NavigationLinks[]= [];
  switch (userRole) {
    case "ALUNO":
      menuItems = studentMenuItems;
      break;
    case "PROFESSOR":
      menuItems = teacherMenuItems;
      break;
    case "COORDENADOR":
      menuItems = coordinatorMenuItems;
      break;
    default:
      menuItems = []; // ou adicione um comportamento padrão aqui
      break;
  }
  return (
    <>
    <div ref={navRef} className={ `h-full min-h-4  sm:fixed  sm:z-50  sm:h-fit flex flex-col  ${zoom === 0 ? "w-[17vw]" : zoom === 1  ? "w-[19vw]": "w-[21vw]" } `}  
      >
        <div className={`hidden fixed top-0 left-0 h-screen w-screen bg-gray-700 duration:300 opacity-40 z-40 ${isVisible? "sm:block":"sm:hidden"}`}/>
        <button className={`hidden sm:block fixed top-4 left-4 p-3 bg-white rounded shadow-lg dark:bg-gray-900 dark:border dark:border-slate-50`} onClick={ () => setIsVisible((state)=> !state)}> <Menu /> </button>
    <nav
      className={`flex flex-col h-fit py-8  sm:fixed sm:h-screen  sm:z-50 duration-700  sm:top-0 ${isVisible? "sm:left-0" : "sm:left-[-600px]"}  sm:w-fit sm:px-4  px-4 bg-white dark:bg-gray-900 dark:border-2 dark:border-slate-50 rounded-lg shadow-md ${
        isNavFixed ? "fixed top-2 z-10" : ""
      }  ${zoom === 0 ? "w-[17vw]" : zoom === 1  ? "w-[19vw]": "w-[21vw]" } `}
    >
      <button aria-label={isVisible? "botão abrir barra de navegação": "botão fechar barra de navegação"}className={`hidden sm:block self-end `}onClick={ () => setIsVisible((state)=> !state)}>
            <ArrowLeft/>
      </button>

      <div className="flex w-full flex-col items-center gap-6">
        <NavPagesSelect navigationLinks={menuItems} userRole={userRole} isVisible={isVisible} />
      </div>
    </nav>
    {isNavFixed && <div  className={"sm:hidden"}style={{  width: zoom === 0 ? "19vw" :  zoom ===1 ? "19vw": "25vw", height: "500px" }} />}
    </div>
    </>
  );
}

