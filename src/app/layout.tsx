import { mc } from 'merge-class'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatPDF',
  description: 'ChatPDF is a free and open source tool that enables you to chat with your PDFs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={mc("min-h-screen font-sans antialiased grainy",inter.className)}>{children}</body>
    </html>
  )
}
