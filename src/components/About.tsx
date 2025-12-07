'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-10"
        >
          <h2 className="text-3xl font-bold text-foreground whitespace-nowrap">
            About Me
          </h2>
          <div className="h-[1px] bg-border w-full ml-6 max-w-[300px]"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 text-secondary text-lg leading-relaxed"
          >
            <p className="mb-4">
              Hello! My name is Leo and I enjoy creating things that live on the
              internet. My interest in web development started back in 2012 when
              I decided to try editing custom Tumblr themes — turns out hacking
              together HTML & CSS was pretty fun!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4 text-foreground">
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> React
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Node.js
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Next.js
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            {/* Image Placeholder Frame */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden z-10 bg-secondary/10 group-hover:bg-transparent transition-colors duration-300">
              {/* Replace src with actual image */}
              <div className="w-full h-full flex items-center justify-center text-foreground font-medium bg-secondary/5">
                [Profile Image]
              </div>
            </div>
            {/* Border offset effect */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-foreground rounded-xl -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
