"use client";
import { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import Image from "next/image";

import bronze from "../assets/bronze.png";
export function CardRanking() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-zinc-100 p-8 shadow-md duration-300 hover:translate-y-[-6px] dark:border-2 dark:border-zinc-50 dark:bg-gray-600 ">
      <div>
        <h3 className="text-center text-xl font-bold text-zinc-800 dark:text-white">
          Nível do Perfil
        </h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <Image
          src={bronze}
          alt="nivel atual - bronze"
          height={100}
          width={100}
          className="w-2/6"
        />
        <h2 className=" font-sans  text-sm font-bold text-orange-800">
          {" "}
          BRONZE
        </h2>
      </div>
      <div>
        <Progress.Root
          className="relative h-3 w-full overflow-hidden rounded-full bg-zinc-300"
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
