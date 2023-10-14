import { ShowSubjects } from "@/components/ShowSubjects";
import { bancoDeMaterias } from "@/utils/bancoDeMaterias";
import Link from "next/link";

interface DashboardProps {
  children: React.ReactNode;
  action? :() => void;
}
export function Dashboard({children, action}: DashboardProps) {
  return (
    <section
      className={`mt-6  flex w-11/12 flex-col   pt-14 `}
    >
     {children}
    </section>
  );
}
