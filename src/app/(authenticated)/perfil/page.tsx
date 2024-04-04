import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { BackgroundProfile } from "@/components/BackgroundProfile";
import { Dashboard } from "@/components/Dashboard";
import { ImageProfile } from "@/components/ImageProfile";
import { ProfileForms } from "@/components/ProfileForms";
import { TitleDashBoard } from "@/components/TitleDashboard";
import axios from "axios";
import { School } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface UserWithSchoolAndActivities {
    email: string;
    nome: string;
    senha?: string;
    urlAvatar?: string ;
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

export default async function Perfil(){
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
    return(
        <Dashboard>
            <TitleDashBoard text={"Seu Perfil"} size={5}/>
            <BackgroundProfile/>
           {usuario.urlAvatar ? <ImageProfile urlAvatar={usuario.urlAvatar}/> : <ImageProfile /> } 
            <div className="flex self-center flex-col w-[90%] gap-2">
                <h2 className="w-full text-center text-4xl font-semibold text-violet-950 dark:text-slate-50"> {usuario.nome}</h2>
                <h2 className="w-full flex items-center justify-center gap-2 text-center text-2xl font-semibold text-slate-700 dark:text-slate-50"> <School/> {usuario.escola?.nome}</h2>
                <div className="mt-4  w-full h-[2px] "/>
                <ProfileForms email={usuario.email}/>
             </div>
        </Dashboard>
    )
}