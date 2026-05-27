"use client"

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
}

export function ParticleField({ 
  intensity = 1,
  className = "" 
}: { 
  intensity?: number
  className?: string 
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.2,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    })

    const particleCount = Math.floor(60 * intensity)
    particlesRef.current = Array.from({ length: particleCount }, createParticle)

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        const lifeRatio = particle.life / particle.maxLife
        const fadeIn = Math.min(lifeRatio * 5, 1)
        const fadeOut = lifeRatio > 0.8 ? 1 - (lifeRatio - 0.8) * 5 : 1
        const currentOpacity = particle.opacity * fadeIn * fadeOut * intensity

        if (particle.life >= particle.maxLife || 
            particle.x < -10 || particle.x > window.innerWidth + 10 ||
            particle.y < -10 || particle.y > window.innerHeight + 10) {
          particlesRef.current[index] = createParticle()
        }

        // Cyan glow particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        )
        gradient.addColorStop(0, `rgba(0, 220, 255, ${currentOpacity})`)
        gradient.addColorStop(0.5, `rgba(0, 180, 220, ${currentOpacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(0, 180, 220, 0)')

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [intensity])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 ${className}`}
      style={{ zIndex: 1 }}
    />
  )
}
