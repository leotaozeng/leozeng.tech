'use client'

import { motion } from 'framer-motion'

const PlantLogo = () => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-foreground"
      initial="hidden"
      animate="visible"
    >
      {/* Stem: Curve from bottom center to slightly right top */}
      <motion.path
        d="M12 22C12 22 12 2 12 2"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut"
            }
          }
        }}
      />

      {/* Right Leaf: Sprout shape */}
      <motion.path
        d="M12 14C16 14 20 10 20 6" // Simplified curve
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut"
            }
          }
        }}
      />

      {/* Left Leaf: Smaller sprout shape */}
      <motion.path
        d="M12 14C8 14 4 11 4 8" // Simplified curve
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut"
            }
          }
        }}
      />
    </motion.svg>
  )
}

export default PlantLogo
