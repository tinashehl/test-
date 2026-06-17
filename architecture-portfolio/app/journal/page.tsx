'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { journalPosts } from '@/lib/data/journal'
import SectionLabel from '@/components/shared/section-label'
import { formatDate } from '@/lib/utils'

export default function JournalPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })
  const listRef = useRef<HTMLDivElement>(null)
  const listInView = useInView(listRef, { once: true, margin: '-5%' })

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div
        ref={headerRef}
        className="px-6 md:px-10 lg:px-16 pb-16 border-b border-warm-beige dark:border-charcoal-light"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>Thinking</SectionLabel>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-8 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,7vw,6rem)] text-charcoal dark:text-warm-white leading-none"
          >
            Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-sans text-sm text-charcoal-muted dark:text-stone leading-relaxed max-w-sm"
          >
            Essays on architecture, practice, and the ideas that shape our work.
            Written by the partners and associates of FORMA Studio.
          </motion.p>
        </div>
      </div>

      {/* Posts list */}
      <div ref={listRef} className="divide-y divide-warm-beige dark:divide-charcoal-light">
        {journalPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.7 }}
          >
            <div className="group px-6 md:px-10 lg:px-16 py-8 hover:bg-warm-beige/20 dark:hover:bg-charcoal-light/20 transition-colors duration-300 cursor-default">
              <div className="grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-1 font-sans text-[10px] text-stone">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="col-span-11 md:col-span-7">
                  <h2 className="font-serif text-2xl md:text-3xl text-charcoal dark:text-warm-white mb-2 group-hover:opacity-60 transition-opacity duration-300">
                    {post.title}
                  </h2>
                  <p className="font-sans text-xs text-charcoal-muted dark:text-stone leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="hidden md:flex md:col-span-4 flex-col items-end gap-1">
                  <span className="font-sans text-[10px] tracking-wide-sm uppercase text-stone">
                    {post.category}
                  </span>
                  <span className="font-sans text-[10px] text-charcoal-muted dark:text-stone/60">
                    {formatDate(post.date)}
                  </span>
                  <span className="font-sans text-[10px] text-charcoal-muted dark:text-stone/60">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Essay body preview */}
              <div className="mt-6 col-span-11 pl-[calc(1/12*100%+1rem)] md:pl-[calc(1/12*100%+1rem)] overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-out">
                <p className="font-sans text-xs text-charcoal-muted dark:text-stone leading-relaxed line-clamp-3">
                  {post.body[0]}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
