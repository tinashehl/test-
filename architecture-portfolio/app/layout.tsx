import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'
import PageTransition from '@/components/layout/page-transition'
import Cursor from '@/components/ui/cursor'
import ScrollProgress from '@/components/ui/scroll-progress'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FORMA Studio — Architecture & Design',
    template: '%s — FORMA Studio',
  },
  description:
    'FORMA Studio is an architecture practice designing spaces with clarity, permanence, and restraint. Residential, cultural, and mixed-use projects across Europe.',
  keywords: [
    'architecture studio',
    'architecture portfolio',
    'residential architecture',
    'minimal architecture',
    'design studio',
  ],
  authors: [{ name: 'FORMA Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'FORMA Studio — Architecture & Design',
    description:
      'Designing spaces with clarity, permanence, and restraint.',
    siteName: 'FORMA Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORMA Studio — Architecture & Design',
    description:
      'Designing spaces with clarity, permanence, and restraint.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Cursor />
        <ScrollProgress />
        <Nav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
