'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Folder } from 'lucide-react'

const projects = [
  {
    title: 'Tip Protector',
    description:
      'A cross-platform mobile tip calculator app built with React Native (Expo) that helps users calculate tips and protect against tip fraud.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Monorepo'],
    external: 'https://tipprotector.app',
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
  },
  {
    title: 'Ecoimpresores',
    description:
      'An online printing and stationery platform where users can upload PDFs, configure print jobs with customization options, design custom notebooks, and purchase stationery products through Shopify integration',
    tech: ['Next.js', 'React', 'TypeScript', 'Shopify'],
    external: 'https://print.ecoimpresores.com',
  },
  {
    title: 'HRHero',
    description:
      'A mobile-first, video-based jobs and talent marketplace / applicant tracking system.',
    tech: ['Vue.js', 'Quasar', 'NestJS', 'MySQL', 'Redis', 'AliCloud'],
    external: 'https://hrheroapp.com',
  },
  {
    title: 'Gig-gly',
    description:
      'A crypto-powered recruitment platform for web3. It uses blockchain, tokens, and referral rewards.',
    tech: ['Blockchain', 'Web3.js', 'Ethers.js', 'Polygon', 'Stripe'],
    external: 'https://www.linkedin.com/company/gig-gly',
  },
  {
    title: '一之己 by TOTEMIST',
    description:
      'A beauty & cosmetics e-commerce platform with customization and social features built with WeChat Mini Program.',
    tech: ['Vue.js', 'PHP', 'Laravel', 'MySQL', 'AliCloud'],
    external: 'https://totemist.net/',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-10"
        >
          <h2 className="text-3xl font-bold text-foreground whitespace-nowrap">
            Projects
          </h2>
          <div className="h-px bg-border w-full ml-6 max-w-[300px]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-secondary/5 p-8 rounded-xl shadow-sm hover:shadow-md border border-border flex flex-col h-full transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-foreground">
                  <Folder size={40} strokeWidth={1.5} />
                </div>
                <div className="flex space-x-4 text-secondary">
                  <div className="hover:text-foreground transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:underline decoration-1 underline-offset-4 transition-all">
                {project.title}
              </h3>

              <p className="text-secondary mb-6 grow leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 mt-auto font-mono text-xs text-secondary/80">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
