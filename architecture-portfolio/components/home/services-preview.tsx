'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/shared/section-label'

const services = [
  {
    number: '01',
    title: 'Architecture',
    description:
      'New buildings, considered from first principles. We take on a limited number of projects to ensure full attention.',
  },
  {
    number: '02',
    title: 'Interior',
    description:
      'The interior as an extension of the architectural idea — material, light, and proportion in perfect dialogue.',
  },
  {
    number: '03',
    title: 'Renovation',
    description:
      'Sensitive interventions in existing fabric. Respecting what is there while introducing what is needed.',
  },
  {
    number: '04',
    title: 'Competition Design',
    description:
      'Conceptual rigour applied to competitive briefs. We enter a selection of competitions annually.',
  },
  {
    number: '05',
    title: 'Consulting',
    description:
      'Strategic input on brief, site, and programme for clients and developers seeking independent advice.',
  },
]

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="px-6 md:px-10 lg:px-16 py-24 border-t border-warm-beige dark:border-charcoal-light"
    >
      <div className="flex items-end justify-between mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel index="03">What We Do</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-charcoal dark:text-warm-white leading-none mt-4">
            Services
          </h2>
        </motion.div>
      </div>

      <div className="divide-y divide-warm-beige dark:divide-charcoal-light">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.7 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group py-6 grid grid-cols-12 gap-4 items-baseline cursor-default transition-colors duration-300"
          >
            <span
              className={`col-span-1 font-sans text-[10px] tracking-extra-wide transition-colors duration-300 ${
                hoveredIndex === i
                  ? 'text-charcoal dark:text-warm-white'
                  : 'text-stone'
              }`}
            >
              {service.number}
            </span>
            <h3
              className={`col-span-5 md:col-span-4 font-serif text-xl md:text-2xl transition-colors duration-300 ${
                hoveredIndex === i
                  ? 'text-charcoal dark:text-warm-white'
                  : 'text-charcoal-light dark:text-warm-beige'
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`col-span-6 md:col-span-7 font-sans text-xs text-charcoal-muted dark:text-stone leading-relaxed transition-all duration-300 ${
                hoveredIndex === i ? 'opacity-100' : 'opacity-0 md:opacity-60'
              }`}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-3 font-sans text-[11px] tracking-extra-wide uppercase text-charcoal-muted dark:text-stone hover:text-charcoal dark:hover:text-warm-white transition-colors group"
        >
          All Services
          <span className="block w-6 h-px bg-current transition-all group-hover:w-10" />
        </Link>
      </motion.div>
    </section>
  )
}
