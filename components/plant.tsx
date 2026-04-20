"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PlantProps {
  src: string
  width: number
  height: number
  className: string
  floatDuration?: number
  floatDelay?: number
  swayAmount?: number
}

export function Plant({
  src,
  width,
  height,
  className,
  floatDuration = 4,
  floatDelay = 0,
  swayAmount = 4,
}: PlantProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -12, 0],
        rotate: [-swayAmount / 2, swayAmount / 2, -swayAmount / 2],
      }}
      transition={{
        duration: floatDuration,
        delay: floatDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="object-contain"
        aria-hidden="true"
      />
    </motion.div>
  )
}
