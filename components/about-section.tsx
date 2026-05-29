"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutSection() {
  return (
   <section id="about" className="relative pt-10 pb-24 md:pt-12 md:pb-32">
      {/* Ambient background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0, 220, 255, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(0, 180, 220, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left visual - Avatar with glow */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Ambient glow */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 220, 255, 0.12) 0%, transparent 60%)'
                }}
              />

              {/* Decorative rings */}
              <motion.div
                className="absolute inset-4 rounded-full"
                style={{ border: '1px solid rgba(0, 220, 255, 0.15)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-12 rounded-full"
                style={{ border: '1px solid rgba(0, 220, 255, 0.2)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Avatar container with glow */}
              <div className="absolute inset-20 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `
                      0 0 60px rgba(0, 220, 255, 0.3),
                      0 0 120px rgba(0, 220, 255, 0.15),
                      inset 0 0 40px rgba(0, 220, 255, 0.1)
                    `,
                    border: '2px solid rgba(0, 220, 255, 0.4)',
                  }}
                />
                <Image
                  src="/images/martina-avatar.png"
                  alt="Martina Assistant"
                  fill
                  className="object-cover object-top scale-125"
                />
              </div>

              {/* Floating particles */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
                  style={{
                    left: `${50 + 42 * Math.cos((i * Math.PI) / 3)}%`,
                    top: `${50 + 42 * Math.sin((i * Math.PI) / 3)}%`,
                  }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#00dcff] text-sm font-medium tracking-[0.35em] uppercase mb-4 block">
              ¿Qué es Martina?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6 text-balance">
              Tu asistente virtual inteligente
            </h2>
            <div className="space-y-4 text-foreground/75 text-lg leading-relaxed">
              <p>
                Martina es una asistente de inteligencia artificial diseñada específicamente para negocios que buscan optimizar su atención al cliente y gestión de citas.
              </p>
              <p>
                Configurada exclusivamente para tu negocio, se adapta a tu estilo de comunicación y trabaja 24/7 para que puedas centrarte en lo que realmente importa: hacer crecer tu empresa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "24/7", label: "Disponibilidad" },
                { value: "< 3s", label: "Tiempo respuesta" },
                { value: "98%", label: "Satisfacción" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative p-5 rounded-2xl bg-[#02141a]/70 border border-[#00dcff]/25 backdrop-blur-md transition-all duration-300 hover:border-[#00dcff]/60 hover:shadow-[0_0_35px_rgba(0,220,255,0.22)] hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <className="text-2xl md:text-3xl font-semibold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
