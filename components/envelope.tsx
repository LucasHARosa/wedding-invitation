"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface EnvelopeProps {
  onOpen: () => void
}

const ENVELOPE_CLOSED = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CONVITE%20CASAMENTO%20ANA%26LUCAS%20%281%29-bi9gXugEWlWvBxzkMldF3Mlv2Hpoo1.png"
const ENVELOPE_OPEN = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CONVITE%20CASAMENTO%20ANA%26LUCAS-X5P2JWdRd7QA24kJT2QGpDNs1XbeR0.png"

export function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center gap-8"
    >
      <motion.button
        onClick={onOpen}
        className="relative cursor-pointer group focus:outline-none"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Abrir convite"
      >
        {/* Envelope fechado */}
        <div className="relative w-72 h-52 md:w-[420px] md:h-[300px]">
          <Image
            src={ENVELOPE_CLOSED}
            alt="Envelope de convite fechado"
            fill
            className="object-contain transition-opacity duration-300 group-hover:opacity-0"
            priority
            sizes="(max-width: 768px) 288px, 420px"
          />
          <Image
            src={ENVELOPE_OPEN}
            alt="Envelope de convite aberto"
            fill
            className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            priority
            sizes="(max-width: 768px) 288px, 420px"
          />
        </div>
      </motion.button>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-muted-foreground text-sm md:text-base tracking-widest uppercase font-light"
      >
        Clique para abrir
      </motion.p>
    </motion.div>
  )
}
