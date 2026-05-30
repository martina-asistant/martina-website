"use client"

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { ParticleField } from './particle-field'
import { AboutSection } from './about-section'
import { FeaturesSection } from './features-section'
import { DemoSection } from './demo-section'
import { HowItWorksSection } from './how-it-works-section'
import { Footer } from './footer'

interface MainContentProps {
  onOpenBooking: () => void
}

export function MainContent({ onOpenBooking }: MainContentProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField intensity={0.3} />

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-[#00dcff]">Martina</span>
            <span className="text-muted-foreground font-normal ml-1">Assistant</span>
          </span>

          <div className="hidden md:flex items-center gap-3">
            {[
              { label: "Qué es", href: "#about" },
              { label: "Funciones", href: "#features" },
              { label: "Demo", href: "#demo" },
              { label: "Proceso", href: "#how-it-works" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-transparent rounded-full transition-all duration-300 hover:border-[#00dcff]/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.28)] hover:bg-background/20"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 rounded-full transition-all duration-300 hover:border-[#00dcff]/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.28)]"
          >
            <ArrowLeft className="w-4 h-4 text-[#00dcff]" strokeWidth={2} />
            Volver
          </button>
        </div>
      </motion.nav>

      <div className="h-16" />

      <AboutSection />
      <FeaturesSection />
      <DemoSection />
      <HowItWorksSection onOpenBooking={onOpenBooking} />
      <Footer />
    </div>
  )
}
