import { Inter, Rubik, Teko } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";
import SpeechReader from "@/components/SpeechReader";
import { AccessibilityProvider } from "./Context/AccessibilityContext";
import NextAuthSessionProvider from "./providers/sessionProvider";
import { AllColors } from "@/components/allColors";
import { ScrollToTop } from "@/components/ScrollToTop";

const rubik = Rubik({
  subsets: ['latin'],
  weight: ["300","400","500","600",'700',"800","900"],
  style: "normal",
  variable: "--font-rubik",
});
const teko = Teko({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  style: "normal",
  variable: "--font-teko",
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
    <html  lang="pt-br">
      
      <body className={`${rubik.variable} ${teko.variable} bg-gray-50 dark:bg-gray-600 font-san`}>
      <NextAuthSessionProvider >
        <AccessibilityProvider >
      
        <AllColors /> 
            {children}
        <SpeechReader />
        </AccessibilityProvider>
        </NextAuthSessionProvider>
        <ScrollToTop/>
      </body>
     
    </html>
  );
}
