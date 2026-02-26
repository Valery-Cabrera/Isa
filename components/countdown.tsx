"use client"

import { useEffect, useState } from "react"
import { EVENT, COLORS } from "@/lib/theme-config"
import { FloatingDots } from "./floating-dots"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const EVENT_DATE = new Date(EVENT.dateUTC)

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculate = () => {
      const now = new Date()
      const diff = EVENT_DATE.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const blocks: { label: string; value: number }[] = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ]

  return (
    <section className="relative py-20 px-4 flex flex-col items-center gap-8">
      {/* ✨ Partículas */}
      <FloatingDots count={30} innerSafeArea={0.4} />

      {/* Background bokeh */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 60 + Math.random() * 160,
              height: 60 + Math.random() * 160,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 4 === 0
                ? `radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)`
                : i % 4 === 1
                  ? `radial-gradient(circle, rgba(224,64,251,0.2) 0%, transparent 70%)`
                  : i % 4 === 2
                    ? `radial-gradient(circle, rgba(192,132,252,0.3) 0%, transparent 70%)`
                    : `radial-gradient(circle, rgba(216,180,254,0.15) 0%, transparent 70%)`,
              animation: `bokeh-float ${8 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="text-center">
        <p className="text-xs tracking-[0.5em] uppercase mb-2" style={{ color: COLORS.neonLilac }}>Cuenta Regresiva</p>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: COLORS.textHeading,
            textShadow: '0 0 15px rgba(168,85,247,0.5)',
          }}
        >
          El gran estreno
        </h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {blocks.map((block, i) => (
          <div key={block.label} className="flex items-center gap-3 md:gap-6">
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-20 md:w-24 md:h-28 rounded-xl flex items-center justify-center neon-glow-box"
                style={{
                  background: `linear-gradient(180deg, ${COLORS.bgSecondary}E6 0%, ${COLORS.bgDeep}F2 100%)`,
                  border: '1px solid rgba(168,85,247,0.3)',
                }}
              >
                <span
                  className="text-3xl md:text-5xl font-bold"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    color: COLORS.neonFuchsia,
                    textShadow: '0 0 15px rgba(224,64,251,0.6)',
                  }}
                >
                  {String(block.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm mt-2 tracking-wider uppercase" style={{ color: COLORS.neonLilac }}>
                {block.label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <span
                className="text-2xl md:text-3xl font-bold mt-[-20px]"
                style={{ color: COLORS.neonPurple, textShadow: '0 0 10px rgba(168,85,247,0.6)' }}
                aria-hidden="true"
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
