"use client"

import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  CalendarCheck, 
  Bell, 
  HelpCircle, 
  Bot,
  ArrowRight
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
    description: "Recordatorios automáticos que reducen las ausencias y mejoran la puntualidad."
  },
  {
    icon: HelpCircle,
    title: "Resolver dudas frecuentes",
    description: "Respuestas instantáneas a las preguntas más comunes de tus clientes."
  },
  {
    icon: Bot,
    title: "Automatizar atención",
    description: "Atención al cliente 24/7 sin necesidad de estar presente constantemente."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Background accent */}
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Capacidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6 text-balance">
            Qué puede hacer Martina
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
                {/* Icon with glow */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,220,255,0.3)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 220, 255, 0.15) 0%, rgba(0, 180, 220, 0.05) 100%)',
                    border: '1px solid rgba(0, 220, 255, 0.2)',
                  }}
                >
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
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

          {/* CTA Card */}
          <motion.div
            className="group relative cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div 
              className="relative p-6 rounded-2xl h-full flex flex-col justify-center items-center text-center transition-all duration-500 hover:translate-y-[-2px]"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 220, 255, 0.12) 0%, rgba(0, 180, 220, 0.05) 100%)',
                border: '1px solid rgba(0, 220, 255, 0.3)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 220, 255, 0.1)',
              }}
            >
              <h3 className="text-lg font-medium text-foreground mb-2">
                ¿Quieres saber más?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Descubre todas las posibilidades
              </p>
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                <span>Explorar</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
