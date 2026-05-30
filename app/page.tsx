"use client"

import { useState, useCallback } from 'react'
import { X } from 'lucide-react'
import { HeroSection } from '@/components/hero-section'
import { PortalTransition } from '@/components/portal-transition'
import { MainContent } from '@/components/main-content'

export default function Home() {
  const [showTransition, setShowTransition] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)

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
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-md translate-y-4 rounded-3xl border border-[#00dcff]/30 bg-[#020b12]/95 p-6 shadow-[0_0_80px_rgba(0,220,255,0.22)]">
            <button
              onClick={handleCloseBooking}
              className="absolute right-5 top-5 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 text-center">
              <p className="text-[#00dcff] text-xs font-medium tracking-[0.35em] uppercase mb-3">
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
                className="mt-2 w-full rounded-full bg-[#f5f5f0] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a2e] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,220,255,0.55)]"
              >
                Elegir fecha
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
