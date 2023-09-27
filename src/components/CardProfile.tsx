"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as Progress from "@radix-ui/react-progress";
import bronze from "../assets/bronze.png";

import profile from "../assets/me.jpg";
export function CardProfile() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" w-full  rounded-sm  bg-zinc-100 py-8 px-10  shadow-md duration-300 hover:translate-y-[-6px] dark:border-2  dark:border-zinc-50 dark:bg-gray-600  ">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={profile}
          alt={"Imagem de perfil"}
          width={500}
          height={500}
          className=" h-40 w-40 rounded-full border-2 border-slate-300 shadow-lg dark:border-white  "
        />
        <h1 className=" text-center text-2xl font-semibold mt-3 text-zinc-700 dark:text-white ">
          Gustavo Quilante Azevedo
        </h1>
      </div>
     
      <div className="flex w-full flex-col items-center justify-center pt-8 gap-2">
        <Image
          src={bronze}
          alt="nivel atual - bronze"
          height={100}
          width={100}
          className="w-3/12"
        />
        <h2 className=" font-sans  text-2xl font-bold text-orange-800">
          {" "}
          Bronze
        </h2>
   
        <Progress.Root
          className="relative self-center h-3 w-10/12 overflow-hidden rounded bg-zinc-300"
          style={{ transform: `translateZ(0)` }}
          value={progress}
        >
          <Progress.Indicator
            className=" h-full w-full bg-cyan-800 duration-500"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>
    </div>
  );
}
