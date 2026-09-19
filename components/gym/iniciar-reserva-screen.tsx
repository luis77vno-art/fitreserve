"use client"

import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { COLORS, type Screen } from "./theme"
import { ScreenHeader } from "./screen-header"

const HORARIOS = ["08:00", "10:00", "15:00", "18:00", "20:00"]

export function IniciarReservaScreen({
  activityName,
  onNavigate,
  onConfirm,
}: {
  activityName: string
  onNavigate: (s: Screen) => void
  onConfirm: () => void
}) {
  const [fecha, setFecha] = useState<Date | undefined>(undefined)
  const [hora, setHora] = useState<string>("")
  const [calendarOpen, setCalendarOpen] = useState(false)

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
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger
              className="flex w-full items-center gap-3 rounded-xl border bg-background px-4 py-3 text-left text-sm transition-colors hover:bg-muted/50"
              style={{ borderColor: COLORS.norse }}
            >
              <CalendarIcon className="h-5 w-5 shrink-0" style={{ color: COLORS.norse }} />
              <span className={fecha ? "font-medium text-foreground" : "text-muted-foreground"}>
                {fecha
                  ? format(fecha, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })
                  : "Selecciona una fecha"}
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={fecha}
                onSelect={(d) => {
                  setFecha(d)
                  setCalendarOpen(false)
                }}
                locale={es}
                captionLayout="dropdown"
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold" style={labelStyle}>
            Hora
          </span>
          <Select value={hora} onValueChange={setHora}>
            <SelectTrigger
              className="w-full rounded-xl px-4 py-6 text-sm"
              style={{ borderColor: COLORS.norse }}
            >
              <SelectValue placeholder="Selecciona un horario" />
            </SelectTrigger>
            <SelectContent>
              {HORARIOS.map((h) => (
                <SelectItem key={h} value={h}>
                  {h}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {(fecha || hora) && (
          <div
            className="rounded-xl px-4 py-3 text-sm"
            style={{ backgroundColor: `${COLORS.poseidon}14`, color: COLORS.poseidon }}
          >
            <span className="font-semibold">Reserva: </span>
            {fecha ? format(fecha, "d MMM yyyy", { locale: es }) : "sin fecha"}
            {hora ? ` · ${hora}` : ""}
          </div>
        )}
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
          disabled={!fecha || !hora}
          className="flex-1 rounded-xl py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform active:scale-[0.98] disabled:opacity-50"
          style={{ backgroundColor: COLORS.norse }}
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
