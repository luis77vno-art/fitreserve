import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GYM · Reservas",
  description: "Reserva y gestiona tus clases del gimnasio desde tu móvil.",
}

export const viewport: Viewport = {
  themeColor: "#2B3B4C",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
