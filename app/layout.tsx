import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas', display: 'swap' })

const title = 'Muscle Tech Fitness | Best Gym in HMT Layout, Nagasandra, Bengaluru'
const description =
  'Premium gym in HMT Layout, Nagasandra, Bengaluru. Modern strength & cardio zones, certified personal trainers and flexible memberships. Join today and enroll in minutes.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'gym in HMT Layout',
    'gym in Nagasandra',
    'best gym near Peenya',
    'personal trainer Bengaluru',
    'Muscle Tech Fitness',
  ],
  generator: 'v0.app',
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Muscle Tech Fitness',
    images: [{ url: '/images/gym-floor.png', width: 654, height: 305, alt: 'Muscle Tech Fitness gym floor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/gym-floor.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0b0c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${bebas.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
