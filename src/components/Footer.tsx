import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass mx-auto max-w-2xl rounded-3xl p-10 md:p-14"
      >
        <div className="text-5xl">💖</div>
        <p className="font-display mt-6 text-2xl italic leading-relaxed md:text-3xl">
          Eres mi persona favorita en el mundo entero.
          <br />
          Que la vida te regale todo lo que tu corazón sueñe.
        </p>
        <p className="font-script mt-8 text-3xl text-[color:var(--gold-deep)] md:text-4xl">
          Con muchísimo cariño 💕
        </p>
        <p className="font-display mt-4 text-base text-[color:var(--muted-foreground)]">
          — Tu hermano, que te ama infinito.
        </p>
      </motion.div>

      <p className="mt-12 text-xs uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
        Hecho con amor · {new Date().getFullYear()}
      </p>
    </footer>
  );
}