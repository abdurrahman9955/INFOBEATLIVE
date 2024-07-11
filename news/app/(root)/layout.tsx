import Navbar from '@/app/components0/Navbar'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Infobeatlive',
  description: 'the best real tine news website in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
         <Navbar />
        {children}
       
        </body>
    </html>
  )
}
