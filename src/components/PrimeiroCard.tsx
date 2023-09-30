import Image from "next/image";
import initialImage from "../assets/astronauta-lendo-livro_1366-939.png";
export function PrimeiroCard(){
    return (
        <div className="flex w-full h-[10.5rem] min-w[400px] items-center rounded-xl shadow-sm bg-indigo-100 p-10 mt-10 relative  dark:bg-zinc-800 ">
            <Image src={initialImage} alt={"imagem boas vindas"} 
            width={300} height={300} 
            className="w-[12rem] h-[12rem] opacity-90 absolute bottom-2"/>
            <div className="pl-[210px] ">
                <h1 className="text-3xl font-semibold tracking-wider text-primary-500  dark:text-blue-100  ">Seja bem vindo ao Blind Study!</h1>
                <h3 className="text-lg font-medium tracking-wide">Aprendendo e divertindo com acessibilidade</h3>
            </div>
        </div>
    )
}