"use client";
import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import LoginImg from "../../../assets/astronauta-lendo-livro_1366-939.png";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Login() {
  const router = useRouter();
  const handleLogin = (event: FormEvent) => {
    event?.preventDefault;
    router.push('/');
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
