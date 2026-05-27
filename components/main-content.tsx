"use client"

import { motion } from 'framer-motion'
import { ParticleField } from './particle-field'
import { AboutSection } from './about-section'
import { FeaturesSection } from './features-section'
import { DemoSection } from './demo-section'
import { HowItWorksSection } from './how-it-works-section'
import { Footer } from './footer'

export function MainContent() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Subtle ambient particles */}
      <ParticleField intensity={0.3} />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-primary">Martina</span>
            <span className="text-muted-foreground font-normal ml-1">Assistant</span>
          </span>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Qué es", href: "#about" },
              { label: "Funciones", href: "#features" },
              { label: "Demo", href: "#demo" },
              { label: "Proceso", href: "#how-it-works" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border/50 rounded-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,220,255,0.15)]">
            Panel
          </button>
        </div>
      </motion.nav>

      {/* Spacer for fixed nav */}
      <div className="h-16" />

      {/* Sections */}
      <AboutSection />
      <FeaturesSection />
      <DemoSection />
      <HowItWorksSection />
      <Footer />
    </div>
  )
}
