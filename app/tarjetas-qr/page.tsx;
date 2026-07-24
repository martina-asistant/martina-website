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
    number: "01",
    icon: QrCode,
    title: "Escanea el QR",
    description:
      "Tu cliente escanea el código con la cámara de su móvil.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Accede a la página",
    description:
      "Entra en una página personalizada para tu negocio.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Elige día y hora",
    description:
      "Consulta la disponibilidad y selecciona la cita.",
  },
  {
    number: "04",
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
    icon: Scissors,
    title: "Peluquerías",
  },
  {
    icon: HeartPulse,
    title: "Fisioterapia y bienestar",
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
              rgba(0,220,255,0.11) 0%,
              transparent 58%
            ),
            radial-gradient(
              ellipse 55% 40% at 10% 50%,
              rgba(0,150,180,0.07) 0%,
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
        className="fixed left-5 top-5 z-50 flex items-center gap-2 rounded-full border border-[#00dcff]/40 bg-[#062234]/85 px-4 py-2 text-sm font-medium text-white/80 shadow-[0_0_22px_rgba(0,220,255,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#00dcff] hover:text-white"
      >
        <ArrowLeft className="h-4 w-4 text-[#00dcff]" />
        Volver
      </button>

      {/* Portada */}
      <section className="relative z-10 flex min-h-screen items-center px-6 pb-20 pt-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-5 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
              Servicio especial
            </span>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Tu tarjeta de visita, conectada a tu agenda
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              Diseñamos una tarjeta de visita personalizada con código QR para
              que tus clientes puedan acceder a una página propia, consultar la
              disponibilidad y pedir cita directamente desde el móvil.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={scrollToProcess}
                className="group flex items-center justify-center gap-2 rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(0,220,255,0.62)]"
                style={{
                  boxShadow:
                    "0 0 30px rgba(0,220,255,0.32), inset 0 0 0 1px rgba(0,220,255,0.15)",
                }}
              >
                Descubrir cómo funciona
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={openInformationForm}
                className="group flex items-center justify-center gap-2 rounded-full border border-[#00dcff]/35 bg-[#00dcff]/5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 transition-all duration-300 hover:border-[#00dcff]/70 hover:bg-[#00dcff]/10 hover:text-white"
              >
                Solicitar información
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-[12%] rounded-full bg-[#00dcff]/10 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#00dcff]/25 bg-[#06131b]/70 p-3 shadow-[0_0_70px_rgba(0,220,255,0.12)] backdrop-blur-md">
              <Image
                src="/images/tarjetas-qr/tarjetas-qr-servicio.png"
                alt="Tarjeta de visita personalizada con código QR y página de reserva"
                width={1536}
                height={1024}
                priority
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="rounded-[2rem] border border-[#00dcff]/20 bg-[#07141d]/70 px-7 py-12 text-center shadow-[0_0_55px_rgba(0,220,255,0.07)] backdrop-blur-md md:px-12"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
              Una solución completa
            </span>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Mucho más que una tarjeta de visita
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
              Tu tarjeta se convierte en una nueva vía de entrada a tu negocio.
              Al escanear el código QR, el cliente accede a una página
              personalizada donde puede consultar la disponibilidad y
              seleccionar su cita de forma rápida y sencilla.
            </p>

            <p className="mt-7 text-lg font-medium text-[#00dcff]">
              De la tarjeta a la cita, en solo unos segundos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Precio servicio */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-4 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
                Servicio completo
              </span>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                299 €{" "}
                <span className="text-xl font-normal text-white/45 md:text-2xl">
                  + IVA
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
                Cada solución se adapta a la imagen y necesidades de cada
                negocio.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {included.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 rounded-2xl border border-[#00dcff]/15 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#00dcff]/40"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00dcff]/25 bg-[#00dcff]/10">
                      <item.icon
                        className="h-5 w-5 text-[#00dcff]"
                        strokeWidth={1.6}
                      />
                    </div>

                    <span className="text-sm font-medium text-white/85">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={openInformationForm}
                className="group mt-9 flex items-center gap-2 text-sm font-medium text-[#00dcff] transition-all duration-300 hover:gap-3"
              >
                Solicitar información
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-[15%] rounded-full bg-[#00dcff]/10 blur-[90px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#00dcff]/20 bg-[#06131b]/70 p-3 shadow-[0_0_60px_rgba(0,220,255,0.10)]">
                <Image
                  src="/images/tarjetas-qr/tarjetas-qr-servicio.png"
                  alt="Ejemplo de tarjeta de visita personalizada con QR"
                  width={1536}
                  height={1024}
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mantenimiento */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-[15%] rounded-full bg-[#00dcff]/10 blur-[90px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#00dcff]/20 bg-[#06131b]/70 p-3 shadow-[0_0_60px_rgba(0,220,255,0.10)]">
                <Image
                  src="/images/tarjetas-qr/tarjetas-qr-mantenimiento.png"
                  alt="Mantenimiento técnico del sistema de reservas"
                  width={1536}
                  height={1024}
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="mb-4 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
                Mantenimiento
              </span>

              <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
                Todo preparado para que siga funcionando
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
                Nos encargamos del mantenimiento técnico para que la página
                continúe operativa y el sistema siga funcionando correctamente
                mes a mes.
              </p>

              <p className="mt-8 text-4xl font-semibold md:text-5xl">
                20 €{" "}
                <span className="text-xl font-normal text-white/45 md:text-2xl">
                  + IVA/mes
                </span>
              </p>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
                Una cuota mensual pensada para mantener la solución activa,
                actualizada y preparada para seguir recibiendo citas.
              </p>

              <button
                type="button"
                onClick={openInformationForm}
                className="group mt-9 flex items-center gap-2 text-sm font-medium text-[#00dcff] transition-all duration-300 hover:gap-3"
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
        className="relative z-10 scroll-mt-20 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Así de fácil funciona
            </h2>

            <p className="mt-3 text-sm text-white/50 md:text-base">
              De la tarjeta a tu cita, en solo unos segundos.
            </p>
          </motion.div>

          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[43px] hidden h-px bg-gradient-to-r from-transparent via-[#00dcff]/50 to-transparent lg:block" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="group relative rounded-2xl border border-[#00dcff]/20 bg-[#071722]/75 p-6 text-center shadow-[0_0_30px_rgba(0,220,255,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00dcff]/50 hover:shadow-[0_0_38px_rgba(0,220,255,0.12)]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#00dcff]/45 bg-[#092331] shadow-[0_0_25px_rgba(0,220,255,0.15)]">
                  <step.icon
                    className="h-6 w-6 text-[#00dcff]"
                    strokeWidth={1.5}
                  />

                  <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border border-[#00dcff]/35 bg-[#0a3141] px-1 text-[10px] font-semibold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-medium text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Negocios */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
              Para negocios con cita previa
            </span>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Adaptado a cualquier tipo de negocio
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business, index) => (
              <motion.div
                key={business.title}
                className="group flex items-center gap-4 rounded-2xl border border-[#00dcff]/15 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00dcff]/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00dcff]/25 bg-[#00dcff]/10">
                  <business.icon
                    className="h-5 w-5 text-[#00dcff]"
                    strokeWidth={1.5}
                  />
                </div>

                <span className="text-sm font-medium text-white/80">
                  {business.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="relative z-10 px-6 pb-24 pt-16 md:pb-32">
        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#00dcff]/30 bg-[#071722]/85 px-7 py-14 text-center shadow-[0_0_65px_rgba(0,220,255,0.12)] md:px-12 md:py-20"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,220,255,0.18),transparent_55%)]" />

          <div className="relative">
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.38em] text-[#00dcff]">
              Da el siguiente paso
            </span>

            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Convierte tu tarjeta de visita en una puerta directa a tu agenda
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
              Ofrece a tus clientes una forma rápida, sencilla y profesional de
              pedir cita desde cualquier lugar.
            </p>

            <button
              type="button"
              onClick={openInformationForm}
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#00dcff]/70 bg-[#f5f5f0] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#1a1a2e] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(0,220,255,0.65)]"
              style={{
                boxShadow:
                  "0 0 34px rgba(0,220,255,0.36), inset 0 0 0 1px rgba(0,220,255,0.15)",
              }}
            >
              Solicitar información
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
