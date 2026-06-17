'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@/components/shared/section-label'
import ImageReveal from '@/components/shared/image-reveal'

const team = [
  {
    name: 'Elena Voss',
    role: 'Founding Partner',
    bio: 'ETH Zürich graduate with twenty years of practice across Switzerland, Germany, and the Netherlands. Previously worked with Herzog & de Meuron.',
  },
  {
    name: 'Marcus Holt',
    role: 'Partner, Design',
    bio: 'Studied at the Architectural Association, London. Joined FORMA in 2014 after eight years at Zaha Hadid Architects.',
  },
  {
    name: 'Ingrid Larsen',
    role: 'Associate, Interiors',
    bio: 'Interior architecture specialist with a background in material research. Leads the studio\'s interior design portfolio.',
  },
  {
    name: 'David Park',
    role: 'Associate, Technology',
    bio: 'Computational design and digital fabrication specialist. Oversees parametric modelling and prototype development.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Briefing',
    description:
      'We begin with an extended conversation. Not to gather information, but to understand ambition — what the project should feel like, not just what it should contain.',
  },
  {
    number: '02',
    title: 'Analysis',
    description:
      'Site, programme, and precedent are studied in parallel. We draw by hand at this stage — soft pencil on trace, keeping the possibilities open.',
  },
  {
    number: '03',
    title: 'Concept',
    description:
      'A single clear idea emerges from the analysis. It might be spatial, material, or sectional. This idea guides every subsequent decision.',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'The concept is tested against the brief, the site, and the budget. Where conflicts arise, the concept either wins or evolves — it never simply yields.',
  },
  {
    number: '05',
    title: 'Delivery',
    description:
      'We believe in building as we design: present on site, in dialogue with the craftspeople, responsive to what the materials teach us.',
  },
]

export default function StudioPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })
  const processRef = useRef<HTMLDivElement>(null)
  const processInView = useInView(processRef, { once: true, margin: '-10%' })
  const teamRef = useRef<HTMLDivElement>(null)
  const teamInView = useInView(teamRef, { once: true, margin: '-10%' })

  return (
    <div className="pt-32">
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
          <SectionLabel>The Studio</SectionLabel>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,7vw,6rem)] text-charcoal dark:text-warm-white leading-none"
          >
            Architecture
            <br />
            of Quiet
            <br />
            Intensity.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="flex flex-col justify-end gap-5"
          >
            <p className="font-serif text-lg text-charcoal dark:text-warm-white italic leading-snug">
              "Architecture is understood as a dialogue between material, light,
              and context."
            </p>
            <p className="font-sans text-sm text-charcoal-muted dark:text-stone leading-relaxed">
              FORMA Studio is a Zurich-based architecture practice founded in 2010.
              We work across residential, cultural, and mixed-use programmes,
              taking on a limited number of projects each year to ensure the
              full attention of the partners at every stage.
            </p>
            <p className="font-sans text-sm text-charcoal-muted dark:text-stone leading-relaxed">
              Our work is guided by a belief in the permanence of considered
              architecture — that buildings which are thought through clearly
              will remain meaningful across generations of occupants.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image */}
      <div className="px-6 md:px-10 lg:px-16 py-12">
        <ImageReveal
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=85"
          alt="FORMA Studio workspace"
          containerClassName="aspect-[21/9] w-full"
          sizes="(max-width: 768px) 100vw, 90vw"
        />
      </div>

      {/* Philosophy */}
      <div className="px-6 md:px-10 lg:px-16 py-20 border-t border-warm-beige dark:border-charcoal-light grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <SectionLabel className="mb-8">Philosophy</SectionLabel>
        </div>
        <div className="lg:col-span-2 space-y-6">
          {[
            'We begin from a position of restraint. Not because we distrust complexity, but because we have found that the most lasting work is almost always the clearest — where each decision feels not just justified but inevitable.',
            'Material is not decoration. It is structure, texture, thermal mass, acoustic performance, and the agent through which buildings age. We choose materials that develop character over time: concrete that acquires a patina, timber that silvers, stone that wears at the threshold.',
            'Light is the primary material of interior space. Before we draw a single wall, we have studied the sun\'s trajectory across the site at every season. The apertures that result are not windows — they are instruments for measuring time.',
          ].map((para, i) => (
            <p
              key={i}
              className="font-sans text-sm text-charcoal-light dark:text-warm-beige leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Process */}
      <div
        ref={processRef}
        className="px-6 md:px-10 lg:px-16 py-20 border-t border-warm-beige dark:border-charcoal-light"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel className="mb-12">Process</SectionLabel>
        </motion.div>

        <div className="space-y-0 divide-y divide-warm-beige dark:divide-charcoal-light">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="py-6 grid grid-cols-12 gap-4 items-baseline"
            >
              <span className="col-span-1 font-sans text-[10px] text-stone">
                {step.number}
              </span>
              <h3 className="col-span-4 md:col-span-3 font-serif text-xl text-charcoal dark:text-warm-white">
                {step.title}
              </h3>
              <p className="col-span-7 md:col-span-8 font-sans text-xs text-charcoal-muted dark:text-stone leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div
        ref={teamRef}
        className="px-6 md:px-10 lg:px-16 py-20 border-t border-warm-beige dark:border-charcoal-light"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel className="mb-12">Team</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="border-t border-warm-beige dark:border-charcoal-light pt-6"
            >
              <h3 className="font-serif text-xl text-charcoal dark:text-warm-white mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-[10px] tracking-wide-sm uppercase text-stone mb-4">
                {member.role}
              </p>
              <p className="font-sans text-xs text-charcoal-muted dark:text-stone leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
