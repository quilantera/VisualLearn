import  Image  from "next/image"
export function SchoolDataCard(){
    return(
        <div className="w-full rounded-lg min-h-[4rem] bg-slate-50 px-8 py-4 flex justify-between shadow-sm items-center">
            <div className="flex items-center gap-4">
                <img 
                src={"https://www.fct.unesp.br/images/logo-open-graph.jpg"}
                 alt={"logo escola"}
                 className="w-20 h-16 object-cover"/>
                <div>
                    <h2 className="font-semibold text-xl">Universidade Estadual Paulista</h2>
                </div>
            </div>
            <div className="flex items-center gap-1 font-medium text-lg">
                <h3>Turma -</h3>
                <h3> 6º ano</h3>
                <h3> B</h3>
            </div>
        </div>
    )
}