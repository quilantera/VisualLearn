import { Poppins } from "next/font/google"
import { ReactNode } from "react"

import "../globals.css"
import { ActivityHeader } from "@/components/ActivityHeader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: "normal",
  variable: "--font-poppins",
})
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
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable}  bg-gray-50 font-san`}>
        <main className="w-full flex-col items-center min-h-screen  bg-background-500 pt-20  dark:bg-gray-800 ">
          <ActivityHeader />
          {children}
        </main>
      </body>
    </html>
  )
}
