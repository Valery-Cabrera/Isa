"use client"

import { createContext, useContext, useRef, useState, useEffect } from "react"

interface AudioContextType {
    toggle: () => void
    isPlaying: boolean
}

const AudioContext = createContext<AudioContextType | null>(null)

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const hasStartedRef = useRef(false)

    useEffect(() => {
        const startAudio = () => {
            if (!audioRef.current || hasStartedRef.current) return

            hasStartedRef.current = true

            // 🔥 IMPORTANTE: play directamente dentro del evento
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                    hasStartedRef.current = false
                })
        }

        document.addEventListener("touchend", startAudio, { passive: true })
        document.addEventListener("click", startAudio)

        return () => {
            document.removeEventListener("touchend", startAudio)
            document.removeEventListener("click", startAudio)
        }
    }, [])

    const toggle = async () => {
        if (!audioRef.current) return

        if (audioRef.current.paused) {
            await audioRef.current.play()
            setIsPlaying(true)
        } else {
            audioRef.current.pause()
            setIsPlaying(false)
        }
    }

    return (
        <AudioContext.Provider value={{ toggle, isPlaying }}>
            {children}

            <audio
                ref={audioRef}
                loop
                playsInline   // 🔥 obligatorio para iOS
                preload="auto"
            >
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>

            {/* BOTÓN SIEMPRE VISIBLE */}
            <button
                onClick={toggle}
                style={{
                    position: "fixed",
                    top: "20px",
                    right: "20px",
                    zIndex: 9999,
                    background: `linear-gradient(135deg, rgba(168,85,247,0.2), rgba(224,64,251,0.2))`,
                    color: "white",
                    borderRadius: "50%",
                    border: `1px solid rgba(168,85,247,0.3)`,
                    boxShadow: `0 0 20px rgba(168,85,247,0.3)`,
                    width: "30px",
                    height: "30px",
                    fontSize: "14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(4px)"
                }}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <svg
                    className="w-5 h-5 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Altavoz base */}
                    <path d="M5 9v6h4l5 5V4L9 9H5z" />

                    {/* Ondas de reproducción */}
                    {isPlaying && (
                        <>
                            {/* Semicírculo cercano */}
                            <path d="M17 10c1 1 1 4 0 5" />
                            {/* Semicírculo más alejado */}
                            <path d="M20 9c2 2 2 6 0 8" />
                        </>
                    )}
                </svg>
            </button>
        </AudioContext.Provider>
    )
}

export const useAudio = () => {
    const context = useContext(AudioContext)
    if (!context) throw new Error("useAudio must be used within AudioProvider")
    return context
}