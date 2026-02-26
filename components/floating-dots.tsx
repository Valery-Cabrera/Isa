import { useMemo } from "react";

interface Dot {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

interface FloatingDotsProps {
  count?: number;
  innerSafeArea?: number; // 0 a 1 (porcentaje del centro limpio)
}

export function FloatingDots({
  count = 80,
  innerSafeArea = 0.45,
}: FloatingDotsProps) {
  const dots = useMemo<Dot[]>(() => {
    const generated: Dot[] = [];

    for (let i = 0; i < count; i++) {
      let x = 0;
      let y = 0;

      // Generar puntos fuera del área segura central
      do {
        x = Math.random();
        y = Math.random();
      } while (
        x > innerSafeArea &&
        x < 1 - innerSafeArea &&
        y > innerSafeArea &&
        y < 1 - innerSafeArea
      );

      generated.push({
        id: i,
        size: Math.random() * 5 + 2,
        x,
        y,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 4,
      });
    }

    return generated;
  }, [count, innerSafeArea]);

  return (
    <>
      <div className="border-dots-container">
        {dots.map((dot) => (
          <span
            key={dot.id}
            className="border-dot"
            style={{
              width: dot.size,
              height: dot.size,
              left: `${dot.x * 100}%`,
              top: `${dot.y * 100}%`,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        .border-dots-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .border-dot {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #c4a1ff 0%, #9f67ff 50%, transparent 80%);
          opacity: 0;
          animation: fadeFloat ease-in-out infinite;
          filter: blur(1px);
        }

        @keyframes fadeFloat {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          70% {
            opacity: 0.6;
          }
          100% {
            transform: translate(10px, -20px) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}