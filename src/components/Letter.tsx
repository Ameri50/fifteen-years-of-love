import { motion } from "framer-motion";
import { forwardRef } from "react";

// Emotional letter section with glassmorphism + fade-in paragraphs.
const paragraphs: Array<Array<string | { highlight: string }>> = [
  [
    "Mi querida hermana, hoy cumples ",
    { highlight: "15 años" },
    " y no puedo dejar de pensar en lo afortunado que soy por tenerte en mi vida.",
  ],
  [
    "Desde que tengo memoria has sido mi compañera, mi cómplice y mi mejor amiga. Eres ",
    { highlight: "una de las personas más importantes" },
    " que la vida me ha regalado, y cada día encuentro una razón nueva para quererte más.",
  ],
  [
    "Quiero que sepas que ",
    { highlight: "vales muchísimo" },
    ". Tu sonrisa, tu nobleza y esa luz que llevas por dentro iluminan absolutamente todo lo que tocas. Cuando entras a una habitación, todo se siente más cálido, más bonito, más vivo.",
  ],
  [
    "Verte crecer ha sido uno de los regalos más bonitos de mi vida. Me llena de ",
    { highlight: "orgullo" },
    " ver en quién te estás convirtiendo: una mujer fuerte, sensible, inteligente y con un corazón inmenso.",
  ],
  [
    "Quiero que recuerdes siempre que ",
    { highlight: "no estás sola" },
    ". Pase lo que pase, en los días buenos y en los difíciles, aquí estaré yo. Para escucharte, para abrazarte, para reír contigo hasta que nos duela el estómago, y para defenderte de cualquier cosa que intente apagar tu brillo.",
  ],
  [
    "Tus ",
    { highlight: "15 años" },
    " son una etapa muy especial: el principio de tantas cosas hermosas. Vivirás amores, viajes, aventuras, sueños cumplidos y caídas que te harán más fuerte. Y yo voy a estar ahí, en primera fila, aplaudiéndote en cada paso.",
  ],
  [
    "Mereces ",
    { highlight: "lo mejor del mundo" },
    ", hermanita. Mereces todo el amor, toda la calma y toda la felicidad que el universo pueda darte. Y si alguna vez dudas de cuánto vales, vuelve a leer esta carta y recuérdalo.",
  ],
  [
    "Gracias por ser tú. Gracias por tu risa, por tus locuras, por los abrazos y por enseñarme cada día lo bonito que es querer sin condiciones.",
  ],
  [
    { highlight: "Feliz cumpleaños, mi vida." },
    " Que estos 15 sean solo el comienzo de la vida más maravillosa.",
  ],
];

const Letter = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-10 text-center"
        >
          <p className="font-script text-2xl text-[color:var(--gold-deep)]">una carta para ti</p>
          <h2 className="font-display mt-2 text-5xl font-bold md:text-6xl">
            <span className="text-gradient-rose">Desde mi corazón</span>
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-14"
        >
          <div className="font-display text-lg leading-relaxed text-[color:var(--foreground)] md:text-xl md:leading-[1.9]">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="mb-6 last:mb-0"
              >
                {para.map((chunk, j) =>
                  typeof chunk === "string" ? (
                    <span key={j}>{chunk}</span>
                  ) : (
                    <span
                      key={j}
                      className="font-semibold text-[color:var(--rose)]"
                      style={{ textShadow: "0 0 20px oklch(0.85 0.12 10 / 0.4)" }}
                    >
                      {chunk.highlight}
                    </span>
                  ),
                )}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-script mt-10 text-right text-3xl text-[color:var(--gold-deep)]"
            >
              Con todo mi amor 💕
            </motion.p>
          </div>
        </motion.article>
      </div>
    </section>
  );
});
Letter.displayName = "Letter";
export default Letter;