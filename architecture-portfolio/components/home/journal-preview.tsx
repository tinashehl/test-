'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { journalPosts } from '@/lib/data/journal'
import SectionLabel from '@/components/shared/section-label'
import { formatDate } from '@/lib/utils'

export default function JournalPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const posts = journalPosts.slice(0, 3)

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
          <SectionLabel index="04">Thinking</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-charcoal dark:text-warm-white leading-none mt-4">
            Journal
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/journal"
            className="hidden md:inline-flex items-center gap-3 font-sans text-[11px] tracking-extra-wide uppercase text-charcoal-muted dark:text-stone hover:text-charcoal dark:hover:text-warm-white transition-colors group"
          >
            All Essays
            <span className="block w-6 h-px bg-current transition-all group-hover:w-10" />
          </Link>
        </motion.div>
      </div>

      <div className="space-y-0 divide-y divide-warm-beige dark:divide-charcoal-light">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.7 }}
          >
            <Link
              href={`/journal`}
              className="group flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 py-7 hover:bg-warm-beige/20 dark:hover:bg-charcoal-light/20 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16 transition-colors duration-300"
            >
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-charcoal dark:text-warm-white group-hover:opacity-60 transition-opacity duration-300">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-charcoal-muted dark:text-stone mt-1.5 max-w-lg leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="md:text-right shrink-0 md:ml-8">
                <p className="font-sans text-[10px] tracking-wide-sm uppercase text-stone mb-0.5">
                  {post.category}
                </p>
                <p className="font-sans text-[10px] text-charcoal-muted dark:text-stone/70">
                  {formatDate(post.date)}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
