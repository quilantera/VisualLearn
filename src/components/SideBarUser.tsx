"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as Progress from "@radix-ui/react-progress";
import bronze from "../assets/bronze.png";

import profile from "../assets/me.jpg";
import { Flame } from "lucide-react";

export function SideBarUser(){
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

    return (
        <aside className=" flex flex-col w-[16rem] rounded-xl min-h-full mt-10 shadow items-center gap-6 px-4 bg-slate-100  dark:bg-gray-600 dark:border-2 dark:border-slate-100">
          <div className=" mt-14 flex flex-col  items-center  " >
            <Image
              src={profile}
              alt={"Imagem de perfil"}
              width={500}
              height={500}
              className=" h-28 w-28 self-center rounded-full   "
            />
            <h1 className=" text-center text-lg font-semibold mt-3 text-zinc-700 dark:text-white ">
              Gustavo Quilante
            </h1>
            <h2 className=" text-zinc-500 text-sm font-medium tracking-wide dark:text-slate-100 ">
                RA: <span> 181254719</span>
            </h2>
          </div>
          <div className="flex w-full flex-col items-center justify-center  mt-4 ">
           
            <Image
              src={bronze}
              alt="nivel atual - bronze"
              height={100}
              width={100}
              className="w-4/12"
            />
            <h2 className=" font-sans  text-xl font-bold text-orange-800">
              {" "}
              Bronze
            </h2>
            <div className="relative w-full h-4 flex justify-center">
              <Progress.Root
                className="relative self-center h-2 w-9/12 overflow-hidden rounded bg-zinc-300"
                style={{ transform: `translateZ(0)` }}
                value={progress}
              >
                <Progress.Indicator
                  className=" h-full w-full bg-yellow-600 duration-500"
                  style={{ transform: `translateX(-${100 - progress}%)` }}
                />
            
              </Progress.Root>
              <Flame fill="rgb(202 138 4 / var(--tw-text-opacity))" className="h-7 w-7 absolute right-2 bottom-[-2px] text-yellow-700" />
            </div>
          </div>
        </aside>
    )
}