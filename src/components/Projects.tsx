'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Folder } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data/projects'

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
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-secondary/5 p-8 rounded-xl shadow-sm hover:shadow-md border border-border flex flex-col h-full transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex flex-col h-full flex-1"
                  tabIndex={-1}
                  aria-label={`View project details for ${project.title}`}
                  style={{ flexGrow: 1 }}
                >
                  <div className="flex justify-between items-center mb-6 pointer-events-none">
                    <div className="text-foreground pointer-events-auto">
                      <Folder size={40} strokeWidth={1.5} />
                    </div>
                    <div className="flex space-x-4 text-secondary pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault() // Prevent navigation from Link parent
                          e.stopPropagation()
                          window.open(
                            project.external,
                            '_blank',
                            'noopener,noreferrer'
                          )
                        }}
                        className="hover:text-foreground transition-colors cursor-pointer text-secondary"
                        aria-label={`Open ${project.title} external link`}
                      >
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:underline decoration-1 underline-offset-4 transition-all pointer-events-none">
                    {project.title}
                  </h3>

                  <p className="text-secondary mb-6 grow leading-relaxed pointer-events-none">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-3 mt-auto font-mono text-xs text-secondary/80 pointer-events-none">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
