'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Expo', category: 'Frontend' },
  { name: 'React Native', category: 'Frontend' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'AliCloud', category: 'DevOps' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-10"
        >
          <h2 className="text-3xl font-bold text-foreground whitespace-nowrap">
            Technical Skills
          </h2>
          <div className="h-px bg-border w-full ml-6 max-w-[300px]"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-secondary/5 p-4 rounded-lg text-center border border-transparent hover:border-foreground transition-all duration-300 group cursor-default"
            >
              <h3 className="text-foreground font-medium text-sm transition-colors">
                {skill.name}
              </h3>
              <span className="text-xs text-secondary mt-2 block">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
