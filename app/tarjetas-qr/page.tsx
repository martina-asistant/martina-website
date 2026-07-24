"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Check,
  HeartPulse,
  Palette,
  QrCode,
  Scissors,
  Smartphone,
  Sparkles,
} from "lucide-react"

const included = [
  {
    icon: Palette,
    title: "Diseño personalizado",
  },
  {
    icon: QrCode,
    title: "Código QR único",
  },
  {
    icon: Smartphone,
    title: "Página personalizada",
  },
  {
    icon: CalendarCheck,
    title: "Calendario con disponibilidad real",
  },
]

const steps = [
  {
    number: "1",
    icon: QrCode,
    title: "Escanea el QR",
    description:
      "Tu cliente escanea el código con la cámara de su móvil.",
  },
  {
    number: "2",
    icon: Smartphone,
    title: "Accede a la página",
    description:
      "Entra en una página personalizada para tu negocio.",
  },
  {
    number: "3",
    icon: CalendarCheck,
    title: "Elige día y hora",
    description:
      "Consulta la disponibilidad y selecciona la cita.",
  },
  {
    number: "4",
    icon: Check,
    title: "Cita confirmada",
    description:
      "La reserva queda registrada y todo listo.",
  },
]

const businesses = [
  {
    icon: HeartPulse,
    title: "Clínicas",
  },
  {
    icon: Sparkles,
    title: "Centros de estética",
  },
  {
    icon: HeartPulse,
    title: "Fisioterapia y bienestar",
  },
  {
    icon: Scissors,
    title: "Peluquerías",
  },
  {
    icon: BriefcaseBusiness,
    title: "Profesionales independientes",
  },
  {
    icon: Building2,
    title: "Negocios con cita previa",
  },
]

