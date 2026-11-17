/** Jour calendaire à Paris (AAAA-MM-JJ) pour un horodatage en millisecondes. */
const DAY_FMT = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' });
export const parisDay = (ms: number): string => DAY_FMT.format(new Date(ms));
export const DAY_MS = 86_400_000;
