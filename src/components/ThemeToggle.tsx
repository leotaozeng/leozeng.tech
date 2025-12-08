'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { startTransition, useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    startTransition(() => {
      setMounted(true)
    })
  }, [])

  if (!mounted) {
    return <div className="w-5 h-5" />
  }

  const currentTheme = resolvedTheme || theme

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-secondary/10 transition-colors cursor-pointer"
      aria-label={
        currentTheme === 'dark'
          ? 'Switch to light theme'
          : 'Switch to dark theme'
      }
    >
      {currentTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  )
}
