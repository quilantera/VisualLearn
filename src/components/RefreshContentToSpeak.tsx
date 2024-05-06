"use client"
import { useAccessibility } from "@/app/Context/AccessibilityContext";
import { useEffect } from "react"

export function RefreshContentToSpeak(){
    const {setIsReady,isReady} = useAccessibility();
    useEffect(() => {
        setIsReady(!isReady);
    }, [])
    return null;
}