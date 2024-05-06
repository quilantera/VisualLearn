"use client"
import * as Form from "@radix-ui/react-form"
import { useState } from "react";
interface FormProfileProps{
    email: string;

}
 export function FormProfile({email}:FormProfileProps){
    const [inputEmail, setInputEmail] = useState<string>(email);
    return(
        <Form.Root className='mt-2  mb-6 flex     ' onSubmit={(e)=>{e.preventDefault}}>
        <Form.Field name="email" className="flex gap-[12px]   ">
            <Form.Label className='pl-[8px] py-[2px] font-semibold text-xl text-nowrap '>
                E-mail: 
            </Form.Label>
            <Form.Control 
                type='email' aria-label={`seu email : ${email}`}
                className=' font-normal text-lg border-2 px-[10px]
                dark:bg-gray-900 border-slate-500 w-[20rem]' 
                required value={inputEmail} 
                onChange={(e)=>setInputEmail(e.target.value)}></Form.Control>
        </Form.Field>
        <Form.Submit asChild>
            <button type='submit' 
                aria-label='botão atualizar email' 
                className={`w-fit  ml-[16px] px-[16px] py-[4px] hover:bg-sky-950 
                            hover:scale-105 duration-300 text-xl text-slate-50 dark:border-2
                            dark:border-slate-50 dark:bg-gray-900 rounded bg-sky-950 
                            shadow-md shadow-slate-500 dark:shadow-slate-800 
                            ${inputEmail != email && inputEmail ? "block":"hidden"}`}
            >
             Atualizar
            </button>
        </Form.Submit>
    </Form.Root>
    )
 }