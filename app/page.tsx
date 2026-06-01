"use client"

import { useState, useCallback } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import { HeroSection } from '@/components/hero-section'
import { PortalTransition } from '@/components/portal-transition'
import { MainContent } from '@/components/main-content'

const availableDays = [
  { day: "Lun", date: "10", full: "Lunes 10" },
  { day: "Mar", date: "11", full: "Martes 11" },
  { day: "Mié", date: "12", full: "Miércoles 12" },
  { day: "Jue", date: "13", full: "Jueves 13" },
  { day: "Vie", date: "14", full: "Viernes 14" },
]

const availableHours = ["10:00", "11:00", "12:00", "16:00", "17:00", "18:00"]

export default function Home() {
  const [showTransition, setShowTransition] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [bookingStep, setBookingStep] = useState<"form" | "calendar">("form")
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedHour, setSelectedHour] = useState("")

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

  const handleCloseBooking = useCallback(() => {
    setShowBookingModal(false)
    setBookingStep("form")
    setSelectedDay("")
    setSelectedHour("")
  }, [])

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
            <div className="mb-6 text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#00dcff]">
                {bookingStep === "form" ? "Agenda tu cita" : "Elige fecha y hora"}
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Conoce a Martina Assistant
              </h2>

              <p className="mt-3 text-sm text-white/60">
                {bookingStep === "form"
                  ? "Cuéntame un poco sobre tu negocio y después elegiremos fecha y hora."
                  : "Selecciona un día disponible y elige la hora que mejor te venga."}
              </p>
            </div>

            {bookingStep === "form" && (
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre y apellidos"
                  className="w-full rounded-full border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full rounded-full border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <input
                  type="text"
                  placeholder="Nombre del negocio"
                  className="w-full rounded-full border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <textarea
                  placeholder="¿Qué te gustaría automatizar?"
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-[#00dcff]/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#00dcff]/60 focus:shadow-[0_0_25px_rgba(0,220,255,0.18)]"
                />

                <button
                  type="button"
                  onClick={() => setBookingStep("calendar")}
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
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                    Día disponible
                  </p>

                  <div className="grid grid-cols-5 gap-2">
                    {availableDays.map((item) => (
                      <button
                        key={item.full}
                        type="button"
                        onClick={() => {
                          setSelectedDay(item.full)
                          setSelectedHour("")
                        }}
                        className={`rounded-2xl border px-2 py-3 text-center transition-all duration-300 ${
                          selectedDay === item.full
                            ? "border-[#00dcff] bg-[#00dcff]/15 text-white shadow-[0_0_25px_rgba(0,220,255,0.25)]"
                            : "border-[#00dcff]/20 bg-white/5 text-white/65 hover:border-[#00dcff]/60 hover:text-white"
                        }`}
                      >
                        <span className="block text-xs">{item.day}</span>
                        <span className="block text-lg font-semibold">{item.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                    Hora disponible
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    {availableHours.map((hour) => (
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
                    ))}
                  </div>
                </div>

                {selectedDay && selectedHour && (
                  <div className="rounded-2xl border border-[#00dcff]/20 bg-white/5 p-4 text-sm text-white/70">
                    <span className="text-[#00dcff]">Resumen:</span>{" "}
                    {selectedDay} a las {selectedHour}
                  </div>
                )}

                <button
                  type="button"
                  disabled={!selectedDay || !selectedHour}
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
          </div>
        </div>
      )}
    </main>
  )
}
