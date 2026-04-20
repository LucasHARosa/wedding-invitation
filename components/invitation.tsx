"use client";

import { Plant } from "@/components/plant";
import { motion } from "framer-motion";
import Image from "next/image";

// ─── Section 1: Main Invite ───────────────────────────────────────────────────

const polaroids = [
  {
    src: "/imagens/8.png",
    rotate: "-rotate-4",
    caption: "A ♡ L",
    zIndex: "z-10",
  },
  { src: "/imagens/19.png", rotate: "rotate-8", caption: "", zIndex: "z-20" },
];

const galleryVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const polaroidVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function SectionMainInvite() {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible  py-20 px-6">
      {/* Plant decorations */}
      <Plant
        src="/imagens/1.png"
        width={180}
        height={220}
        className="absolute -left-8 top-8 pointer-events-none select-none"
        floatDuration={4.5}
        floatDelay={0.6}
        swayAmount={5}
      />
      <Plant
        src="/imagens/3.png"
        width={160}
        height={200}
        className="absolute right-0 top-4 pointer-events-none select-none"
        floatDuration={3.9}
        floatDelay={1.1}
        swayAmount={4}
      />
      <Plant
        src="/imagens/20.png"
        width={140}
        height={180}
        className="absolute left-4 bottom-8 pointer-events-none select-none"
        floatDuration={5.1}
        floatDelay={0.3}
        swayAmount={3}
      />

      <motion.div
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left — Polaroid stack + CTA */}
        <div className="flex flex-col items-center gap-8">
          <motion.div
            className="relative flex flex-col gap-4 items-center w-full max-w-xs"
            variants={galleryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {polaroids.map((p, i) => (
              <motion.div
                key={i}
                variants={polaroidVariants}
                className={`bg-white p-2 pb-8 shadow-md ${p.rotate} ${p.zIndex} w-56 md:w-64`}
                style={{ marginTop: i > 0 ? "1rem" : 0 }}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.src}
                    alt={`Foto ${i + 1} do casal`}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
                {p.caption && (
                  <p className="text-center mt-2 font-serif italic text-sm text-gray-500">
                    {p.caption}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.a
            href="#confirmar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[oklch(0.22_0.06_140)] text-white font-serif text-lg tracking-wider px-10 py-4 rounded-full shadow-lg hover:brightness-110 transition-all text-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Confirme a sua presença
            <br />
            <span className="underline text-sm font-sans font-light tracking-widest">
              clique aqui
            </span>
          </motion.a>
        </div>

        {/* Right — Vintage label frame */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="border-4 border-[oklch(0.35_0.08_140)] p-1.5 max-w-xs w-full">
            <div className="border border-[oklch(0.35_0.08_140)] px-8 py-10 text-center flex flex-col gap-3 bg-[oklch(0.97_0.01_90)]">
              <p className="text-xs tracking-[0.3em] uppercase text-[oklch(0.45_0.07_140)]">
                Você é nosso convidado
              </p>
              <div className="h-px bg-[oklch(0.35_0.08_140)]/30 mx-4" />
              <h1 className="font-serif text-5xl font-light text-[oklch(0.22_0.06_140)] leading-tight">
                Ana
                <br />
                <span className="text-3xl">&amp;</span>
                <br />
                Lucas
              </h1>
              <div className="h-px bg-[oklch(0.35_0.08_140)]/30 mx-4" />
              <p className="font-serif text-2xl text-[oklch(0.30_0.07_140)]">
                18 de julho
              </p>
              <p className="text-sm tracking-widest text-[oklch(0.40_0.06_140)]">
                Horário: <span className="font-serif text-2xl">15h</span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Section 2: Venue + Gifts ─────────────────────────────────────────────────

export function SectionVenueGifts() {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible bg-[oklch(0.94_0.02_90)] py-20 px-6">
      {/* Plant decorations */}
      <Plant
        src="/imagens/10.png"
        width={160}
        height={200}
        className="absolute -left-6 top-12 pointer-events-none select-none"
        floatDuration={4.0}
        floatDelay={0}
        swayAmount={4}
      />
      <Plant
        src="/imagens/12.png"
        width={150}
        height={190}
        className="absolute -right-4 bottom-16 pointer-events-none select-none"
        floatDuration={3.5}
        floatDelay={1.5}
        swayAmount={5}
      />
      <Plant
        src="/imagens/21.png"
        width={120}
        height={150}
        className="absolute right-16 top-8 pointer-events-none select-none"
        floatDuration={5.0}
        floatDelay={0.5}
        swayAmount={3}
      />

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Venue */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-serif text-2xl text-[oklch(0.30_0.07_140)]">
            Sobre o Local da cerimônia,{" "}
            <a
              href="#local"
              className="font-bold underline underline-offset-4 hover:text-[oklch(0.22_0.06_140)] transition-colors"
            >
              clique aqui
            </a>
          </p>
          <div className="relative w-full aspect-4/3 shadow-lg rounded-sm overflow-hidden">
            <Image
              src="/imagens/3 (1).png"
              alt="Local da cerimônia"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Right — Diamond gift frame */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rotate-45 border-2 border-[oklch(0.35_0.08_140)] flex items-center justify-center relative bg-[oklch(0.97_0.01_90)]">
            {/* Corner ornaments */}
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[oklch(0.35_0.08_140)] text-xs">
              ✦
            </span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[oklch(0.35_0.08_140)] text-xs">
              ✦
            </span>
            <span className="absolute top-1/2 -left-2 -translate-y-1/2 text-[oklch(0.35_0.08_140)] text-xs">
              ✦
            </span>
            <span className="absolute top-1/2 -right-2 -translate-y-1/2 text-[oklch(0.35_0.08_140)] text-xs">
              ✦
            </span>
            <div className="-rotate-45 flex flex-col items-center justify-center text-center gap-2 p-6">
              <p className="font-serif text-2xl md:text-3xl text-[oklch(0.22_0.06_140)] leading-tight">
                Lista de
                <br />
                Presentes
              </p>
              <a
                href="#presentes"
                className="font-bold underline underline-offset-4 text-sm tracking-wider text-[oklch(0.35_0.08_140)] hover:text-[oklch(0.22_0.06_140)] transition-colors"
              >
                clique aqui
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 3: Gallery ───────────────────────────────────────────────────────

const galleryPhotos = [
  { src: "/imagens/8.png", rotate: "-3deg", caption: "Ana & Lucas" },
  { src: "/imagens/18.png", rotate: "1.5deg", caption: "" },
  { src: "/imagens/19.png", rotate: "-1deg", caption: "" },
];

const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const galleryItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function SectionGallery() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-visible bg-[oklch(0.25_0.06_140)] py-20 px-6">
      {/* Plant decorations */}
      <Plant
        src="/imagens/9.png"
        width={180}
        height={220}
        className="absolute -left-8 top-16 pointer-events-none select-none"
        floatDuration={4.3}
        floatDelay={0.2}
        swayAmount={5}
      />
      <Plant
        src="/imagens/16.png"
        width={160}
        height={200}
        className="absolute -right-6 bottom-16 pointer-events-none select-none"
        floatDuration={3.7}
        floatDelay={0.9}
        swayAmount={4}
      />

      <motion.h2
        className="font-serif text-4xl md:text-5xl text-[oklch(0.95_0.01_90)] mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Nossa História
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-6 max-w-4xl"
        variants={galleryContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {galleryPhotos.map((photo, i) => (
          <motion.div
            key={i}
            variants={galleryItemVariants}
            style={{ rotate: photo.rotate }}
            className="bg-white p-3 pb-10 shadow-xl w-56 md:w-64 shrink-0"
            whileHover={{ scale: 1.06, rotate: "0deg", zIndex: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={photo.src}
                alt={`Nossa história — foto ${i + 1}`}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
            {photo.caption && (
              <p className="text-center mt-3 font-serif italic text-sm text-gray-500">
                {photo.caption}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="font-serif text-[oklch(0.75_0.03_90)] text-lg mt-14 tracking-widest"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        18.07.2025
      </motion.p>
    </section>
  );
}
