"use client"

import { useState } from "react"
import { SparklesBackground } from "@/components/sparkles"
import { Butterflies } from "@/components/butterflies"
import { CodeEntry } from "@/components/code-entry"
import { HeroInvitation } from "@/components/hero-invitation"
import { Countdown } from "@/components/countdown"
import { EventDetails } from "@/components/event-details"
import { DressCode } from "@/components/dress-code"
import { RSVPSection } from "@/components/rsvp-section"
import { COLORS } from "@/lib/theme-config"

export default function Home() {
  const [unlocked, setUnlocked] = useState(false)
  const [guestNames, setGuestNames] = useState<string[]>([])

  const handleUnlock = (names: string[]) => {
    setGuestNames(names)
    setUnlocked(true)
  }

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background: `radial-gradient(ellipse 75% 350% at 50% 0%, ${COLORS.bgGradientTop} 0%, ${COLORS.bgDeep} 50%, ${COLORS.bgGradientBottom} 100%)`,
      }}
    >
      <SparklesBackground />
      <Butterflies />

      <div className="relative" style={{ zIndex: 10 }}>
        {
          !unlocked ? (
            <CodeEntry onUnlock={handleUnlock} />
          ) :
            (
              <div className="animate-in fade-in duration-1000">
                <HeroInvitation guestNames={guestNames} />

                <div className="flex justify-center" aria-hidden="true">
                  <div
                    className="w-1 h-20"
                    style={{
                      background: `linear-gradient(to bottom, ${COLORS.neonPurple}, transparent)`,
                      boxShadow: '0 0 10px rgba(168,85,247,0.5)',
                    }}
                  />
                </div>

                <Countdown />

                <div className="flex justify-center" aria-hidden="true">
                  <div
                    className="w-1 h-20"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${COLORS.neonPurple}, transparent)`,
                      boxShadow: '0 0 10px rgba(168,85,247,0.5)',
                    }}
                  />
                </div>

                <EventDetails />

                <div className="flex justify-center" aria-hidden="true">
                  <div
                    className="w-1 h-20"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${COLORS.neonFuchsia}, transparent)`,
                      boxShadow: '0 0 10px rgba(224,64,251,0.5)',
                    }}
                  />
                </div>

                <DressCode />

                <div className="flex justify-center" aria-hidden="true">
                  <div
                    className="w-1 h-20"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${COLORS.neonPurple}, transparent)`,
                      boxShadow: '0 0 10px rgba(168,85,247,0.5)',
                    }}
                  />
                </div>

                <RSVPSection />
              </div>
            )}
      </div>
    </main>
  )
}
