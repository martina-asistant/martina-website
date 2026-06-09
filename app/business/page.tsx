"use client"

import { ArrowLeft, Check } from "lucide-react"

const plans = [
  {
    name: "STARTER",
    monthly: "157€/mes",
    setup: "1.209€",
    description:
      "Pensado para negocios que quieren automatizar la atención telefónica sin cambiar su forma de trabajar.",
    features: [
      "Atención de llamadas mediante IA",
      "Creación de citas",
      "Consulta de citas",
      "Modificación de citas",
      "Cancelación de citas",
      "Gestión de recados",
      "Información básica del negocio",
      "Integración con Google Calendar",
    ],
  },
  {
    name: "PRO",
    monthly: "247€/mes",
    setup: "2.459€",
    description:
      "Para negocios que quieren centralizar llamadas y WhatsApp en una única solución.",
    features: [
      "Todo lo incluido en Starter",
      "Atención por WhatsApp 24/7",
      "Gestión completa de citas por WhatsApp",
      "Reconocimiento personalizado",
      "Panel de control básico",
      "Dashboard de actividad",
      "Gestión de conversaciones",
      "Recordatorios automáticos de citas",
      "Recordatorios de cita con confirmación",
      "Reprogramación y cancelación de citas",
      "Aviso tras cancelación para optimizar nuevos huecos disponibles",
    ],
  },
  {
    name: "PREMIUM",
    monthly: "397€/mes",
    setup: "3.459€",
    description:
      "La solución más completa para negocios que buscan automatizar toda la gestión administrativa.",
    features: [
      "Todo lo incluido en Pro",
      "Sistema de recalls automáticos",
      "Panel premium completo",
      "Control de recalls",
      "Control de recordatorios de citas",
      "Agendas integradas sin software adicional",
      "Gestión de bloqueos y disponibilidad",
      "Consulta de citas pasadas",
      "Métricas avanzadas de seguimiento",
      "Base de datos avanzada",
    ],
  },
]

export default function BusinessPage() {
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
  MARTINA ASSISTANT BUSINESS
</p>

<h1 className="mx-auto mb-4 max-w-4xl text-xl md:text-3xl font-medium leading-tight text-white/90">
  Tu recepcionista virtual para negocios
</h1>

<p className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-white/55">
  Elige el plan que mejor se adapta a las necesidades de tu negocio.
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

                <div className="mb-4 mt-2">
                  <span className="text-3xl font-semibold text-white">
                    {plan.monthly}
                  </span>
                  <span className="ml-2 text-sm text-white/50">+ IVA</span>
                </div>

                <div className="mb-6 rounded-2xl border border-[#00dcff]/20 bg-[#00dcff]/[0.06] p-4">
                  <p className="text-sm text-white/55">
                    Creación personalizada desde
                  </p>
                  <p className="mt-1 text-xl font-semibold text-[#00dcff]">
                    {plan.setup} + IVA
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/40">
                    Pago único
                  </p>
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
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-[#00dcff]/25 bg-[#00dcff]/[0.045] p-6 text-sm leading-relaxed text-white/60">
            <p className="mb-3">
              * Los precios mostrados son orientativos, desde y sin IVA.
            </p>
            <p className="mb-3">
              * La creación personalizada es un pago único e incluye el análisis, configuración, personalización, integraciones, pruebas y puesta en marcha de Martina.
            </p>
            <p className="mb-3">
              * La cuota mensual corresponde al mantenimiento, soporte y evolución del servicio.
            </p>
            <p className="mb-3">
              * Todos los planes Business incluyen hasta 2 agendas de profesionales. Es posible ampliar el número de agendas, canales e integraciones según las necesidades del negocio.
            </p>
            <p className="mb-3">
              * La cuota mensual no incluye posibles costes externos asociados a telefonía, WhatsApp Business, VAPI, Google Calendar u otras herramientas necesarias para el funcionamiento del servicio.
            </p>
            <p>
              * El importe final puede variar según el número de agendas, canales, personalizaciones e integraciones requeridas.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => {
                window.location.href = "/"
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
