"use client"

import { CalendarDays, ClipboardList, CreditCard, Dumbbell, Menu, QrCode, Settings } from "lucide-react"
import { COLORS, type Screen } from "./theme"

function MenuTile({
  label,
  icon,
  onClick,
  disabled,
}: {
  label: string
  icon: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex w-full items-center gap-4 rounded-2xl px-5 py-5 text-left text-white shadow-md transition-transform active:scale-[0.98] disabled:opacity-60"
      style={{ backgroundColor: disabled ? COLORS.poseidon : COLORS.norse }}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15">{icon}</span>
      <span className="text-lg font-semibold">{label}</span>
    </button>
  )
}

export function HomeScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <div className="flex h-full flex-col">
      <header
        className="flex items-center gap-3 px-4 py-4 text-white"
        style={{ backgroundColor: COLORS.poseidon }}
      >
        <button
          type="button"
          aria-label="Abrir menú"
          className="rounded-md p-1 transition-colors hover:bg-white/10"
        >
          <Menu className="size-6" />
        </button>
        <h1 className="flex-1 text-center text-xl font-bold tracking-[0.3em]">GYM</h1>
        <span className="w-8" aria-hidden />
      </header>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-6">
        <MenuTile label="Reservar" icon={<Dumbbell className="size-6" />} onClick={() => onNavigate("reservar")} />
        <MenuTile
          label="Mis Reservas"
          icon={<ClipboardList className="size-6" />}
          onClick={() => onNavigate("mis-reservas")}
        />
        <MenuTile label="Calendario" icon={<CalendarDays className="size-6" />} disabled />
        <MenuTile label="Plan" icon={<CreditCard className="size-6" />} disabled />
      </div>

      <nav
        className="flex items-center justify-between px-6 py-3 text-white"
        style={{ backgroundColor: COLORS.poseidon }}
      >
        <button type="button" className="flex flex-col items-center gap-1 text-xs font-semibold">
          <CreditCard className="size-5" />
          PAGAR
        </button>
        <button
          type="button"
          className="flex size-14 items-center justify-center rounded-full text-white shadow-lg"
          style={{ backgroundColor: COLORS.norse }}
          aria-label="Escanear QR"
        >
          <QrCode className="size-7" />
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-xs font-semibold">
          <Settings className="size-5" />
          PERFIL
        </button>
      </nav>
    </div>
  )
}
