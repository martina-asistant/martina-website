"use client"

import { useState, useCallback, useEffect } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import { HeroSection } from '@/components/hero-section'
import { PortalTransition } from '@/components/portal-transition'
import { MainContent } from '@/components/main-content'

const TEST_MODE = true

const WORKING_DAYS = [1, 2, 3, 4, 5]
const BLOCKED_DATES: string[] = []

const DEFAULT_AVAILABLE_HOURS = ["10:00", "11:00", "12:00", "16:00", "17:00", "18:00"]
const weekDays = ["L", "M", "X", "J", "V", "S", "D"]

function toDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function formatSelectedDate(date: Date) {
  return date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })
}

function formatMonthLabel(date: Date) {
  const label = date.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  })

  return label.charAt(0).toUpperCase() + label.slice(1)
}

function getCalendarDays(currentMonth: Date) {
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const firstDay = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayIndex = (firstDay.getDay() + 6) % 7
  const totalCells = Math.ceil((firstDayIndex + daysInMonth) / 7) * 7

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return Array.from({ length: totalCells }, (_, index) => {
    const dayNumber = index - firstDayIndex + 1
    const date = new Date(year, month, dayNumber)
    const isCurrentMonth = date.getMonth() === month
    const dateKey = toDateKey(date)
    const isWorkingDay = WORKING_DAYS.includes(date.getDay())
    const isBlocked = BLOCKED_DATES.includes(dateKey)
    const isPast = date < today

    return {
      date,
      dateKey,
      dayNumber: date.getDate(),
      isCurrentMonth,
      isWorkingDay,
      isBlocked,
      isPast,
      isDisabled: !isCurrentMonth || !isWorkingDay || isBlocked || isPast,
    }
  })
}

export default function Home() {
  const [showTransition, setShowTransition] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [bookingStep, setBookingStep] = useState<"form" | "calendar" | "success">("form")
  const [currentMonth, setCurrentMonth] = useState(() => new Date())
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedDateKey, setSelectedDateKey] = useState("")
  const [selectedHour, setSelectedHour] = useState("")
  const [formError, setFormError] = useState("")
  const [availableHours, setAvailableHours] = useState(DEFAULT_AVAILABLE_HOURS)
  const [loadingHours, setLoadingHours] = useState(false)

  const [bookingForm, setBookingForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    negocio: "",
    automatizar: "",
  })

  const calendarDays = getCalendarDays(currentMonth)

  const resetBooking = useCallback(() => {
    setBookingStep("form")
    setCurrentMonth(new Date())
    setSelectedDay("")
    setSelectedDateKey("")
    setSelectedHour("")
    setFormError("")
    setBookingForm({
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      negocio: "",
      automatizar: "",
    })
  }, [])

  const handleDiscover = useCallback(() => {
    setShowTransition(true)
  }, [])

  const handleTransitionComplete = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    setShowMainContent(true)
  }, [])

  const handleOpenBooking = useCallback(() => {
    setShowBookingModal(true)
  }, [])
  
  useEffect(() => {
  const params = new URLSearchParams(window.location.search)

  if (params.get("booking") === "1") {
    setShowMainContent(true)
    setShowBookingModal(true)

    window.history.replaceState({}, "", "/")
  }
}, [])

  useEffect(() => {
  const params = new URLSearchParams(window.location.search)

  if (params.get("entered") === "1") {
    setShowMainContent(true)

    window.history.replaceState({}, "", "/")
  }
}, [])

  const handleCloseBooking = useCallback(() => {
    setShowBookingModal(false)
    resetBooking()
  }, [resetBooking])

  const handleChooseDate = () => {
    const allFieldsCompleted = Object.values(bookingForm).every(
      (value) => value.trim() !== ""
    )

    if (!TEST_MODE && !allFieldsCompleted) {
      setFormError("Completa todos los campos antes de elegir fecha.")
      return
    }

    setFormError("")
    setBookingStep("calendar")
  }

