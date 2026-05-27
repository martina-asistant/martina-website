"use client"

import { motion } from 'framer-motion'

export function GlowingPortal({ 
  scale = 1, 
  pulseIntensity = 1,
  className = "" 
}: { 
  scale?: number
  pulseIntensity?: number
  className?: string 
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer glow rings */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500 * scale,
          height: 500 * scale,
          background: 'radial-gradient(circle, rgba(0, 220, 255, 0.03) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Second glow layer */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400 * scale,
          height: 400 * scale,
          background: 'radial-gradient(circle, rgba(0, 220, 255, 0.05) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4 * pulseIntensity, 0.7 * pulseIntensity, 0.4 * pulseIntensity],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Third glow layer */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 320 * scale,
          height: 320 * scale,
          background: 'radial-gradient(circle, rgba(0, 220, 255, 0.08) 0%, rgba(0, 180, 220, 0.02) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main portal ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 240 * scale,
          height: 240 * scale,
          border: '2px solid rgba(0, 220, 255, 0.4)',
          boxShadow: `
            0 0 30px rgba(0, 220, 255, 0.3),
            0 0 60px rgba(0, 220, 255, 0.2),
            0 0 90px rgba(0, 220, 255, 0.1),
            inset 0 0 30px rgba(0, 220, 255, 0.1)
          `,
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.02, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Inner portal ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 180 * scale,
          height: 180 * scale,
          border: '1px solid rgba(0, 220, 255, 0.6)',
          boxShadow: `
            0 0 20px rgba(0, 220, 255, 0.4),
            0 0 40px rgba(0, 220, 255, 0.2),
            inset 0 0 20px rgba(0, 220, 255, 0.15)
          `,
        }}
        animate={{
          rotate: -360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Core glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 100 * scale,
          height: 100 * scale,
          background: 'radial-gradient(circle, rgba(0, 220, 255, 0.15) 0%, rgba(0, 220, 255, 0.05) 50%, transparent 70%)',
          boxShadow: '0 0 50px rgba(0, 220, 255, 0.3)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center bright point */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 8 * scale,
          height: 8 * scale,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: `
            0 0 10px rgba(0, 220, 255, 1),
            0 0 20px rgba(0, 220, 255, 0.8),
            0 0 40px rgba(0, 220, 255, 0.6)
          `,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
