'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/lib/data/projects'
import ProjectCard from '@/components/works/project-card'
import SectionLabel from '@/components/shared/section-label'

export default function SelectedWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section className="px-6 md:px-10 lg:px-16 pt-24 pb-20" id="works">
      <div ref={ref} className="flex items-end justify-between mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel index="01">Selected Works</SectionLabel>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-charcoal dark:text-warm-white leading-none mt-4">
            Recent
            <br />
            Projects
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="/works"
            className="hidden md:inline-flex items-center gap-3 font-sans text-[11px] tracking-extra-wide uppercase text-charcoal-muted dark:text-stone hover:text-charcoal dark:hover:text-warm-white transition-colors group"
          >
            All Works
            <span className="block w-6 h-px bg-current transition-all group-hover:w-10" />
          </Link>
        </motion.div>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => {
          const isLarge = i === 0 || i === 3
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}
            >
              <ProjectCard
                project={project}
                large={isLarge}
                priority={i < 2}
              />
            </motion.div>
          )
        })}
      </div>

      <div className="mt-10 md:hidden">
        <Link
          href="/works"
          className="inline-flex items-center gap-3 font-sans text-[11px] tracking-extra-wide uppercase text-charcoal-muted dark:text-stone hover:text-charcoal dark:hover:text-warm-white transition-colors group"
        >
          View All Works
          <span className="block w-6 h-px bg-current transition-all group-hover:w-10" />
        </Link>
      </div>
    </section>
  )
}
