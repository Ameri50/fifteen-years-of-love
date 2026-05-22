import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";

export default function Index() {
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const colors = ["#f9c5d1", "#ffd6e0", "#f4b8c4", "#e8c07a", "#ffffff"];

    const fire = (opts: confetti.Options) =>
      confetti({
        origin: { y: 0.7 },
        colors,
        ...opts,
      });

    const t1 = setTimeout(() => {
      fire({
        particleCount: 80,
        spread: 70,
        startVelocity: 45,
      });

      fire({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
      });

      fire({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
      });
    }, 600);

    const t2 = setTimeout(() => {
      fire({
        particleCount: 120,
        spread: 100,
        scalar: 1.2,
      });
    }, 1600);

    const prev = document.documentElement.style.scrollBehavior;

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  const scrollToLetter = () => {
    letterRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts count={20} />

      <div className="relative z-10">
        <Hero onRead={scrollToLetter} />
        <Letter ref={letterRef} />
        <Gallery />
        <Footer />
      </div>
    </main>
  );
}
