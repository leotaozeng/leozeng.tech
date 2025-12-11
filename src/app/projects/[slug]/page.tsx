'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SideSocials from '@/components/SideSocials'
import SideEmail from '@/components/SideEmail'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = React.use(params)
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-background min-h-screen text-secondary selection:bg-foreground selection:text-background overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center text-secondary hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft
                size={20}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="mb-6">
              {project.logo && (
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={0}
                  height={0}
                  className="h-20 w-auto object-contain"
                  sizes="(max-width: 768px) 64px, 80px"
                  unoptimized
                />
              )}
            </h1>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8 font-mono text-sm text-secondary/80">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-border rounded-md bg-secondary/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-foreground text-foreground px-6 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors font-medium"
            >
              <span className="mr-2">Visit Project</span>
              <ExternalLink size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-video bg-secondary/10 border border-border rounded-xl flex items-center justify-center"
              >
                <span className="text-secondary/40 font-mono text-sm">
                  Image {index}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
      <SideSocials />
      <SideEmail />
    </main>
  )
}
