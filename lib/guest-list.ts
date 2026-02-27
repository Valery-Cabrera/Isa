export interface GuestEntry {
  /** Normalized keys (lowercase, no accents, no spaces) that match this entry */
  keys: string[]
  /** Display names for the invitation */
  displayNames: string[]
}

/**
 * Normalize a string: lowercase, trim, remove accents/diacritics, remove special chars, collapse spaces
 */
export function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9\s]/g, "") // remove special chars
    .replace(/\s+/g, "") // remove all spaces
}

/**
 * Guest list - add entries here.
 * Each entry has:
 *   - keys: array of normalized strings that will match (e.g., "familiacaro")
 *   - displayNames: array of names to show on the invitation
 */
export const GUEST_LIST: GuestEntry[] = [
  { keys: ["mariafernandanavarro"], displayNames: ["Mafecita"] },
  { keys: ["nicolasmolano"], displayNames: ["Nico Molano"] },
  { keys: ["marianaavella"], displayNames: ["Maris Avella"] },
  { keys: ["karlamartinez"], displayNames: ["Karlita"] },
  { keys: ["analeal"], displayNames: ["Ana leal"] },
  { keys: ["tomasburbano"], displayNames: ["Burbano"] },
  { keys: ["sofiahernandez"], displayNames: ["Sopii"] },
  { keys: ["dannamosquera"], displayNames: ["Donita"] },
  { keys: ["natalyrache"], displayNames: ["Nat"] },
  { keys: ["davidviteri"], displayNames: ["Teti"] },
  { keys: ["marianaburbano"], displayNames: ["Maris Burbano"] },
  { keys: ["nelsonmendoza"], displayNames: ["Nelsitomm"] },
  { keys: ["alexandravelasquez"], displayNames: ["Alexa"] },
  { keys: ["paulaangarita"], displayNames: ["Pau"] },
  { keys: ["juanguidelman"], displayNames: ["Guidel"] },
  { keys: ["alfonsomurcia"], displayNames: ["Murica"] },
  { keys: ["juancardona"], displayNames: ["Cardona"] },
  { keys: ["santiagosalcedo"], displayNames: ["Salcedo"] },
  { keys: ["andresperalta"], displayNames: ["Peralta"] },
  { keys: ["nicolascordoba"], displayNames: ["Nico Cordoba"] },
  { keys: ["valentinavoleyhoyos"], displayNames: ["Valen"] },
  { keys: ["valentinagrisalesvoley"], displayNames: ["Valentina"] },
  { keys: ["valeriaknudson"], displayNames: ["Val"] },
  { keys: ["camila"], displayNames: ["Camii"] },
  { keys: ["matthew"], displayNames: ["Matthew"] },
  { keys: ["familiaperca"], displayNames: ["Madrina", "Jannis", "Alejito", "Juanmi"] },
  { keys: ["juanita"], displayNames: ["Juanis"] },
  { keys: ["familiaruca"], displayNames: ["Tia Nana", "Tio David", "Dani", "Juan", "Davidcito"] },
  { keys: ["gabrielanoviadani"], displayNames: ["Gabriela"] },
  { keys: ["paolanoviajuan"], displayNames: ["Paola"] },
  { keys: ["familiacaro"], displayNames: ["Tia Yoly", "Tio Leandrito", "Laly", "Junior"] },
  { keys: ["mafenoviajunior"], displayNames: ["Mafe"] },
  { keys: ["familiavaca"], displayNames: ["Sindy", "Cami"] },
  { keys: ["jennymarkyhanna"], displayNames: ["Jenny", "Mark", "Hanna"] },
  { keys: ["totomelissayesposo"], displayNames: ["Meli", "Toto", "José"] },
  { keys: ["familiapinillajerez"], displayNames: ["Orlando", "Luz H", "Juanita"] },
  { keys: ["paolaybianca"], displayNames: ["Pao", "Bianquis"] },
  { keys: ["clarayclarisse"], displayNames: ["Clarita", "Clarisse"] },
  { keys: ["melidayricardo"], displayNames: ["Melida", "Ricardo"] },
  { keys: ["katheymauricio"], displayNames: ["Kathe", "Mauricio"] },
  { keys: ["katheyluz"], displayNames: ["Kathe", "Luz"] },
  { keys: ["nevis"], displayNames: ["Nevis"] }
]

/**
 * Look up a guest by their input name.
 * Returns the matching GuestEntry or null if not found.
 */
export function findGuest(input: string): GuestEntry | null {
  const normalized = normalizeString(input)
  if (!normalized) return null

  for (const guest of GUEST_LIST) {
    if (guest.keys.includes(normalized)) {
      return guest
    }
  }
  return null
}
