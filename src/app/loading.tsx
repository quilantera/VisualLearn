"use client"
import Image from "next/image"
import  loading  from "@/assets/loading2.gif"
import SyncLoader from "react-spinners/SyncLoader"
import { AccessibilityProvider } from "@/app/Context/AccessibilityContext"
import SpeechReader from "@/components/SpeechReader"

export default function Loading(){
    return( 
       <AccessibilityProvider >
        <section className="bg-slate-50 opacity-80 relative w-screen h-screen">
            <div className="fixed top-1/2 left-1/2 translate-y-[-200px] sm:translate-x-0 sm:translate-y-0 translate-x-[-170px] flex flex-col items-center justify-center">
                <Image src={loading} alt="carregando" height={300} width={300} />
                <div className="flex gap-2"> 
                    <h3 className="font-medium text-xl text-violet-950"> Carregando</h3>
                    <SyncLoader size={20} color="#370a5c"/>
                </div>
            </div>
        </section>
        <SpeechReader />
    </AccessibilityProvider>
    )
}