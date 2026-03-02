import type { Metadata } from 'next'
import { Playfair_Display, Great_Vibes } from 'next/font/google'
import './globals.css'
import { AudioProvider } from '@/components/audio-context';

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
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  )
}
