'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/shared/section-label'

export default function StudioPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section
      ref={ref}
      className="px-6 md:px-10 lg:px-16 py-24 border-t border-warm-beige dark:border-charcoal-light"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel index="02">The Studio</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2rem,5vw,4.5rem)] text-charcoal dark:text-warm-white leading-none mt-4 mb-8"
          >
            We build what
            <br />
            endures.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-sans text-sm text-charcoal-muted dark:text-stone leading-relaxed max-w-md mb-10"
          >
            Architecture is understood as a dialogue between material, light,
            and context. We practice at the intersection of rigour and
            intuition — where every decision is both reasoned and felt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Link
              href="/studio"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-extra-wide uppercase text-charcoal dark:text-warm-white hover:opacity-50 transition-opacity group"
            >
              About the Studio
              <span className="block w-6 h-px bg-current transition-all group-hover:w-10" />
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-8"
        >
          {[
            { number: '14', label: 'Years in practice' },
            { number: '60+', label: 'Completed projects' },
            { number: '08', label: 'Countries' },
            { number: '12', label: 'Awards received' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
              className="border-t border-warm-beige dark:border-charcoal-light pt-5"
            >
              <p className="font-serif text-4xl md:text-5xl text-charcoal dark:text-warm-white leading-none mb-2">
                {stat.number}
              </p>
              <p className="font-sans text-[10px] tracking-wide-sm uppercase text-charcoal-muted dark:text-stone">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
