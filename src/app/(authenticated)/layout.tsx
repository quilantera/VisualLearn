import { Poppins } from "next/font/google";
import { ReactNode } from "react";

import "../globals.css";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { AllColors } from "@/components/allColors";
import SpeechReader from "@/components/SpeechReader";
import { AccessibilityProvider } from "../Context/AccessibilityContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: "normal",
  variable: "--font-poppins",
});
export const metadata = {
  title: "Blind Study",
  description: "Plataforma de estudos com acessibilidade ",
  generator: 'Next.js',
  applicationName: 'BlindStudy.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['acessibilidade', 'baixa visão', 'plataforma escolar', 'plataforma acessível', 'accessibility','school platform'],
  authors: [{ name: 'Gustavo Quilante', url: 'https://gustavoquilante.netlify.app' }, { name: 'Celso Olivete' }],
  colorScheme: 'light',
  creator: 'Gustavo Quilante Azevedo',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} bg-gray-50 font-san dark:bg-gray-800 dark:text-white `}
      >
        <AccessibilityProvider >
        <Header />
          <main className="flex min-h-screen w-full flex-col items-center bg-background-500  pl-[10%]  dark:bg-gray-800 dark:text-white ">
            <NavBar />
            <AllColors />
            {children}
          </main>
        <SpeechReader />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
