
import * as Form from "@radix-ui/react-form";
import { FormEvent } from "react";


interface LoginFormProps{
  handleSubmit: (event:  FormEvent) => void;
  errors: { email: boolean; password: boolean}
  resetErrors: () => void;
}

export function LoginForm( {handleSubmit, errors, resetErrors}: LoginFormProps){
  return (
    <Form.Root method="POST" onSubmit={handleSubmit} className="flex h-auto w-[28rem] flex-col items-center gap-1 rounded-lg bg-gray-50 px-8 py-8 shadow-sm dark:bg-gray-700 dark:text-white ">
      <h2 className="py-5 text-4xl font-semibold text-purple-100 dark:text-white">Bem-Vindo</h2>
      <div className="flex w-4/5 flex-col gap-3 py-3">
        <Form.Field className="flex w-full flex-col gap-1" name="email" serverInvalid={errors.email}> 
          <Form.Label className="text-lg font-medium"> Email</Form.Label>
          <Form.Control asChild>
            <input
              id="email"
              name="email"
              aria-label="insira usuário"
              className="Input h-10 bg-slate-300 px-4 text-base dark:text-black"
              type="email"
              onChange={resetErrors}
              required
            />
          </Form.Control>
          <Form.Message className="text-sm text-red-700" match="valueMissing">
            Por favor, preenche esse campo{" "}
          </Form.Message>
          <Form.Message match="typeMismatch" className="text-sm text-red-700"  >
            Insira um email valido!
          </Form.Message>
          {errors.email && (
          <Form.Message className="text-sm text-red-700" >
            Email ou senha incorretos
          </Form.Message>
        )}
        </Form.Field>
        <Form.Field name="senha" className="flex w-full flex-col gap-2" serverInvalid={errors.password}> 
          <Form.Label className="text-lg font-medium"> Senha</Form.Label>
          <Form.Control asChild>
            <input
              id="senha"
              name='senha'
              className="Input h-10 bg-slate-300 px-4 text-base dark:text-black"
              type="password"
              required
              aria-label="insira senha"
              onChange={resetErrors}
            />
          </Form.Control>
          <Form.Message className="text-sm text-red-700" match="valueMissing">
            Este campo é obrigatório{" "}
          </Form.Message>
          {errors.password && (
          <Form.Message className="text-sm text-red-700" >
            Email ou senha incorretos
          </Form.Message>
        )}
        </Form.Field>
        <Form.Field
          name="remember"
          className="flex items-center justify-between  gap-1"
        >
          <div>
            <Form.Control asChild>
              <input type="checkbox" className="w-3 h-3"  aria-label="lembrar-me "/>
            </Form.Control>
            <Form.Label className=" text-sm font-medium">
              {" "}
              lembrar-me
            </Form.Label>
          </div>
          <a
            href="/"
            className="text-sm font-medium text-blue-700 duration-500 ease-in-out hover:text-cyan-500 dark:text-cyan-400"
          >
            Esqueci minha senha
          </a>
        </Form.Field>
        <Form.Submit asChild>
          <button 
              className="mt-4 h-10 bg-blue-700 text-xl text-violet-50 duration-300 hover:bg-blue-800 dark:bg-gray-800 dark:border-2 dark:border-white  dark:hover:bg-white dark:hover:text-black"
              >
            Enviar
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
}
