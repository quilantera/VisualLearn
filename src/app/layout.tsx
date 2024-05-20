import { Montserrat, Noto_Sans, Open_Sans, Poppins, Raleway, Rubik, Teko } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";
import { AccessibilityProvider } from "./Context/AccessibilityContext";
import NextAuthSessionProvider from "./providers/sessionProvider";
import { AllColors } from "@/components/allColors";
import { ScrollToTop } from "@/components/ScrollToTop";
import ClickableWrapper from "./Context/ClickableWrapperContext";
import SpeechReaderContext from "./Context/SpeechReaderContext";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ["300","400","500","600",'700',"800","900"],
  style: "normal",
  variable: "--font-raleway",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  style: "normal",
  variable: "--font-openSans",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  style: "normal",
  variable: "--font-rubik",
});


export const metadata = {
  title: "Visual Learn",
  description: "Plataforma de estudos com acessibilidade ",
  generator: 'Next.js',
  applicationName: 'visualLearn.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['acessibilidade', 'baixa visão', 'plataforma escolar', 'plataforma acessível', 'accessibility','school platform'],
  authors: [{ name: 'Gustavo Quilante', url: 'https://gustavoquilante.netlify.app' }, { name: 'Celso Olivete' }],
  colorScheme: 'light',
  creator: 'Gustavo Quilante Azevedo',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html  lang="pt-BR">
      
      <body className={`${raleway.variable} ${openSans.variable} ${rubik.variable} tracking-wide font-semibold bg-gray-50 dark:bg-gray-600 font-san`}>
      <NextAuthSessionProvider >
        <AccessibilityProvider >
          <SpeechReaderContext>
            <ClickableWrapper>
              <AllColors /> 
                  {children}
          </ClickableWrapper>
          </SpeechReaderContext>
        </AccessibilityProvider>
        </NextAuthSessionProvider>
        <ScrollToTop/>
      </body>
     
    </html>
  );
}