const handleConfirmMeeting = async () => {
  try {
    const response = await fetch(
      "https://sheilacg.app.n8n.cloud/webhook/solicitud-demo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: bookingForm.nombre,
          apellidos: "",
          email: bookingForm.email,
          telefono: bookingForm.telefono,
          negocio: bookingForm.negocio,
          automatizar: bookingForm.automatizar,
          fecha: selectedDateKey,
          hora: selectedHour,
        }),
      }
    )

    const data = await response.json()

    if (data.ok) {
      setBookingStep("success")
    } else {
      alert("Ha ocurrido un error al enviar la solicitud.")
    }
  } catch (error) {
    console.error(error)
    alert("No se ha podido enviar la solicitud. Inténtalo de nuevo.")
  }
}
  
  const updateBookingForm = (
    field: keyof typeof bookingForm,
    value: string
  ) => {
    setBookingForm((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (formError) setFormError("")
  }

const fetchAvailableHours = async (dateKey: string) => {
  setLoadingHours(true)
  setSelectedHour("")

  try {
    const response = await fetch(
      "https://sheilacg.app.n8n.cloud/webhook/disponibilidad-demo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fecha: dateKey,
        }),
      }
    )

    const data = await response.json()

    if (data.ok && Array.isArray(data.hours)) {
      setAvailableHours(data.hours)
    } else {
      setAvailableHours([])
    }
  } catch (error) {
    console.error(error)
    setAvailableHours([])
  } finally {
    setLoadingHours(false)
  }
}
  
  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
    setSelectedDay("")
    setSelectedDateKey("")
    setSelectedHour("")
  }

  const goToNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
    setSelectedDay("")
    setSelectedDateKey("")
    setSelectedHour("")
  }

  return (
    <main className="relative">
      {!showMainContent && (
        <HeroSection onDiscover={handleDiscover} />
      )}

      <PortalTransition
        isActive={showTransition}
        onComplete={handleTransitionComplete}
      >
        <MainContent onOpenBooking={handleOpenBooking} />
      </PortalTransition>

      {showMainContent && !showTransition && (
        <MainContent onOpenBooking={handleOpenBooking} />
      )}

      {showBookingModal && (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-black/70 backdrop-blur-md">
          <button
            onClick={() => {
              if (bookingStep === "calendar") {
                setBookingStep("form")
              } else {
                handleCloseBooking()
              }
            }}
            className="fixed left-5 top-4 z-[210] flex items-center gap-2 rounded-full border border-[#00dcff]/60 bg-[#062234] px-4 py-2 text-sm font-medium text-white/90 shadow-[0_0_18px_rgba(0,220,255,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#00dcff] hover:text-white hover:shadow-[0_0_35px_rgba(0,220,255,0.38)]"
          >
            <ArrowLeft className="h-4 w-4 text-[#00dcff]" strokeWidth={2.3} />
            Volver
          </button>

          <button
            onClick={handleCloseBooking}
            className="fixed right-5 top-4 z-[210] flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#8befff]/70 bg-[#062234] text-white shadow-[0_0_28px_rgba(0,220,255,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#8befff] hover:shadow-[0_0_42px_rgba(0,220,255,0.55)]"
          >
            <X className="h-4 w-4 text-white" strokeWidth={2.4} />
          </button>

          <div className="relative mx-auto my-10 w-full max-w-md translate-y-4 rounded-3xl border border-[#00dcff]/30 bg-[#020b12]/95 p-6 shadow-[0_0_80px_rgba(0,220,255,0.22)]">
            
            {bookingStep !== "success" && (
            <div className="mb-6 text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#00dcff]">
                {bookingStep === "form" ? "Agenda tu cita" : "Elige fecha y hora"}
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Conoce a Martina Assistant
              </h2>

              <p className="mt-3 text-xs text-white/60">
                {bookingStep === "form"
                  ? "Cuéntame un poco sobre tu negocio y después elegiremos fecha y hora."
                  : "Selecciona un día disponible y elige la hora que mejor te venga."}
              </p>
            </div>
  )}

            {bookingStep === "form" && (
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre y apellidos"
                  value={bookingForm.nombre}
                  onChange={(e) => updateBookingForm("nombre", e.target.value)}
                  className="w-full rounded-full border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={bookingForm.email}
                  onChange={(e) => updateBookingForm("email", e.target.value)}
                  className="w-full rounded-full border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={bookingForm.telefono}
                  onChange={(e) => updateBookingForm("telefono", e.target.value)}
                  className="w-full rounded-full border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <input
                  type="text"
                  placeholder="Nombre del negocio"
                  value={bookingForm.negocio}
                  onChange={(e) => updateBookingForm("negocio", e.target.value)}
                  className="w-full rounded-full border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <textarea
                  placeholder="¿Qué te gustaría automatizar?"
                  rows={3}
                  value={bookingForm.automatizar}
                  onChange={(e) => updateBookingForm("automatizar", e.target.value)}
                  className="w-full resize-none rounded-2xl border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                {formError && (
                  <div className="rounded-2xl border border-[#00dcff]/25 bg-[#00dcff]/10 px-4 py-3 text-sm text-white/80">
                    {formError}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleChooseDate}
                  className="mt-2 w-full rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_65px_rgba(0,220,255,0.75)]"
                  style={{
                    boxShadow:
                      '0 0 40px rgba(0,220,255,0.45), inset 0 0 0 1px rgba(0,220,255,0.15)',
                  }}
                >
                  Elegir fecha
                </button>
              </form>
            )}

            {bookingStep === "calendar" && (
              <div className="space-y-5">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                    Elegir fecha
                  </p>

                  <div className="mx-auto mb-6 flex max-w-[18rem] items-center justify-between">
                    <button
                      type="button"
                      onClick={goToPreviousMonth}
                      className="text-xs font-semibold text-white transition-all duration-300 hover:scale-110 hover:text-[#00dcff] hover:drop-shadow-[0_0_12px_rgba(0,220,255,0.7)]"
                    >
                      {"<"}
                    </button>

                   <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#00dcff]">
  {formatMonthLabel(currentMonth)}
</span>

                    <button
                      type="button"
                      onClick={goToNextMonth}
                      className="text-xs font-semibold text-white transition-all duration-300 hover:scale-110 hover:text-[#00dcff] hover:drop-shadow-[0_0_12px_rgba(0,220,255,0.7)]"
                    >
                      {">"}
                    </button>
                  </div>

                  <div className="mx-auto max-w-[22rem]">
                    <div className="mb-2 grid grid-cols-7 gap-2 text-center text-[11px] font-semibold uppercase text-white/40">
                      {weekDays.map((day) => (
                        <div key={day}>{day}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((item) => {
                        const isSelected = selectedDateKey === item.dateKey

                        return (
                          <button
                            key={item.dateKey}
                            type="button"
                            disabled={item.isDisabled}
                            onClick={() => {
  setSelectedDateKey(item.dateKey)
  setSelectedDay(formatSelectedDate(item.date))
  fetchAvailableHours(item.dateKey)
}}
                            className={`aspect-square rounded-xl border text-sm font-medium transition-all duration-300 ${
                              isSelected
                                ? "border-[#00dcff] bg-[#00dcff]/20 text-white shadow-[0_0_25px_rgba(0,220,255,0.30)]"
                                : item.isDisabled
                                  ? "cursor-not-allowed border-white/5 bg-white/[0.03] text-white/20"
                                  : "border-[#00dcff]/20 bg-white/5 text-white/70 hover:border-[#00dcff]/60 hover:text-white hover:shadow-[0_0_18px_rgba(0,220,255,0.18)]"
                            }`}
                          >
                            {item.dayNumber}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                    Hora disponible
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    {loadingHours ? (
  <div className="col-span-3 rounded-2xl border border-[#00dcff]/20 bg-white/5 p-4 text-center text-sm text-white/60">
    Consultando horas disponibles...
  </div>
) : availableHours.length > 0 ? (
  availableHours.map((hour) => (
    <button
      key={hour}
      type="button"
      disabled={!selectedDay}
      onClick={() => setSelectedHour(hour)}
      className={`rounded-full border px-4 py-3 text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-35 ${
        selectedHour === hour
          ? "border-[#00dcff] bg-[#00dcff]/15 text-white shadow-[0_0_25px_rgba(0,220,255,0.25)]"
          : "border-[#00dcff]/20 bg-white/5 text-white/65 hover:border-[#00dcff]/60 hover:text-white"
      }`}
    >
      {hour}
    </button>
  ))
) : (
  <div className="col-span-3 rounded-2xl border border-[#00dcff]/20 bg-white/5 p-4 text-center text-sm text-white/60">
    No quedan horas disponibles para este día.
  </div>
)}
                  </div>
                </div>

                {selectedDay && selectedHour && (
                  <div className="rounded-2xl border border-[#00dcff]/20 bg-white/5 p-4 text-sm text-white/70">
                    <span className="text-[#00dcff]">Resumen:</span>{" "}
                    {selectedDay} a las {selectedHour} horas.
                  </div>
                )}

                <button
                  type="button"
                  disabled={!selectedDay || !selectedHour}
                  onClick={handleConfirmMeeting}
                  className="mt-2 w-full rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_65px_rgba(0,220,255,0.75)] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-none"
                  style={{
                    boxShadow:
                      selectedDay && selectedHour
                        ? '0 0 40px rgba(0,220,255,0.45), inset 0 0 0 1px rgba(0,220,255,0.15)'
                        : 'none',
                  }}
                >
                  Confirmar reunión
                </button>
              </div>
            )}

{bookingStep === "success" && (
  <div className="space-y-6 text-center">
    <div className="flex justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#00dcff]/40 bg-[#00dcff]/10 text-3xl shadow-[0_0_30px_rgba(0,220,255,0.25)]">
        ✓
      </div>
    </div>

    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#00dcff]">
        Solicitud recibida
      </p>

      <h2 className="text-xl font-semibold text-white">
        ¡Gracias por reservar tu reunión! 😊
      </h2>
    </div>

    <div className="rounded-2xl border border-[#00dcff]/20 bg-white/5 p-5 text-left text-sm text-white/70">
      <p className="mb-3">
        <span className="text-[#00dcff]">Nombre:</span> {bookingForm.nombre}
      </p>

      <p className="mb-3">
        <span className="text-[#00dcff]">Empresa:</span> {bookingForm.negocio}
      </p>

      <p className="mb-3">
        <span className="text-[#00dcff]">Email:</span> {bookingForm.email}
      </p>

      <p>
        <span className="text-[#00dcff]">Teléfono:</span> {bookingForm.telefono}
      </p>
    </div>

    <div className="space-y-3 text-sm text-white/70">
      <p>
        En nuestra sesión descubrirás cómo Martina Assistant puede ayudarte a gestionar conversaciones, citas, recordatorios y tareas del día a día para que puedas dedicar más tiempo a lo que realmente importa: tu negocio 💡
      </p>

      <p>
        🗓️ Duración aproximada: 30-45 minutos.
      </p>

      <p>
        💻 Reunión online mediante Google Meet.
      </p>

      <p>
        Veremos cómo trabaja Martina en situaciones reales y resolveremos cualquier duda que tengas.
      </p>

      <p className="text-[#00dcff] font-medium">
        ¡Nos vemos pronto!✨
      </p>
    </div>

    <button
      type="button"
      onClick={handleCloseBooking}
      className="mt-2 w-full rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_65px_rgba(0,220,255,0.75)]"
      style={{
        boxShadow:
          '0 0 40px rgba(0,220,255,0.45), inset 0 0 0 1px rgba(0,220,255,0.15)',
      }}
    >
      Volver al inicio
    </button>
  </div>
)}
            
          </div>
        </div>
      )}
    </main>
  )
}
