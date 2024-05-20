"use client"
import crossIcon from "@/assets/crossicon.gif"
import Image from "next/image";
interface ContentModalProps{
    type: "success"|"error"|"warning"|"info";
    title: string;
    message: string;
}

export function ContentModal({type,title,message}:ContentModalProps) {

      return(
        <div className="w-full flex flex-col items-center justify-center gap-2">
           <Image src={crossIcon} alt="mensagem de erro" width={400} height={400} className="h-[50%] w-[50%]"></Image>
            <h2 id="dialog_label" className={` text-3xl  text-center font-semibold ${type == "error" ? " text-red-700":type == "success" ? "text-green-800": "text-gray-800"} dark:text-white`}>{title}</h2>
            <p id="dialog_desc" className=" mt-[16px] text-xl text-justify tracking-wider font-medium text-gray-500 dark:text-slate-50 ">{message}</p>
        </div>
    )
}