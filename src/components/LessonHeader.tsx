"use client";
import { VoltarBtn } from "./VoltarBtn";
import { useEffect, useState } from "react";
import { AccessibilityPanel } from "./AccessibilityPanel";



export function LessonHeader() {;
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if(typeof window !== "undefined") {
      setIsLoading(false);
    }  
}, []);


  return (
    <header
      className={`fixed right-0 top-0 z-40 sm:h-20 min-h-80 flex w-full items-center justify-between gap-2 bg-primary-500 px-3 py-[8px] dark:bg-gray-900 dark:border-b-2 dark:border-white`}
    >
      <VoltarBtn />
      {!isLoading &&  
      <AccessibilityPanel visibleOnScroll={true}/>
      
       }
     <div className="w-20"/>
    </header>
  );
}
