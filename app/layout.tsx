import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kazbegi Hideaway - Luxury Mountain Retreat in Georgia",
  description:
    "Experience authentic Georgian hospitality in our luxury mountain cabin. Stunning views, modern comfort, traditional charm. Book directly and save.",
  generator: "v0.app",
  keywords: [
    "Kazbegi accommodation",
    "Gudauri hotels",
    "Mountain cabin Georgia",
    "Boutique hotel Kazbegi",
    "Georgian guesthouse",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
