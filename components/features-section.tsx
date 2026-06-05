"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  CalendarCheck, 
  Bell, 
  HelpCircle, 
  Bot,
  ArrowRight,
  X
} from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: "Responder mensajes",
    description: "Martina gestiona todas las conversaciones con tus clientes de forma inteligente y personalizada."
  },
  {
    icon: CalendarCheck,
    title: "Gestionar citas",
    description: "Organiza, confirma y reprograma citas automáticamente sin intervención manual."
  },
  {
    icon: Bell,
    title: "Enviar recordatorios",
    description: "Recordatorios automáticos de citas que reducen las ausencias y mejoran la puntualidad."
  },
  {
    icon: HelpCircle,
    title: "Resolver dudas frecuentes",
    description: "Respuestas instantáneas a las preguntas más comunes de tus clientes."
  },
  {
    icon: Bot,
    title: "Automatizar atención",
    description: "Atención al cliente 24/7 sin necesidad de estar presente constantemente del móvil."
  }
]

export function FeaturesSection() {
  const [showSolutions, setShowSolutions] = useState(false)

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 220, 255, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 180, 220, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#00dcff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Capacidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6 text-balance">
            ¿Qué puede hacer Martina?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Una asistente virtual diseñada para transformar la forma en que gestionas tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div 
                className="relative p-6 rounded-2xl backdrop-blur-sm h-full transition-all duration-500 hover:translate-y-[-2px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
                  border: '1px solid rgba(0, 220, 255, 0.15)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,220,255,0.3)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 220, 255, 0.15) 0%, rgba(0, 180, 220, 0.05) 100%)',
                    border: '1px solid rgba(0, 220, 255, 0.2)',
                  }}
                >
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(0, 220, 255, 0.1), inset 0 0 40px rgba(0, 220, 255, 0.03)',
                  }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          ))}

          <motion.div
            className="group relative cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={() => setShowSolutions(true)}
          >
            <div 
              className="relative p-6 rounded-2xl h-full flex flex-col justify-center items-center text-center transition-all duration-500 hover:translate-y-[-2px]"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 220, 255, 0.12) 0%, rgba(0, 180, 220, 0.05) 100%)',
                border: '1px solid rgba(0, 220, 255, 0.3)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 220, 255, 0.1)',
              }}
            >
              <span className="text-[#00dcff] text-xs tracking-[0.35em] uppercase font-light mb-3 block">
                Elige tu solución
              </span>

              <h3 className="text-lg font-medium text-foreground mb-2">
                ¿Trabajas solo o gestionas un negocio?
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                Descubre la versión de Martina que mejor se adapta a ti.
              </p>

              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                <span>Explorar</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {showSolutions && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-3xl border border-[#00dcff]/30 bg-[#020b12]/95 p-6 md:p-8 shadow-[0_0_80px_rgba(0,220,255,0.22)]">
            <button
              onClick={() => setShowSolutions(false)}
              className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-[#00dcff]/40 bg-[#062234]/80 px-4 py-2 text-sm text-white/70 shadow-[0_0_24px_rgba(0,220,255,0.20)] transition-all duration-300 hover:scale-105 hover:border-[#00dcff] hover:text-white"
            >
              <ArrowRight className="h-4 w-4 rotate-180 text-[#00dcff]" />
              Volver
            </button>

            <div className="mt-12 space-y-5">
              <div className="rounded-2xl border border-[#00dcff]/35 bg-[#00dcff]/[0.06] p-6 md:p-7 shadow-[0_0_40px_rgba(0,220,255,0.12)]">
                <p className="mb-3 text-xs font-light uppercase tracking-[0.35em] text-[#00dcff]">
                  MARTINA ASSISTANT BUSINESS
                </p>

                <h3 className="mb-3 text-xl md:text-2xl font-semibold text-white">
                  Tu recepcionista virtual para negocios
                </h3>

                <p className="mb-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/60">
                  Automatiza llamadas, WhatsApp, citas, recordatorios y gestión de clientes desde una solución diseñada para empresas.
                </p>

                <button
                  onClick={() => {
                    setShowSolutions(false)
                    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(0,220,255,0.65)]"
                  style={{
                    boxShadow: '0 0 35px rgba(0,220,255,0.38), inset 0 0 0 1px rgba(0,220,255,0.15)',
                  }}
                >
                  Saber más
                </button>
              </div>

              <div className="rounded-2xl border border-[#00dcff]/20 bg-white/5 p-6 md:p-7">
                <p className="mb-3 text-xs font-light uppercase tracking-[0.35em] text-[#00dcff]">
                  MARTINA AGENTE 007
                </p>

                <h3 className="mb-3 text-xl md:text-2xl font-semibold text-white">
                  Tu asistente personal de llamadas
                </h3>

                <p className="mb-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/60">
                  Pensado para profesionales que no pueden atender el teléfono mientras trabajan, están reunidos o visitando clientes.
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#00dcff]/40 bg-[#00dcff]/10 shadow-[0_0_28px_rgba(0,220,255,0.25)]">
                    <div className="absolute inset-0 rounded-full border border-[#00dcff]/40 animate-ping" />
                    <div className="h-3 w-3 rounded-full bg-[#00dcff] shadow-[0_0_18px_rgba(0,220,255,0.9)]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00dcff]">
                      Próximamente
                    </p>
                    <p className="mt-1 text-sm text-white/50">
                      Estamos preparando esta solución.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowSolutions(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#8befff]/70 bg-[#062234] text-white shadow-[0_0_28px_rgba(0,220,255,0.35)] transition-all duration-300 hover:scale-105 hover:border-[#8befff] hover:shadow-[0_0_42px_rgba(0,220,255,0.55)] md:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
