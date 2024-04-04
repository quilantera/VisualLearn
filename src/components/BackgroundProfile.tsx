import { Edit2Icon } from "lucide-react";
import backgroundProfile from "@/assets/backgroundProfile.png"
import Image from "next/image";

export function BackgroundProfile(){
    return (
        <div className=" self-center w-[90%] sm:w-full   group hover:-translate-y-1 rounded-xl shadow-md shadow-slate-600 hover:shadow-lg hover:shadow-slate-400 duration-500 mt-[24px] h-48 relative ">
            <Image 
                src={backgroundProfile} 
                alt='background perfil' 
                width={900} height={600} 
                className="h-full w-full object-cover rounded-xl  border border-slate-200"
            />
            <button aria-label="botão editar imagem de fundo" className=" opacity-0 group-hover:opacity-100 rounded-full absolute top-4  right-4 p-3 text-lg bg-sky-900 hover:scale-105 hover:shadow-lg hover:bg-sky-950 hover:shadow-slate-50 duration-500 text-slate-50 border-2 border-white dark:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-slate-50">
                <Edit2Icon size={"1.4rem"} />
            </button>
        </div>
       
    )
}