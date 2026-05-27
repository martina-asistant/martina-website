"use client"

import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Configura tu negocio",
    description: "Personaliza a Martina con la información de tu negocio, servicios y horarios disponibles."
  },
  {
    number: "02",
    title: "Conecta tus canales",
    description: "Integra Martina con WhatsApp, tu web, redes sociales y cualquier canal de comunicación."
  },
  {
    number: "03",
    title: "Martina aprende",
    description: "La IA analiza tu estilo de comunicación y se adapta a la personalidad de tu marca."
  },
  {
    number: "04",
    title: "Automatiza y escala",
    description: "Martina gestiona las conversaciones mientras tú te centras en hacer crecer tu negocio."
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0, 220, 255, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 20% 20%, rgba(0, 180, 220, 0.03) 0%, transparent 50%)
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
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6 text-balance">
            Cómo funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Implementar a Martina en tu negocio es simple. En solo cuatro pasos estarás automatizando tu atención al cliente.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0, 220, 255, 0.3) 20%, rgba(0, 220, 255, 0.3) 80%, transparent 100%)'
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Step card */}
                <div 
                  className="relative p-6 rounded-2xl backdrop-blur-sm h-full group transition-all duration-500 hover:translate-y-[-2px]"
                  style={{
                    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
                    border: '1px solid rgba(0, 220, 255, 0.15)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {/* Number badge */}
                  <div 
                    className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,220,255,0.3)]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 220, 255, 0.2) 0%, rgba(0, 180, 220, 0.08) 100%)',
                      border: '1px solid rgba(0, 220, 255, 0.3)',
                    }}
                  >
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: '0 0 40px rgba(0, 220, 255, 0.1), inset 0 0 40px rgba(0, 220, 255, 0.03)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Connection dot */}
                <div 
                  className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: 'rgba(0, 220, 255, 0.6)',
                    boxShadow: '0 0 10px rgba(0, 220, 255, 0.5)',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            className="group relative px-10 py-4 text-base font-semibold tracking-wider uppercase bg-[#f5f5f0] text-[#1a1a2e] rounded-full transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,220,255,0.5)] hover:scale-105"
            style={{
              boxShadow: '0 0 30px rgba(0, 220, 255, 0.3), inset 0 0 0 1px rgba(0, 220, 255, 0.3)',
            }}
          >
            <span className="relative z-10">COMENZAR AHORA</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
