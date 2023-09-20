"use client";
import * as Toggle from "@radix-ui/react-toggle";
import { Eye, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [contrast, setContrast] = useState<boolean>(false);
  const [zoom, setZoom] = useState<boolean>(false);
  // const [sound, setSound] = useState<Boolean>(false)
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  function handleChangeContrast() {
    setContrast(!contrast);

    if (!contrast) {
      document.documentElement.classList.add("dark"); // Adiciona a classe 'darkmode'
    } else {
      document.documentElement.classList.remove("dark"); // Remove a classe 'darkmode'
    }
  }
  function handleChangeZoom() {
    setZoom(!zoom);
    if (!zoom) {
      document.documentElement.style.fontSize = "120%"; // Ajuste o valor conforme necessário
    } else {
      document.documentElement.style.fontSize = ""; // Reset para o tamanho padrão
    }
  }
  /* function handleChangeSound() {
    setSound(!sound)
    console.log(sound)
  } */
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
    >
      <Toggle.Root
        onPressedChange={() => handleChangeContrast()}
        className="rounded px-1 py-1 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
        aria-label="botão mudar contraste"
      >
        <Eye className="h-7 w-7" />
      </Toggle.Root>
      <Toggle.Root
        onPressedChange={() => handleChangeZoom()}
        className="rounded px-1 py-1 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
        aria-label="botão aumentar o zoom"
      >
        <ZoomIn className="h-7 w-7" />
      </Toggle.Root>
      {/* <Toggle.Root
          onPressedChange={() => handleChangeSound()}
          className="px-2 py-2 text-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-violet-300  data-[state=on]:drop-shadow-md"
          aria-label="botão ligar som"
        >
          <Volume2 className="h-8 w-8  " />
        </Toggle.Root>
        */}
    </header>
  );
}
