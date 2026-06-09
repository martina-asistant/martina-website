"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  Building2,
  Phone,
  Mail,
  Instagram,
  ShieldCheck,
  Cookie,
} from "lucide-react"

const sections = [
  {
    id: "quienes-somos",
    title: "¿Quiénes somos?",
    icon: Building2,
    content: [
      "Martina Assistant es una solución de inteligencia artificial diseñada para ayudar a negocios y profesionales a gestionar llamadas, mensajes, citas y tareas administrativas de forma más eficiente.",
      "Nuestro objetivo es que la tecnología trabaje para ti, permitiéndote ofrecer una mejor atención a tus clientes mientras reduces interrupciones, optimizas tu tiempo y mejoras la organización de tu negocio.",
      "Martina se configura de forma personalizada para adaptarse a las necesidades, horarios y forma de trabajar de cada empresa, ofreciendo una experiencia cercana, profesional y disponible 24 horas al día, sin perder la cercanía y la atención que hacen único a cada negocio.",
    ],
  },
  {
    id: "contacto",
    title: "Contacto",
    icon: Phone,
    contact: true,
    content: [
      "Para solicitar información, resolver dudas o conocer cómo Martina puede adaptarse a tu negocio, puedes contactar a través de los siguientes canales:",
    ],
  },
  {
    id: "aviso-legal",
    title: "Aviso legal",
    icon: ShieldCheck,
    content: [
      "Esta página web pertenece a Martina Assistant. La información publicada tiene carácter informativo y comercial sobre los servicios ofrecidos.",
      "El uso de esta web implica la aceptación de las condiciones generales de navegación y el compromiso de utilizar la información de forma responsable y conforme a la normativa aplicable.",
    ],
  },
  {
    id: "privacidad",
    title: "Privacidad, Cookies e Inteligencia Artificial",
    icon: Cookie,
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
      <section className="relative min-h-screen py-7 md:py-9">
        {/* Fondo Martina */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 80% 18%, rgba(0, 220, 255, 0.10) 0%, transparent 52%),
              radial-gradient(ellipse 50% 45% at 18% 80%, rgba(0, 180, 220, 0.08) 0%, transparent 55%),
              radial-gradient(circle at 50% 20%, rgba(0, 220, 255, 0.06) 0%, transparent 35%)
            `,
          }}
        />

        {/* Destellos tipo Home */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[
            "top-[10%] left-[12%]",
            "top-[16%] left-[78%]",
            "top-[28%] left-[92%]",
            "top-[42%] left-[7%]",
            "top-[56%] left-[86%]",
            "top-[72%] left-[15%]",
            "top-[82%] left-[70%]",
          ].map((pos, index) => (
            <motion.span
              key={index}
              className={`absolute ${pos} h-1.5 w-1.5 rounded-full bg-white`}
              style={{
                boxShadow: `
                  0 0 8px rgba(255,255,255,1),
                  0 0 40px rgba(0,220,255,1),
                  0 0 90px rgba(0,220,255,0.85)
                `,
              }}
              animate={{
                opacity: [0.55, 1, 0.55],
                scale: [1, 1.55, 1],
              }}
              transition={{
                duration: 2.6 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.18,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6">
          {/* Volver */}
<div className="flex justify-end mb-8">
  <Link
    href="/"
    className="group inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-[#00dcff]/45 hover:text-foreground hover:shadow-[0_0_24px_rgba(0,220,255,0.22)]"
  >
    <ArrowLeft className="h-4 w-4 text-[#00dcff] transition-transform duration-300 group-hover:-translate-x-1" />
    <span>Volver</span>
  </Link>
</div>

          {/* Cabecera */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[#00dcff] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Empresa
            </p>

            <p className="max-w-2xl text-muted-foreground text-sm leading-relaxed">
              Toda la información sobre Martina Assistant, nuestras formas de contacto,
              políticas de privacidad, cookies y documentación legal.
            </p>
          </motion.div>

          {/* Cajas */}
          <div className="space-y-4">
            {sections.map((section, index) => {
              const Icon = section.icon

              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 relative rounded-2xl border border-[#00dcff]/20 bg-[#02141a]/60 p-4 md:p-5 backdrop-blur-md shadow-[0_0_28px_rgba(0,220,255,0.055)] transition-all duration-300 hover:border-[#00dcff]/45 hover:shadow-[0_0_38px_rgba(0,220,255,0.12)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.55 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-[#00dcff]/[0.018]" />

                  <div className="relative">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#00dcff]/30 bg-[#00dcff]/5 shadow-[0_0_18px_rgba(0,220,255,0.10)]">
                        <Icon className="h-4 w-4 text-[#00dcff]" />
                      </div>

                      <h2 className="text-base md:text-lg font-semibold text-foreground">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                      {section.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}

                      {section.contact && (
                        <div className="pt-3 flex flex-col items-center gap-3 text-center">
                          <a
                            href="mailto:martinaassistant22@gmail.com"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#00dcff] transition-colors duration-300"
                          >
                            <Mail className="h-4 w-4 text-[#00dcff]" />
                            <span>Email</span>
                          </a>

                          <a
                            href="https://www.instagram.com/martina_assistant/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#00dcff] transition-colors duration-300"
                          >
                            <Instagram className="h-4 w-4 text-[#00dcff]" />
                            <span>@martina_assistant</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.section>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
