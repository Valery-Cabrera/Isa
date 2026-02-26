/**
 * ===========================================
 * THEME CONFIG - Invitacion XV Isabella
 * ===========================================
 * Edita estos valores para personalizar los colores,
 * el evento, textos y WhatsApp de la invitacion.
 */

// ── Colores principales ─────────────────────────
export const COLORS = {
  // Neon / Glow (más coherente con la blusa)
  neonPurple: "#9f67ff",
  neonFuchsia: "#d946ef",
  neonLilac: "#c4a1ff",

  // Textos (mejor contraste en fondo lila oscuro)
  textLight: "#f5efff",
  textHeading: "#eadbff",
  textSubtle: "#d6c2ff",
  textMuted: "#b79dfc",

  // Fondos (más balanceados entre profundidad y lila real)
  bgDeep: "#362554",
  bgCard: "#1F0A36",
  // bgCard: "#221735",
  bgSecondary: "#2d1f45",
  // bgGradientTop: "#4b2da3",   // 8b6be8 más parecido al tono de la blusa
  bgGradientTop: "#4b2da3e6",   // más parecido al tono de la blusa
  bgGradientBottom: "#2E0F4F",   // 1c1132
  // bgGradientBottom: "#342259",   // 1c1132

  // Bordes (ligeramente más visibles)
  border: "#3a2760",
}

// ── Datos del evento ────────────────────────────
export const EVENT = {
  /** Nombre de la quincea\u00f1era */
  name: "Isabella White Cabrera",
  /** Apodo corto */
  nickname: "Isa",
  /** Productora / mama */
  producer: "Maby Cabrera Arias (Mamá)",
  /** Fecha y hora en UTC (6PM Colombia = 11PM UTC) */
  dateUTC: "2026-04-11T23:00:00Z",
  /** Fecha para mostrar */
  dateDisplay: "11 de Abril",
  /** A\u00f1o */
  year: "2026",
  /** Hora para mostrar */
  timeDisplay: "6:00 PM",
  /** Zona horaria */
  timezone: "a",
  /** Hora termina */
  endTime: "1:00 AM",
  /** Ubicaci\u00f3n */
  location: "Conjunto residencial San Diego",
  locationNote: "Salón social",
  /** Google Maps URL (actualizar cuando se confirme el lugar) */
  googleMapsUrl: "https://maps.app.goo.gl/b4T9rkZqU21Rbv9h8",
}

// ── Dress Code ──────────────────────────────────
export const DRESS_CODE = {
  title: "Dress Code",
  style: "Elegante Casual",
  noItem: "Sin jeans",
  specialLook: "Look especial a tu estilo",
  reservedColorsNote: "Sin tonos lila o morado",
  reservedColorsSubtext: "Colores reservados para la protagonista",
}

// ── WhatsApp / RSVP ─────────────────────────────
export const WHATSAPP = {
  /** N\u00famero con c\u00f3digo de pa\u00eds, sin el s\u00edmbolo + (ej: 573001234567) */
  number: "573124218419",
  /** Mensaje predefinido que se env\u00eda */
  message: `Hola! Confirmo mi asistencia a los XV de Isabella.\n\nNos vemos en la Temporada 15!`,
}

// ── Textos de la invitaci\u00f3n ────────────────────
export const INVITATION_TEXT = {
  preTitle: "14 capitulos después...",
  poem: "Más Jeans, con nueva playlist,\nel volumen en alto y planes sin permiso",
  rhythm: "la historia tiene un nuevo ritmo",
  premiere: "Invitación al estreno de la",
  season: "TEMPORADA",
  number: "15",
  starringLabel: "Protagonizada por",
  producerLabel: "Producida y dirigida por",
  guestsLabel: "con la participación especial de:",
  closingLine1: "Esta temporada viene mas intensa.",
  closingLine2: "Mas brillante. Mas ella.",
  footer: "Con amor, la familia de Isabella",
}
