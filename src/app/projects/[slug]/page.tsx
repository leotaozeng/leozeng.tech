'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SideSocials from '@/components/SideSocials'
import SideEmail from '@/components/SideEmail'
import { use, useState, useEffect } from 'react'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params)
  const project = projects.find((p) => p.slug === slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!project) {
    notFound()
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

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
            {project.images && project.images.length > 0
              ? project.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className="aspect-video bg-secondary/10 border border-border rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                ))
              : [1, 2, 3, 4].map((index) => (
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

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage}
              alt={`${project.title} full size image`}
              width={0}
              height={0}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              sizes="100vw"
              unoptimized
            />
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}
