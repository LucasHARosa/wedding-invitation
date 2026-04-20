"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── Section 1: Main Invite ───────────────────────────────────────────────────

export function SectionMainInvite() {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden md:py-16 py-3 md:px-6 px-0 bg-[oklch(0.97_0.01_90)]">
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-4/3 @container">
          <Image
            src="/imagens/2 (1).png"
            alt="Convite de casamento Ana e Lucas"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 96vw, (max-width: 1024px) 50rem, 56rem"
          />

          {/* Texto sobre o frame decorativo — lado direito da imagem */}
          <div className="absolute right-[8%] top-[10%] w-[44%] h-[80%] overflow-hidden flex flex-col items-center justify-center text-center gap-0.5">
            <p className="font-serif text-[8.5cqw] text-[oklch(0.18_0.06_140)] leading-tight">
              Ana
            </p>
            <p className="font-serif text-[5cqw] text-[oklch(0.30_0.07_140)] leading-none">
              &amp;
            </p>
            <p className="font-serif text-[8.5cqw] text-[oklch(0.18_0.06_140)] leading-tight">
              Lucas
            </p>
            <p className="font-serif text-[3cqw] text-[oklch(0.30_0.07_140)] mt-[1cqw] tracking-wide">
              18 de julho
            </p>
            <p className="font-serif text-[3cqw] text-[oklch(0.30_0.07_140)]">
              Horário:
            </p>
            <p className="font-serif text-[7.5cqw] font-semibold text-[oklch(0.18_0.06_140)]">
              15h
            </p>
          </div>

          {/* Texto sobre o círculo escuro da imagem */}
          <div className="absolute left-[20%] top-[50%] w-[34%] aspect-square flex flex-col items-center justify-center text-center px-[3cqw]">
            <p className="font-serif text-white text-[4cqw] leading-snug mb-[1cqw]">
              Confirme a<br />
              sua presença
            </p>
            <a
              href="https://noivos.casar.com/ana-e-lucas-2026-07-18#/rsvp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-white font-bold underline underline-offset-2 text-[2.8cqw] hover:opacity-75 transition-opacity"
            >
              clique aqui
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section 2: Venue + Gifts ─────────────────────────────────────────────────

export function SectionVenueGifts() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden md:py-16 py-3 md:px-6 px-4">
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-4/3 @container">
          <Image
            src="/imagens/3 (1).png"
            alt="Local da cerimônia e lista de presentes"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 96vw, (max-width: 1024px) 50rem, 56rem"
          />

          {/* Texto superior esquerdo */}
          <div className="absolute left-[3%] top-[15%] w-[38%] flex flex-col text-left gap-[0.5cqw]">
            <p className="font-serif text-[3.5cqw] text-[oklch(0.18_0.06_140)] leading-snug">
              Sobre o Local da
              <br />
              cerimônia,{" "}
              <a
                href="https://www.google.com/search?sca_esv=636b6b880a1328ed&rlz=1C1VDKB_pt-PTBR1082BR1082&sxsrf=ANbL-n5UVR-pqzP-RshA6nrz1DfgDWet6Q:1776305496283&kgmid=/g/11gnr_jvpn&q=Maison+Daniela&shem=dlvsc,epsd1&shndl=30&source=sh/x/loc/uni/m1/1&kgs=f3d95e9836051585&utm_source=dlvsc,epsd1,sh/x/loc/uni/m1/1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-2 hover:opacity-75 transition-opacity"
              >
                clique aqui
              </a>
            </p>
          </div>

          {/* Texto sobre o frame diamante — lado direito */}
          <div className="absolute right-[3%] top-[17%] w-[44%] h-[80%] overflow-hidden flex flex-col items-center justify-center text-center gap-0">
            <p className="font-serif text-[6cqw] text-[oklch(0.18_0.06_140)] leading-tight">
              Lista de
              <br />
              Presentes
            </p>
            <a
              href="https://noivos.casar.com/ana-e-lucas-2026-07-18#/presentes"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-[3cqw] text-[oklch(0.18_0.06_140)] font-bold underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              clique aqui
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section 3: Gallery ───────────────────────────────────────────────────────

export function SectionGallery() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden md:py-16 py-3 md:px-6 px-0 bg-[oklch(0.97_0.01_90)]">
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-4/3 @container">
          <Image
            src="/imagens/4 (1).png"
            alt="Nossa história"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 96vw, (max-width: 1024px) 50rem, 56rem"
          />
        </div>
      </motion.div>
    </section>
  );
}
