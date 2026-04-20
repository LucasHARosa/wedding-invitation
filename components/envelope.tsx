"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

const envelopeVariants = {
  closed: { scale: 0.98 },
  open: {
    scale: 1.12,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const closedVariants = {
  closed: { opacity: 1, scale: 0.95 },
  open: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
};

const openBodyVariants = {
  closed: { opacity: 0, scale: 1 },
  open: {
    opacity: 1,
    scale: 0.95,
    transition: {
      duration: 0.55,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Envelope({ isOpen, onOpen }: EnvelopeProps) {
  return (
    <div className="flex flex-col items-center gap-6 mt-20">
      <motion.div
        className="relative flex w-full justify-center"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.button
          onClick={!isOpen ? onOpen : undefined}
          disabled={isOpen}
          variants={envelopeVariants}
          className="relative mx-auto aspect-4/3 w-[96vw] max-w-160 cursor-pointer disabled:cursor-default focus:outline-none md:w-200 md:max-w-none lg:w-232"
          aria-label="Abrir convite"
        >
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
              sizes="(max-width: 768px) 96vw, (max-width: 1024px) 50rem, 58rem"
            />
          </motion.div>

          <motion.div
            variants={openBodyVariants}
            className="absolute inset-0 z-10"
          >
            <Image
              src="/imagens/1 (1).png"
              alt="Envelope aberto"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 96vw, (max-width: 1024px) 50rem, 58rem"
            />
          </motion.div>
        </motion.button>
      </motion.div>

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
  );
}
