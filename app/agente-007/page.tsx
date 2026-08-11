"use client"

import { ArrowLeft, Check } from "lucide-react"

const plans = [
  {
    name: "STARTER",
    monthly: "79€/mes",
    setup: "459€",
    description:
      "Pensado para profesionales que quieren asegurarse de no perder ninguna llamada mientras trabajan, están reunidos o no pueden atender el teléfono.",
    features: [
      "Atención de llamadas mediante IA",
      "Recogida de datos del contacto",
      "Respuestas a preguntas frecuentes",
      "Envío de resumen por WhatsApp o email",
      "Base de datos de contactos",
    ],
  },
  {
    name: "PRO",
    monthly: "109€/mes",
    setup: "759€",
    description:
      "Pensado para profesionales que quieren que Martina actúe como una auténtica asistente personal.",
    features: [
      "Todo lo incluido en Starter",
      "Personalización avanzada de llamadas",
      "Agenda de reuniones/citas",
      "Consulta de citas",
      "Cancelación de citas",
      "Integración con Google Calendar",
      "Resolución de dudas básicas",
    ],
  },
  {
    name: "PREMIUM",
    monthly: "139€/mes",
    setup: "979€",
    description:
      "La solución más completa para profesionales que quieren delegar la gestión de sus llamadas y citas.",
    features: [
      "Todo lo incluido en Pro",
      "Opción de modificar la cita en la misma llamada",
      "Recordatorios de cita con confirmación",
      "Aviso si el cliente no puede asistir",
      "Liberación automática del hueco en agenda",
      "Base de datos avanzada",
    ],
  },
]

export default function Agente007Page() {
  return (
    <main className="min-h-screen bg-[#020b12] text-white">
      <button
        type="button"
        onClick={() => window.history.back()}
        className="fixed right-6 top-5 z-50 flex items-center gap-2 rounded-full border border-[#00dcff]/40 bg-[#062234]/80 px-5 py-2.5 text-sm font-medium text-white/75 shadow-[0_0_24px_rgba(0,220,255,0.20)] transition-all duration-300 hover:scale-105 hover:border-[#00dcff] hover:text-white"
      >
        <ArrowLeft className="h-4 w-4 text-[#00dcff]" />
        Volver
      </button>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,220,255,0.08) 0%, transparent 55%),
              radial-gradient(ellipse 50% 35% at 90% 45%, rgba(0,220,255,0.08) 0%, transparent 55%)
            `,
          }}
        />

        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-6 text-lg md:text-2xl font-light uppercase tracking-[0.35em] text-[#00dcff]">
              MARTINA AGENTE 007
            </p>

            <h1 className="mx-auto mb-4 max-w-4xl text-xl md:text-3xl font-medium leading-tight text-white/90">
              Tu asistente personal de llamadas
            </h1>

            <p className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-white/55">
              Planes diseñados para profesionales que quieren atender llamadas, gestionar citas y no perder oportunidades mientras trabajan.
            </p>
            </div>
            
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative overflow-hidden rounded-[1.75rem] border border-[#00dcff]/25 bg-white/[0.045] p-6 shadow-[0_0_34px_rgba(0,220,255,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-[#00dcff]/45 hover:shadow-[0_0_50px_rgba(0,220,255,0.18)]"
              >
                <p className="mb-4 text-sm font-light uppercase tracking-[0.35em] text-[#00dcff]">
                  {plan.name}
                </p>

                <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                  Desde
                </p>

                <div className="mb-6 mt-2">
                  <span className="text-3xl font-semibold text-white">
                    {plan.monthly}
                  </span>
                  <span className="ml-2 text-sm text-white/50">+ IVA</span>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  {plan.description}
                </p>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00dcff]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#00dcff]/20 bg-[#00dcff]/[0.04] p-4">
                  <p className="text-sm text-white/55">
                    Creación personalizada desde
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#00dcff]">
                    {plan.setup} + IVA
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/40">
                    Pago único
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-[#00dcff]/25 bg-white/[0.045] p-6 shadow-[0_0_34px_rgba(0,220,255,0.08)]">
  <p className="mb-4 text-sm font-light uppercase tracking-[0.35em] text-[#00dcff]">
    ¿NO TE ENCAJA NINGÚN PLAN?
  </p>

  <p className="text-sm leading-relaxed text-white/60">
    No te preocupes, nuestro objetivo es optimizar tu negocio. Por ello, puedes personalizar Martina con las funciones reales que se adapten a las necesidades de tu negocio.
  </p>

  <p className="mt-4 text-sm font-medium text-white/85">
    Agenda una reunión y cuéntanos qué necesitas.
  </p>
</div>

          <div className="mt-10 rounded-[1.75rem] border border-[#00dcff]/25 bg-[#00dcff]/[0.045] p-6 text-sm leading-relaxed text-white/60">
            <p className="mb-3">
              * Los precios mostrados son orientativos, desde y sin IVA.
            </p>
            <p className="mb-3">
              * Martina Agente 007 está pensado para 1 profesional y 1 agenda.
            </p>
            <p className="mb-3">
              * La creación personalizada es un pago único e incluye el análisis, configuración, personalización, integración con agenda, pruebas y puesta en marcha.
            </p>
            <p className="mb-3">
              * La cuota mensual corresponde al mantenimiento, soporte y evolución del servicio.
            </p>
            <p className="mb-3">
              * Los recordatorios de cita del plan Premium se realizan mediante WhatsApp o email, sin gestión conversacional completa por WhatsApp.
            </p>
            <p>
              * La gestión completa por WhatsApp, múltiples agendas, panel avanzado, recalls y automatización integral forman parte de Martina Assistant Business.
            </p>
          </div>

         <div className="mt-12 text-center">
  <button
    type="button"
    onClick={() => {
      window.location.href = "/?booking=1"
    }}
    className="rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-9 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(0,220,255,0.65)]"
    style={{
      boxShadow:
        "0 0 35px rgba(0,220,255,0.38), inset 0 0 0 1px rgba(0,220,255,0.15)",
    }}
  >
    Agendar reunión
  </button>
</div>
        </div>
      </section>
    </main>
  )
}
