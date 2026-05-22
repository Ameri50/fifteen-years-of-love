import { motion } from "framer-motion";
import { useState } from "react";

// Build 20 photo slots; first uses the special user-provided image.
const photos = Array.from({ length: 20 }).map((_, i) => ({
  src: i === 0 ? "/images/IMG_8226.jpeg" : `/images/foto${i + 1}.jpg`,
  caption: i === 0 ? "Mi foto favorita 💖" : `Recuerdo ${i + 1}`,
}));

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-14 text-center"
        >
          <p className="font-script text-2xl text-[color:var(--gold-deep)]">momentos juntos</p>
          <h2 className="font-display mt-2 text-5xl font-bold md:text-6xl">
            <span className="text-gradient-rose">Nuestros Recuerdos</span>{" "}
            <span>📸</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {photos.map((p, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 8) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-[color:var(--rose-soft)]"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                onError={(e) => {
                  // Graceful fallback for missing placeholder photos.
                  const t = e.currentTarget;
                  t.style.display = "none";
                  t.parentElement?.classList.add("missing");
                }}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Fallback content visible when img fails */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-5xl opacity-0 [.missing_&]:opacity-100">
                💝
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-sm font-medium md:text-base">{p.caption}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={photos[open].src}
            alt={photos[open].caption}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
}