import { DashboardMateria } from "@/components/DashboardMateria";
import { bancoDeMaterias } from "@/utils/bancoDeMaterias";

export default function MateriaPage({
  params,
}: {
  params: { nomeURL: string };
}) {
  const materia =  bancoDeMaterias.find(
    (materia) => materia.nomeURL === params.nomeURL,
  );
  return (
    <>
      <DashboardMateria subject={materia!} />
    </>
  );
}
