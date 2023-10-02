import { Poppins } from "next/font/google";
import { ReactNode } from "react";

import "../globals.css";

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
      <body className={`${poppins.variable} bg-gray-50 font-san`}>
        {children}
      </body>
    </html>
  );
}
