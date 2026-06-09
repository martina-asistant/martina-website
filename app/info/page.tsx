"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const sections = [
  {
    id: "quienes-somos",
    title: "¿Quiénes somos?",
    content: [
      "Martina Assistant es una solución de inteligencia artificial diseñada para ayudar a negocios y profesionales a gestionar llamadas, mensajes, citas y tareas administrativas de forma más eficiente.",
      "Nuestro objetivo es que la tecnología trabaje para ti, permitiéndote ofrecer una mejor atención a tus clientes mientras reduces interrupciones, optimizas tu tiempo y mejoras la organización de tu negocio.",
      "Martina se configura de forma personalizada para adaptarse a las necesidades, horarios y forma de trabajar de cada empresa, ofreciendo una experiencia cercana, profesional y disponible 24 horas al día, sin perder la cercanía y la atención que hacen único a cada negocio.",
    ],
  },
  {
    id: "contacto",
    title: "Contacto",
    content: [
      "Para solicitar información, resolver dudas o conocer cómo Martina puede adaptarse a tu negocio, puedes contactar con nosotros a través de los siguientes canales:",
    ],
    extra: true,
  },
  {
    id: "aviso-legal",
    title: "Aviso legal",
    content: [
      "Esta página web pertenece a Martina Assistant. La información publicada tiene carácter informativo y comercial sobre los servicios ofrecidos.",
      "El uso de esta web implica la aceptación de las condiciones generales de navegación y el compromiso de utilizar la información de forma responsable y conforme a la normativa aplicable.",
    ],
  },
  {
    id: "privacidad",
    title: "Privacidad, Cookies e Inteligencia Artificial",
    content: [
      "Los datos facilitados a través de formularios, correo electrónico u otros canales de contacto se utilizarán únicamente para responder solicitudes de información, gestionar comunicaciones comerciales o prestar los servicios solicitados.",
      "Esta web puede utilizar cookies técnicas o de análisis para mejorar la experiencia de navegación. El usuario podrá configurar o rechazar el uso de cookies desde el aviso correspondiente.",
      "Martina Assistant utiliza inteligencia artificial para automatizar tareas como la gestión de llamadas, mensajes, citas y consultas. Cuando una persona interactúe con Martina, se procurará informar de forma clara de que está comunicándose con un sistema automatizado.",
    ],
  },
]

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <section className="relative min-h-screen py-10 md:py-14">
        {/* Fondo Martina */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 65% 45% at 15% 18%, rgba(0, 220, 255, 0.10) 0%, transparent 55%),
              radial-gradient(ellipse 55% 40% at 85% 20%, rgba(0, 220, 255, 0.08) 0%, transparent 55%),
              radial-gradient(circle at 50% 80%, rgba(0, 220, 255, 0.08) 0%, transparent 38%)
            `,
          }}
        />

        {/* Destellos */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[
            "top-[8%] left-[18%]",
            "top-[18%] left-[78%]",
            "top-[30%] left-[92%]",
            "top-[42%] left-[8%]",
            "top-[58%] left-[84%]",
            "top-[72%] left-[18%]",
            "top-[84%] left-[68%]",
            "top-[90%] left-[5%]",
          ].map((pos, index) => (
            <motion.span
              key={index}
              className={`absolute ${pos} h-1.5 w-1.5 rounded-full bg-[#00dcff] shadow-[0_0_18px_rgba(0,220,255,0.95)]`}
              animate={{
                opacity: [0.25, 1, 0.25],
                scale: [0.8, 1.7, 0.8],
              }}
              transition={{
                duration: 2.8 + index * 0.22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6">
          {/* Botón volver */}
          <div className="flex justify-end mb-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-[#00dcff]/45 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-[#00dcff] hover:text-[#00dcff] hover:shadow-[0_0_28px_rgba(0,220,255,0.28)]"
            >
              <span className="text-[#00dcff] transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Volver
            </Link>
          </div>

          {/* Cabecera */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#00dcff] text-sm font-medium tracking-[0.35em] uppercase mb-4">
              Empresa
            </p>

            <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              Toda la información sobre Martina Assistant, nuestras formas de contacto,
              políticas de privacidad, cookies y documentación legal.
            </p>
          </motion.div>

          {/* Cajas */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 relative rounded-3xl border border-[#00dcff]/25 bg-[#02141a]/70 p-7 md:p-9 backdrop-blur-md shadow-[0_0_45px_rgba(0,220,255,0.08)] transition-all duration-300 hover:border-[#00dcff]/55 hover:shadow-[0_0_60px_rgba(0,220,255,0.16)]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <div className="absolute inset-0 rounded-3xl bg-[#00dcff]/[0.025]" />

                <div className="relative">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-5">
                    {section.title}
                  </h2>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.extra && (
                      <div className="pt-2 space-y-2">
                        <a
                          href="mailto:martinaassistant22@gmail.com"
                          className="block text-[#00dcff] hover:text-[#00dcff]/80 transition-colors duration-300"
                        >
                          martinaassistant22@gmail.com
                        </a>

                        <a
                          href="https://www.instagram.com/martina_assistant/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-[#00dcff] hover:text-[#00dcff]/80 transition-colors duration-300"
                        >
                          @martina_assistant
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
