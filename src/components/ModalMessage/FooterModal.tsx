"use client"

import { useEffect, useRef } from "react";

interface FooterModalProps{
    children: React.ReactNode;
}
export function FooterModal({children}: FooterModalProps){
    
    return ( 
        <footer  className="w-full py-[8px] flex items-center justify-end mb-[24px]">
            {children}
        </footer>
    )
}
