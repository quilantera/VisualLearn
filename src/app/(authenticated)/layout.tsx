import { Poppins } from "next/font/google";
import { ReactNode } from "react";

import "../globals.css";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: "normal",
  variable: "--font-poppins",
});
export const metadata = {
  title: "Blind Study",
  description: "Criado por Gustavo Quilante Azevedo",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} bg-gray-50 font-san dark:bg-gray-800 dark:text-white `}
      >
        <main className="flex min-h-screen w-full flex-col items-center bg-background-500  pl-[10%]  dark:bg-gray-800 dark:text-white ">
          <Header />
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
