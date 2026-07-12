import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RecLora - Join the Fun for Free!',
  description: 'Cross-platform social gaming with creation, competition, and cooperation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-reclora-dark text-white">{children}</body>
    </html>
  )
}
