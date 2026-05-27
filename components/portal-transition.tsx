"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface PortalTransitionProps {
  isActive: boolean
  onComplete: () => void
  children: React.ReactNode
}

export function PortalTransition({ isActive, onComplete, children }: PortalTransitionProps) {
  const [phase, setPhase] = useState<'idle' | 'expanding' | 'flash' | 'revealing' | 'complete'>('idle')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (isActive && phase === 'idle') {
      setPhase('expanding')
      
      setTimeout(() => {
        setPhase('flash')
      }, 1200)

      setTimeout(() => {
        setPhase('revealing')
      }, 1500)

      setTimeout(() => {
        setPhase('complete')
        onComplete()
      }, 2200)
    }
  }, [isActive, phase, onComplete])

  // Distortion effect on canvas
  useEffect(() => {
    if (phase !== 'expanding' && phase !== 'flash') return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    ctx.scale(dpr, dpr)

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    let progress = 0

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      progress += 0.02

      // Draw expanding light rays
      const rayCount = 24
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2
        const rayLength = Math.min(progress * 1500, window.innerWidth)
        const rayWidth = 2 + progress * 10

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(
          centerX + Math.cos(angle) * rayLength,
          centerY + Math.sin(angle) * rayLength
        )
        ctx.strokeStyle = `rgba(0, 220, 255, ${0.3 - progress * 0.2})`
        ctx.lineWidth = rayWidth
        ctx.stroke()
      }

      // Draw expanding rings
      for (let ring = 0; ring < 5; ring++) {
        const ringProgress = Math.max(0, progress - ring * 0.1)
        const radius = ringProgress * 800

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 220, 255, ${Math.max(0, 0.5 - ringProgress * 0.3)})`
        ctx.lineWidth = 3 - ring * 0.5
        ctx.stroke()
      }

      if (phase === 'expanding' || phase === 'flash') {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [phase])

  if (phase === 'idle') return null

  // After complete, render content without fixed overlay
  if (phase === 'complete') {
    return <>{children}</>
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background overlay */}
        <motion.div
          className="absolute inset-0 bg-background"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: phase === 'expanding' ? 0.7 : phase === 'flash' ? 1 : 0 
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Canvas for light effects */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Expanding portal circle */}
        <motion.div
          className="absolute rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(0, 220, 255, 0.3) 0%, rgba(0, 180, 220, 0.1) 50%, transparent 70%)',
            boxShadow: '0 0 100px rgba(0, 220, 255, 0.5), 0 0 200px rgba(0, 220, 255, 0.3)',
          }}
          initial={{ width: 200, height: 200, opacity: 1 }}
          animate={{
            width: phase === 'expanding' ? 3000 : phase === 'flash' ? 4000 : 0,
            height: phase === 'expanding' ? 3000 : phase === 'flash' ? 4000 : 0,
            opacity: phase === 'revealing' ? 0 : 1,
          }}
          transition={{
            duration: phase === 'expanding' ? 1.2 : 0.3,
            ease: phase === 'expanding' ? [0.25, 0.1, 0.25, 1] : 'easeOut',
          }}
        />

        {/* Flash effect */}
        <AnimatePresence>
          {phase === 'flash' && (
            <motion.div
              className="absolute inset-0 bg-primary/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, times: [0, 0.3, 1] }}
            />
          )}
        </AnimatePresence>

        {/* Content reveal */}
        <motion.div
          className="absolute inset-0 overflow-y-auto"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: phase === 'revealing' ? 1 : 0,
            scale: phase === 'revealing' ? 1 : 1.1,
          }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
