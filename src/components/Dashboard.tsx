'use client'

import { useAccessibility } from "@/app/Context/AccessibilityContext";
import { useEffect } from "react";

interface DashboardProps {
  children: React.ReactNode;
  action? :() => void;
}
export function Dashboard({children, action}: DashboardProps) {
  const {isReady, setIsReady} = useAccessibility();
  useEffect(() => {
    setIsReady(!isReady);
  },
  []);
  return (
    <section
      className={`mt-6  flex w-11/12 flex-col   pt-14 `}
    >
     {children}
    </section>
  );
}
