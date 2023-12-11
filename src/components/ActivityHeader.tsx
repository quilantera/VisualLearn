"use client";
import * as Toggle from "@radix-ui/react-toggle";
import {  ChevronLeft, ChevronRight, Eye, Volume2, ZoomIn } from "lucide-react";

import { VoltarBtn } from "./VoltarBtn";
import { useAccessibility } from "@/app/Context/AccessibilityContext";
import { isPressed } from "./SpeechReader";
import { useEffect, useState } from "react";



export function ActivityHeader() {;

  const { contrast, setContrast, zoom, setZoom, sound, setSound } = useAccessibility();
  
  const [isLoading, setIsLoading] = useState(true);
  

  async function handleToggleChange(state: boolean ,setState: React.Dispatch<React.SetStateAction<boolean>>, onActivate: () => void, onDeactivate: () => void) {
    await setState(!state);
    if(sound)
    if (state) {
      onDeactivate();
    } else {
      onActivate();
    }
  }

  useEffect(() => {
    if (contrast) {
      document.documentElement.classList.add("dark"); // Adiciona a classe 'darkmode'
    } else {
      document.documentElement.classList.remove("dark"); // Remove a classe 'darkmode'
    }

    if (zoom) {
      document.documentElement.style.fontSize = "120%"; // Ajuste o valor conforme necessário
    } else {
      document.documentElement.style.fontSize = ""; // Reset para o tamanho padrão
    }
  }, [contrast, zoom]);
  useEffect(() => {
    if(typeof window !== "undefined") {
      setIsLoading(false);
    }  
}, []);


  return (
    <header
      className={`fixed right-0 top-0 z-20 h-20 flex w-full items-center justify-between gap-2 bg-primary-500 px-3 py-2 dark:bg-gray-600`}
    >
      <VoltarBtn />
      {!isLoading &&  
      <div aria-label="area de acessibilidade" tabIndex={0} className="  flex h-full gap-2 rounded-full bg-zinc-300 px-8 py-2 shadow-md ">
      
    
     <Toggle.Root
          onPressedChange={() => handleToggleChange(contrast, setContrast, () => isPressed(true), () => isPressed(false))}
          className="flex  w-[4.15rem] flex-col items-center justify-center rounded-lg bg-white px-1 text-primary-500 shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50"
          aria-label="botão mudar contraste"
          data-state={contrast ? 'on' : 'off'}
        >
          <Eye className="h-6 w-6 " />
          <span className="  text-[0.625rem] font-semibold leading-none">
            Contraste
          </span>
        </Toggle.Root>
        <Toggle.Root
          onPressedChange={() => handleToggleChange(zoom, setZoom, () => isPressed(true), () => isPressed(false))}
          className="flex w-[4.15rem] flex-col items-center justify-center rounded-lg bg-white px-1 py-1  text-primary-500 shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50"
          aria-label="botão aumentar o zoom"
          data-state={zoom ? 'on' : 'off'}
        >
          <ZoomIn className="h-6 w-6" />
          <span className=" text-[0.625rem] font-semibold leading-none">
            Zoom
          </span>
        </Toggle.Root>
        <Toggle.Root
           onPressedChange={() => handleToggleChange(sound, setSound, () => isPressed(true), () => isPressed(false))}
          className="flex w-[4.15rem] flex-col items-center  justify-center rounded-lg bg-white px-1 py-1 text-primary-500 shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50  "
          aria-label="botão ligar som"
          data-state={sound ? 'on' : 'off'}
        >
          <Volume2 className="h-6 w-6  " />
          <span className="  text-[0.625rem] font-semibold leading-none">
            Leitor
          </span>
        </Toggle.Root>
   
      </div>
       }
     <div className="flex gap-3 pr-10">
          <button className="rounded bg-zinc-100 px-1 py-1 text-primary-500 opacity-40 shadow-md drop-shadow-md duration-300 hover:scale-105">
          <ChevronLeft className="h-9 w-9" />
        </button>
        <button className="rounded bg-zinc-100 px-1 py-1 text-primary-500 shadow-md drop-shadow-md duration-300 hover:scale-105 ">
          <ChevronRight className="h-9 w-9" />
        </button> 
      </div> 
    </header>
  );
}
