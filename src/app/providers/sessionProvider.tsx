"use client"
import { ReactNode } from "react";
import {SessionProvider} from "next-auth/react";

interface NextSessionProviderProps {
    children: ReactNode
}
export default function NextAuthSessionProvider({children}:NextSessionProviderProps) {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}