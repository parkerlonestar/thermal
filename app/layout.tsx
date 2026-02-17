import type { Metadata, Viewport } from "next"
import { Inter, Oswald } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1565C0",
}

export const metadata: Metadata = {
  title: "Thermo Tex Insulation | Professional Mechanical Insulation in Texas",
  description:
    "Thermo Tex Insulation provides professional mechanical insulation services across Texas including Austin, San Marcos, San Antonio, Houston, and Dallas. Pipe insulation, duct wrap, jacket metaling, and more. Call 832-881-3789.",
  keywords:
    "mechanical insulation, pipe insulation, duct insulation, jacket metaling, Austin insulation, Houston insulation, Dallas insulation, San Antonio insulation, commercial insulation Texas, industrial insulation contractor",
  openGraph: {
    title: "Thermo Tex Insulation | Professional Mechanical Insulation",
    description:
      "Expert mechanical insulation services across Texas. Pipe insulation, duct wrap, steam systems, chilled water systems, and protective metal jacketing.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
