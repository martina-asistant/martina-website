"use client"

import { useState, useCallback } from 'react'
import { HeroSection } from '@/components/hero-section'
import { PortalTransition } from '@/components/portal-transition'
import { MainContent } from '@/components/main-content'

export default function Home() {
  const [showTransition, setShowTransition] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)

  const handleDiscover = useCallback(() => {
    setShowTransition(true)
  }, [])

  const handleTransitionComplete = useCallback(() => {
    setShowMainContent(true)
  }, [])

  return (
    <main className="relative">
      {/* Hero section - visible until transition starts */}
      {!showMainContent && (
        <HeroSection onDiscover={handleDiscover} />
      )}

      {/* Portal transition effect */}
      <PortalTransition 
        isActive={showTransition} 
        onComplete={handleTransitionComplete}
      >
        <MainContent />
      </PortalTransition>

      {/* Main content after transition completes */}
      {showMainContent && !showTransition && (
        <MainContent />
      )}
    </main>
  )
}
