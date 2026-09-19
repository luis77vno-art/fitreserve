"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { COLORS, type Screen } from "./theme"
import { ScreenHeader } from "./screen-header"

export function IniciarReservaScreen({
  activityName,
  onNavigate,
  onConfirm,
}: {
  activityName: string
  onNavigate: (s: Screen) => void
  onConfirm: () => void
}) {
  const [dia, setDia] = useState("24")
  const [mes, setMes] = useState("Sep")
  const [anio, setAnio] = useState("2026")
  const [hora, setHora] = useState("18:00")

  const labelStyle = { color: COLORS.poseidon }

  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="INICIAR RESERVA" onBack={() => onNavigate("reservar")} />

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-6">
        <div
          className="rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white"
          style={{ backgroundColor: COLORS.norse }}
        >
          {activityName || "Actividad"}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold" style={labelStyle}>
            Fecha
          </span>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Día</span>
              <Input value={dia} onChange={(e) => setDia(e.target.value)} className="text-center" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Mes</span>
              <Input value={mes} onChange={(e) => setMes(e.target.value)} className="text-center" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Año</span>
              <Input value={anio} onChange={(e) => setAnio(e.target.value)} className="text-center" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold" style={labelStyle}>
            Hora
          </span>
          <Input value={hora} onChange={(e) => setHora(e.target.value)} placeholder="__:__" />
        </div>
      </div>

      <div className="flex gap-3 px-5 py-5">
        <button
          type="button"
          onClick={() => onNavigate("cancelacion-exitosa")}
          className="flex-1 rounded-xl py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform active:scale-[0.98]"
          style={{ backgroundColor: COLORS.pumpkin }}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="flex-1 rounded-xl py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform active:scale-[0.98]"
          style={{ backgroundColor: COLORS.norse }}
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
