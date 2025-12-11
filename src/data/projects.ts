export interface Project {
  title: string
  description: string
  tech: string[]
  external: string
  slug: string
  logo?: string
  images?: string[]
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
    logo: '/images/projects/ecoimpresores.svg',
  },
  {
    title: '一之己 by TOTEMIST',
    description:
      'A Chinese-French Cosmetic & Lifestyle brand with international ambitions aimed to disrupt the beauty industry in China with its intricately designed, interconnected, and ultra-personalized WeChat Mini Program by providing their audience with an one-and-only user experience.',
    tech: ['Vue.js', 'PHP', 'Laravel', 'MySQL', 'AliCloud'],
    external: 'https://totemist.net/',
    slug: 'totemist',
    logo: '/images/projects/totemist.jpg',
  },
  {
    title: 'HRHero',
    description:
      'A mobile-first, video-based jobs and talent marketplace / applicant tracking system.',
    tech: ['Vue.js', 'Quasar', 'NestJS', 'MySQL', 'Redis', 'AliCloud'],
    external: 'https://hrheroapp.com',
    slug: 'hrhero',
    logo: '/images/projects/hrhero.jpeg',
  },
  {
    title: 'Macau Grand Prix Museum',
    description:
      'In preparation for its 2021 reopening, the Macao Grand Prix Museum required a modern software solution to power its new "Tourism + Sports" interactive zones. The goal was to replace static displays with engaging, digital "racing scenarios" that visitors could control.',
    tech: [
      'Electron',
      'Vue.js',
      'Lottie',
      'Node.js',
      'Multimedia Hardware Integration',
    ],
    external: 'https://mgpm.macaotourism.gov.mo',
    slug: 'macau-grand-prix-museum',
    logo: '/images/projects/macau-grand-prix-museum.png',
  },
  {
    title: 'Gig-gly',
    description:
      'A crypto-powered recruitment platform for web3. It uses blockchain, tokens, and referral rewards.',
    tech: ['Blockchain', 'Web3.js', 'Ethers.js', 'Polygon', 'Stripe'],
    external: 'https://www.linkedin.com/company/gig-gly',
    slug: 'gig-gly',
    logo: '/images/projects/gig-gly/logo.svg',
    images: [
      '/images/projects/gig-gly/job-listing.svg',
      '/images/projects/gig-gly/company.svg',
      '/images/projects/gig-gly/refer.svg',
      '/images/projects/gig-gly/resume.svg',
    ],
  },
]
