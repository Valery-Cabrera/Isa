"use client"

import { Shirt } from "lucide-react"
import { DRESS_CODE, COLORS } from "@/lib/theme-config"
import { FloatingDots } from "./floating-dots"

export function DressCode() {
  return (
    <section className="relative py-16 px-4 flex flex-col items-center gap-8">
      {/* ✨ Partículas */}
      <FloatingDots count={80} innerSafeArea={0.4} />

      {/* Divider */}
      <div className="flex items-center gap-4" aria-hidden="true">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#a855f7]" />
        <svg width="16" height="16" viewBox="0 0 12 12" fill={COLORS.neonLilac}>
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
        </svg>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#a855f7]" />
      </div>

      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, rgba(168,85,247,0.2), rgba(224,64,251,0.2))`,
          border: `1px solid rgba(168,85,247,0.3)`,
          boxShadow: `0 0 20px rgba(168,85,247,0.3)`,
        }}
      >
        <Shirt className="w-7 h-7" style={{ color: COLORS.neonFuchsia }} />
      </div>

      <div className="text-center">
        <h3
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: COLORS.textHeading,
            textShadow: '0 0 10px rgba(168,85,247,0.4)',
          }}
        >
          {DRESS_CODE.title}
        </h3>

        <div
          className="relative max-w-sm mx-auto rounded-2xl px-8 py-6"
          style={{
            background: "rgba(55, 20, 100, 0.65)",
            backdropFilter: "blur(18px)",
            borderRadius: "24px",
            border: "1px solid rgba(192,132,252,0.2)",
            boxShadow: "0 25px 80px rgba(120, 60, 255, 0.25)"
          }}
        // style={{
        //   background: "linear-gradient(180deg, #2E0F4F 0%, #1F0A36 100%)",
        //   borderRadius: "24px",
        //   border: "1px solid rgba(192,132,252,0.3)",
        //   boxShadow: `
        //     0 0 30px rgba(192,132,252,0.2),
        //     0 20px 60px rgba(0,0,0,0.4)
        //   `
        // }}
        >
          <p
            className="text-xl md:text-2xl font-bold mb-3"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: COLORS.neonFuchsia,
              textShadow: '0 0 10px rgba(224,64,251,0.5)',
            }}
          >
            {DRESS_CODE.style}
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent mb-3" aria-hidden="true" />
          <p className="text-base mb-4" style={{ color: COLORS.textSubtle }}>
            {DRESS_CODE.noItem}
          </p>

          {/* Look especial - bigger */}
          <p
            className="text-2xl md:text-3xl italic mb-1"
            style={{
              fontFamily: 'var(--font-script)',
              color: COLORS.neonLilac,
              textShadow: '0 0 12px rgba(192,132,252,0.5)',
            }}
          >
            {DRESS_CODE.specialLook}
          </p>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent mt-5 mb-4" aria-hidden="true" />

          {/* Reserved colors notice */}
          <div className="flex items-center gap-3 justify-center">
            <div className="flex gap-1.5" aria-hidden="true">
              <span
                className="w-4 h-4 rounded-full"
                style={{
                  background: `#6D28D9`,
                  border: '1px solid rgb(91 28 190)',
                }}
              />
              <span
                className="w-4 h-4 rounded-full"
                style={{
                  background: `#150527`,
                  border: '1px solid rgb(19 5 36)',
                }}
              />
            </div>
            <p className="text-xs" style={{ color: 'rgba(167,139,250,0.8)' }}>
              {DRESS_CODE.reservedColorsNote}
            </p>
          </div>
          <p className="text-[11px] mt-1 italic" style={{ color: 'rgba(167,139,250,0.5)' }}>
            {DRESS_CODE.reservedColorsSubtext}
          </p>
        </div>
      </div>
    </section>
  )
}
