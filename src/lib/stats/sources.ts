/**
 * Classement des visites et des robots pour la mesure d'audience interne.
 * - classifySource : d'où vient une visite (moteur, assistant IA, réseau social…)
 * - deviceOf       : type d'appareil déduit du user-agent
 * - isBotUA        : écarte les robots des statistiques de visite (ils n'exécutent
 *                    généralement pas le JavaScript, mais certains le font)
 * - detectCrawler  : identifie les robots des moteurs et des IA (journal serveur)
 */

export type Family = 'moteur' | 'ia' | 'social' | 'email' | 'site' | 'campagne' | 'direct' | 'interne';

export const FAMILY_LABELS: Record<Family, string> = {
  moteur: 'Moteurs de recherche',
  ia: 'Assistants IA',
  social: 'Réseaux sociaux et messageries',
  email: 'E-mail',
  site: 'Autres sites',
  campagne: 'Campagnes (paramètres UTM)',
  direct: 'Accès direct ou inconnu',
  interne: 'Navigation interne',
};

type Rule = [test: (host: string) => boolean, family: Family, name: string];

const dom = (...domains: string[]) => (h: string) => domains.some((d) => h === d || h.endsWith('.' + d));
const re = (r: RegExp) => (h: string) => r.test(h);

/** Règles par hôte référent (ordre important : IA et e-mail avant Google). */
const HOST_RULES: Rule[] = [
  // Assistants IA
  [dom('chatgpt.com', 'chat.openai.com', 'openai.com', 'com.openai.chatgpt'), 'ia', 'ChatGPT'],
  [dom('perplexity.ai', 'ai.perplexity.app.android'), 'ia', 'Perplexity'],
  [dom('gemini.google.com', 'bard.google.com', 'com.google.android.apps.bard'), 'ia', 'Gemini'],
  [dom('copilot.microsoft.com', 'copilot.cloud.microsoft', 'm365.cloud.microsoft', 'com.microsoft.copilot'), 'ia', 'Microsoft Copilot'],
  [dom('claude.ai', 'com.anthropic.claude'), 'ia', 'Claude'],
  [dom('chat.mistral.ai', 'ai.mistral.chat'), 'ia', 'Le Chat (Mistral)'],
  [dom('deepseek.com'), 'ia', 'DeepSeek'],
  [dom('grok.com'), 'ia', 'Grok'],
  [dom('meta.ai'), 'ia', 'Meta AI'],
  [dom('you.com'), 'ia', 'You.com'],
  [dom('phind.com'), 'ia', 'Phind'],
  [dom('poe.com'), 'ia', 'Poe'],
  [dom('duck.ai'), 'ia', 'Duck.ai'],
  [dom('kimi.com', 'kimi.ai', 'moonshot.cn'), 'ia', 'Kimi'],
  [dom('chat.qwen.ai'), 'ia', 'Qwen'],
  [dom('huggingface.co'), 'ia', 'HuggingChat'],
  // E-mail
  [dom('mail.google.com', 'com.google.android.gm'), 'email', 'Gmail'],
  [dom('outlook.live.com', 'outlook.office.com', 'outlook.office365.com', 'com.microsoft.office.outlook'), 'email', 'Outlook'],
  [dom('mail.yahoo.com'), 'email', 'Yahoo Mail'],
  [re(/^(webmail|mail|courrier|messagerie)\./), 'email', 'Webmail'],
  // Moteurs de recherche
  [re(/^(www\.)?google\.[a-z]{2,3}(\.[a-z]{2})?$/), 'moteur', 'Google'],
  [dom('com.google.android.googlequicksearchbox'), 'moteur', 'Google'],
  [dom('bing.com'), 'moteur', 'Bing'],
  [dom('duckduckgo.com'), 'moteur', 'DuckDuckGo'],
  [dom('qwant.com'), 'moteur', 'Qwant'],
  [dom('ecosia.org'), 'moteur', 'Ecosia'],
  [re(/(^|\.)yahoo\.[a-z.]+$/), 'moteur', 'Yahoo'],
  [re(/(^|\.)yandex\.[a-z.]+$/), 'moteur', 'Yandex'],
  [dom('baidu.com'), 'moteur', 'Baidu'],
  [dom('search.brave.com'), 'moteur', 'Brave Search'],
  [dom('startpage.com'), 'moteur', 'Startpage'],
  [dom('lilo.org'), 'moteur', 'Lilo'],
  [dom('kagi.com'), 'moteur', 'Kagi'],
  [dom('seznam.cz'), 'moteur', 'Seznam'],
  [dom('naver.com'), 'moteur', 'Naver'],
  [dom('ask.com'), 'moteur', 'Ask'],
  [re(/(^|\.)aol\.[a-z.]+$/), 'moteur', 'AOL'],
  [dom('mojeek.com'), 'moteur', 'Mojeek'],
  [dom('swisscows.com'), 'moteur', 'Swisscows'],
  // Réseaux sociaux et messageries
  [dom('linkedin.com', 'lnkd.in', 'com.linkedin.android'), 'social', 'LinkedIn'],
  [dom('facebook.com', 'fb.com', 'fb.me', 'com.facebook.katana'), 'social', 'Facebook'],
  [dom('instagram.com'), 'social', 'Instagram'],
  [dom('t.co', 'x.com', 'twitter.com'), 'social', 'X (Twitter)'],
  [dom('reddit.com', 'com.reddit.frontpage'), 'social', 'Reddit'],
  [dom('youtube.com', 'youtu.be', 'com.google.android.youtube'), 'social', 'YouTube'],
  [dom('tiktok.com'), 'social', 'TikTok'],
  [re(/(^|\.)pinterest\.[a-z.]+$/), 'social', 'Pinterest'],
  [dom('threads.net', 'threads.com'), 'social', 'Threads'],
  [dom('bsky.app'), 'social', 'Bluesky'],
  [dom('whatsapp.com', 'wa.me'), 'social', 'WhatsApp'],
  [dom('t.me', 'telegram.org'), 'social', 'Telegram'],
  [dom('slack.com'), 'social', 'Slack'],
  [dom('teams.microsoft.com', 'teams.live.com'), 'social', 'Microsoft Teams'],
  [dom('discord.com'), 'social', 'Discord'],
];

