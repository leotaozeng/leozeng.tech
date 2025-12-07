import React from 'react'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background py-8 text-center border-t border-border">
      <div className="flex justify-center space-x-6 mb-4 md:hidden">
        <a
          href="#"
          className="text-secondary hover:text-foreground transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="#"
          className="text-secondary hover:text-foreground transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="#"
          className="text-secondary hover:text-foreground transition-colors"
        >
          <Twitter size={20} />
        </a>
        <a
          href="#"
          className="text-secondary hover:text-foreground transition-colors"
        >
          <Instagram size={20} />
        </a>
      </div>
      <p className="text-secondary/60 font-mono text-xs hover:text-foreground transition-colors cursor-default">
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Designed & Built by Leo
        </a>
      </p>
    </footer>
  )
}

export default Footer
