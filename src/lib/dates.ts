// Dates rédactionnelles en français (« 12 octobre 2026 ») -> ISO 8601 (« 2026-10-12 »),
// pour le JSON-LD (datePublished / dateModified) et le sitemap (lastmod).
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

export function toIsoDate(fr?: string): string | null {
  if (!fr) return null;
  const m = fr.trim().toLowerCase().match(/^(\d{1,2})(?:er)?\s+([a-zéû]+)\s+(\d{4})$/);
  if (!m) return null;
  const month = MONTHS.indexOf(m[2]);
  if (month < 0) return null;
  return `${m[3]}-${String(month + 1).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
}
