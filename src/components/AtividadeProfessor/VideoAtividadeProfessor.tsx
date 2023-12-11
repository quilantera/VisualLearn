import * as Form from '@radix-ui/react-form';
import { VideoPlayer } from '../VideoPlayer';
interface VideoAtividadeProfessorProps {
    handleVideoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    urlVideo?: string;
  }
export function VideoAtividadeProfessor({handleVideoChange,urlVideo}: VideoAtividadeProfessorProps) { 
    return (
        <div className='flex flex-col gap-2 w-full p-4 border-slate-200 shadow-sm border-2 border-dashed '>
        <Form.Field name='urlVideo'>
              <Form.Label className="text-xl font-semibold leading-tight  mt-4 tracking-wide">
                URL video do Youtube
              </Form.Label>
              <Form.Control asChild>
              <input
                type="text"
                aria-label="insira a url do video"
                className='w-full  py-2 px-3 rounded shadow-sm mt-4  bg-slate-100 dark:bg-gray-800 dark:border dark:border-slate-300'
                onChange={handleVideoChange}
                required
              />
              </Form.Control>
            </Form.Field>
         
  
        <div className="w-full py-3">
          {urlVideo && (
           <VideoPlayer urlVideo={urlVideo}/>
          )}
          
          </div>
        </div>
    )
}