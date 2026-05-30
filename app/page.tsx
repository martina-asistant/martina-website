"use client"

import { useState, useCallback } from 'react'
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
        <div>
          {/* Aquí irá el modal/formulario de reserva */}
        </div>
      )}
    </main>
  )
}
