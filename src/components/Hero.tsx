'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background px-6 pt-20"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-secondary font-medium text-lg mb-5"
          >
            Hey! My name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-tight"
          >
            Leo.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-secondary mb-8 tracking-tight"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-secondary text-lg max-w-xl mb-12 leading-relaxed"
          >
            I&apos;m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <a
              href="#projects"
              className="inline-block border border-foreground text-foreground px-8 py-4 rounded-lg hover:bg-foreground hover:text-background transition-colors font-medium text-sm"
            >
              Check out my projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
