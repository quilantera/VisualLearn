import * as Form from '@radix-ui/react-form';

interface AtividadeBodyProps{
    children: React.ReactNode;
}
export function BodyAtividadeProfessor({children}:AtividadeBodyProps) {
    return( 
        <article className="mt-5 flex w-full flex-col  rounded-xl bg-white p-10 shadow-2xl drop-shadow-lg dark:bg-gray-900 dark:border dark:border-slate-300">
        <Form.Root className='flex flex-col w-full h-full gap-3'>
        {children}
        </Form.Root>
        </article>
    )
}