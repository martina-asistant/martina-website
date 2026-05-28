"use client"

import { motion } from 'framer-motion'
import { ParticleField } from './particle-field'
import { MessageCircle, CalendarCheck, Bell, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  onDiscover: () => void
}

const features = [
  { icon: MessageCircle, label: "Respondiendo", sublabel: "consultas" },
  { icon: CalendarCheck, label: "Gestionando", sublabel: "citas" },
  { icon: Bell, label: "Preparando", sublabel: "recordatorios" },
  { icon: Sparkles, label: "Lista para", sublabel: "ayudarte" },
]

export function HeroSection({ onDiscover }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep blue gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 20%, rgba(0, 50, 80, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 60%, rgba(0, 80, 120, 0.15) 0%, transparent 60%),
            linear-gradient(180deg, oklch(0.06 0.02 230) 0%, oklch(0.08 0.01 240) 100%)
          `,
        }}
      />

      {/* Particles */}
      <ParticleField intensity={0.6} />

      {/* Panel button - top right */}
      <motion.div
        className="absolute top-6 right-6 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <button
          className="px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground border border-border/40 rounded-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,220,255,0.15)] backdrop-blur-sm bg-background/10"
        >
          Panel
        </button>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Avatar with glowing ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mb-8"
        >
          {/* Outer glow */}
          <div 
            className="absolute -inset-8 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 220, 255, 0.15) 0%, transparent 70%)',
            }}
          />
          
          {/* Glowing ring */}
          <motion.div
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center"
            style={{
              boxShadow: `
                0 0 60px rgba(0, 220, 255, 0.4),
                0 0 120px rgba(0, 220, 255, 0.2),
                inset 0 0 60px rgba(0, 220, 255, 0.1)
              `,
            }}
          >
            {/* Ring border with glow */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(0, 220, 255, 0.6)',
                boxShadow: `
                  0 0 30px rgba(0, 220, 255, 0.5),
                  inset 0 0 30px rgba(0, 220, 255, 0.1)
                `,
              }}
            />
            
            {/* Avatar image */}
          <div className="relative w-54 h-54 md:w-[17.5rem] md:h-[17.5rem] rounded-full overflow-hidden">
              <Image
                src="/images/martina-avatar.png"
                alt="Martina - Tu asistente virtual inteligente"
                fill
                className="object-cover object-top scale-[1.22] translate-y-1"
                priority
              />
            </div>
          </motion.div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: '1px solid rgba(0, 220, 255, 0.3)',
            }}
            animate={{
              scale: [1, 1.15, 1.15],
              opacity: [0.6, 0, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hola, soy{' '}
          <span className="text-primary">Martina</span>
          <span className="ml-2 inline-block">
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block origin-bottom-right"
            >
              &#128075;
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-primary font-medium mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tu asistente virtual inteligente.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Gestiono conversaciones, citas, recordatorios y tareas mientras tú te centras en lo importante.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-4"
        >
          <button
            onClick={onDiscover}
            className="group relative px-10 py-4 text-base font-semibold tracking-wider uppercase bg-[#f5f5f0] text-[#1a1a2e] rounded-full transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,220,255,0.5)] hover:scale-105"
            style={{
              boxShadow: '0 0 30px rgba(0, 220, 255, 0.3), inset 0 0 0 1px rgba(0, 220, 255, 0.3)',
            }}
          >
            <span className="relative z-10">DESCUBRIR A MARTINA</span>
          </button>
        </motion.div>

        {/* Status indicator */}
        <motion.div
          className="flex items-center gap-2 text-sm text-foreground/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Martina activa</span>
        </motion.div>
      </div>

      {/* Bottom feature bar */}
      <motion.div
        className="relative z-20 mt-12 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div 
          className="mx-4 mb-10 md:mx-auto md:max-w-5xl rounded-2xl backdrop-blur-md border border-border/40"
          style={{
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)',
            boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="grid grid-cols-4 divide-x divide-border/30">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="flex flex-col items-center justify-center py-5 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              >
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary mb-2" strokeWidth={1.5} />
                <span className="text-xs md:text-sm text-foreground text-center leading-tight">
                  {feature.label}
                </span>
                <span className="text-xs md:text-sm text-foreground text-center leading-tight">
                  {feature.sublabel}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
