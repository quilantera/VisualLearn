"use client";
import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import LoginImg from "../../../assets/astronauta-lendo-livro_1366-939.png";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { Popup } from "@/components/Popup";
import { speaksText } from "@/app/Context/SpeechReaderContext";

export const dynamic = 'force-dynamic'
export default function Login() {
  const router = useRouter();
  const [popupType, setPopupType] = useState<string | null>(null);
  const [messagePopup, setMessagePopup] = useState<string | null>("sem mensagem");
  const [serverErrors, setServerErrors] = useState({
    email: false,
    password: false,
  });

  const handlePopupClose = () => {
    setPopupType(null);
  };
  
  function ResetErrors(){
    setServerErrors({email: false, password : false});
  }

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setServerErrors({email: false, password : false});
    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email") as string;
    const password = formData.get("senha") as string;

    console.log("Username:", email);
    console.log("Password:", password);
    setPopupType('loading');
    setMessagePopup("por favor, aguarde")
    
    try {
      const result = await signIn('credentials',{
        email,
        password,
        redirect: false
      })

      if (result?.error) {
        console.log(result)
        setPopupType('error');
        await speaksText("usuário ou senha inválidos");
       await setMessagePopup("usuário ou senha inválidos" ) ;
        setServerErrors({email: true, password : true});
        return
      } 
                 
      router.replace('/')
      await setMessagePopup("Bem vindo!");
      speaksText("Bem vindo");
      setPopupType('success');
      
    
    } catch (error) {
      setMessagePopup("Erro ao enviar requisição:"+ error);
      setServerErrors({email: true, password : true});
      setPopupType('error');
    }
  };
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-center gap-10  bg-violet-300">
      <div className="fixed top-3 left-[40px] "> <AccessibilityPanel /> </div>
      {popupType && <Popup message={messagePopup} state={popupType === "loading" ? "loading" : popupType === "success" ? "success" : popupType === "error" ? "error" : "alert"} onClose={handlePopupClose} />}
     
      <Image
        src={LoginImg}
        alt="Banner Boas Vindas"
        className="h-[380px]  w-auto translate-y-2 animate-[float_5s_ease-in-out_infinite]"
      />

      <LoginForm handleSubmit = {handleLogin} errors={serverErrors} resetErrors={ResetErrors}  />
    </main>
  );
}
