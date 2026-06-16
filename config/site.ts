export const siteConfig = {
  BRAND_NAME: "Frame Zero",
  TAGLINE: "Learn to create AI animation — from zero.",
  DESCRIPTION:
    "Frame Zero is the beginner-friendly hub for learning how modern AI-powered 3D animation and content is created. Free guides, tools directory, and a done-for-you service.",
  CONTACT_EMAIL: "hunterhenry070@gmail.com",
  WHATSAPP_URL: "https://wa.me/923369435931",
  NEWSLETTER_ENDPOINT: "/api/subscribe",
  SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.framezero.studio",
  TWITTER_HANDLE: "@framezero",
  YOUTUBE_URL: "https://www.youtube.com/@TheBabyGoals",
  INSTAGRAM_URL: "https://www.instagram.com/thebabygoals",
  OG_IMAGE: "/og-default.jpg",
  // Affiliate — SYNTX.AI all-in-one AI studio (text/image/video/audio)
  SYNTX_AFFILIATE_URL: "https://syntx.ai/welcome/qzrk7fUF",
} as const;

export const navLinks = [
  { label: "Start Here", href: "/start-here" },
  {
    label: "Learn",
    href: "/learn/ai-animation-basics",
    children: [
      { label: "AI Animation Basics", href: "/learn/ai-animation-basics" },
      { label: "3D Animation Guide", href: "/learn/3d-animation-guide" },
      { label: "Cartoon Creation Guide", href: "/learn/cartoon-creation-guide" },
      { label: "Filmmaking with AI", href: "/learn/filmmaking-with-ai" },
      { label: "Content Creation Guide", href: "/learn/content-creation-guide" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  { label: "Tools", href: "/tools" },
  { label: "Workflow", href: "/workflow" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Community", href: "/community" },
];

export const footerLinks = [
  {
    heading: "Learn",
    links: [
      { label: "Start Here", href: "/start-here" },
      { label: "AI Animation Basics", href: "/learn/ai-animation-basics" },
      { label: "3D Animation Guide", href: "/learn/3d-animation-guide" },
      { label: "Cartoon Creation Guide", href: "/learn/cartoon-creation-guide" },
      { label: "Filmmaking with AI", href: "/learn/filmmaking-with-ai" },
      { label: "Content Creation Guide", href: "/learn/content-creation-guide" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Tools Directory", href: "/tools" },
      { label: "Workflow", href: "/workflow" },
      { label: "Glossary", href: "/glossary" },
      { label: "Resources", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Done-For-You Service", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "WhatsApp Community", href: "/community" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];
