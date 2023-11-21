
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

import "../globals.css";
export const dynamic = 'force-dynamic'
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(nextAuthOptions);
    if(!session){
      redirect('/login');
    }
  return (
    <>
        <Header />
        <NavBar />
          <main className="flex min-h-screen w-full flex-col items-center bg-background-500  pl-[10%]  dark:bg-gray-800 dark:text-white ">  
            {children}
          </main>
      </>
  );
}
