import { CardProfile } from "./CardProfile";
import { CardRanking } from "./CardRanking";

export function HomeDashboard() {
  return (
    <section className="mt-6 flex w-[90%] gap-8 pt-10  dark:bg-gray-800">
      <div className=" flex w-2/5 flex-col gap-6 p-4">
        <CardProfile />
        <CardRanking />
      </div>
      <div className="h-full w-full p-4"></div>
    </section>
  );
}
