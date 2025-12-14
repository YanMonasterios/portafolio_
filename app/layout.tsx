import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Yan Monasterios - Full-Stack Developer",
  description:
    "Portafolio profesional de Yan Monasterios, Full-Stack Developer",
  keywords: ["Full-Stack Developer", "React", "JavaScript", "Java", "Spring Boot", "Portafolio"],
  authors: [{ name: "Yan Monasterios" }],
  creator: "Yan Monasterios",
  metadataBase: new URL("https://portafolio-danieluribe-fotrix.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Yan Monasterios - Full-Stack Developer",
    description: "Portafolio profesional de Yan Monasterios",
    url: "https://portafolio-danieluribe-fotrix.vercel.app/",
    siteName: "Yan Monasterios Portafolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "m5vNawWQsFhto3zOtvDY6RLPTbWQiuocz4rqabkgGNk",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans ${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="portafolio-theme"
        >
          <Suspense fallback={null}>
            {children}
          </Suspense>
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
