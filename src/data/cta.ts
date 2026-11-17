/**
 * cta.ts — liens d'action vers Divalto, par page de classement.
 * Lus automatiquement par RankCard (fiche de l'éditeur « Divalto »), RankingList
 * (ligne n°1 quand Divalto est premier) et NotreChoix (encart après le comparatif).
 * Chaque lien porte des paramètres UTM et des attributs data-cta suivis par le
 * Tracker (clics visibles dans /admin/). Faits et prix : pages officielles Divalto,
 * tarif au 1er janvier 2026.
 */

const BASE = 'https://www.divalto.com';

export interface DivaltoProduct {
  key: string;
  produit: string;
  tarifs: string;
  tarifsLabel: string;
  demo: string;
  faits: string;
}

const ISO = 'SaaS hébergé en France, certifié ISO 27001 · plateforme agréée Docoon intégrée';

const PRODUCTS = {
  erp: {
    key: 'divalto-erp',
    produit: 'Divalto',
    tarifs: `${BASE}/logiciel-erp/gammes-offres/`,
    tarifsLabel: 'Voir les offres et tarifs',
    demo: `${BASE}/demande-demonstration/`,
    faits: `Trois ERP métiers (négoce, industrie, service terrain) · prix public dès 70 € par utilisateur et par mois (tarif au 1er janvier 2026) · ${ISO}`,
  },
  business: {
    key: 'divalto-business',
    produit: 'Divalto Business',
    tarifs: `${BASE}/divalto-business-tarifs/`,
    tarifsLabel: 'Voir les tarifs',
    demo: `${BASE}/campagne/divalto-business-demo/`,
    faits: `ERP du négoce BtoB, WMS intégré · prix public dès 70 € par utilisateur et par mois (tarif au 1er janvier 2026) · ${ISO}`,
  },
  industry: {
    key: 'divalto-industry',
    produit: 'Divalto Industry',
    tarifs: `${BASE}/divalto-industry-tarifs/`,
    tarifsLabel: 'Voir les tarifs',
    demo: `${BASE}/campagne/divalto-industry-demo/`,
    faits: `Gestion de production et gestion à l'affaire · prix public dès 80 € par utilisateur et par mois (tarif au 1er janvier 2026) · ${ISO}`,
  },
  fieldService: {
    key: 'divalto-field-service',
    produit: 'Divalto Field Service',
    tarifs: `${BASE}/field-service-tarifs/`,
    tarifsLabel: 'Voir les tarifs',
    demo: `${BASE}/campagne/divalto-field-service-demo/`,
    faits: `ERP du service terrain : contrats, parc installé, interventions · prix public dès 75 € par utilisateur et par mois (tarif au 1er janvier 2026) · ${ISO}`,
  },
  crm: {
    key: 'divalto-crm',
    produit: 'Divalto et son CRM weavy',
    tarifs: `${BASE}/logiciel-crm/crm-gammes-tarifs/`,
    tarifsLabel: 'Voir les offres CRM',
    demo: `${BASE}/demande-demonstration/`,
    faits: `ERP et CRM weavy pour les équipes terrain · ERP dès 70 € par utilisateur et par mois (tarif au 1er janvier 2026), CRM sur devis · ${ISO}`,
  },
} satisfies Record<string, DivaltoProduct>;

export interface DivaltoCta extends DivaltoProduct {
  /** Page de destination principale (produit ou métier). */
  offre: string;
  /** Libellé du bouton principal de la fiche. */
  bouton: string;
}

const page = (product: DivaltoProduct, offre: string, bouton: string): DivaltoCta => ({ ...product, offre, bouton });

