"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/30">
      {/* Background accent */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 220, 255, 0.02) 100%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-full overflow-hidden"
                style={{
                  border: '1px solid rgba(0, 220, 255, 0.3)',
                  boxShadow: '0 0 15px rgba(0, 220, 255, 0.2)',
                }}
              >
                <Image
                  src="/images/martina-avatar.png"
                  alt="Martina"
                  width={40}
                  height={40}
                  className="object-cover object-top scale-125"
                />
              </div>
              <div className="text-xl font-semibold tracking-tight">
                <span className="text-primary">Martina</span>
                <span className="text-muted-foreground font-normal ml-1">Assistant</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Automatiza la gestión de tu negocio con inteligencia artificial. Martina responde, organiza y acompaña mientras tú te centras en crecer.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-foreground font-medium mb-4">Producto</h4>
            <ul className="space-y-3">
              {["Características", "Precios", "Integraciones", "API"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-foreground font-medium mb-4">Empresa</h4>
            <ul className="space-y-3">
              {["Sobre nosotros", "Blog", "Contacto", "Privacidad"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Martina Assistant. Todos los derechos reservados.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
