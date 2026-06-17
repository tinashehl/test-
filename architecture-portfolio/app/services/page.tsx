'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/shared/section-label'

const services = [
  {
    number: '01',
    title: 'Architecture',
    scope: [
      'New build residential',
      'Cultural and civic buildings',
      'Mixed-use development',
      'Competition entries',
    ],
    description:
      'We undertake new building projects from initial feasibility through to completion. Our process is iterative, collaborative, and disciplined — driven by a single clear idea developed at the outset and tested rigorously through every subsequent stage.\n\nWe take on a limited number of new projects each year to ensure partner-level involvement at every stage of every project.',
  },
  {
    number: '02',
    title: 'Interior',
    scope: [
      'Residential interiors',
      'Hospitality design',
      'Gallery and exhibition spaces',
      'Furniture and object design',
    ],
    description:
      'The interior as a continuation of the architectural idea. We do not separate interior from architecture — the two are developed simultaneously, each informing the other.\n\nMaterial palettes, lighting design, joinery details, and furniture selection are all understood as part of a single design act.',
  },
  {
    number: '03',
    title: 'Renovation',
    scope: [
      'Historic building adaptation',
      'Residential renovation',
      'Change of use',
      'Heritage consultation',
    ],
    description:
      'Sensitive work in existing buildings requires a different kind of attention. We begin by understanding what the building was trying to say — and then we consider how to complete that conversation.\n\nSometimes the right intervention is almost invisible. Sometimes it is a clear, confident addition that respects rather than mimics the original.',
  },
  {
    number: '04',
    title: 'Competition Design',
    scope: [
      'International competition entries',
      'Invited competition participation',
      'Concept design',
      'Strategic brief development',
    ],
    description:
      'We enter a selection of competitions each year — both invited and open. Competitions allow us to work at scales and in contexts beyond our current built portfolio, and to develop ideas that sometimes find their way into subsequent commissions.',
  },
  {
    number: '05',
    title: 'Consulting',
    scope: [
      'Architectural advisory',
      'Brief development',
      'Site and feasibility assessment',
      'Design quality review',
    ],
    description:
      'For clients and developers who require independent architectural advice without a full design commission, we offer a consulting service. This might include brief development, site assessment, design quality review for projects by other architects, or strategic guidance on architectural decision-making.',
  },
]

export default function ServicesPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div
        ref={headerRef}
        className="px-6 md:px-10 lg:px-16 pb-20 border-b border-warm-beige dark:border-charcoal-light"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>What We Do</SectionLabel>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-8 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,7vw,6rem)] text-charcoal dark:text-warm-white leading-none"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-sans text-sm text-charcoal-muted dark:text-stone leading-relaxed max-w-sm"
          >
            Each engagement is structured to the specific needs of the project.
            We are not a large office — the partners are present at every stage,
            in every meeting, on every site visit.
          </motion.p>
        </div>
      </div>

      {/* Services accordion */}
      <div className="divide-y divide-warm-beige dark:divide-charcoal-light">
        {services.map((service, i) => (
          <div key={service.number} className="px-6 md:px-10 lg:px-16">
            <button
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
              className="w-full py-8 flex items-center justify-between gap-6 text-left group"
              aria-expanded={activeIndex === i}
            >
              <div className="flex items-baseline gap-5">
                <span className="font-sans text-[10px] text-stone">
                  {service.number}
                </span>
                <span className="font-serif text-2xl md:text-4xl text-charcoal dark:text-warm-white group-hover:opacity-60 transition-opacity duration-300">
                  {service.title}
                </span>
              </div>
              <motion.span
                animate={{ rotate: activeIndex === i ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 w-6 h-6 flex items-center justify-center text-charcoal-muted dark:text-stone text-2xl leading-none"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-1">
                      <p className="font-sans text-[10px] tracking-extra-wide uppercase text-stone mb-4">
                        Scope
                      </p>
                      <ul className="space-y-2">
                        {service.scope.map((item) => (
                          <li
                            key={item}
                            className="font-sans text-xs text-charcoal-muted dark:text-stone flex items-start gap-2"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-stone shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      {service.description.split('\n\n').map((para, j) => (
                        <p
                          key={j}
                          className="font-sans text-sm text-charcoal-light dark:text-warm-beige leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
