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
          {/* Left visual - Avatar with subtle breathing glow */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Soft ambient glow */}
              <div
                className="absolute inset- rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 220, 255, 0.16) 0%, transparent 62%)'
                }}
              />

              {/* Static halo with breathing glow */}
              <motion.div
               className="absolute inset-[60px] rounded-full"
                style={{
                 border: '2.5px solid rgba(0, 220, 255, 0.75)',
                }}
                animate={{
                  boxShadow: [
                    `
                      0 0 25px rgba(0, 220, 255, 0.18),
                      0 0 60px rgba(0, 220, 255, 0.08),
                      inset 0 0 25px rgba(0, 220, 255, 0.05)
                    `,
                    `
                      0 0 70px rgba(0, 220, 255, 0.55),
                      0 0 140px rgba(0, 220, 255, 0.28),
                      inset 0 0 40px rgba(0, 220, 255, 0.10)
                    `,
                    `
                      0 0 25px rgba(0, 220, 255, 0.18),
                      0 0 60px rgba(0, 220, 255, 0.08),
                      inset 0 0 25px rgba(0, 220, 255, 0.05)
                    `
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Avatar */}
              <div className="absolute inset-20 rounded-full overflow-hidden border border-[#00dcff]/35 shadow-[0_0_45px_rgba(0,220,255,0.20)]">
                <Image
                  src="/images/martina-avatar.png"
                  alt="Martina Assistant"
                  fill
                  className="object-cover object-top scale-125"
                />
              </div>
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
                  <div className="text-2xl md:text-3xl font-semibold text-[#00dcff] mb-1">
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
