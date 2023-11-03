import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

import "../globals.css";

export default async function PublicLayout({ children }: { children: ReactNode }) {
    const session = await getServerSession(nextAuthOptions);
    if(session){
      redirect('/');
    }
  return (
    
    <>
        {children}
    </>
     
  );
}
