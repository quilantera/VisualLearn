
import { Atividade } from "@/app/(activities)/atividade/criar/[materiaId]/page";
import { Menu, PlusCircle, X } from "lucide-react"
interface NavAtividadesProps {
    atividade: Atividade;
    index: number;
    navegacaoAberta: boolean;
    toggleNavegacao: () => void;
    handleSelecionarAtividade: (index: number) => void;
    handleSalvarPergunta: () => void;
    handleEnviarAtividade: () => void;
  }
export function NavAtividades({ atividade,
    index,
    handleEnviarAtividade,
    navegacaoAberta,
    toggleNavegacao,
    handleSelecionarAtividade,
    handleSalvarPergunta}:NavAtividadesProps){
    return(
        
        <nav
        className={`  fixed duration-300 pb-10 px-1 h-[calc(100vh-5rem)] bg-primary-500 dark:bg-gray-900 dark:border-slate-300 dark:border-r text-slate-50 flex flex-col items-center gap-3 ${
            navegacaoAberta ? "w-52" : "w-16"
        }`}
    >
        <div className="bg-slate-200 hidden"/>
        <button
            onClick={toggleNavegacao}
            className={`w-full p-2  flex text-center bg-primary-500 dark:bg-gray-900 items-center text-slate-50 hover:bg-primary-600 dark:hover:bg-gray-400 duration-300 ${
                navegacaoAberta ? "" : " justify-center"
            }`}
        >
            {navegacaoAberta ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
            className={`w-full h-full relative px-2 ${
                navegacaoAberta ? "block" : "hidden"
            }`}
        >
            <div className="text-center text-lg pb-8">
                Suas Perguntas: {atividade?.questoes?.length || 0}
            </div>
            <div className="w-full px-2 py-4 flex shadow-inner flex-col overflow-y-scroll   h-[65%] max-h-[65vh]">
                <div className="w-full flex flex-col gap-3">
                    {atividade &&
                        atividade?.questoes.map((atividade, indexAtividade) => (
                            <button
                                onClick={()=>{handleSelecionarAtividade(indexAtividade)}}
                                key={indexAtividade}
                                className={`w-full border-0 flex flex-col hover:scale-105 duration-300 dark:bg-gray-900 dark:text-slate-50 `}
                            >
                                <div className={`w-full flex rounded-md shadow-md items-center justify-center font-medium text-2xl  h-24 text-primary-400 dark:bg-gray-900 dark:text-slate-50 dark:border-slate-50 dark:border 
                                    ${indexAtividade === index ? "bg-slate-300 scale-105": "bg-slate-50"}`}>
                                    <div className="text-primary-400 rounded-full border-primary-400 dark:border-slate-50 dark:text-slate-50 border-[3px] border-solid h-9 w-9 flex justify-center items-center dark:bg-gray-900 ">
                                        <h2>{indexAtividade + 1}</h2>
                                    </div>
                                </div>
                                <h3>{atividade.pergunta|| 'sem titulo'}</h3>
                            </button>
                        ))}
                    <button
                        onClick={handleSalvarPergunta}
                        className="w-full border-0 flex flex-col hover:scale-105 duration-300"
                    >
                        <div className="w-full flex rounded-md shadow-md items-center justify-center text-4xl bg-slate-50 dark:bg-gray-900 dark:border dark:border-slate-50 dark:text-slate-50  h-24 text-primary-400">
                            <PlusCircle size={34} />
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <button 
                    onClick={handleEnviarAtividade}
                    className=" w-5/6 left-4 absolute bottom-10 bg-green-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-green-800 dark:bg-gray-900 dark:border-4 dark:border-green-800 ">
                     Finalizar </button>
            </div>
        </div>
       
    </nav>
    )
}