"use client"

import { motion } from "framer-motion"
import { MapPin, Gift, Calendar, Clock, Heart, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Invitation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto px-6 py-12 md:py-16"
    >
      {/* Header with names */}
      <motion.header variants={itemVariants} className="text-center mb-12">
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-4">
          Você é nosso convidado especial
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground mb-2">
          Ana
        </h1>
        <div className="flex items-center justify-center gap-4 my-3">
          <div className="h-px w-12 bg-primary/30" />
          <span className="font-serif text-2xl text-primary">&</span>
          <div className="h-px w-12 bg-primary/30" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground">
          Lucas
        </h1>
      </motion.header>

      {/* Photo placeholder */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="relative aspect-[4/3] w-full max-w-md mx-auto rounded-lg overflow-hidden bg-muted border border-border">
          {/* Placeholder for couple photo - replace src with actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-10 h-10 text-muted-foreground/50" />
              </div>
              <p className="text-sm">Foto do casal</p>
            </div>
          </div>
          {/* 
          Para adicionar sua foto, descomente e substitua:
          <Image
            src="/images/couple.jpg"
            alt="Ana e Lucas"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>
      </motion.div>

      {/* Date and time */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-gold mb-2">
          <Calendar className="w-5 h-5" />
          <span className="tracking-widest uppercase text-sm font-medium">Salve a data</span>
        </div>
        <p className="font-serif text-3xl md:text-4xl text-foreground mb-2">
          18 de Julho
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="tracking-wider">15h00</span>
        </div>
      </motion.div>

      {/* Decorative divider */}
      <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-12">
        <div className="h-px w-16 bg-border" />
        <div className="w-2 h-2 rounded-full bg-gold" />
        <div className="h-px w-16 bg-border" />
      </motion.div>

      {/* Message */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Com grande alegria, convidamos você para celebrar conosco o dia mais especial de nossas vidas. 
          Sua presença tornará esse momento ainda mais memorável.
        </p>
      </motion.div>

      {/* Action buttons */}
      <motion.div variants={itemVariants} className="space-y-4">
        {/* Confirm presence */}
        <a 
          href="#confirmar" 
          className="block"
          aria-label="Confirmar presença"
        >
          <Button 
            className="w-full h-14 text-base tracking-wider"
          >
            <Heart className="w-5 h-5 mr-2" />
            Confirmar Presenca
          </Button>
        </a>

        {/* Location */}
        <a 
          href="#local" 
          className="block"
          aria-label="Ver local da cerimonia"
        >
          <Button 
            variant="outline"
            className="w-full h-14 text-base tracking-wider border-2 hover:bg-secondary"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Local da Cerimonia
            <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
          </Button>
        </a>

        {/* Gift list */}
        <a 
          href="#presentes" 
          className="block"
          aria-label="Ver lista de presentes"
        >
          <Button 
            variant="outline"
            className="w-full h-14 text-base tracking-wider border-2 hover:bg-secondary"
          >
            <Gift className="w-5 h-5 mr-2" />
            Lista de Presentes
            <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
          </Button>
        </a>
      </motion.div>

      {/* Gallery placeholder */}
      <motion.div variants={itemVariants} className="mt-16">
        <h2 className="font-serif text-2xl text-center text-foreground mb-6">Nossa Historia</h2>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="aspect-square rounded-lg bg-muted border border-border flex items-center justify-center"
            >
              <div className="text-center text-muted-foreground/50">
                <Heart className="w-6 h-6 mx-auto mb-1" />
                <span className="text-xs">Foto {i}</span>
              </div>
              {/* 
              Para adicionar suas fotos, descomente e substitua:
              <Image
                src={`/images/gallery-${i}.jpg`}
                alt={`Foto ${i}`}
                fill
                className="object-cover"
              />
              */}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer variants={itemVariants} className="mt-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px w-8 bg-primary/30" />
          <Heart className="w-4 h-4 text-gold fill-gold" />
          <div className="h-px w-8 bg-primary/30" />
        </div>
        <p className="font-serif text-lg text-muted-foreground">
          Ana & Lucas
        </p>
        <p className="text-sm text-muted-foreground/70 mt-1">
          18.07.2025
        </p>
      </motion.footer>
    </motion.div>
  )
}
