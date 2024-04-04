"use client"
import * as Form from '@radix-ui/react-form';
import { useState } from 'react';
interface ProfileFormsProps{
    email: string;
}
export function ProfileForms({email}: ProfileFormsProps){
    const [inputEmail,setInputEmail] = useState<string>(email);
    const [inputPassword,setInputPassword] = useState<string>("aluno123");
    const [showPasswordForm,setShowPasswordForm] = useState<boolean>(false);
    return (
        <div className='mt-[24px]'>
            <h3 className='font-semibold text-2xl '> Informações Pessoais </h3>
            <Form.Root className='mt-2  mb-6 flex     ' onSubmit={(e)=>{e.preventDefault}}>
                <Form.Field name="email" className="flex gap-[12px]   ">
                    <Form.Label className='pl-[8px] py-[2px] font-semibold text-xl text-nowrap '>E-mail: </Form.Label>
                    <Form.Control type='email' aria-label={`seu email : ${email}`}className=' font-normal text-lg border-2 px-[10px] dark:bg-gray-900 border-slate-500 w-[20rem]'  required value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)}></Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                    <button type='submit' aria-label='botão atualizar email' className={`w-fit  ml-[16px] px-[16px] py-[4px] hover:bg-sky-950 hover:scale-105 duration-300 text-xl text-slate-50 dark:border-2 dark:border-slate-50 dark:bg-gray-900 rounded bg-sky-950 shadow-md shadow-slate-500 dark:shadow-slate-800 ${inputEmail != email && inputEmail ? "block":"hidden"}`}> Atualizar</button>
                </Form.Submit>
            </Form.Root>
            
            {!showPasswordForm? <button onClick={()=>{setShowPasswordForm(true)}} className=' px-[12px] py-[6px] text-xl bg-green-800 hover:bg-green-950 hover:scale-105 duration-500 rounded text-white shadow-lg  '> Atualizar Senha</button> 
            : <Form.Root className='mt-2  mb-6 flex flex-col gap-2   border-2 border-slate-400 p-[12px]  ' onSubmit={(e)=>{e.preventDefault}}>
                <Form.Field name="password" className="flex gap-[12px]   ">
                    <Form.Label className='pl-[8px] py-[2px]  w-[30%]  font-semibold text-xl text-nowrap '>Insira sua senha antiga:</Form.Label>
                    <Form.Control type='password' aria-label={`insira sua senha`}className=' font-normal text-lg border-2 px-[10px] dark:bg-gray-900 border-slate-500 w-[20rem]'  required ></Form.Control>
                </Form.Field>
                <Form.Field name="newPassword" className="flex gap-[12px]   ">
                    <Form.Label className='pl-[8px] py-[2px] w-[30%] font-semibold text-xl text-nowrap '>Insira sua senha nova: </Form.Label>
                    <Form.Control type='password' aria-label={`insira sua senha`}className=' font-normal text-lg border-2 px-[10px] dark:bg-gray-900 border-slate-500 w-[20rem]'  required></Form.Control>
                </Form.Field>
                
                <Form.Submit asChild>
                     <div className='flex items-center gap-2'>
                     <button type='button' 
                            aria-label='botão cancelar'
                            className={`w-fit  ml-[16px] px-[16px] py-[4px] hover:bg-red-950 hover:scale-105 duration-300 text-xl text-slate-50 dark:border-2 dark:border-slate-50 dark:bg-gray-900 rounded bg-red-800 shadow-md shadow-slate-500 dark:shadow-slate-800`}
                            onClick={()=>{setShowPasswordForm(false)}}
                        > Cancelar </button>
                    <button type='submit' 
                        aria-label='botão atualizar senha'
                        className={`w-fit  ml-[16px] px-[16px] py-[4px] hover:bg-sky-950 hover:scale-105 duration-300 text-xl text-slate-50 dark:border-2 dark:border-slate-50 dark:bg-gray-900 rounded bg-sky-950 shadow-md shadow-slate-500 dark:shadow-slate-800`}
                        > Atualizar</button>
                    </div>
                </Form.Submit>
            </Form.Root>}
        </div>
    )
}