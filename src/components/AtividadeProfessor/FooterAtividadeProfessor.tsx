interface FooterAtividadeProps{
    handleRemoverQuestao:  (currentIndex:number)=> void;
    handleAdicionarQuestao: ()=> void;
    currentIndex: number;
}
export function FooterAtividadeProfessor({ handleAdicionarQuestao,handleRemoverQuestao,currentIndex}:FooterAtividadeProps) {
    return(
        <footer className="flex w-full items-center justify-end gap-4">
            <button
                type="button"
              className="min-w-[6rem] bg-red-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-red-800 dark:bg-gray-900 dark:border-4 dark:border-red-800"
              onClick={() => handleRemoverQuestao(currentIndex)}
            >
              Remover Atividade
            </button>
            <button
                type="button"
                className="min-w-[6rem] bg-green-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-green-800 dark:bg-gray-900 dark:border-4 dark:border-green-800 "
                onClick={handleAdicionarQuestao}
              >
                Salvar Atividade
            </button>
        </footer>
    )
}