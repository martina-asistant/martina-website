"use client"

import { useState, useCallback } from 'react'
import { ArrowLeft, X } from 'lucide-react'
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
  onClick={() => {
    if (bookingStep === "calendar") {
      setBookingStep("form")
    } else {
      handleCloseBooking()
    }
  }}
  className="fixed left-5 top-4 z-[210] flex items-center gap-2 rounded-full border border-[#00dcff]/60 bg-[#062234] px-4 py-2 text-sm font-medium text-white/90 shadow-[0_0_18px_rgba(0,220,255,0.18)] backdrop-blur-md transition-all duration-300 hover:border-[#00dcff] hover:text-white hover:shadow-[0_0_35px_rgba(0,220,255,0.38)] hover:scale-105"
>
  <ArrowLeft className="h-4 w-4 text-[#00dcff]" strokeWidth={2.3} />
  Volver
</button>
        
          <button
  onClick={handleCloseBooking}
  className="fixed right-5 top-4 z-[210] flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#8befff]/70 bg-[#062234] text-white shadow-[0_0_28px_rgba(0,220,255,0.35)] backdrop-blur-md transition-all duration-300 hover:border-[#8befff] hover:shadow-[0_0_42px_rgba(0,220,255,0.55)] hover:scale-105"
>
  <X className="h-4 w-4 text-white" strokeWidth={2.4} />
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
 onClick={() => {
  if (bookingStep === "calendar") {
    setBookingStep("form")
  } else {
    handleCloseBooking()
  }
}}
  className="mt-2 w-full rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_65px_rgba(0,220,255,0.75)]"
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
