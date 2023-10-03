"use client";
import { useAccessibility } from "@/app/Context/AccessibilityContext";
import * as Toggle from "@radix-ui/react-toggle";
import { Eye, ZoomIn, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { isPressed } from "./SpeechReader";

export function Header() {
  const { contrast, setContrast, zoom, setZoom, sound, setSound } = useAccessibility();

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  function handleChangeContrast() {
    setContrast(!contrast);

    if (!contrast) {
      document.documentElement.classList.add("dark"); // Adiciona a classe 'darkmode'
      if(sound) isPressed(true);
    } else {
      document.documentElement.classList.remove("dark"); // Remove a classe 'darkmode'
      if(sound) isPressed(false);
    }
  }
  function handleChangeZoom() {
    setZoom(!zoom);
    if (!zoom) {
      document.documentElement.style.fontSize = "120%"; // Ajuste o valor conforme necessário
       if(sound) isPressed(true);
    } else {
      document.documentElement.style.fontSize = ""; // Reset para o tamanho padrão
      if(sound) isPressed(false);
    }
  }
  function handleChangeSound() {
    setSound(!sound)
    if(!sound){
      isPressed(true);
    }
    else{
      isPressed(false);
    }
  } 
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed right-8 top-4 z-20  flex gap-2 bg-primary-500 px-3 py-1 ${
        scrollPosition < 20 ? "opacity-100" : "opacity-30"
      }  rounded-full duration-200  ease-in-out  hover:opacity-100 focus:opacity-100 `}
      aria-label="area de acessibilidade"
    >
      <Toggle.Root
        onPressedChange={() => handleChangeContrast()}
        className="toggle rounded px-1 py-1 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
        aria-label="botão mudar contraste"
        tabIndex={1}
      >
        <Eye className="h-7 w-7" />
      </Toggle.Root>
      <Toggle.Root
        onPressedChange={() => handleChangeZoom()}
        className=" toggle rounded px-1 py-1 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
        aria-label="botão aumentar o zoom"
        tabIndex={1}
      >
        <ZoomIn className="h-7 w-7" />
      </Toggle.Root>
     <Toggle.Root
          onPressedChange={() => handleChangeSound()}
          className="toggle rounded px-1 py-1 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
          aria-label="botão ligar som"
          tabIndex={1}
        >
          <Volume2 className="h-7 w-7  " />
      </Toggle.Root>
      
    </header>
  );
}
