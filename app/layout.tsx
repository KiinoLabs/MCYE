import type { Metadata } from 'next'
import { Merriweather, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'MCYE - Mahtot Children and Youth Empowerment',
  description:
    'Mahtot Children and Youth Empowerment (MCYE) works to ensure healthy minds and healthy futures for children and youth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${merriweather.variable}`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}