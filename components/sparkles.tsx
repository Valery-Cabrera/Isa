"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  fadeSpeed: number
  hue: number
  lightness: number
}

export function SparklesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: Particle[] = []
    const maxParticles = 120

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const createParticle = (): Particle => {
      const variant = Math.random()
      let hue: number
      let lightness: number
      if (variant < 0.35) {
        // Purple
        hue = 270
        lightness = 70
      } else if (variant < 0.6) {
        // Fuchsia
        hue = 300
        lightness = 70
      } else if (variant < 0.85) {
        // Lilac
        hue = 280
        lightness = 82
      } else {
        // Light lilac / almost white
        hue = 275
        lightness = 90
      }
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        size: Math.random() * 3.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: -(Math.random() * 1.5 + 0.4),
        opacity: Math.random() * 0.8 + 0.2,
        fadeSpeed: Math.random() * 0.003 + 0.001,
        hue,
        lightness,
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (particles.length < maxParticles && Math.random() > 0.75) {
        particles.push(createParticle())
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.speedX
        p.y += p.speedY
        p.opacity -= p.fadeSpeed

        if (p.opacity <= 0 || p.y < -10) {
          particles.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, ${p.lightness}%, ${p.opacity})`
        ctx.shadowBlur = 15
        ctx.shadowColor = `hsla(${p.hue}, 80%, ${p.lightness - 10}%, ${p.opacity})`
        ctx.fill()

        // Draw star sparkle for bigger particles
        if (p.size > 2) {
          ctx.beginPath()
          const armLen = p.size * 2.5
          ctx.moveTo(p.x - armLen, p.y)
          ctx.lineTo(p.x + armLen, p.y)
          ctx.moveTo(p.x, p.y - armLen)
          ctx.lineTo(p.x, p.y + armLen)
          // Diagonal arms
          const diagLen = armLen * 0.6
          ctx.moveTo(p.x - diagLen, p.y - diagLen)
          ctx.lineTo(p.x + diagLen, p.y + diagLen)
          ctx.moveTo(p.x + diagLen, p.y - diagLen)
          ctx.lineTo(p.x - diagLen, p.y + diagLen)
          ctx.strokeStyle = `hsla(${p.hue}, 80%, ${p.lightness + 5}%, ${p.opacity * 0.4})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      ctx.shadowBlur = 0
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  )
}
