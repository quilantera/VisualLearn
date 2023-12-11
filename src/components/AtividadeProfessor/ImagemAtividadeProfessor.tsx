'use client'
import * as Form from '@radix-ui/react-form';
import { useRef, useState } from 'react';

interface ImageAtividadeProfessorProps {
  handleFotoProvisoria: (event: File) => Promise<string | undefined>;
  handleImageDescricao: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagemLink?: string;
  imagemDescricao?: string;
}

export function ImagemAtividadeProfessor({
  imagemLink,
  imagemDescricao,
  handleFotoProvisoria,
  handleImageDescricao,
}: ImageAtividadeProfessorProps) {

  const [imagemProvisoria, setImagemProvisoria] = useState<string | null| undefined>(imagemLink);
  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      const temporaryImageUrl = handleFotoProvisoria(selectedFile);
      if(temporaryImageUrl) {
      setImagemProvisoria(await temporaryImageUrl);
    }
  };
}
  return (
    <>
      <div className='flex flex-col gap-2 w-full p-4 border-slate-200 shadow-sm border-2 border-dashed '>
      <Form.Field name='descricaoImagem'>
            <Form.Label className="text-xl font-semibold leading-tight  mt-4 tracking-wide">
              Titulo da Imagem
            </Form.Label>
            <Form.Control asChild>
            <input
              type="text"
              className='w-full mb-8  py-2 px-3 rounded shadow-sm mt-4  bg-slate-100 dark:bg-gray-800 dark:border-2'
              value={imagemDescricao}
              onChange={handleImageDescricao}
              required
            />
            </Form.Control>
          </Form.Field>
        <Form.Field name='imagem'>
          
          <Form.Label className="text-xl font-semibold leading-tight tracking-wide">
            Insira uma imagem
          </Form.Label>
          <Form.Message className="text-sm text-red-500 tracking-wide" match="valueMissing">
            Por favor, preencha esse campo!
          </Form.Message>
          
          <div className="mt-4">
              {/* Quadrado com borda pontilhada que abre o input file quando clicado */}
              <label htmlFor="imageFile" className=" cursor-pointer flex items-center justify-center w-full h-40 border-dashed border-2 border-primary-400 rounded hover:bg-slate-100 hover:translate-y-[-4px] duration-300 dark:hover:bg-gray-600">
                <div className="" >
                  <span>Clique para carregar uma imagem</span>
                </div>
              </label>

              {/* Input file oculto e configurado para aceitar apenas imagens */}
              <input
              
                type="file"
                id="imageFile"
                name="imageFile"
                accept="image/gif, image/jpeg, image/png"
                onChange={(e) =>onFileChange(e)}
                required
                className="hidden"
              />
            </div>
           
      </Form.Field>
     

      <div className="w-full px-4 py-3">
        {imagemProvisoria ? 
         <div className='w-full flex items-center justify-center'>
         <img
           src={imagemProvisoria}
           className='w-full h-full max-h-[20rem] object-contain rounded border-2 border-dash border-transparent  hover:border-primary-500  hover:translate-y-[-4px] duration-300'
           alt={imagemDescricao}
           aria-label={imagemDescricao}
           tabIndex={0}
         />
       </div>
        :imagemLink && (
          <div className='w-full flex items-center justify-center'>
            <img
              src={imagemLink}
              className='w-full h-full max-h-[20rem] object-contain rounded border-2 border-dash border-transparent shadow-md hover:border-primary-500  hover:translate-y-[-4px] duration-300'
              alt={imagemDescricao}
              aria-label={imagemDescricao}
              tabIndex={0}
            />
          </div>
        )}
        
        </div>
      </div>
    </>
  );
}
