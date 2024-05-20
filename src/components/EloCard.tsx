
import Image from "next/image";

import bronze from "@/assets/bronze.png";
import prata from "@/assets/prata.png";
import ouro from "@/assets/ouro.png";
import platina from "@/assets/platina.png";
import master from "@/assets/master.png";
import desafiante from "@/assets/desafiante.png";


interface EloCardProps{
    lessons :{
        dataEntrega: Date | null;
        nota: number | null;
    }[];
}

export function EloCard({lessons}: EloCardProps){
    const elo = [bronze,prata,ouro,platina,master,desafiante];
    const eloName =["Bronze","Prata","Ouro","Platina","Mestre","Desafiante"];
    const eloColors = ["#884a0d", "#3f3b3b", "#9c8608", "#324b63", "#410579", "#65098a"];

    function CalcNote (note: number){
        if( note - 5 >= 0 ){
            const total = ((note - 5 )* 1.2)*10
            return total;
        }
        else if(note - 5 < 0){
            const total = (((note - 5 )/2)*10)
            return total;
        }
        else return note*10;
    }
    const showElo = () =>{
        
        let eloScore = 200;
        lessons.map((lesson) =>{
            if(lesson.nota !== null){
               eloScore += CalcNote(lesson.nota);
            }
        })
        const eloIndex = Math.floor(eloScore / 200); // Dividindo pela diferença de pontuação entre elos
        return [Math.max(0, Math.min(eloIndex, elo.length - 1)),eloScore]; // Limitando o índice do elo dentro dos limites do array elo
    }
    const currentElo = showElo();
    
    return (
        <div className="flex flex-col justify-center w-40 sm:w-fit sm:px-6 sm:py-1 py-1 rounded-lg drop-shadow-md  bg-slate-100 dark:bg-gray-800 items-center">
            <Image  className="w-20 h-20 sm:w-14 sm:h-14" src={elo[currentElo[0]]} alt={eloName[currentElo[0]]} width={100} height={100}/>
            <h2  className={`font-bold text-[${eloColors[currentElo[0]]}] sm:text-lg  dark:text-white  text-shadow text-2xl --font-alt text-shadow  tracking-wider `}
            >{eloName[currentElo[0]]}</h2>
        </div>
    )
}