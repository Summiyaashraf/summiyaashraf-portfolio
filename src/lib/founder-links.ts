export type FounderLink = {
  id: string;
  href: string;
  /** Short label shown in the UI, e.g. "Rozgarbot" */
  domain: string;
  name: string;
  role: "Founder" | "Co-Founder";
  emoji: string;
  tagline: string;
};

/** Rozgarbot + Sflyra are Summiya's flagship live products. */
export const ROZGARBOT_URL = "https://rozgar-bot-frontend.vercel.app/";
export const SFLYRA_URL = "https://sflyra.site";

export const FOUNDER_LINKS: FounderLink[] = [
  {
    id: "rozgarbot",
    href: ROZGARBOT_URL,
    domain: "Rozgarbot",
    name: "Rozgarbot",
    role: "Founder",
    emoji: "🚀",
    tagline: "AI-powered job assistance & smart recruitment platform",
  },
  {
    id: "sflyra",
    href: SFLYRA_URL,
    domain: "Sflyra.site",
    name: "Sflyra AI Labs",
    role: "Co-Founder",
    emoji: "⚡",
    tagline: "AI agency delivering agents & automated web systems",
  },
];

/** Every founder link opens in a new tab without leaking the referrer. */
export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function founderLinkProps(link: FounderLink) {
  return { href: link.href, ...EXTERNAL_LINK_PROPS } as const;
}

/** Hostnames of the founder domains, used to keep link allowlists in sync. */
export const FOUNDER_HOSTS = FOUNDER_LINKS.map(
  (link) => new URL(link.href).hostname.toLowerCase(),
);
