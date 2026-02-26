import type { Metadata } from 'next'
import { Playfair_Display, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const greatVibes = Great_Vibes({ weight: '400', subsets: ["latin"], variable: '--font-script' });

export const metadata: Metadata = {
  title: 'Temporada 15 - Isabella',
  description: 'Estas invitado a mis XV - Isabella',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
