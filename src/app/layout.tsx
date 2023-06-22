import './globals.css'
import { Ubuntu } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin']
})

export const metadata = {
  title: 'Fiemotrak',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Toaster/>
       
           {children}
           
      </body>
    </html>
  )
}
