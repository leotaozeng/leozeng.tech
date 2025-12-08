'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-40 bg-background px-6 flex flex-col items-center justify-center text-center"
    >
      <div className="container mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-secondary font-medium text-lg mb-4"
        >
          What&apos;s Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-secondary text-lg mb-12"
        >
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:hello@example.com"
            className="border border-foreground text-foreground px-8 py-4 rounded-lg hover:bg-foreground hover:text-background transition-colors font-medium text-sm inline-block"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
