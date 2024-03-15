

import { ReactNode } from "react"
import "../globals.css"
import { LessonHeader } from "@/components/LessonHeader"
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import "../globals.css";


export const dynamic = 'force-dynamic'
export default async function LessonsLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(nextAuthOptions);
    if(!session){
      redirect('/login');
    }
  return (
    <>
    <LessonHeader />
        <main className="w-full flex-col items-center min-h-screen   bg-background-500 pt-20  dark:bg-gray-800">
          {children}
        </main>
    </>
  )
}
