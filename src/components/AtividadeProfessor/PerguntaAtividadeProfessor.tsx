import * as Form from '@radix-ui/react-form';
interface PerguntaAtividadeProfessorProps{
    tituloPergunta?: string;
    handlePerguntaChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function PerguntaAtividadeProfessor({
    tituloPergunta,
    handlePerguntaChange,
  }: PerguntaAtividadeProfessorProps) {
    return (
      <>
        <Form.Field name='pergunta'>
          <div className='flex flex-col gap-2 '>
            <Form.Label
              className='text-xl font-semibold leading-tight tracking-wide'
              htmlFor='perguntaInput'
            >
              Título da Pergunta
            </Form.Label>
  
            <Form.Control asChild>
              <input
                id='perguntaInput'
                className='w-full py-2 px-3 rounded shadow-sm bg-slate-100 dark:bg-gray-900 dark:border dark:border-slate-300'
                type='text'
                aria-label={`Area de inserção da pergunta: ${tituloPergunta}`}
                aria-labelledby='perguntaInput'
                value={tituloPergunta}
                onChange={handlePerguntaChange}
                required
                aria-required='true'
              />
            </Form.Control>
          </div>
        </Form.Field>
      </>
    );
  }