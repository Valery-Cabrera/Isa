"use client"

import { Send } from "lucide-react"
import { WHATSAPP, COLORS, INVITATION_TEXT } from "@/lib/theme-config"
import { FloatingDots } from "./floating-dots"

export function RSVPSection() {
  const handleConfirm = () => {
    const message = encodeURIComponent(WHATSAPP.message)
    window.open(`https://wa.me/${WHATSAPP.number}?text=${message}`, "_blank")
  }

  return (
    <section className="relative py-16 px-4 flex flex-col items-center gap-8 pb-24">
      {/* ✨ Partículas */}
      <FloatingDots count={10} innerSafeArea={0.4} />
      
      {/* Divider */}
      <div className="flex items-center gap-4" aria-hidden="true">
        <div className="h-px w-16" style={{ backgroundImage: `linear-gradient(to right, transparent, ${COLORS.neonPurple})` }} />
        <svg width="16" height="16" viewBox="0 0 12 12" fill={COLORS.neonLilac}>
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
        </svg>
        <div className="h-px w-16" style={{ backgroundImage: `linear-gradient(to left, transparent, ${COLORS.neonPurple})` }} />
      </div>

      <div className="text-center">
        <p className="text-xs tracking-[0.5em] uppercase mb-2" style={{ color: COLORS.neonLilac }}>Te esperamos</p>
        <h3
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: COLORS.textHeading,
            textShadow: '0 0 10px rgba(168,85,247,0.4)',
          }}
        >
          Confirmar Asistencia
        </h3>
      </div>

      <button
        onClick={handleConfirm}
        className="py-3.5 px-10 rounded-full font-semibold text-lg tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer"
        style={{
          color: '#ffffff',
          background: `linear-gradient(135deg, ${COLORS.neonPurple}, ${COLORS.neonFuchsia})`,
          boxShadow: '0 0 20px rgba(168,85,247,0.4), 0 0 40px rgba(224,64,251,0.2)',
        }}
      >
        <Send className="w-5 h-5" />
        Confirmar por WhatsApp
      </button>

      {/* Footer text */}
      <p
        className="text-xs text-center mt-8"
        style={{ fontFamily: 'var(--font-playfair)', color: 'rgba(167,139,250,0.5)' }}
      >
        {INVITATION_TEXT.footer}
      </p>
    </section>
  )
}