/** Règles par mot-clé pour le paramètre utm_source (ex. ChatGPT ajoute utm_source=chatgpt.com). */
const UTM_RULES: [RegExp, Family, string][] = [
  [/chatgpt|openai/, 'ia', 'ChatGPT'],
  [/perplexity/, 'ia', 'Perplexity'],
  [/gemini|bard/, 'ia', 'Gemini'],
  [/copilot/, 'ia', 'Microsoft Copilot'],
  [/claude|anthropic/, 'ia', 'Claude'],
  [/mistral|lechat/, 'ia', 'Le Chat (Mistral)'],
  [/deepseek/, 'ia', 'DeepSeek'],
  [/grok/, 'ia', 'Grok'],
  [/meta\.ai/, 'ia', 'Meta AI'],
  [/you\.com/, 'ia', 'You.com'],
  [/google/, 'moteur', 'Google'],
  [/bing/, 'moteur', 'Bing'],
  [/qwant/, 'moteur', 'Qwant'],
  [/duckduckgo/, 'moteur', 'DuckDuckGo'],
  [/ecosia/, 'moteur', 'Ecosia'],
  [/linkedin/, 'social', 'LinkedIn'],
  [/facebook|^fb$/, 'social', 'Facebook'],
  [/twitter|^x$|x\.com/, 'social', 'X (Twitter)'],
  [/newsletter|e-?mail|brevo|sendinblue|mailchimp|mailjet/, 'email', 'E-mail'],
];

export interface SourceResult {
  family: Family;
  source: string;
  entry: boolean;
}

const bare = (h: string) => h.replace(/^www\./, '');

export function classifySource(input: {
  refHost?: string | null;
  siteHost: string;
  utmSource?: string | null;
  utmMedium?: string | null;
}): SourceResult {
  const refHost = (input.refHost || '').toLowerCase();
  const site = bare(input.siteHost.toLowerCase());
  if (refHost && bare(refHost) === site) {
    return { family: 'interne', source: 'Navigation interne', entry: false };
  }
  const utm = (input.utmSource || '').toLowerCase().trim();
  if (utm) {
    for (const [r, family, name] of UTM_RULES) if (r.test(utm)) return { family, source: name, entry: true };
    if (/e-?mail|newsletter/.test((input.utmMedium || '').toLowerCase())) return { family: 'email', source: utm.slice(0, 40), entry: true };
    return { family: 'campagne', source: utm.slice(0, 40), entry: true };
  }
  if (refHost) {
    for (const [test, family, name] of HOST_RULES) if (test(refHost)) return { family, source: name, entry: true };
    return { family: 'site', source: bare(refHost).slice(0, 60), entry: true };
  }
  return { family: 'direct', source: 'Accès direct', entry: true };
}

