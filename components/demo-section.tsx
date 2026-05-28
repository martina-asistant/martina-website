"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const messages = [
  { type: 'user', text: "Hola, ¿tienen disponibilidad mañana a las 10h?" },
  { type: 'martina', text: "¡Buenos días Ana 😊! Cuentame, ¿cual es el motivo de la cita?" },
  { type: 'user', text: "Me duele mucho una muela desde hace dos días" },
  { type: 'martina', text: "¡Vale, no te preocupes tenemos un hueco mañana a las 10:30h. ¿Te va bien?" },
  { type: 'user', text: "Sí, por favor" },
  { type: 'martina', text: "¡Perfecto! He reservado tu cita para mañana a las 10:30h 🦷. Te enviaré un recordatorio 1 hora antes. ¿Necesitas algo más?" },
  { type: 'user', text: "No, eso es todo. Gracias!" },
  { type: 'martina', text: "¡Perfecto! Nos vemos mañana. ¡Que tengas un buen día!💙" },
]

export function DemoSection() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < messages.length) {
          return prev + 1
        }
        return prev
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0, 220, 255, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 60%, rgba(0, 180, 220, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Demostración
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6 text-balance">
              Ver a Martina en acción
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              Observa cómo Martina gestiona una conversación real con un cliente, desde la primera consulta hasta la confirmación de la cita.
            </p>

            <div className="space-y-4">
              {[
                "Respuestas naturales y personalizadas",
                "Gestión automática de reservas",
                "Recordatorios inteligentes",
                "Disponible en cualquier momento"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 220, 255, 0.2) 0%, rgba(0, 180, 220, 0.1) 100%)',
                      border: '1px solid rgba(0, 220, 255, 0.3)',
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chat demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onViewportEnter={() => setIsInView(true)}
          >
            {/* Phone mockup */}
            <div className="relative max-w-sm mx-auto">
              {/* Glow effect behind phone */}
              <div 
                className="absolute -inset-8 rounded-[4rem] -z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0, 220, 255, 0.15) 0%, transparent 70%)'
                }}
              />

              {/* Phone frame */}
              <div 
                className="relative rounded-[2.5rem] p-3"
                style={{
                  background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
                  border: '1px solid rgba(0, 220, 255, 0.2)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 220, 255, 0.1)',
                }}
              >
                {/* Screen */}
                <div className="bg-background rounded-[2rem] overflow-hidden">
                  {/* Header */}
                  <div 
                    className="px-5 py-4 border-b border-border/50"
                    style={{
                      background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-full overflow-hidden"
                        style={{
                          border: '2px solid rgba(0, 220, 255, 0.4)',
                          boxShadow: '0 0 20px rgba(0, 220, 255, 0.2)',
                        }}
                      >
                        <Image
                          src="/images/martina-avatar.png"
                          alt="Martina"
                          width={40}
                          height={40}
                          className="object-cover object-top scale-125"
                        />
                      </div>
                      <div>
                        <div className="text-foreground font-medium text-sm">Martina Assistant</div>
                        <div className="text-xs text-primary flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          En línea
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-3 min-h-[380px] max-h-[380px] overflow-y-auto">
                    {messages.slice(0, visibleMessages).map((message, index) => (
                      <motion.div
                        key={index}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                            message.type === 'user'
                              ? 'rounded-br-md text-primary-foreground'
                              : 'rounded-bl-md text-foreground'
                          }`}
                          style={{
                            background: message.type === 'user' 
                              ? 'linear-gradient(135deg, rgba(0, 220, 255, 0.9) 0%, rgba(0, 180, 220, 0.9) 100%)'
                              : 'linear-gradient(135deg, rgba(30, 40, 60, 0.8) 0%, rgba(20, 30, 50, 0.9) 100%)',
                            border: message.type === 'user' ? 'none' : '1px solid rgba(0, 220, 255, 0.1)',
                          }}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    {visibleMessages < messages.length && visibleMessages > 0 && (
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div 
                          className="px-4 py-3 rounded-2xl rounded-bl-md"
                          style={{
                            background: 'linear-gradient(135deg, rgba(30, 40, 60, 0.8) 0%, rgba(20, 30, 50, 0.9) 100%)',
                            border: '1px solid rgba(0, 220, 255, 0.1)',
                          }}
                        >
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-primary/60"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-border/30">
                    <div 
                      className="rounded-full px-4 py-3 text-sm text-muted-foreground"
                      style={{
                        background: 'rgba(15, 23, 42, 0.6)',
                        border: '1px solid rgba(0, 220, 255, 0.1)',
                      }}
                    >
                      Escribe un mensaje...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
