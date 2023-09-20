import { DashboardMateria } from "@/components/DashboardMateria";
import { bancoDeMaterias } from "@/utils/bancoDeMaterias";

export default async function MateriaPage({
  params,
}: {
  params: { nomeURL: string };
}) {
  const materia = await bancoDeMaterias.find(
    (materia) => materia.nomeURL === params.nomeURL,
  );
  return (
    <>
      <DashboardMateria subject={materia!} />
    </>
  );
}
