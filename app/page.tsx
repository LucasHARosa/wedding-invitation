"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Envelope } from "@/components/envelope"
import { Invitation } from "@/components/invitation"

export default function WeddingInvite() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            exit={{
              opacity: 0,
              scale: 1.5,
              rotateX: 180,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="min-h-screen flex items-center justify-center p-6"
          >
            <Envelope onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="min-h-screen"
          >
            <Invitation />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
