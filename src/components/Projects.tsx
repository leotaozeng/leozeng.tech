'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'Meldd',
    description:
      'A collaborative document editing platform with real-time contributions, voting, and document history replay. Built with React Native/Expo and includes AI integration using Spark LLM and DeepSeek to generate perspective opinions for topic clusters.',
    tech: ['React Native', 'Expo', 'NestJS', 'GraphQL', 'Spark LLM', 'DeepSeek'],
    github: 'https://github.com/TheProlog',
    external: 'https://app.meldd.com',
  },
  {
    title: 'HRHero',
    description:
      'A mobile-first, video-based jobs and talent marketplace / applicant tracking system.',
    tech: ['Vue.js', 'Quasar', 'NestJS', 'MySQL', 'Redis', 'AliCloud'],
    github: 'https://github.com/hrhero-seekr',
    external: 'https://hrheroapp.com/',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A sleek weather application providing detailed forecasts, historical data visualization, and location-based alerts using the OpenWeather API.',
    tech: ['Vue.js', 'Chart.js', 'Tailwind', 'API'],
    github: '#',
    external: '#',
  },
  {
    title: 'Portfolio V1',
    description:
      'My first portfolio site built with plain HTML, CSS, and JavaScript. A great learning experience in responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    external: '#',
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
            Some Things I&apos;ve Built
          </h2>
          <div className="h-px bg-border w-full ml-6 max-w-[300px]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-secondary/5 p-8 rounded-xl shadow-sm hover:shadow-md border border-border flex flex-col h-full transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-foreground">
                  <Folder size={40} strokeWidth={1.5} />
                </div>
                <div className="flex space-x-4 text-secondary">
                  <a
                    href={project.github}
                    className="hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.external}
                    className="hover:text-foreground transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink size={20} />
                  </a>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
