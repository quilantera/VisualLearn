import Image from "next/image";
import profile from "@/assets/profile.jpg"
import { Edit2Icon } from "lucide-react";
interface ImageProfileProps{
    urlAvatar?: string;
}
export function ImageProfile({urlAvatar}:ImageProfileProps) {
    return(
        <div className="relative w-full h-[5.1rem]">
            <div className="absolute w-40 group h-40 sm:h-32 top-[-5rem] sm:left-4 left-[10%] hover:-translate-y-1 duration-500">   
                {/* {urlAvatar ? (
                    <img
                        src={urlAvatar!}
                        alt={"Imagem de perfil"}
                        className={`w-40 h-40 sm:h-32 sm:w-32 shadow-md shadow-slate-400  border-slate-50 border-4 absolute  rounded-full  z-20 duration-200 ease-in-out hover:shadow-[0px_0px_12px_#E2E8F0]`}
                    />
                ) : ( */}
                    <Image
                        src={profile}
                        alt={"Imagem de perfil"}
                        width={800}
                        height={800}
                        className={`w-40 h-40 sm:h-32 sm:w-32 shadow-md shadow-slate-400  border-slate-50 border-4 rounded-full absolute  z-20 duration-200 ease-in-out hover:shadow-[0px_0px_12px_#E2E8F0]`}
                    />
                {/* )} */}
                
                    <button aria-label="botão editar imagem de perfil" className="rounded-full opacity-0 group-hover:opacity-100  items-center justify-center w-fit z-30 absolute bottom-1 right-0  sm:right-[20%] p-2 text-lg bg-sky-900 hover:scale-105 hover:shadow-lg hover:bg-sky-950 hover:shadow-slate-50 duration-500 text-slate-50 border-2 border-white dark:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-slate-50">
                                <Edit2Icon size={"1.2rem"} />
                    </button>
            </div>
    
</div>
    )
}
