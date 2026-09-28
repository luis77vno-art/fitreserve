"use client"

import { Card } from "@/components/ui/card"
import { CalendarDays, Clock, KeyRound } from "lucide-react"
import { COLORS, type Screen } from "./theme"
import { ScreenHeader } from "./screen-header"

type Reserva = {
  actividad: string
  fecha: string
  hora: string
  pin: string
}

const RESERVAS: Reserva[] = [
  { actividad: "Spinning", fecha: "24 Sep 2026", hora: "18:00", pin: "1234" },
  { actividad: "Yoga", fecha: "26 Sep 2026", hora: "09:30", pin: "5678" },
]

export function MisReservasScreen({
  onNavigate,
  onModify,
}: {
  onNavigate: (s: Screen) => void
  onModify: (actividad: string) => void
}) {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="MIS RESERVAS" onBack={() => onNavigate("home")} />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-6">
        {RESERVAS.map((r) => (
          <Card key={r.pin} className="gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-md">
            <div className="px-5 py-4 text-white" style={{ backgroundColor: COLORS.poseidon }}>
              <p className="text-xs font-medium uppercase tracking-wide text-white/70">Actividad</p>
              <p className="text-lg font-bold">{r.actividad}</p>
            </div>
            <div className="flex flex-col gap-3 px-5 py-4" style={{ backgroundColor: "#fff" }}>
              <div className="flex items-center gap-2 text-sm" style={{ color: COLORS.poseidon }}>
                <CalendarDays className="size-4" style={{ color: COLORS.norse }} />
                <span className="font-medium">Fecha:</span> {r.fecha}
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: COLORS.poseidon }}>
                <Clock className="size-4" style={{ color: COLORS.norse }} />
                <span className="font-medium">Hora:</span> {r.hora}
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: COLORS.poseidon }}>
                <KeyRound className="size-4" style={{ color: COLORS.norse }} />
                <span className="font-medium">PIN:</span>
                <span className="font-mono font-bold tracking-widest">{r.pin}</span>
              </div>
              <div className="mt-1 flex gap-3">
                <button
                  type="button"
                  onClick={() => onModify(r.actividad)}
                  className="flex-1 rounded-xl py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-transform active:scale-[0.98]"
                  style={{ backgroundColor: COLORS.norse }}
                >
                  Modificar
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("cancelacion-exitosa")}
                  className="flex-1 rounded-xl py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-transform active:scale-[0.98]"
                  style={{ backgroundColor: COLORS.pumpkin }}
                >
                  Dar de baja
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
