import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Materias(){
    const session = await getServerSession(nextAuthOptions);
    if(session?.papel !== "PROFESSOR"){
      redirect('/');
    }
    return (
        <Dashboard>
            Matérias
        </Dashboard>
    )
}