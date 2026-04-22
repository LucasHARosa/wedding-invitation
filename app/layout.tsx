import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Ana & Lucas - Casamento',
  description: 'Você é nosso convidado especial para celebrar o nosso casamento',
  icons: {
    icon: '/aliancas-de-casamento.ico',
  },
  openGraph: {
    title: 'Ana & Lucas - Casamento',
    description: 'Você é nosso convidado especial para celebrar o nosso casamento',
    images: [
      {
        url: '/vetor-plano-de-coracao-basico.png',
        width: 1200,
        height: 630,
        alt: 'Ana & Lucas - Casamento',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f0eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
