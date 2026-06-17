'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/lib/data/projects'
import ProjectCard from '@/components/works/project-card'
import SectionLabel from '@/components/shared/section-label'

const categories = ['All', 'Residential', 'Cultural', 'Mixed Use', 'Commercial']

export default function WorksPage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 lg:px-16">
      {/* Header */}
      <div ref={ref} className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>Portfolio</SectionLabel>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3rem,8vw,7rem)] text-charcoal dark:text-warm-white leading-none mt-4"
        >
          Selected
          <br />
          Works
        </motion.h1>
      </div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="flex flex-wrap gap-3 mb-14"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-sans text-[10px] tracking-extra-wide uppercase px-4 py-2 border transition-all duration-300 ${
              activeCategory === cat
                ? 'border-charcoal dark:border-warm-white bg-charcoal dark:bg-warm-white text-warm-white dark:text-charcoal'
                : 'border-warm-beige dark:border-charcoal-light text-charcoal-muted dark:text-stone hover:border-stone'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, i) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} priority={i < 3} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
