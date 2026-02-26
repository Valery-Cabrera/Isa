"use client"

import Image from "next/image"
import { COLORS, EVENT, INVITATION_TEXT } from "@/lib/theme-config"
import { FloatingDots } from "./floating-dots"

interface HeroInvitationProps {
  guestNames: string[]
}

export function HeroInvitation({ guestNames }: HeroInvitationProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background bokeh */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
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
        {/* Extra lilac dots */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? COLORS.neonLilac : COLORS.textSubtle,
              opacity: 0.3 + Math.random() * 0.4,
              animation: `sparkle ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 max-w-lg w-full">
        <div className="relative z-10 flex flex-col items-center gap-5 max-w-lg w-full">
          {/* "14 capitulos despues..." */}
          <div className="text-center reveal-animation" style={{ animationDelay: "0.1s" }}>
            <p
              className="text-sm md:text-base tracking-[0.3em] uppercase"
              style={{ fontFamily: 'var(--font-playfair)', color: COLORS.neonLilac }}
            >
              {INVITATION_TEXT.preTitle}
            </p>
          </div>

          {/* Paragraph text */}
          <div className="text-center reveal-animation" style={{ animationDelay: "0.3s" }}>
            <p
              className="max-w-sm mx-auto"
              style={{
                fontFamily: 'Great Vibes, cursive',
                fontSize: '20px',
                color: COLORS.textSubtle,
                lineHeight: "1.4",
              }}
            >
              {INVITATION_TEXT.poem.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* la historia tiene un nuevo ritmo */}
          <div className="text-center reveal-animation" style={{ animationDelay: "0.4s" }}>
            <p
              className="text-sm md:text-base tracking-wider"
              style={{ fontFamily: 'var(--font-playfair)', color: COLORS.neonLilac }}
            >
              {INVITATION_TEXT.rhythm}
            </p>
          </div>
        </div>

        {/* Decorative star divider */}
        <div className="flex items-center gap-3" aria-hidden="true">
          <div className="h-px w-10 bg-gradient-to-r from-transparent" style={{ borderColor: COLORS.neonLilac, backgroundImage: `linear-gradient(to right, transparent, ${COLORS.neonLilac})` }} />
          <svg width="10" height="10" viewBox="0 0 12 12" fill={COLORS.textSubtle}>
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
          </svg>
          <div className="h-px w-10" style={{ backgroundImage: `linear-gradient(to left, transparent, ${COLORS.neonLilac})` }} />
        </div>

        {/* Invitacion estreno */}
        <div className="text-center reveal-animation" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-2" style={{ fontFamily: 'var(--font-playfair)', color: COLORS.textMuted }}>
            {INVITATION_TEXT.premiere}
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold neon-text leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', color: COLORS.textHeading }}
          >
            {INVITATION_TEXT.season}
          </h1>
          <span
            className="text-7xl md:text-9xl font-bold block mt-[-8px]"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: COLORS.neonFuchsia,
              textShadow: `0 0 30px rgba(224,64,251,0.7), 0 0 60px rgba(168,85,247,0.5)`,
            }}
          >
            {INVITATION_TEXT.number}
          </span>
        </div>

        {/* Main photo */}
        <div
          className="relative w-64 md:w-80 rounded-2xl overflow-visible reveal-animation"
          style={{
            animationDelay: "0.6s",
            boxShadow: `
              0 20px 40px -10px rgba(224,64,251,0.4),
              0 40px 80px -20px rgba(168,85,247,0.3),
              0 60px 120px -30px rgba(192,132,252,0.2)
            `,
          }}
        >
          <Image
            src="/images/isa-sin-fondo.png"
            alt="Isabella - Quinceañera"
            width={400}
            height={600}
            className="w-full h-auto object-top rounded-2xl"
            priority
          />

          {/* 🎨 Desgaste translúcido abajo */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none rounded-2xl"
            style={{
              background: `linear-gradient(to top, ${COLORS.bgDeep}E6 0%, transparent 100%)`,
              zIndex: 1,
              borderRadius: "15%"
            }}
            aria-hidden="true"
          />

          {/* ✨ Partículas */}
          <FloatingDots count={150} innerSafeArea={0.1} />
        </div>

        {/* Protagonizada por / Isabella */}
        <div className="text-center reveal-animation" style={{ animationDelay: "0.8s", marginTop: "25px" }}>
          <p className="text-xs md:text-sm tracking-[0.5em] uppercase mb-4" style={{ fontFamily: 'var(--font-playfair)', color: COLORS.textMuted }}>
            {INVITATION_TEXT.starringLabel}
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-script)',
              color: COLORS.neonFuchsia,
              textShadow: `0 0 20px rgba(224,64,251,0.6), 0 0 40px rgba(168,85,247,0.4)`,
              fontSize: 'clamp(2.2rem, 8vw, 3.5rem)',
            }}
          >
            {EVENT.name}
          </h2>
        </div>

        {/* Decorative star divider */}
        <div className="flex items-center gap-3" aria-hidden="true">
          <div className="h-px w-12" style={{ backgroundImage: `linear-gradient(to right, transparent, ${COLORS.neonLilac})` }} />
          <svg width="8" height="8" viewBox="0 0 12 12" fill={COLORS.neonLilac}>
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
          </svg>
          <div className="h-px w-12" style={{ backgroundImage: `linear-gradient(to left, transparent, ${COLORS.neonLilac})` }} />
        </div>

        {/* Producida y dirigida por */}
        <div className="text-center reveal-animation" style={{ animationDelay: "0.9s" }}>
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-playfair)', color: COLORS.textMuted }}>
            {INVITATION_TEXT.producerLabel}
          </p>
          <p
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: 'var(--font-script)',
              color: COLORS.textSubtle,
              textShadow: '0 0 10px rgba(192,132,252,0.5)',
              fontSize: '29px',
            }}
          >
            {EVENT.producer}
          </p>
        </div>

        {/* Decorative star divider */}
        <div className="flex items-center gap-3" aria-hidden="true">
          <div className="h-px w-12" style={{ backgroundImage: `linear-gradient(to right, transparent, ${COLORS.neonLilac})` }} />
          <svg width="8" height="8" viewBox="0 0 12 12" fill={COLORS.textSubtle}>
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
          </svg>
          <div className="h-px w-12" style={{ backgroundImage: `linear-gradient(to left, transparent, ${COLORS.neonLilac})` }} />
        </div>

        {/* Con la participacion especial de: */}
        <div className="text-center reveal-animation" style={{ animationDelay: "1s" }}>
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase mb-3" style={{ fontFamily: 'var(--font-playfair)', color: COLORS.textMuted }}>
            {INVITATION_TEXT.guestsLabel}
          </p>
          <div className="flex flex-col items-center gap-1">
            {guestNames.map((guestName, index) => (
              <p
                key={index}
                className="text-xl md:text-2xl font-bold"
                style={{
                  fontFamily: 'var(--font-script)',
                  color: COLORS.textHeading,
                  textShadow: '0 0 10px rgba(192,132,252,0.5)',
                  fontSize: '23px',
                }}
              >
                {guestName}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom decorative message */}
        <div className="text-center reveal-animation" style={{ animationDelay: "0.3s" }}>
          <p
            className="max-w-sm mx-auto"
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '20px',
              color: COLORS.textSubtle,
              lineHeight: "1.4",
            }}
          >
            {INVITATION_TEXT.closingLine1}
            <br />
            {INVITATION_TEXT.closingLine2}
          </p>
        </div>
      </div>
    </section>
  )
}
