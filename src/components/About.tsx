'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
          <div className="h-px bg-border w-full ml-6 max-w-[300px]"></div>
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
              internet. My interest in web development started back in 2017 when
              I decided to try editing custom Tumblr themes — turns out hacking
              together HTML & CSS was pretty fun!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I&apos;ve had the privilege of working
              at an advertising agency, multiple start-ups, and a medium-sized
              corporation. My main focus these days is building accessible,
              inclusive products and digital experiences.
            </p>
            <p className="mb-4">
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4 text-foreground">
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> React
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Next.js
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> React Native
                (Expo)
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Node.js
              </li>
              <li className="flex items-center">
                <span className="text-secondary mr-2">▹</span> Go
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
            <div className="relative w-full aspect-square rounded-xl overflow-hidden z-10 bg-secondary/10 group-hover:bg-transparent transition-colors duration-300">
              <Image
                src="/images/profile.png"
                alt="Leo Zeng"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
