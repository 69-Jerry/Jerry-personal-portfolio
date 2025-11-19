import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jerry Wilson - React Developer & UI Enthusiast',
  description: 'Portfolio of Jerry Wilson, a React developer specializing in building modern, accessible web applications with React and TypeScript.',
  
  icons: {
    icon: [
      {
        url: '/code.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/code.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/code.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/code.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
