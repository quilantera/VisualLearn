
import { ReactNode } from "react";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { NavBar } from "@/components/NavBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

import "../globals.css";
import { PrimeiroCard } from "@/components/PrimeiroCard";
import axios from "axios";
export const dynamic = 'force-dynamic'
interface UserWithSchoolAndActivities {
  email: string;
  nome: string;
  urlAvatar: string | null;
  papel: string;
  escola: {
      nome: string;
  } | null;
  atividadesAluno: {
      dataEntrega: Date | null;
      nota: number | null;
  }[];
}
interface Turmas {
    nome: string;
    anoEscolar: Date;
}
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(nextAuthOptions);
    if(!session){
      redirect('/login');
    }
    const response = await axios.get(`${process.env.BASE_URL}/api/user`, {
      headers: {
          idUser: session?.id,
      },
  });
  
  const usuario: UserWithSchoolAndActivities = response.data;
  let turma: Turmas| undefined;
  if (session.papel === "ALUNO") {
    const response2 = await axios.get(`${process.env.BASE_URL}/api/students/classes`, {
      headers: {
        idUser: session.id,
      },
    });
    turma = response2.data;
  }

  return (
    <>
      <div className="fixed top-2 right-[44px] z-30 "> <AccessibilityPanel /> </div>
      <main className="flex  flex-wrap min-h-screen w-full pt-20 pb-10 items-center bg-gray-50 px-[60px] dark:bg-gray-700 dark:text-white ">
        <PrimeiroCard usuario={usuario} turma={turma} />
        <section className="flex w-full h-full mt-4 gap-[16px]">
          <NavBar userRole={session.papel} />
          {children}
        </section>
      </main>
    </>
  );
}
