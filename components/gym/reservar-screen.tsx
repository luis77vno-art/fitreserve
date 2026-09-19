"use client"

import { Users } from "lucide-react"
import { COLORS, type Screen } from "./theme"
import { ScreenHeader } from "./screen-header"

type Activity = {
  name: string
  cupos: number | null
}

const ACTIVITIES: Activity[] = [
  { name: "ACT 1", cupos: 3 },
  { name: "ACT 2", cupos: 5 },
  { name: "ACT 3", cupos: null },
  { name: "ACT 4", cupos: null },
]

export function ReservarScreen({
  onNavigate,
  onSelectActivity,
}: {
  onNavigate: (s: Screen) => void
  onSelectActivity: (name: string) => void
}) {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="RESERVAR" onBack={() => onNavigate("home")} />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-6">
        {ACTIVITIES.map((activity) => {
          const available = activity.cupos !== null
          return (
            <button
              key={activity.name}
              type="button"
              onClick={() => {
                onSelectActivity(activity.name)
                onNavigate(available ? "iniciar-reserva" : "cupo-maximo")
              }}
              className="flex items-center justify-between rounded-2xl px-5 py-5 text-left text-white shadow-md transition-transform active:scale-[0.98]"
              style={{ backgroundColor: COLORS.norse }}
            >
              <span className="flex flex-col">
                <span className="text-lg font-semibold">{activity.name}</span>
                <span className="text-sm text-white/80">
                  CUPOS: {available ? "disponibles" : "sin cupos"}
                </span>
              </span>

              {available ? (
                <span
                  className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold text-white"
                  style={{ backgroundColor: COLORS.poseidon }}
                >
                  <Users className="size-4" />
                  {activity.cupos}
                </span>
              ) : (
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase text-white"
                  style={{ backgroundColor: COLORS.pumpkin }}
                >
                  Lleno
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
