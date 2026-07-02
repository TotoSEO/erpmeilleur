/**
 * cocon.ts — source unique de l'arborescence éditoriale.
 * Sert le méga-menu (header), le plan de site HTML et le fil d'Ariane.
 */
export interface Item { slug: string; label: string; }

export const PILIER: Item = { slug: 'qu-est-ce-qu-un-erp', label: "Qu'est-ce qu'un ERP ?" };

/** Sections du cocon : chaque section a un hub (page pilier de branche) et ses satellites. */
export interface Section { key: string; label: string; hub: Item; items: Item[]; }

export const SECTIONS: Section[] = [
  {
    key: 'comprendre',
    label: "Comprendre l'ERP",
    hub: PILIER,
    items: [
      { slug: 'a-quoi-sert-un-erp', label: "À quoi ça sert" },
      { slug: 'comment-fonctionne-un-erp', label: 'Comment ça fonctionne' },
      { slug: 'avantages-inconvenients-erp', label: 'Avantages & inconvénients' },
      { slug: 'erp-pgi-difference', label: 'ERP ou PGI' },
      { slug: 'erp-crm-difference', label: 'ERP ou CRM' },
      { slug: 'logiciels-gestion-entreprise', label: 'Les logiciels de gestion' },
      { slug: 'quand-mettre-en-place-un-erp', label: "Quand s'équiper" },
    ],
  },
  {
    key: 'modules',
    label: 'Modules & fonctions',
    hub: { slug: 'modules-erp', label: "Tous les modules d'un ERP" },
    items: [
      { slug: 'erp-gestion-commerciale', label: 'Gestion commerciale' },
      { slug: 'erp-gestion-stocks', label: 'Gestion des stocks' },
      { slug: 'erp-comptabilite', label: 'Comptabilité & finance' },
      { slug: 'erp-production-gpao', label: 'Production (GPAO)' },
      { slug: 'erp-rh', label: 'Ressources humaines' },
      { slug: 'crm-integre-erp', label: 'CRM intégré' },
      { slug: 'erp-achats', label: 'Achats' },
    ],
  },
  {
    key: 'deploiement',
    label: 'Déploiement',
    hub: { slug: 'erp-cloud-saas-on-premise', label: 'Cloud, SaaS ou on-premise' },
    items: [
      { slug: 'erp-cloud', label: 'ERP cloud' },
      { slug: 'erp-on-premise', label: 'ERP on-premise' },
      { slug: 'erp-open-source', label: 'ERP open source' },
      { slug: 'integration-erp', label: 'Intégration au SI' },
      { slug: 'erp-mobile', label: 'ERP mobile' },
    ],
  },
  {
    key: 'projet',
    label: 'Coûts & projet',
    hub: { slug: 'mise-en-place-erp', label: 'Mettre en place un ERP' },
    items: [
      { slug: 'prix-erp', label: 'Combien ça coûte' },
      { slug: 'comment-choisir-un-erp', label: 'Comment choisir' },
      { slug: 'cahier-des-charges-erp', label: 'Cahier des charges' },
      { slug: 'roi-erp', label: 'Retour sur investissement' },
      { slug: 'migration-donnees-erp', label: 'Migration des données' },
      { slug: 'conduite-du-changement-erp', label: 'Conduite du changement' },
      { slug: 'duree-projet-erp', label: "Durée d'un projet" },
      { slug: 'echec-projet-erp', label: "Pourquoi un projet échoue" },
      { slug: 'editeur-integrateur-erp', label: 'Éditeur & intégrateur' },
    ],
  },
  {
    key: 'tech',
    label: 'Tech & conformité',
    hub: { slug: 'securite-erp', label: 'La sécurité des données' },
    items: [
      { slug: 'erp-intelligence-artificielle', label: 'ERP et IA' },
      { slug: 'erp-rgpd', label: 'RGPD & conformité' },
      { slug: 'erp-facturation-electronique', label: 'Facturation électronique' },
    ],
  },
  {
    key: 'reperes',
    label: 'Repères',
    hub: { slug: 'histoire-erp', label: "L'histoire de l'ERP" },
    items: [
      { slug: 'glossaire-erp', label: 'Glossaire ERP' },
    ],
  },
];

/** Méga-menu : colonnes de pages « intéressantes » (le hub + un choix de pages, sans surcharge). */
export const MEGA = SECTIONS.map((s) => ({
  key: s.key,
  label: s.label,
  links: [s.hub, ...s.items].slice(0, 6),
}));

/**
 * Parent direct de chaque page pour le fil d'Ariane (un seul niveau au-dessus).
 * N1 -> pilier P0 ; N2 -> hub de leur branche ; P0 -> racine.
 */
const N2_HUB: Record<string, Item> = {
  'erp-gestion-commerciale': { slug: 'modules-erp', label: 'Modules' },
  'erp-gestion-stocks': { slug: 'modules-erp', label: 'Modules' },
  'erp-comptabilite': { slug: 'modules-erp', label: 'Modules' },
  'erp-production-gpao': { slug: 'modules-erp', label: 'Modules' },
  'erp-rh': { slug: 'modules-erp', label: 'Modules' },
  'crm-integre-erp': { slug: 'modules-erp', label: 'Modules' },
  'erp-achats': { slug: 'modules-erp', label: 'Modules' },
  'erp-cloud': { slug: 'erp-cloud-saas-on-premise', label: 'Cloud, SaaS ou on-premise' },
  'erp-on-premise': { slug: 'erp-cloud-saas-on-premise', label: 'Cloud, SaaS ou on-premise' },
  'cahier-des-charges-erp': { slug: 'comment-choisir-un-erp', label: 'Comment choisir' },
  'migration-donnees-erp': { slug: 'mise-en-place-erp', label: 'Mise en place' },
  'conduite-du-changement-erp': { slug: 'mise-en-place-erp', label: 'Mise en place' },
  'duree-projet-erp': { slug: 'mise-en-place-erp', label: 'Mise en place' },
  'echec-projet-erp': { slug: 'mise-en-place-erp', label: 'Mise en place' },
  'roi-erp': { slug: 'prix-erp', label: 'Combien ça coûte' },
};

export function parentOf(slug: string): Item | null {
  if (slug === PILIER.slug) return null;
  if (N2_HUB[slug]) return N2_HUB[slug];
  return { slug: PILIER.slug, label: "Qu'est-ce qu'un ERP" };
}
