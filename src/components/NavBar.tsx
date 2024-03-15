"use client"
import { useRef, useState, useEffect } from "react";
import { NavPagesSelect } from "./NavPagesSelect";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
  
  

 
  async function logout() {
    await signOut({
      redirect: false
    });
    router.replace("/login");
  }

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
    <div ref={navRef} className=" h-full min-h-4 flex flex-col"  
      style={{ width: zoom === 0 ? "17vw" : zoom === 1  ? "19vw": "21vw" }}>
    <nav
      
      className={`flex flex-col h-fit py-8 w px-4 bg-white dark:bg-gray-900 dark:border-2 dark:border-slate-50 rounded-lg shadow-md ${
        isNavFixed ? "fixed top-2 z-10" : ""
      }`}
      style={{ width: zoom === 0 ? "16vw" :  zoom === 1 ? "19vw": "21vw" }}
    >
      <div className="flex w-full flex-col items-center gap-6">
        <NavPagesSelect navigationLinks={menuItems} userRole={userRole} />
      </div>
      <button
        onClick={logout}
        title="Encerrar sessão"
        aria-label="Encerrar sessão"
        tabIndex={0}
        className="flex gap-2 w-full items-center font-medium text-lg cursor-pointer py-4 pl-5 pr-5 mt-2 rounded text-slate-600 dark:text-white duration-200 ease-in-out hover:text-white hover:bg-violet-800 focus:drop-shadow-lg focus:shadow-white"
      >
        <LogOut data-ignore="true" /> Sair
      </button>
    </nav>
    {isNavFixed && <div style={{  width: zoom === 0 ? "16vw" :  zoom ===1 ? "19vw": "25vw", height: "500px" }} />}
    </div>
    </>
  );
}

