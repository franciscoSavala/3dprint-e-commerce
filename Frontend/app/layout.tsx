import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatGlobe } from "@/components/chat-globe"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Print3D - Premium 3D Printed Objects",
  description:
    "Discover our collection of high-quality 3D printed objects. From decorative pieces to functional accessories.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
            <main>{children}</main>
          <Footer />
          <ChatGlobe />
        </CartProvider>
      </body>
    </html>
  )
}
