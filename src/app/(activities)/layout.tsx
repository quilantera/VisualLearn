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
  description: "Criado por Gustavo Quilante Azevedo",
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
