"use client"

import { useState } from "react"
import { COLORS, type Screen } from "./theme"
import { HomeScreen } from "./home-screen"
import { ReservarScreen } from "./reservar-screen"
import { MisReservasScreen } from "./mis-reservas-screen"
import { IniciarReservaScreen } from "./iniciar-reserva-screen"
import {
  CancelacionExitosaScreen,
  ConfirmacionScreen,
  ErrorReservaScreen,
} from "./message-screens"

const ERROR_REASONS = ["Estado de cuenta inactivo", "Asistencia del Plan agotadas"]

const DEMO_ERROR_BY_ACTIVITY: Record<string, string> = {
  Funcional: "Estado de cuenta inactivo",
  Yoga: "Asistencia del Plan agotadas",
}

function randomPin() {
  return String(Math.floor(1000 + Math.random() * 9000))
}

export function GymApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const [activityName, setActivityName] = useState("")
  const [pin, setPin] = useState("0000")
  const [isModifying, setIsModifying] = useState(false)
  const [errorReason, setErrorReason] = useState(ERROR_REASONS[0])

  const navigate = (screen: Screen) => setCurrentScreen(screen)

  const handleSelectActivity = (name: string) => {
    setIsModifying(false)
    setActivityName(name)
  }

  const handleModify = (name: string) => {
    setIsModifying(true)
    setActivityName(name)
    navigate("iniciar-reserva")
  }

  const handleConfirm = () => {
    const errorForActivity = isModifying ? undefined : DEMO_ERROR_BY_ACTIVITY[activityName]

    if (errorForActivity) {
      setErrorReason(errorForActivity)
      navigate("error-reserva")
      return
    }

    setPin(randomPin())
    navigate("confirmacion")
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNavigate={navigate} />
      case "reservar":
        return <ReservarScreen onNavigate={navigate} onSelectActivity={handleSelectActivity} />
      case "mis-reservas":
        return <MisReservasScreen onNavigate={navigate} onModify={handleModify} />
      case "iniciar-reserva":
        return (
          <IniciarReservaScreen
            activityName={activityName}
            isEditing={isModifying}
            onNavigate={navigate}
            onConfirm={handleConfirm}
          />
        )
      case "cancelacion-exitosa":
        return <CancelacionExitosaScreen onNavigate={navigate} />
      case "confirmacion":
        return <ConfirmacionScreen pin={pin} onNavigate={navigate} />
      case "error-reserva":
        return <ErrorReservaScreen reason={errorReason} onNavigate={navigate} />
      default:
        return <HomeScreen onNavigate={navigate} />
    }
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center p-4"
      style={{ backgroundColor: COLORS.poseidon }}
    >
      <div
        className="h-[800px] w-full max-w-md overflow-hidden rounded-[2.5rem] border-4 shadow-2xl"
        style={{ backgroundColor: "#F3F5F7", borderColor: "#1f2a36" }}
      >
        <div key={currentScreen} className="h-full animate-in fade-in duration-300">
          {renderScreen()}
        </div>
      </div>
    </main>
  )
}
