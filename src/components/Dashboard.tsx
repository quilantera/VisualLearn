import { ShowSubjects } from "@/components/ShowSubjects";
import { bancoDeMaterias } from "@/utils/bancoDeMaterias";
import Link from "next/link";

export function Dashboard() {
  return (
    <section
      className={`mt-6 flex w-[90%] flex-col items-center justify-center pt-14 `}
    >
      <div className="mb-3 flex w-full justify-between ">
        <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
          Matérias
        </h2>
        <h2 className="text-3xl font-semibold text-primary-700 dark:text-white ">
          6º Ano B
        </h2>
      </div>
      <ShowSubjects subjects={bancoDeMaterias} />
    </section>
  );
}
