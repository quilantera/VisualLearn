"use client";
import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import LoginImg from "../../../assets/astronauta-lendo-livro_1366-939.png";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email") as string;
    const password = formData.get("senha") as string;

    console.log("Username:", email);
    console.log("Password:", password);

    try {
      const result = await signIn('credentials',{
        email,
        password,
        redirect: false
      })

      if (result?.error) {
        console.log(result)
        return
      } 
      router.replace('/')
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-center gap-10  bg-violet-300">
      <Header />
      <Image
        src={LoginImg}
        alt="Banner Boas Vindas"
        className="h-[380px]  w-auto translate-y-2 animate-[float_5s_ease-in-out_infinite]"
      />

      <LoginForm handleSubmit = {handleLogin} />
    </main>
  );
}
