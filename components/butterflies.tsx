"use client"

import { useEffect, useState } from "react"

interface ButterflyProps {
  count?: number
}

const BUTTERFLY_SVG = `
<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20C16 12 4 8 4 16C4 22 12 26 20 20Z" fill="currentColor" opacity="0.8"/>
  <path d="M20 20C24 12 36 8 36 16C36 22 28 26 20 20Z" fill="currentColor" opacity="0.8"/>
  <path d="M20 20C17 26 10 34 14 36C18 38 20 28 20 20Z" fill="currentColor" opacity="0.6"/>
  <path d="M20 20C23 26 30 34 26 36C22 38 20 28 20 20Z" fill="currentColor" opacity="0.6"/>
</svg>
`

interface ButterflyState {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export function Butterflies({ count = 6 }: ButterflyProps) {
  const [butterflies, setButterflies] = useState<ButterflyState[]>([])

  useEffect(() => {
    const colors = ["#c084fc", "#e040fb", "#a855f7", "#d8b4fe", "#f0abfc"]
    const items: ButterflyState[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 60 + Math.random() * 40,
      size: 20 + Math.random() * 20,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      color: colors[i % colors.length],
    }))
    setButterflies(items)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }} aria-hidden="true">
      {butterflies.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            color: b.color,
            animation: `butterfly-float ${b.duration}s ease-in-out ${b.delay}s infinite`,
            filter: `drop-shadow(0 0 6px ${b.color})`,
          }}
          dangerouslySetInnerHTML={{ __html: BUTTERFLY_SVG }}
        />
      ))}
    </div>
  )
}
