"use client"

import { ArrowLeft } from "lucide-react"
import { COLORS } from "./theme"

export function ScreenHeader({
  title,
  onBack,
}: {
  title: string
  onBack?: () => void
}) {
  return (
    <header
      className="flex items-center gap-3 px-4 py-4 text-white shadow-sm"
      style={{ backgroundColor: COLORS.poseidon }}
    >
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          aria-label="Volver"
          className="flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-white/10"
        >
          <ArrowLeft className="size-4" />
          <span>Volver</span>
        </button>
      ) : (
        <span className="w-[76px]" aria-hidden />
      )}
      <h1 className="flex-1 text-center text-lg font-bold tracking-wide">{title}</h1>
      <span className="w-[76px]" aria-hidden />
    </header>
  )
}
