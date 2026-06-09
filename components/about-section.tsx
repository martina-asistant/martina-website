"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="relative pt-6 pb-0 md:pt-8 md:pb-0 overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 18% 28%, oklch(0.75 0.15 195 / 0.16) 0%, transparent 55%),
            radial-gradient(ellipse 60% 45% at 82% 18%, oklch(0.75 0.15 195 / 0.12) 0%, transparent 55%),
            radial-gradient(circle at 72% 62%, oklch(0.75 0.15 195 / 0.18) 0%, transparent 20%),
            radial-gradient(circle at 50% 100%, oklch(0.75 0.15 195 / 0.10) 0%, transparent 42%)
          `
        }}
      />

      {/* Bright particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[
          'top-[6%] left-[60%]',
          'top-[12%] left-[79%]',
          'top-[20%] left-[88%]',
          'top-[34%] left-[72%]',
          'top-[48%] left-[91%]',
          'top-[58%] left-[96%]',
          'top-[68%] left-[74%]',
          'top-[76%] left-[53%]',
          'top-[80%] left-[12%]',
          'top-[64%] left-[4%]',
          'top-[24%] left-[26%]',
          'top-[88%] left-[97%]',
        ].map((pos, index) => (
          <motion.span
            key={index}
            className={`absolute ${pos} block h-3 w-3`}
            animate={{
              opacity: [0.45, 1, 0.45],
              scale: [0.85, 1.35, 0.85],
            }}
            transition={{
              duration: 2.4 + index * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_white,0_0_28px_oklch(0.75_0.15_195),0_0_65px_oklch(0.75_0.15_195)]" />
            <span className="absolute left-1/2 top-1/2 h-px w-9 -translate-x-1/2 -translate-y-1/2 bg-cyan-glow/80 blur-[0.5px]" />
            <span className="absolute left-1/2 top-1/2 h-9 w-px -translate-x-1/2 -translate-y-1/2 bg-cyan-glow/80 blur-[0.5px]" />
          </motion.span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left visual */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, oklch(0.75 0.15 195 / 0.28) 0%, transparent 64%)'
                }}
              />

              <motion.div
                className="absolute inset-[60px] rounded-full"
                style={{
                  border: '2.5px solid oklch(0.75 0.15 195 / 0.85)',
                }}
                animate={{
                  boxShadow: [
                    `
                      0 0 35px oklch(0.75 0.15 195 / 0.35),
                      0 0 90px oklch(0.75 0.15 195 / 0.18),
                      inset 0 0 25px oklch(0.75 0.15 195 / 0.10)
                    `,
                    `
                      0 0 95px oklch(0.75 0.15 195 / 0.75),
                      0 0 180px oklch(0.75 0.15 195 / 0.38),
                      inset 0 0 50px oklch(0.75 0.15 195 / 0.18)
                    `,
                    `
                      0 0 35px oklch(0.75 0.15 195 / 0.35),
                      0 0 90px oklch(0.75 0.15 195 / 0.18),
                      inset 0 0 25px oklch(0.75 0.15 195 / 0.10)
                    `
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="absolute inset-20 rounded-full overflow-hidden border border-cyan-glow/50 shadow-[0_0_65px_oklch(0.75_0.15_195/0.32)]">
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
            <span className="text-cyan-glow text-sm font-medium tracking-[0.35em] uppercase mb-4 block">
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
            <div className="grid grid-cols-3 gap-6 mt-9">
              {[
                { value: "24/7", label: "Disponibilidad" },
                { value: "< 3s", label: "Tiempo respuesta" },
                { value: "98%", label: "Satisfacción" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative p-5 rounded-2xl bg-[#02141a]/75 border border-cyan-glow/35 backdrop-blur-md transition-all duration-300 hover:border-cyan-glow/70 hover:shadow-[0_0_40px_oklch(0.75_0.15_195/0.32)] hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-cyan-glow/[0.03]" />

                  <div className="relative text-2xl md:text-3xl font-semibold text-cyan-glow mb-1 drop-shadow-[0_0_12px_oklch(0.75_0.15_195/0.65)]">
                    {stat.value}
                  </div>
                  <div className="relative text-xs text-muted-foreground">
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
