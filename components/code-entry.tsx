"use client"

import { useState, type FormEvent } from "react"
import { findGuest } from "@/lib/guest-list"
import { COLORS } from "@/lib/theme-config"

interface CodeEntryProps {
  onUnlock: (guestNames: string[]) => void
}

export function CodeEntry({ onUnlock }: CodeEntryProps) {
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      triggerError("Por favor ingresa tu nombre")
      return
    }

    const guest = findGuest(trimmed)
    if (guest) {
      onUnlock(guest.displayNames)
    } else {
      triggerError("Nombre no encontrado. Por favor verifica e intenta de nuevo.")
    }
  }

  const triggerError = (msg: string) => {
    setError(true)
    setErrorMessage(msg)
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Bokeh background circles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 40 + Math.random() * 120,
              height: 40 + Math.random() * 120,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0
                ? "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)"
                : i % 3 === 1
                  ? "radial-gradient(circle, rgba(224,64,251,0.15) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(192,132,252,0.25) 0%, transparent 70%)",
              animation: `bokeh-float ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-md w-full">
        {/* Crown / Star decorative element */}
        <div className="relative">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto" aria-hidden="true">
            <path d="M30 5L35 20H50L38 30L42 45L30 35L18 45L22 30L10 20H25L30 5Z"
              fill="none" stroke={COLORS.neonLilac} strokeWidth="1.5"
              style={{ filter: `drop-shadow(0 0 8px rgba(192,132,252,0.8))` }} />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-sm tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-playfair)', color: COLORS.neonLilac }}>
            Estreno Oficial
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold neon-text mb-2"
            style={{ fontFamily: 'var(--font-playfair)', color: COLORS.textHeading }}
          >
            Temporada
          </h1>
          <span
            className="text-7xl md:text-9xl font-bold block"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: COLORS.neonFuchsia,
              textShadow: '0 0 20px rgba(224,64,251,0.6), 0 0 40px rgba(168,85,247,0.4)',
            }}
          >
            15
          </span>
        </div>

        <p className="text-lg text-center" style={{ fontFamily: 'Great Vibes, cursive', color: COLORS.textSubtle, fontSize: '20px' }}>
          Ingresa tu nombre para ver la invitacion
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          <div className={`w-full max-w-xs ${isShaking ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setError(false)
              }}
              placeholder="Tu nombre..."
              className="w-full px-6 py-4 rounded-full text-center text-lg placeholder:opacity-50 focus:outline-none focus:ring-2 transition-all duration-300"
              style={{
                backgroundColor: `${COLORS.bgSecondary}CC`,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(168,85,247,0.4)',
                color: COLORS.textLight,
                boxShadow: '0 0 15px rgba(168,85,247,0.2), inset 0 0 15px rgba(168,85,247,0.05)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = COLORS.neonFuchsia
                e.currentTarget.style.boxShadow = `0 0 20px rgba(224,64,251,0.3), inset 0 0 15px rgba(168,85,247,0.05)`
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'
                e.currentTarget.style.boxShadow = '0 0 15px rgba(168,85,247,0.2), inset 0 0 15px rgba(168,85,247,0.05)'
              }}
              aria-label="Ingresa tu nombre"
            />
            {error && (
              <p className="text-sm text-center mt-2" style={{ color: COLORS.neonFuchsia }}>
                {errorMessage}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="px-10 py-3 rounded-full font-semibold text-lg tracking-wider uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              color: '#ffffff',
              background: `linear-gradient(135deg, ${COLORS.neonPurple}, ${COLORS.neonFuchsia})`,
              boxShadow: '0 0 20px rgba(168,85,247,0.4), 0 0 40px rgba(224,64,251,0.2)',
            }}
          >
            Entrar
          </button>
        </form>

        {/* Decorative line */}
        <div className="flex items-center gap-3 mt-4" aria-hidden="true">
          <div className="h-px w-16" style={{ backgroundImage: `linear-gradient(to right, transparent, ${COLORS.neonPurple})` }} />
          <svg width="12" height="12" viewBox="0 0 12 12" fill={COLORS.neonLilac}>
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
          </svg>
          <div className="h-px w-16" style={{ backgroundImage: `linear-gradient(to left, transparent, ${COLORS.neonPurple})` }} />
        </div>
      </div>
    </div>
  )
}
