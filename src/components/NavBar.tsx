"use client"
import Image from "next/image";

import profile from "../assets/profile.jpg";
import { NavPagesSelect } from "./NavPagesSelect";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export function NavBar() {
  const router = useRouter();
  async function logout(){
    await signOut({
      redirect: false
    })
    router.replace("/login")
  }
  return (
    <nav className=" fixed inset-0 flex h-full w-[7.5rem] flex-col items-center justify-between bg-primary-500 pb-10 pt-14 dark:border-r-2 dark:border-white dark:bg-gray-700">
      <div className="flex w-full  flex-col items-center gap-6">
        <Image
          src={profile}
          alt={"Imagem de perfil"}
          width={80}
          height={80}
          className="w-2/3 rounded-full border-2 border-slate-300  duration-200 ease-in-out hover:shadow-[0px_0px_12px_#E2E8F0]  "
        />
        <NavPagesSelect />
      </div>

        <button onClick={logout} title="encerrar sessão"  aria-label="encerrar sessão" tabIndex={0} className="cursor-pointer p-2  text-white duration-200 ease-in-out hover:text-white focus:drop-shadow-lg focus:shadow-white " >
          <LogOut data-ignore="true"  />
        </button> 
      
    </nav>
  );
}
