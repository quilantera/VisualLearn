import { Dashboard } from "@/components/Dashboard";
import { ShowSubjects } from "@/components/ShowSubjects";
import { bancoDeMaterias } from "@/utils/bancoDeMaterias";

export default function Materias() {
  return (
    <>
      <Dashboard >
        <div className="mb-3 flex w-full justify-between ">
          <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
            Matérias
          </h2>
          <h2 className="text-3xl font-semibold text-primary-700 dark:text-white ">
            6º Ano B
          </h2>
        </div>
        <ShowSubjects subjects={bancoDeMaterias} />
      </Dashboard>
   
    </>
  );
}
