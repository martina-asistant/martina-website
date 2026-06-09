"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0, 220, 255, 0.08) 0%, transparent 55%),
              radial-gradient(ellipse 50% 50% at 20% 80%, rgba(0, 220, 255, 0.06) 0%, transparent 55%)
            `,
          }}
        />

        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="text-sm text-[#00dcff] hover:text-[#00dcff]/80 transition-colors duration-300"
          >
            ← Volver al inicio
          </Link>

          <motion.div
            className="mt-12 space-y-20"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <section id="quienes-somos" className="scroll-mt-24">
              <p className="text-[#00dcff] text-sm font-medium tracking-[0.35em] uppercase mb-4">
                Empresa
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                ¿Quiénes somos?
              </h1>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Martina Assistant es una solución de inteligencia artificial diseñada para ayudar a negocios y profesionales a gestionar llamadas, mensajes, citas y tareas administrativas de forma más eficiente.
                </p>

                <p>
                  Nuestro objetivo es que la tecnología trabaje para ti, permitiéndote ofrecer una mejor atención a tus clientes mientras reduces interrupciones, optimizas tu tiempo y mejoras la organización de tu negocio.
                </p>

                <p>
                  Martina se configura de forma personalizada para adaptarse a las necesidades, horarios y forma de trabajar de cada empresa, ofreciendo una experiencia cercana, profesional y disponible 24 horas al día, sin perder la cercanía y la atención que hacen único a cada negocio.
                </p>
              </div>
            </section>

            <section id="contacto" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Contacto</h2>

              <p className="text-muted-foreground leading-relaxed">
                Para solicitar información, resolver dudas o conocer cómo Martina puede adaptarse a tu negocio, puedes escribirnos a:
              </p>

              <a
                href="mailto:martinaassistant22@gmail.com"
                className="inline-block mt-4 text-[#00dcff] hover:text-[#00dcff]/80 transition-colors duration-300"
              >
                martinaassistant22@gmail.com
              </a>
            </section>

            <section id="aviso-legal" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Aviso legal</h2>

              <p className="text-muted-foreground leading-relaxed">
                Esta página web pertenece a Martina Assistant. La información publicada tiene carácter informativo y comercial sobre los servicios ofrecidos por Martina Assistant.
              </p>
            </section>

            <section id="privacidad" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Privacidad & Cookies</h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Los datos facilitados a través de los formularios o canales de contacto se utilizarán únicamente para responder solicitudes de información, gestionar comunicaciones comerciales o prestar los servicios solicitados.
                </p>

                <p>
                  Esta web puede utilizar cookies técnicas o de análisis para mejorar la experiencia de navegación. El usuario puede configurar o rechazar el uso de cookies desde el aviso correspondiente.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
