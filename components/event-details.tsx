"use client"

import { MapPin, Calendar, Clock, ExternalLink } from "lucide-react"
import { EVENT, COLORS } from "@/lib/theme-config"
import { FloatingDots } from "./floating-dots"

export function EventDetails() {
  return (
    <section className="relative py-16 px-4 flex flex-col items-center gap-10">
      {/* ✨ Partículas */}
      <FloatingDots count={80} innerSafeArea={0.4} />

      {/* Section divider star */}
      <div className="flex items-center gap-4" aria-hidden="true">
        <div className="h-px w-16" style={{ backgroundImage: `linear-gradient(to right, transparent, ${COLORS.neonPurple})` }} />
        <svg width="16" height="16" viewBox="0 0 12 12" fill={COLORS.neonLilac}>
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
        </svg>
        <div className="h-px w-16" style={{ backgroundImage: `linear-gradient(to left, transparent, ${COLORS.neonPurple})` }} />
      </div>

      {/* Location */}
      <div className="text-center flex flex-col items-center gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(224,64,251,0.2))',
            border: '1px solid rgba(168,85,247,0.3)',
            boxShadow: '0 0 15px rgba(168,85,247,0.3)',
          }}
        >
          <MapPin className="w-6 h-6" style={{ color: COLORS.neonFuchsia }} />
        </div>
        <h3
          className="text-2xl md:text-3xl font-bold"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: COLORS.textHeading,
            textShadow: '0 0 10px rgba(168,85,247,0.4)',
          }}
        >
          Ubicacion
        </h3>
        <p className="text-base md:text-lg" style={{ color: COLORS.neonLilac }}>
          {EVENT.address}
        </p>
        <div style={{gap: "4px"}}>
          <p className="text-sm italic" style={{ color: 'rgba(167,139,250,0.7)' }}>
            {EVENT.location}
          </p>
          <p className="text-sm italic" style={{ color: 'rgba(167,139,250,0.7)' }}>
            {EVENT.locationNote}
          </p>
        </div>
        <a
          href={EVENT.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
          style={{
            color: COLORS.textHeading,
            background: 'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(224,64,251,0.25))',
            border: '1px solid rgba(168,85,247,0.4)',
            boxShadow: '0 0 15px rgba(168,85,247,0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 25px rgba(168,85,247,0.4), 0 0 50px rgba(224,64,251,0.2)'
            e.currentTarget.style.borderColor = 'rgba(224,64,251,0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 15px rgba(168,85,247,0.2)'
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'
          }}
        >
          <MapPin className="w-4 h-4" style={{ color: COLORS.neonFuchsia }} />
          Ver en Maps
          <ExternalLink className="w-3.5 h-3.5" style={{ color: COLORS.neonLilac }} />
        </a>
      </div>

      {/* Date & Time */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="text-center flex flex-col items-center gap-3">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(224,64,251,0.2))',
              border: '1px solid rgba(168,85,247,0.3)',
              boxShadow: '0 0 15px rgba(168,85,247,0.3)',
            }}
          >
            <Calendar className="w-6 h-6" style={{ color: COLORS.neonFuchsia }} />
          </div>
          <h3
            className="text-xl md:text-2xl font-bold"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: COLORS.textHeading,
              textShadow: '0 0 10px rgba(168,85,247,0.4)',
            }}
          >
            Fecha
          </h3>
          <p
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: COLORS.neonFuchsia,
              textShadow: '0 0 15px rgba(224,64,251,0.5)',
            }}
          >
            {EVENT.dateDisplay}
          </p>
          <p style={{ color: COLORS.neonLilac }}>{EVENT.year}</p>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px h-24" style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${COLORS.neonPurple}, transparent)` }} aria-hidden="true" />
        <div className="block md:hidden h-px w-24" style={{ backgroundImage: `linear-gradient(to right, transparent, ${COLORS.neonPurple}, transparent)` }} aria-hidden="true" />

        <div className="text-center flex flex-col items-center gap-3">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(224,64,251,0.2))',
              border: '1px solid rgba(168,85,247,0.3)',
              boxShadow: '0 0 15px rgba(168,85,247,0.3)',
            }}
          >
            <Clock className="w-6 h-6" style={{ color: COLORS.neonFuchsia }} />
          </div>
          <h3
            className="text-xl md:text-2xl font-bold"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: COLORS.textHeading,
              textShadow: '0 0 10px rgba(168,85,247,0.4)',
            }}
          >
            Hora
          </h3>
          <p
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: COLORS.neonFuchsia,
              textShadow: '0 0 15px rgba(224,64,251,0.5)',
            }}
          >
            {EVENT.timeDisplay}
          </p>
          <p style={{ color: COLORS.neonLilac }}>{EVENT.timezone} {EVENT.endTime}</p>
        </div>
      </div>
    </section>
  )
}
