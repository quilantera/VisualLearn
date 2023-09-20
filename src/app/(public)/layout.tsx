import { Roboto, Poppins } from "next/font/google";
import { ReactNode } from "react";

import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: "normal",
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Blind Study",
  description: "Criado por Gustavo Quilante Azevedo",
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
