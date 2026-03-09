import type { Metadata } from "next"
import { Outfit, Space_Grotesk } from "next/font/google"
import { Providers } from "@/components/providers"
import { cn } from "@/utils"

import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

// text

export const metadata: Metadata = {
  title: "PingAlert",
  description: "Ping any events to your Discord",
  icons: [{ rel: "icon", url: "/brand-asset-profile-picture.png" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(outfit.variable, spaceGrotesk.variable)}>
        <body className="min-h-[calc(100vh-1px)] flex flex-col font-sans bg-brand-50 dark:bg-dark-background text-brand-950 antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative flex-1 flex flex-col">
              <Providers>{children}</Providers>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
