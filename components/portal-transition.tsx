"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface PortalTransitionProps {
  isActive: boolean
  onComplete: () => void
  children: React.ReactNode
}

export function PortalTransition({ isActive, onComplete, children }: PortalTransitionProps) {
  const [phase, setPhase] = useState<"idle" | "opening" | "revealing" | "complete">("idle")

  useEffect(() => {
    if (isActive && phase === "idle") {
      setPhase("opening")

      const revealTimer = setTimeout(() => {
        setPhase("revealing")
      }, 1100)

      const completeTimer = setTimeout(() => {
        setPhase("complete")
        onComplete()
      }, 1700)

      return () => {
        clearTimeout(revealTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [isActive, phase, onComplete])

  if (phase === "idle") return null

  if (phase === "complete") {
    return <>{children}</>
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] overflow-hidden bg-[#020b12]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Fondo oscuro elegante */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 220, 255, 0.16) 0%, rgba(0, 70, 95, 0.10) 32%, rgba(2, 11, 18, 0.98) 72%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "opening" ? 1 : 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Halo suave central */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00dcff]/35 md:h-96 md:w-96"
          style={{
            boxShadow:
              "0 0 45px rgba(0, 220, 255, 0.24), inset 0 0 35px rgba(0, 220, 255, 0.08)",
          }}
          initial={{ scale: 0.78, opacity: 0 }}
          animate={{
            scale: phase === "opening" ? 1.35 : 1.55,
            opacity: phase === "opening" ? [0, 0.8, 0.35] : 0,
          }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
        />

        {/* Glow interior muy sutil */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00dcff]/10 blur-3xl md:h-64 md:w-64"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: phase === "opening" ? 1.4 : 1.8,
            opacity: phase === "opening" ? [0, 0.55, 0.25] : 0,
          }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        />

        {/* Partículas discretas */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-1 w-1 rounded-full bg-[#00dcff]/70"
              style={{
                left: `${12 + ((index * 47) % 76)}%`,
                top: `${14 + ((index * 31) % 70)}%`,
                boxShadow: "0 0 10px rgba(0, 220, 255, 0.6)",
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: phase === "opening" ? [0, 0.7, 0.25] : 0,
                scale: phase === "opening" ? [0.6, 1, 0.8] : 0.6,
                y: phase === "opening" ? [-4, 4, -2] : 0,
              }}
              transition={{
                duration: 1.4,
                delay: index * 0.025,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Texto central elegante */}
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: phase === "opening" ? 1 : 0,
            y: phase === "opening" ? 0 : -8,
          }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#00dcff]">
            Cargando Martina
          </p>

          <div className="mt-4 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-2 w-2 rounded-full bg-[#00dcff]"
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: i * 0.18,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Revelado del contenido */}
        <motion.div
          className="absolute inset-0 overflow-y-auto"
          initial={{ opacity: 0, scale: 1.015, filter: "blur(10px)" }}
          animate={{
            opacity: phase === "revealing" ? 1 : 0,
            scale: phase === "revealing" ? 1 : 1.015,
            filter: phase === "revealing" ? "blur(0px)" : "blur(10px)",
          }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
