/**
 * vendors.ts — site officiel de chaque logiciel cité dans les classements.
 * RankCard affiche le même lien discret « Site officiel » sur chaque fiche, pour
 * tous les éditeurs (nofollow, sans paramètre UTM, suivi par le Tracker via
 * data-cta="editeur"). Pour Divalto : la page de l'offre qui correspond au classement.
 * Nouveau logiciel : ajouter son nom exact (prop `name` de RankCard) et une URL vérifiée.
 * URLs vérifiées le 17 novembre 2026.
 */

const DIVALTO = 'https://www.divalto.com';

export const VENDOR_SITES: Record<string, string> = {
  'Abas ERP': 'https://abas-erp.com/fr/',
  'Akanea Konnect\'Agro': 'https://akanea.com/',
  'Akuiteo': 'https://www.akuiteo.com/',
  'Aptean Food & Beverage ERP': 'https://www.aptean.com/fr-FR/solutions/erp/products/aptean-food-and-beverage-erp-enterprise',
  'Archipelia': 'https://archipelia.com/',
  'Axelor': 'https://axelor.com/fr/',
  'Axonaut': 'https://axonaut.com/',
  'Baqio': 'https://www.baqio.com/',
  'Cegid XRP': 'https://www.cegid.com/fr/produits/cegid-xrp-flex/',
  'Cegid XRP Flex': 'https://www.cegid.com/fr/produits/cegid-xrp-flex/',
  'Cegid XRP Ultimate': 'https://www.cegid.com/fr/produits/cegid-xrp-ultimate/',
  'Clipper': 'https://www.forterro.com/fr/produit/clipper',
  'Codial': 'https://www.codial.fr/',
  'EBP Bâtiment': 'https://www.ebp.com/logiciel-devis-facture-batiment/',
  'EBP Bâtiment ELITE': 'https://www.ebp.com/logiciel-devis-facture-batiment/batiment-elite/',
  'Everwin': 'https://everwin.fr/',
  'Fitnet': 'https://fitnet.fr/',
  'Graneet': 'https://www.graneet.com/fr',
  'Hello Harel': 'https://www.helloharel.com/',
  'IFS Cloud': 'https://www.ifs.com/en/ifs-cloud',
  'Infologic Copilote': 'https://www.infologic-copilote.fr/',
  'Infor CloudSuite Distribution': 'https://www.infor.com/fr-fr/industries/distribution',
  'Infor CloudSuite Industrial': 'https://www.infor.com/fr-fr/products/cloudsuite-industrial',
  'Isavigne': 'https://www.isagri.fr/logiciels/isavigne-simplifiez-votre-gestion-commerciale-viticole',
  'Microsoft Dynamics 365 (Business Central + Field Service)': 'https://www.microsoft.com/fr-fr/dynamics-365/products/field-service',
  'Microsoft Dynamics 365 (Sales + Business Central)': 'https://www.microsoft.com/fr-fr/dynamics-365/products/sales',
  'Microsoft Dynamics 365 Business Central': 'https://www.microsoft.com/fr-fr/dynamics-365/products/business-central',
  'Microsoft Dynamics 365 Finance & Supply Chain Management': 'https://www.microsoft.com/fr-fr/dynamics-365/products/supply-chain-management',
  'Odoo': 'https://www.odoo.com/fr_FR',
  'Odoo Field Service': 'https://www.odoo.com/fr_FR',
  'Onaya BTP': 'https://www.orisha.com/fr/construction/logiciel/onaya-btp',
  'Onaya Négoce (ex Open Pro)': 'https://www.orisha.com/fr/construction/logiciel/onaya-negoce',
  'Optim\'BTP': 'https://www.optimbtp.fr/',
  'Oracle NetSuite': 'https://www.netsuite.com/portal/fr/products/erp.shtml',
  'Praxedo': 'https://www.praxedo.com/',
  'Process2Wine': 'https://www.process2wine.com/',
  'Proginov': 'https://www.proginov.com/',
  'Proginov ERP': 'https://www.proginov.com/',
  'Proginov ERP – Bâtiment': 'https://www.proginov.com/',
  'Sage 100': 'https://www.sage.com/fr-fr/produits/sage-100/entreprise/',
  'Sage Batigest Connect': 'https://www.sage.com/fr-fr/produits/sage-batigest-connect/',
  'Sage X3': 'https://www.sage.com/fr-fr/sage-business-cloud/sage-x3/',
  'SAP Business One': 'https://www.sap.com/france/products/erp/business-one.html',
  'SAP Cloud ERP (S/4HANA Cloud)': 'https://www.sap.com/france/products/erp/s4hana.html',
  'SAP Cloud ERP (S/4HANA Cloud Public Edition)': 'https://www.sap.com/france/products/erp/s4hana.html',
  'Silog': 'https://www.silog.fr/fr',
  'Silog ERP': 'https://www.silog.fr/fr',
  'SparkWine': 'https://www.greenspark.fr/',
  'Sylob': 'https://www.sylob.com/fr',
  'Sylob ERP': 'https://www.sylob.com/fr',
  'TopSolid\'Erp': 'https://www.topsolid.com/fr-fr/produits/topsoliderp',
  'VIF': 'https://vif.fr/industrie-process/erp-industrie-agroalimentaire/',
  'Vitisoft': 'https://vitisoft.fr/',
  'WaveSoft': 'https://www.wavesoft.fr/',
};

