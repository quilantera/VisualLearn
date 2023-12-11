import * as Form from '@radix-ui/react-form';
interface TextoAtividadeProfessorProps{
    textoPergunta?: string;
    handleTextoChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export function TextoAtividadeProfessor({textoPergunta, handleTextoChange}:TextoAtividadeProfessorProps){
    return(
        <>
        <div  className='flex flex-col gap-2 w-full p-4 border-slate-200 shadow-sm border-2 border-dashed '>
        <Form.Field name='texto'>
        <div className='flex flex-col gap-2 '>
            <Form.Label className="  leading-tight tracking-wide text-xl font-semibold  ">Texto </Form.Label>
            <Form.Message className="text-sm text-red-500 tracking-wide" match="valueMissing">
                Por favor, preencha esse campo!
            </Form.Message>

            <Form.Control asChild>
                <textarea className="w-full h-40 py-2 px-3 rounded shadow-sm bg-slate-100 resize-none  dark:bg-gray-800 dark:border-2"  
                        value={textoPergunta}
                        aria-label='area de inserção de texto'
                        onChange={handleTextoChange}
                        required
                />
            </Form.Control>
        </div>
        </Form.Field>
        </div>
        </>
    )
}