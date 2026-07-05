import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: 'Martina Assistant - Automatiza tu negocio',
  description: 'Martina responde mensajes, organiza citas y acompaña a tus clientes mientras tú te centras en lo importante.',
  generator: 'v0.app',
  icons: {
  icon: '/apple-icon.png',
  apple: '/apple-icon.png',
  },
}


export const viewport: Viewport = {
  themeColor: '#0d1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
  {process.env.NODE_ENV === 'production' && (
    <Script
      id="cookieyes"
      src="https://cdn-cookieyes.com/client_data/cacc55662f1fa128ae88f74acf5a8e67/script.js"
      strategy="beforeInteractive"
    />
  )}

  {children}

  {process.env.NODE_ENV === 'production' && <Analytics />}
</body>
    </html>
  )
}
