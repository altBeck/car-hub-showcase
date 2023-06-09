import { Footer, Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Tellos Car Hub | Discover your dream car — quickly and easily!',
  description: 'Discover your dream car — quickly and easily!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">  
        <Navbar />     
        {children}
        <Footer />
      </body>
    </html>
  )
}