export const DIVALTO_CTA: Record<string, DivaltoCta> = {
  'meilleurs-erp': page(PRODUCTS.erp, `${BASE}/logiciel-erp/`, 'Découvrir les ERP Divalto'),
  'meilleurs-erp-pme': page(PRODUCTS.erp, `${BASE}/logiciel-erp/`, 'Découvrir les ERP Divalto'),
  'meilleurs-erp-eti': page(PRODUCTS.erp, `${BASE}/logiciel-erp/`, 'Découvrir les ERP Divalto'),
  'meilleurs-erp-francais': page(PRODUCTS.erp, `${BASE}/logiciel-erp/`, 'Découvrir les ERP Divalto'),
  'meilleurs-erp-cloud-saas': page(PRODUCTS.erp, `${BASE}/saas/`, 'Découvrir le SaaS Divalto'),
  'meilleurs-erp-agroalimentaire': page(PRODUCTS.erp, `${BASE}/metier/agroalimentaire/`, "Découvrir l'ERP agroalimentaire"),
  'meilleurs-erp-vins-spiritueux': page(PRODUCTS.erp, `${BASE}/metier/vins-et-spiritueux/`, "Découvrir l'ERP vins et spiritueux"),
  'meilleurs-erp-industrie': page(PRODUCTS.industry, `${BASE}/metier/industrie/`, 'Découvrir Divalto Industry'),
  'meilleurs-erp-metallerie-chaudronnerie-usinage': page(PRODUCTS.industry, `${BASE}/metier/metallurgie-et-metallerie/`, "Découvrir l'ERP métallerie"),
  'meilleurs-erp-gestion-affaire-machines-speciales': page(PRODUCTS.industry, `${BASE}/metier/industrie-a-l-affaire/`, "Découvrir l'industrie à l'affaire"),
  'meilleurs-erp-negoce-distribution': page(PRODUCTS.business, `${BASE}/secteurs/negoce/`, 'Découvrir Divalto Business'),
  'meilleurs-erp-negoce-materiaux': page({ ...PRODUCTS.business, produit: 'Divalto Business (solution FIB)' }, `${BASE}/metier/fourniture-industrielle-et-du-batiment/`, 'Découvrir la solution FIB'),
  'meilleurs-erp-maintenance-sav': page(PRODUCTS.fieldService, `${BASE}/metier/sav-travaux-et-maintenance/`, 'Découvrir Divalto Field Service'),
  'meilleurs-erp-btp-second-oeuvre': page(PRODUCTS.fieldService, `${BASE}/metier/logiciel-suivi-chantier/`, "Découvrir l'ERP second œuvre"),
  'meilleurs-erp-crm-integre': page(PRODUCTS.crm, `${BASE}/logiciel-crm/`, 'Découvrir le CRM Divalto weavy'),
};

/** Slug de page à partir du chemin (« /meilleurs-erp-eti/ » → « meilleurs-erp-eti »). */
export const slugOf = (pathname: string) => pathname.replace(/^\/+|\/+$/g, '');

export function divaltoCtaFor(pathname: string): DivaltoCta | null {
  return DIVALTO_CTA[slugOf(pathname)] ?? null;
}

/** Ajoute les paramètres UTM (mesure côté Divalto : source, page, emplacement). */
export function ctaHref(url: string, pathname: string, placement: string): string {
  const u = new URL(url);
  u.searchParams.set('utm_source', 'meilleur-erp.fr');
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', slugOf(pathname) || 'accueil');
  u.searchParams.set('utm_content', placement);
  return u.toString();
}

/** Attributs communs des liens CTA (nouvel onglet, nofollow, suivi). */
export function ctaAttrs(placement: string, target: string) {
  return {
    target: '_blank',
    rel: 'nofollow noopener',
    'data-cta': 'divalto',
    'data-cta-placement': placement,
    'data-cta-target': target,
  };
}

export const CTA_PLACEMENT_LABELS: Record<string, string> = {
  liste: 'Classement en tête de page (ligne n°1)',
  fiche: 'Fiche Divalto : bouton principal',
  'fiche-tarifs': 'Fiche Divalto : tarifs',
  choix: 'Encart « Notre choix » : démonstration',
  'choix-tarifs': 'Encart « Notre choix » : tarifs',
};

export const CTA_LINK_LABELS: Record<string, string> = {
  offre: 'page produit ou métier',
  tarifs: 'page tarifs',
  demo: 'demande de démonstration',
};
