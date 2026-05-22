import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Cinematic fullscreen hero with parallax + glowing CTA.
export default function Hero({ onRead }: { onRead: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Soft glowing orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--rose-soft)] blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[color:var(--gold)] blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[color:var(--rose)] blur-3xl opacity-30" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-script text-3xl text-[color:var(--gold-deep)] md:text-4xl"
        >
          Hoy es tu día...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="font-display mt-4 text-6xl font-bold leading-[1.05] tracking-tight md:text-8xl lg:text-9xl"
        >
          <span className="text-gradient-rose">Feliz 15 Años</span>
          <span className="ml-3 inline-block animate-pulse">💖</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-display mx-auto mt-6 max-w-2xl text-xl italic text-[color:var(--muted-foreground)] md:text-2xl"
        >
          Para la mejor hermana del mundo
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRead}
          className="font-display group relative mt-12 inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-medium tracking-wide text-white"
          style={{
            background: "var(--gradient-rose)",
            boxShadow: "var(--shadow-glow)",
            animation: "pulseGlow 3s ease-in-out infinite",
          }}
        >
          <span>Leer Carta</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[color:var(--rose)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}