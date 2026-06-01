"use client"

import { useState, useCallback } from 'react'
import { ArrowLeft } from 'lucide-react'
import { HeroSection } from '@/components/hero-section'
import { PortalTransition } from '@/components/portal-transition'
import { MainContent } from '@/components/main-content'

export default function Home() {
  const [showTransition, setShowTransition] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [bookingStep, setBookingStep] = useState<"form" | "calendar">("form")

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
            onClick={handleCloseBooking}
            className="fixed right-5 top-4 z-[210] flex items-center gap-2 rounded-full border border-border/50 bg-[#020b12]/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-[#00dcff]/50 hover:text-foreground hover:shadow-[0_0_25px_rgba(0,229,255,0.28)]"
          >
            <ArrowLeft className="h-4 w-4 text-[#00dcff]" strokeWidth={2} />
            Volver
          </button>

          <div className="relative mx-auto my-10 w-full max-w-md translate-y-4 rounded-3xl border border-[#00dcff]/30 bg-[#020b12]/95 p-6 shadow-[0_0_80px_rgba(0,220,255,0.22)]">
            <div className="mb-6 text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#00dcff]">
                Agenda tu cita
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Conoce a Martina Assistant
              </h2>

              <p className="mt-3 text-sm text-white/60">
                Cuéntame un poco sobre tu negocio y después elegiremos fecha y hora.
              </p>
            </div>

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
  className="mt-2 w-full rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a2e] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,220,255,0.55)]"
  style={{boxShadow:'0 0 40px rgba(0,220,255,0.45), inset 0 0 0 1px rgba(0,220,255,0.15)',}} >
            Elegir fecha
            </button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
