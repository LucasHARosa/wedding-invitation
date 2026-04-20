"use client";

import { Envelope } from "@/components/envelope";
import {
  SectionGallery,
  SectionMainInvite,
  SectionVenueGifts,
} from "@/components/invitation";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

export default function WeddingInvite() {
  const [isOpen, setIsOpen] = useState(false);
  const invitationRef = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }, 800);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className=" flex items-center justify-center relative overflow-hidden">
        <Envelope isOpen={isOpen} onOpen={handleOpen} />
      </section>

      {isOpen && (
        <motion.div
          ref={invitationRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SectionMainInvite />
          <SectionVenueGifts />
          <SectionGallery />
        </motion.div>
      )}
    </main>
  );
}
