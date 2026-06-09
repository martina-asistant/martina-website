"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  const openSolutions = () => {
    window.location.href = "/#soluciones"
  }

  return (
    <footer className="relative py-16 border-t border-border/30">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(0, 220, 255, 0.02) 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
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
                  border: "1px solid rgba(0, 220, 255, 0.3)",
                  boxShadow: "0 0 15px rgba(0, 220, 255, 0.2)",
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
              Automatiza la gestión de tu negocio con inteligencia artificial sin perder la cercanía que hace única tu atención.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-foreground font-medium mb-4">Producto</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Qué es Martina
                </a>
              </li>
              <li>
                <a href="/#capabilities" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Funcionalidades
                </a>
              </li>
              <li>
                <button
                  onClick={openSolutions}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 text-left"
                >
                  Planes y precios
                </button>
              </li>
              <li>
                <button
                  onClick={openSolutions}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 text-left"
                >
                  Soluciones
                </button>
              </li>
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
              <li>
                <a href="/info#sobre-martina" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Sobre Martina
                </a>
              </li>
              <li>
                <a href="mailto:martinaassistant22@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/info#aviso-legal" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="/info#privacidad" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/info#cookies" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Cookies
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

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

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
          >
            Síguenos en Instagram
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
