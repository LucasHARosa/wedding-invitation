"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Plant } from "@/components/plant"

interface EnvelopeProps {
  isOpen: boolean
  onOpen: () => void
}

const closedVariants = {
  closed: { opacity: 1, scale: 1 },
  open: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
}

const openBodyVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
}

const cardPeekVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
}

export function Envelope({ isOpen, onOpen }: EnvelopeProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        className="relative"
        animate={isOpen ? "open" : "closed"}
      >
        {/* Plant decorations */}
        <Plant
          src="/imagens/9.png"
          width={160}
          height={200}
          className="absolute -left-24 bottom-0 z-30 pointer-events-none select-none"
          floatDuration={4.2}
          floatDelay={0}
          swayAmount={5}
        />
        <Plant
          src="/imagens/16.png"
          width={140}
          height={180}
          className="absolute -right-20 top-0 z-30 pointer-events-none select-none"
          floatDuration={3.6}
          floatDelay={0.8}
          swayAmount={4}
        />

        {/* Envelope image container */}
        <button
          onClick={!isOpen ? onOpen : undefined}
          disabled={isOpen}
          className="relative w-80 h-60 md:w-120 md:h-90 cursor-pointer disabled:cursor-default focus:outline-none"
          aria-label="Abrir convite"
        >
          {/* Layer 0 — closed envelope */}
          <motion.div
            variants={closedVariants}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/imagens/5 (1).png"
              alt="Envelope fechado"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 320px, 480px"
            />
          </motion.div>

          {/* Layer 1 — open envelope body (background) */}
          <motion.div
            variants={openBodyVariants}
            className="absolute inset-0 z-10"
          >
            <Image
              src="/imagens/7.png"
              alt="Envelope aberto"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 320px, 480px"
            />
          </motion.div>

          {/* Layer 2 — card peeking out (foreground) */}
          <motion.div
            variants={cardPeekVariants}
            className="absolute inset-0 z-20"
          >
            <Image
              src="/imagens/6.png"
              alt="Convite saindo do envelope"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 320px, 480px"
            />
          </motion.div>
        </button>
      </motion.div>

      {/* "Clique para abrir" hint */}
      <motion.p
        animate={{ opacity: isOpen ? 0 : [0.5, 1, 0.5] }}
        transition={
          isOpen
            ? { duration: 0.3 }
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
        className="text-muted-foreground text-sm md:text-base tracking-widest uppercase font-light pointer-events-none select-none"
      >
        Clique para abrir
      </motion.p>
    </div>
  )
}
