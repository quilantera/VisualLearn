'use client'

import { useAccessibility } from "@/app/Context/AccessibilityContext";
import { useEffect } from "react";

interface DashboardProps {
  children: React.ReactNode;
  action? :() => void;
}
export function Dashboard({children, action}: DashboardProps) {
 
  return (
    <section
      className={` w-full bg-[#fefefefe] dark:bg-gray-900  dark:border-2 dark:border-slate-50 min-h-[80vh] flex flex-col  shadow-lg  px-[24px] sm:px-[12px] pb-14 pt-8 rounded-md `}
    >
     {children}
    </section>
  );
}
