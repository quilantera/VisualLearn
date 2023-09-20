"use client";
import * as Toggle from "@radix-ui/react-toggle";
import { ChevronLeft, ChevronRight, Eye, Volume2, ZoomIn } from "lucide-react";
import Link from "next/link";

import { useState } from "react";

export function ActivityHeader() {
  const [contrast, setContrast] = useState<boolean>(false);
  const [zoom, setZoom] = useState<boolean>(false);
  const [sound, setSound] = useState<boolean>(false);
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
  function handleChangeSound() {
    setSound(!sound);
    console.log(sound);
  }
  return (
    <header
      className={`fixed right-0 top-0 z-20 flex w-full items-center justify-between gap-2 bg-primary-500 px-3 py-2 dark:bg-gray-600`}
    >
      <Link
        href={process.env.NEXT_PUBLIC_VER_URL || "/"}
        className="flex items-center text-lg font-semibold tracking-wide text-zinc-50 decoration-2 underline-offset-4 hover:underline "
      >
        <ChevronLeft className="h-7 w-7" />
        Voltar
      </Link>
      <div className="flex h-full gap-2 rounded-full bg-zinc-300 px-8 py-2 shadow-md ">
        <Toggle.Root
          onPressedChange={() => handleChangeContrast()}
          className="flex  w-[4.15rem] flex-col items-center justify-center rounded-lg bg-white px-1 text-primary-500 shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50"
          aria-label="botão mudar contraste"
        >
          <Eye className="h-6 w-6 " />
          <span className="  text-[0.625rem] font-semibold leading-none">
            Contraste
          </span>
        </Toggle.Root>
        <Toggle.Root
          onPressedChange={() => handleChangeZoom()}
          className="flex w-[4.15rem] flex-col items-center justify-center rounded-lg bg-white px-1 py-1  text-primary-500 shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50"
          aria-label="botão aumentar o zoom"
        >
          <ZoomIn className="h-6 w-6" />
          <span className=" text-[0.625rem] font-semibold leading-none">
            Zoom
          </span>
        </Toggle.Root>
        <Toggle.Root
          onPressedChange={() => handleChangeSound()}
          className="flex w-[4.15rem] flex-col items-center  justify-center rounded-lg bg-white px-1 py-1 text-primary-500 shadow-md drop-shadow-md duration-300 hover:scale-105 data-[state=on]:bg-primary-500 data-[state=on]:text-zinc-50  "
          aria-label="botão ligar som"
        >
          <Volume2 className="h-6 w-6  " />
          <span className="  text-[0.625rem] font-semibold leading-none">
            Leitor
          </span>
        </Toggle.Root>
      </div>
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
