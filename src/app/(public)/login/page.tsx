"use client";
import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import LoginImg from "../../../assets/astronauta-lendo-livro_1366-939.png";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { Popup } from "@/components/Popup";
import { ModalMessage } from "@/components/ModalMessage";
import { ButtonAction } from "@/components/ButtonAction";
import { speaksText } from "@/app/Context/SpeechReaderContext";


export const dynamic = 'force-dynamic'
export default function Login() {
  const router = useRouter();
  const [popupType, setPopupType] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>("sem mensagem");
  const [showModal, setShowModal] = useState<boolean>(false);
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
  
  const closeModal = async () =>{
    await setServerErrors({email: true, password : true});
    await setShowModal(false);
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
    setMessage("por favor, aguarde");
    
    try {
      const result = await signIn('credentials',{
        email,
        password,
        redirect: false
      })
  
      if (result?.error) {
        await setMessage(result.error);
        await setShowModal(true);
        speaksText(result.error);
        return;
      } 
                   
      router.replace('/');
      setMessage("Bem vindo!");
      setPopupType('success');
      
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      await setMessage("Erro ao enviar os dados: " + error);
      await setShowModal(true);
    }
  };
  const modalRef = useRef<HTMLButtonElement>(null);
  useEffect(() =>{
    showModal && modalRef.current?.focus();
  },[showModal]);
  return (
    <main className="flex min-h-screen sm:flex-col-reverse sm:pt-[100px] w-full flex-row items-center justify-center gap-10  bg-violet-300">
      <div className="fixed top-3 left-[40px] "> <AccessibilityPanel /> </div>
      {popupType && <Popup message={message} state={popupType === "loading" ? "loading" : popupType === "success" ? "success" : popupType === "error" ? "error" : "alert"} onClose={handlePopupClose} />}
      {
        showModal && 
        <ModalMessage.Root >
          <ModalMessage.Header onClose={closeModal} />
            <ModalMessage.Body>
              <ModalMessage.Content type="error" title={message!} message={"Houve um erro ao confirmar seu login, por favor insira os dados novamente"} />
            </ModalMessage.Body>
            <ModalMessage.Footer>
              <ButtonAction size={"large"} handleClick={closeModal} text={"Fechar"} buttonRef={modalRef}  />
            </ModalMessage.Footer>
        </ModalMessage.Root>
      }
      <Image
        src={LoginImg}
        alt="Banner Boas Vindas"
        className="h-[380px]  sm:h-[200px] w-auto translate-y-2 animate-[float_5s_ease-in-out_infinite]"
      />

      <LoginForm handleSubmit = {handleLogin} errors={serverErrors} resetErrors={ResetErrors}  />
    </main>
  );
}
