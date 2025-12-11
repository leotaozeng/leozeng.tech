export interface Project {
  title: string
  description: string
  tech: string[]
  external: string
  slug: string
  logo?: string
}

export const projects: Project[] = [
  {
    title: 'Tip Protector',
    description:
      'A cross-platform mobile tip calculator app built with React Native (Expo) that helps users calculate tips and protect against tip fraud.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Monorepo'],
    external: 'https://tipprotector.app',
    slug: 'tip-protector',
    logo: '/images/projects/tip-protector.png',
  },
  {
    title: 'Meldd',
    description:
      'A collaborative document editing platform with real-time contributions, voting, and document history replay. Built with React Native (Expo) and includes AI integration using Spark LLM and DeepSeek to generate perspective opinions for topic clusters.',
    tech: [
      'React Native',
      'Expo',
      'NestJS',
      'GraphQL',
      'Spark LLM',
      'DeepSeek',
    ],
    external: 'https://app.meldd.com',
    slug: 'meldd',
    logo: '/images/projects/meldd.png',
  },
  {
    title: 'Ecoimpresores',
    description:
      'An online printing and stationery platform where users can upload PDFs, configure print jobs with customization options, design custom notebooks, and purchase stationery products through Shopify integration',
    tech: ['Next.js', 'React', 'TypeScript', 'Shopify'],
    external: 'https://print.ecoimpresores.com',
    slug: 'ecoimpresores',
  },
  {
    title: 'HRHero',
    description:
      'A mobile-first, video-based jobs and talent marketplace / applicant tracking system.',
    tech: ['Vue.js', 'Quasar', 'NestJS', 'MySQL', 'Redis', 'AliCloud'],
    external: 'https://hrheroapp.com',
    slug: 'hrhero',
  },
  {
    title: 'Gig-gly',
    description:
      'A crypto-powered recruitment platform for web3. It uses blockchain, tokens, and referral rewards.',
    tech: ['Blockchain', 'Web3.js', 'Ethers.js', 'Polygon', 'Stripe'],
    external: 'https://www.linkedin.com/company/gig-gly',
    slug: 'gig-gly',
  },
  {
    title: '一之己 by TOTEMIST',
    description:
      'A beauty & cosmetics e-commerce platform with customization and social features built with WeChat Mini Program.',
    tech: ['Vue.js', 'PHP', 'Laravel', 'MySQL', 'AliCloud'],
    external: 'https://totemist.net/',
    slug: 'totemist',
  },
]
