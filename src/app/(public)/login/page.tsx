import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import LoginImg from "../../../assets/astronauta-lendo-livro_1366-939.png";
import { Header } from "@/components/Header";

export default function Login() {
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-center gap-10  bg-violet-300">
      <Header />
      <Image
        src={LoginImg}
        alt="Banner Boas Vindas"
        className="h-[380px]  w-auto translate-y-2 animate-[float_5s_ease-in-out_infinite]"
      />

      <LoginForm />
    </main>
  );
}
