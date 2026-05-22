import { useMemo } from "react";

// Floating hearts that drift up across the whole page.
export default function FloatingHearts({ count = 18 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        size: 12 + Math.random() * 22,
        opacity: 0.35 + Math.random() * 0.5,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-[color:var(--rose)]"
          style={{
            left: `${h.left}%`,
            bottom: "-10vh",
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `floatHeart ${h.duration}s linear ${h.delay}s infinite`,
            filter: "drop-shadow(0 4px 12px oklch(0.85 0.12 10 / 0.4))",
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}