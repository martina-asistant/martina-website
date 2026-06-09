"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative pt-6 pb-0 md:pt-8 md:pb-0 overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0, 220, 255, 0.09) 0%, transparent 52%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(0, 180, 220, 0.06) 0%, transparent 52%),
            radial-gradient(circle at 72% 62%, rgba(0, 220, 255, 0.10) 0%, transparent 18%)
          `,
        }}
      />

      {/* Bright stars */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[
          "top-[7%] left-[60%]",
          "top-[13%] left-[79%]",
          "top-[23%] left-[88%]",
          "top-[38%] left-[94%]",
          "top-[54%] left-[73%]",
          "top-[70%] left-[31%]",
          "top-[78%] left-[8%]",
          "top-[86%] left-[96%]",
          "top-[61%] left-[4%]",
          "top-[75%] left-[53%]",
        ].map((pos, index) => (
          <motion.div
            key={index}
            className={`absolute ${pos} h-2 w-2 rounded-full bg-white`}
            style={{
              boxShadow: `
                0 0 12px rgba(255,255,255,1),
                0 0 40px rgba(0,220,255,1),
                0 0 90px rgba(0,220,255,1),
                0 0 160px rgba(0,220,255,0.85)
              `,
            }}
            animate={{
              : [0.45, 1, 0.45],
              scale: [1, 1.65, 1],
            }}
            transition={{
              duration: 2.3 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.18,
            }}
          >
            <span className="absolute left-1/2 top-1/2 h-px w-9 -translate-x-1/2 -translate-y-1/2 bg-[#00dcff] opacity-90 blur-[0.2px]" />
            <span className="absolute left-1/2 top-1/2 h-9 w-px -translate-x-1/2 -translate-y-1/2 bg-[#00dcff] opacity-90 blur-[0.2px]" />
          </motion.div>
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
              {/* Soft ambient glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0, 220, 255, 0.18) 0%, transparent 62%)",
                }}
              />

              {/* Static halo with breathing glow */}
              <motion.div
                className="absolute inset-[60px] rounded-full"
                style={{
                  border: "2.5px solid rgba(0, 220, 255, 0.75)",
                }}
                animate={{
                  boxShadow: [
                    `
                      0 0 25px rgba(0, 220, 255, 0.18),
                      0 0 60px rgba(0, 220, 255, 0.08),
                      inset 0 0 25px rgba(0, 220, 255, 0.05)
                    `,
                    `
                      0 0 75px rgba(0, 220, 255, 0.58),
                      0 0 150px rgba(0, 220, 255, 0.30),
                      inset 0 0 42px rgba(0, 220, 255, 0.12)
                    `,
                    `
                      0 0 25px rgba(0, 220, 255, 0.18),
                      0 0 60px rgba(0, 220, 255, 0.08),
                      inset 0 0 25px rgba(0, 220, 255, 0.05)
                    `,
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
            <div className="grid grid-cols-3 gap-6 mt-9">
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
