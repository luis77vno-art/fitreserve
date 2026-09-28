export const COLORS = {
  // Poseidon 19-4033 TCX
  poseidon: "#2B3B4C",
  // Norse Blue 15-4427 TCX
  norse: "#638FA9",
  // Pureed Pumpkin 17-1449 TCX
  pumpkin: "#C46543",
} as const

export type Screen =
  | "home"
  | "reservar"
  | "mis-reservas"
  | "iniciar-reserva"
  | "confirmacion"
  | "cancelacion-exitosa"
  | "error-reserva"