/** Divalto : page de l'offre la plus proche du sujet de chaque classement. */
export const DIVALTO_PAGES: Record<string, string> = {
  'meilleurs-erp': `${DIVALTO}/logiciel-erp/`,
  'meilleurs-erp-pme': `${DIVALTO}/logiciel-erp/`,
  'meilleurs-erp-eti': `${DIVALTO}/logiciel-erp/`,
  'meilleurs-erp-francais': `${DIVALTO}/logiciel-erp/`,
  'meilleurs-erp-cloud-saas': `${DIVALTO}/saas/`,
  'meilleurs-erp-agroalimentaire': `${DIVALTO}/metier/agroalimentaire/`,
  'meilleurs-erp-vins-spiritueux': `${DIVALTO}/metier/vins-et-spiritueux/`,
  'meilleurs-erp-industrie': `${DIVALTO}/metier/industrie/`,
  'meilleurs-erp-metallerie-chaudronnerie-usinage': `${DIVALTO}/metier/metallurgie-et-metallerie/`,
  'meilleurs-erp-gestion-affaire-machines-speciales': `${DIVALTO}/metier/industrie-a-l-affaire/`,
  'meilleurs-erp-negoce-distribution': `${DIVALTO}/secteurs/negoce/`,
  'meilleurs-erp-negoce-materiaux': `${DIVALTO}/metier/fourniture-industrielle-et-du-batiment/`,
  'meilleurs-erp-maintenance-sav': `${DIVALTO}/metier/sav-travaux-et-maintenance/`,
  'meilleurs-erp-btp-second-oeuvre': `${DIVALTO}/metier/logiciel-suivi-chantier/`,
  'meilleurs-erp-crm-integre': `${DIVALTO}/logiciel-crm/`,
};

/** Slug de page à partir du chemin (« /meilleurs-erp-eti/ » → « meilleurs-erp-eti »). */
export const slugOf = (pathname: string) => pathname.replace(/^\/+|\/+$/g, '');

/** Clé de suivi d'un logiciel (« Sage X3 » → « sage-x3 »). */
export const vendorKey = (name: string) =>
  name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);

/** URL du site officiel à afficher sur la fiche, ou null si aucune n'est connue. */
export function vendorSite(name: string, editor: string | undefined, pathname: string): string | null {
  if (editor === 'Divalto') return DIVALTO_PAGES[slugOf(pathname)] ?? `${DIVALTO}/`;
  return VENDOR_SITES[name] ?? null;
}

/** Les clics vers Divalto (clés actuelles « divalto… » et anciennes « divalto-…:… »). */
export const isDivaltoTarget = (target: unknown) => String(target || '').startsWith('divalto');

const DIVALTO_NAMES = ['Divalto', 'Divalto Industry', 'Divalto Business', 'Divalto Field Service', 'Divalto Business (solution métier FIB)', 'Divalto (ERP + CRM weavy)'];
const LABELS = new Map<string, string>([
  ...[...Object.keys(VENDOR_SITES), ...DIVALTO_NAMES].map((n): [string, string] => [vendorKey(n), n]),
  ['divalto-erp', 'Divalto'],
  ['divalto-crm', 'Divalto (ERP + CRM weavy)'],
]);

/** Libellé lisible d'une clé de suivi, pour l'administration. */
export function vendorLabel(target: unknown): string {
  const t = String(target || '');
  if (LABELS.has(t)) return LABELS.get(t)!;
  const base = t.split(':')[0].replace(/-/g, ' ');
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : '–';
}