export default function TarjetasQrPage() {
  const openInformationForm = () => {
    window.location.href = "/?booking=qr"
  }

  const scrollToProcess = () => {
    document
      .getElementById("como-funciona")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02080d] text-white">
      {/* Fondo general */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 45% at 75% 10%,
              rgba(0,220,255,0.09) 0%,
              transparent 58%
            ),
            radial-gradient(
              ellipse 55% 40% at 10% 50%,
              rgba(0,150,180,0.06) 0%,
              transparent 60%
            ),
            linear-gradient(
              180deg,
              #02080d 0%,
              #031016 48%,
              #02080d 100%
            )
          `,
        }}
      />

      {/* Botón volver */}
      <button
        type="button"
        onClick={() => {
          window.location.href = "/?entered=1"
        }}
        className="fixed right-5 top-5 z-50 flex items-center gap-2 rounded-full border border-[#00dcff]/45 bg-[#062234]/90 px-4 py-2 text-sm font-medium text-white/85 shadow-[0_0_22px_rgba(0,220,255,0.16)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#00dcff] hover:text-white hover:shadow-[0_0_35px_rgba(0,220,255,0.30)]"
      >
        <ArrowLeft className="h-4 w-4 text-[#00dcff]" />
        Volver
      </button>

      {/* Portada */}
      <section className="relative z-10 px-6 pb-10 pt-24 md:pb-12 md:pt-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
              Servicio especial
            </span>

            <h1 className="max-w-md text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.65rem]">
              Tu tarjeta de visita, conectada a tu agenda
            </h1>

            <p className="mt-5 max-w-lg text-[13px] leading-[1.75] text-white/50 md:text-sm">
              Diseñamos una tarjeta de visita personalizada con código QR para
              que tus clientes puedan acceder a una página propia, consultar la
              disponibilidad y pedir cita directamente desde el móvil.
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <button
                type="button"
                onClick={scrollToProcess}
                className="rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.20em] text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(0,220,255,0.60)]"
                style={{
                  boxShadow:
                    "0 0 30px rgba(0,220,255,0.34), inset 0 0 0 1px rgba(0,220,255,0.15)",
                }}
              >
                Descubrir cómo funciona
              </button>

              <button
                type="button"
                onClick={openInformationForm}
                className="group inline-flex items-center gap-2 px-1 py-2 text-sm font-medium text-[#00dcff] transition-all duration-300 hover:gap-3 hover:text-[#76efff] hover:drop-shadow-[0_0_10px_rgba(0,220,255,0.55)]"
              >
                Solicitar información
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-[12%] rounded-full bg-[#00dcff]/10 blur-[85px]" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#00dcff]/25 bg-[#06131b]/72 p-2 shadow-[0_0_65px_rgba(0,220,255,0.10)] backdrop-blur-md">
              <Image
                src="/images/tarjetas-qr/tarjetas-qr-servicio.png"
                alt="Tarjeta de visita personalizada con código QR y página de reserva"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="block h-auto w-full rounded-[1.35rem]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section className="relative z-10 px-6 py-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="rounded-[1.8rem] border border-[#00dcff]/20 bg-[#07141d]/70 px-7 py-8 text-center shadow-[0_0_50px_rgba(0,220,255,0.06)] backdrop-blur-md md:px-12 md:py-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
              Una solución completa
            </span>

            <h2 className="text-xl font-semibold tracking-tight text-white md:text-[1.65rem]">
              Mucho más que una tarjeta de visita
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-[1.8] text-white/50 md:text-sm">
              Tu tarjeta se convierte en una nueva vía de entrada a tu negocio.
              Al escanear el código QR, el cliente accede a una página
              personalizada donde puede consultar la disponibilidad y
              seleccionar su cita de forma rápida y sencilla.
            </p>

            <p className="mt-5 text-sm font-medium text-[#00dcff] md:text-base">
              De la tarjeta a la cita, en solo unos segundos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Precio servicio */}
      <section className="relative z-10 px-6 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              <span className="mb-3 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
                Servicio completo
              </span>

              <h2 className="text-[1.9rem] font-semibold tracking-tight text-white md:text-[2.2rem]">
  299 €{" "}
  <span className="text-sm font-normal text-white/40 md:text-base">
    + IVA
  </span>
</h2>

              <p className="mt-4 max-w-xl text-[13px] leading-[1.75] text-white/50 md:text-sm">
                Cada solución se adapta a la imagen y necesidades de cada
                negocio.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <div
                    key={item.title}
                    className="group flex min-h-[72px] items-center gap-4 rounded-2xl border border-[#00dcff]/15 bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#00dcff]/40 hover:shadow-[0_0_28px_rgba(0,220,255,0.08)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00dcff]/25 bg-[#00dcff]/10">
                      <item.icon
                        className="h-5 w-5 text-[#00dcff]"
                        strokeWidth={1.6}
                      />
                    </div>

                    <span className="text-[13px] font-medium leading-snug text-white/78">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={openInformationForm}
                className="group mt-7 flex items-center gap-2 text-sm font-medium text-[#00dcff] transition-all duration-300 hover:gap-3 hover:text-[#76efff]"
              >
                Solicitar información
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="relative"
            >
              <div className="absolute inset-[15%] rounded-full bg-[#00dcff]/10 blur-[85px]" />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#00dcff]/20 bg-[#06131b]/72 p-2 shadow-[0_0_55px_rgba(0,220,255,0.09)]">
                <Image
                  src="/images/tarjetas-qr/tarjetas-qr-detalle.png"
                  alt="Diseño personalizado de tarjeta de visita con QR"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="block h-auto w-full rounded-[1.35rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mantenimiento */}
      <section className="relative z-10 px-6 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-[15%] rounded-full bg-[#00dcff]/10 blur-[85px]" />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#00dcff]/20 bg-[#06131b]/72 p-2 shadow-[0_0_55px_rgba(0,220,255,0.09)]">
                <Image
                  src="/images/tarjetas-qr/tarjetas-qr-mantenimiento.png"
                  alt="Mantenimiento técnico del sistema de reservas"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="block h-auto w-full rounded-[1.35rem]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="order-1 lg:order-2"
            >
              <span className="mb-3 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
                Mantenimiento
              </span>

              <h2 className="max-w-lg text-xl font-semibold tracking-tight text-white md:text-[1.65rem]">
                Todo preparado para que siga funcionando
              </h2>

              <p className="mt-4 max-w-lg text-[13px] leading-[1.75] text-white/50 md:text-sm">
                Nos encargamos del mantenimiento técnico para que la página
                continúe operativa y el sistema siga funcionando correctamente
                mes a mes.
              </p>

              <p className="mt-5 text-[1.8rem] font-semibold text-white md:text-[2rem]">
  24,50 €{" "}
  <span className="text-sm font-normal text-white/40">
    + IVA/mes
  </span>
</p>
              <p className="mt-4 max-w-lg text-[13px] leading-[1.75] text-white/48 md:text-sm">
                Una cuota mensual pensada para mantener la solución activa,
                actualizada y preparada para seguir recibiendo citas.
              </p>

              <button
                type="button"
                onClick={openInformationForm}
                className="group mt-7 flex items-center gap-2 text-sm font-medium text-[#00dcff] transition-all duration-300 hover:gap-3 hover:text-[#76efff]"
              >
                Solicitar información
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section
        id="como-funciona"
        className="relative z-10 scroll-mt-20 px-6 py-10 md:py-14"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-9 text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-semibold tracking-tight text-white md:text-[1.65rem]">
              Así de fácil funciona
            </h2>

            <p className="mt-2 text-xs leading-[1.65] text-white/45">
              De la tarjeta a tu cita, en solo unos segundos.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="group relative rounded-2xl border border-[#00dcff]/20 bg-[#071722]/75 px-5 py-6 text-center shadow-[0_0_28px_rgba(0,220,255,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00dcff]/50 hover:shadow-[0_0_35px_rgba(0,220,255,0.10)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.24em] text-[#00dcff]/75">
                  Paso {step.number}
                </span>

                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#00dcff]/35 bg-[#00dcff]/8">
                  <step.icon
                    className="h-5 w-5 text-[#00dcff]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-[13px] font-medium text-white/90">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-[1.65] text-white/45">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Negocios */}
      <section className="relative z-10 px-6 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-9 text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
              Para negocios con cita previa
            </span>

            <h2 className="text-xl font-semibold tracking-tight text-white md:text-[1.65rem]">
              Adaptado a cualquier tipo de negocio
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business, index) => (
              <motion.div
                key={business.title}
                className="group flex items-center gap-4 rounded-2xl border border-[#00dcff]/15 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#00dcff]/40"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00dcff]/25 bg-[#00dcff]/10">
                  <business.icon
                    className="h-5 w-5 text-[#00dcff]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-[13px] font-medium text-white/90">
                  {business.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="relative z-10 px-6 pb-20 pt-8 md:pb-24">
        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.8rem] border border-[#00dcff]/30 bg-[#071722]/85 px-7 py-11 text-center shadow-[0_0_60px_rgba(0,220,255,0.10)] md:px-12 md:py-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,220,255,0.16),transparent_55%)]" />

          <div className="relative">
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
              Da el siguiente paso
            </span>

            <h2 className="mx-auto max-w-2xl text-xl font-semibold tracking-tight text-white md:text-[1.7rem]">
              Convierte tu tarjeta de visita en una puerta directa a tu agenda
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-[1.75] text-white/48 md:text-sm">
              Ofrece a tus clientes una forma rápida, sencilla y profesional de
              pedir cita desde cualquier lugar.
            </p>

            <button
              type="button"
              onClick={openInformationForm}
              className="mt-7 rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(0,220,255,0.65)]"
              style={{
                boxShadow:
                  "0 0 32px rgba(0,220,255,0.34), inset 0 0 0 1px rgba(0,220,255,0.15)",
              }}
            >
              Solicitar información
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
