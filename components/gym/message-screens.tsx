"use client"

import { AlertTriangle, CheckCircle2, KeyRound, XCircle } from "lucide-react"
import { COLORS, type Screen } from "./theme"

function CenteredLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
      {children}
    </div>
  )
}

function ActionButton({
  label,
  onClick,
  color,
}: {
  label: string
  onClick: () => void
  color: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full max-w-xs rounded-xl py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform active:scale-[0.98]"
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  )
}

export function CupoMaximoScreen({
  activityName,
  onNavigate,
}: {
  activityName: string
  onNavigate: (s: Screen) => void
}) {
  return (
    <CenteredLayout>
      <div
        className="flex size-20 items-center justify-center rounded-full"
        style={{ backgroundColor: `${COLORS.pumpkin}22` }}
      >
        <AlertTriangle className="size-10" style={{ color: COLORS.pumpkin }} />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold uppercase" style={{ color: COLORS.poseidon }}>
          {activityName || "Nombre de actividad"}
        </h2>
        <p className="text-sm" style={{ color: COLORS.poseidon }}>
          Esta actividad alcanzó su cupo máximo.
        </p>
      </div>
      <ActionButton label="Volver" onClick={() => onNavigate("reservar")} color={COLORS.norse} />
    </CenteredLayout>
  )
}

export function CancelacionExitosaScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <CenteredLayout>
      <div
        className="flex size-20 items-center justify-center rounded-full"
        style={{ backgroundColor: `${COLORS.norse}22` }}
      >
        <CheckCircle2 className="size-10" style={{ color: COLORS.norse }} />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold" style={{ color: COLORS.poseidon }}>
          Cancelación exitosa
        </h2>
        <p className="text-sm text-muted-foreground">Tu reserva fue dada de baja correctamente.</p>
      </div>
      <ActionButton label="Volver al menú" onClick={() => onNavigate("home")} color={COLORS.norse} />
    </CenteredLayout>
  )
}

export function ConfirmacionScreen({
  pin,
  onNavigate,
}: {
  pin: string
  onNavigate: (s: Screen) => void
}) {
  return (
    <CenteredLayout>
      <div
        className="flex size-20 items-center justify-center rounded-full"
        style={{ backgroundColor: `${COLORS.norse}22` }}
      >
        <CheckCircle2 className="size-10" style={{ color: COLORS.norse }} />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold" style={{ color: COLORS.poseidon }}>
          Confirmación exitosa
        </h2>
        <p className="text-sm text-muted-foreground">¡Tu clase quedó reservada!</p>
      </div>
      <div
        className="flex items-center gap-3 rounded-2xl px-6 py-4 text-white"
        style={{ backgroundColor: COLORS.poseidon }}
      >
        <KeyRound className="size-6" style={{ color: COLORS.norse }} />
        <div className="text-left">
          <p className="text-xs uppercase tracking-wide text-white/70">PIN</p>
          <p className="font-mono text-2xl font-bold tracking-[0.3em]">{pin}</p>
        </div>
      </div>
      <ActionButton label="Volver al menú" onClick={() => onNavigate("home")} color={COLORS.norse} />
    </CenteredLayout>
  )
}

export function ErrorReservaScreen({
  reason,
  onNavigate,
}: {
  reason: string
  onNavigate: (s: Screen) => void
}) {
  return (
    <CenteredLayout>
      <div
        className="flex size-20 items-center justify-center rounded-full"
        style={{ backgroundColor: `${COLORS.pumpkin}22` }}
      >
        <XCircle className="size-10" style={{ color: COLORS.pumpkin }} />
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-bold uppercase" style={{ color: COLORS.poseidon }}>
          Operación cancelada
        </h2>
        <p className="text-sm font-semibold" style={{ color: COLORS.poseidon }}>
          Motivo:
        </p>
      </div>
      <p
        className="flex w-full max-w-xs items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold"
        style={{ backgroundColor: `${COLORS.pumpkin}14`, color: COLORS.pumpkin }}
      >
        <AlertTriangle className="size-5 shrink-0" aria-hidden="true" />
        {reason}
      </p>
      <ActionButton label="Volver al menú" onClick={() => onNavigate("home")} color={COLORS.norse} />
    </CenteredLayout>
  )
}