export function deviceOf(ua: string): 'mobile' | 'tablette' | 'ordinateur' {
  if (/iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i.test(ua)) return 'tablette';
  if (/Mobi|iPhone|iPod|Android|BlackBerry|Opera Mini|IEMobile/i.test(ua)) return 'mobile';
  return 'ordinateur';
}

const BOT_UA = /bot\b|bot\/|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|preview|facebookexternalhit|embedly|python|curl|wget|java\/|go-http|okhttp|axios|node-fetch|undici|phantomjs|selenium|puppeteer|playwright|httpclient|scrapy|ChatGPT-User|Perplexity|Claude-|ClaudeBot|GPTBot/i;

export function isBotUA(ua: string): boolean {
  return !ua || BOT_UA.test(ua);
}

export type CrawlerCategory = 'ia-direct' | 'ia-index' | 'ia-entrainement' | 'moteur';

export const CRAWLER_CATEGORY_LABELS: Record<CrawlerCategory, string> = {
  'ia-direct': "IA : lecture en direct pour répondre à un utilisateur",
  'ia-index': 'IA : indexation pour la recherche',
  'ia-entrainement': "IA : collecte pour l'entraînement",
  moteur: 'Moteurs de recherche',
};

/** Robots identifiés par leur user-agent déclaré (ordre important : agents « utilisateur » d'abord). */
const CRAWLERS: [RegExp, string, CrawlerCategory][] = [
  [/ChatGPT-User/i, 'ChatGPT-User (OpenAI)', 'ia-direct'],
  [/OAI-SearchBot/i, 'OAI-SearchBot (OpenAI)', 'ia-index'],
  [/GPTBot/i, 'GPTBot (OpenAI)', 'ia-entrainement'],
  [/Perplexity-User/i, 'Perplexity-User', 'ia-direct'],
  [/PerplexityBot/i, 'PerplexityBot', 'ia-index'],
  [/Claude-User/i, 'Claude-User (Anthropic)', 'ia-direct'],
  [/Claude-SearchBot/i, 'Claude-SearchBot (Anthropic)', 'ia-index'],
  [/ClaudeBot|anthropic-ai|Claude-Web/i, 'ClaudeBot (Anthropic)', 'ia-entrainement'],
  [/MistralAI-User/i, 'MistralAI-User', 'ia-direct'],
  [/DuckAssistBot/i, 'DuckAssistBot (DuckDuckGo)', 'ia-direct'],
  [/meta-externalfetcher/i, 'Meta-ExternalFetcher', 'ia-direct'],
  [/meta-externalagent/i, 'Meta-ExternalAgent', 'ia-entrainement'],
  [/YouBot/i, 'YouBot (You.com)', 'ia-index'],
  [/Amazonbot/i, 'Amazonbot', 'ia-entrainement'],
  [/Bytespider/i, 'Bytespider (ByteDance)', 'ia-entrainement'],
  [/CCBot/i, 'CCBot (Common Crawl)', 'ia-entrainement'],
  [/cohere-ai|cohere-training-data-crawler/i, 'Cohere', 'ia-entrainement'],
  [/Diffbot/i, 'Diffbot', 'ia-entrainement'],
  [/Timpibot/i, 'Timpibot', 'ia-entrainement'],
  [/Applebot/i, 'Applebot (Apple)', 'moteur'],
  [/bingbot|BingPreview/i, 'Bingbot (Bing, Copilot)', 'moteur'],
  [/Googlebot|Google-InspectionTool|GoogleOther|Storebot-Google/i, 'Googlebot (Google)', 'moteur'],
  [/YandexBot/i, 'YandexBot', 'moteur'],
  [/Baiduspider/i, 'Baiduspider', 'moteur'],
  [/DuckDuckBot/i, 'DuckDuckBot', 'moteur'],
  [/Qwantbot|QwantBot/i, 'Qwantbot', 'moteur'],
  [/SeznamBot/i, 'SeznamBot', 'moteur'],
  [/PetalBot/i, 'PetalBot (Huawei)', 'moteur'],
];

export function detectCrawler(ua: string): { bot: string; category: CrawlerCategory } | null {
  if (!ua) return null;
  for (const [r, bot, category] of CRAWLERS) if (r.test(ua)) return { bot, category };
  return null;
}

/** Hôtes dont on enregistre les visites (les aperçus *.workers.dev partagent la même base). */
export function isTrackedHost(hostname: string): boolean {
  return hostname === 'meilleur-erp.fr' || hostname === 'www.meilleur-erp.fr' || hostname === 'localhost' || hostname === '127.0.0.1';
}

export const STATS_OBJECT_NAME = 'meilleur-erp-stats';
