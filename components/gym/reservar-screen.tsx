"use client"

import { ChevronRight } from "lucide-react"
import { COLORS, type Screen } from "./theme"
import { ScreenHeader } from "./screen-header"

const ACTIVITIES = ["Spinning", "Funcional", "Musculación", "Yoga"]

export function ReservarScreen({
  onNavigate,
  onSelectActivity,
}: {
  onNavigate: (s: Screen) => void
  onSelectActivity: (name: string) => void
}) {
  const handleSelect = (name: string) => {
    onSelectActivity(name)
    const hasCupo = Math.random() < 0.7
    onNavigate(hasCupo ? "iniciar-reserva" : "cupo-maximo")
  }

  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="RESERVAR" onBack={() => onNavigate("home")} />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-6">
        {ACTIVITIES.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => handleSelect(name)}
            className="flex items-center justify-between rounded-2xl px-5 py-5 text-left text-white shadow-md transition-transform active:scale-[0.98]"
            style={{ backgroundColor: COLORS.norse }}
          >
            <span className="text-lg font-semibold">{name}</span>
            <ChevronRight className="size-5 text-white/80" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  )
}
