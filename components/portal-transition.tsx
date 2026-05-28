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
    if (!isActive) {
      setPhase("idle")
      return
    }

    setPhase("opening")

    const revealTimer = setTimeout(() => {
      setPhase("revealing")
    }, 1900)

    const completeTimer = setTimeout(() => {
      setPhase("complete")
      onComplete()
    }, 3200)

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(completeTimer)
    }
  }, [isActive, onComplete])

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
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 220, 255, 0.24) 0%, rgba(0, 80, 110, 0.18) 34%, rgba(2, 11, 18, 0.98) 72%)",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00dcff]/80 md:h-[30rem] md:w-[30rem]"
          style={{
            boxShadow:
              "0 0 55px rgba(0, 220, 255, 0.65), 0 0 140px rgba(0, 220, 255, 0.35), inset 0 0 50px rgba(0, 220, 255, 0.18)",
          }}
          initial={{ scale: 0.82, opacity: 0 }}
          animate={{
            scale: phase === "opening" ? [0.82, 1.18, 0.96, 1.08] : 1.28,
            opacity: phase === "opening" ? [0, 1, 0.75, 0.95] : 0,
          }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00dcff]/20 blur-3xl md:h-80 md:w-80"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: phase === "opening" ? [0.7, 1.35, 0.9, 1.2] : 1.7,
            opacity: phase === "opening" ? [0, 0.8, 0.45, 0.65] : 0,
          }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 22 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-1 w-1 rounded-full bg-[#00dcff]/80"
              style={{
                left: `${12 + ((index * 47) % 76)}%`,
                top: `${14 + ((index * 31) % 70)}%`,
                boxShadow: "0 0 14px rgba(0, 220, 255, 0.8)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: phase === "opening" ? [0, 0.9, 0.35] : 0,
                scale: phase === "opening" ? [0.5, 1.15, 0.85] : 0.5,
                y: phase === "opening" ? [-6, 5, -3] : 0,
              }}
              transition={{
                duration: 1.8,
                delay: index * 0.02,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: phase === "opening" ? 1 : 0,
            y: phase === "opening" ? 0 : -8,
          }}
          transition={{ duration: 0.75, ease: "easeOut" }}
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

        <motion.div
          className="absolute inset-0 overflow-y-auto"
          initial={{ opacity: 0, scale: 1.015, filter: "blur(10px)" }}
          animate={{
            opacity: phase === "revealing" ? 1 : 0,
            scale: phase === "revealing" ? 1 : 1.015,
            filter: phase === "revealing" ? "blur(0px)" : "blur(10px)",
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
