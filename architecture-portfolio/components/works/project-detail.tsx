'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { type Project } from '@/lib/data/projects'
import ImageReveal from '@/components/shared/image-reveal'
import SectionLabel from '@/components/shared/section-label'

interface ProjectDetailProps {
  project: Project
  prev: Project | null
  next: Project | null
}

export default function ProjectDetail({
  project,
  prev,
  next,
}: ProjectDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  const conceptRef = useRef<HTMLDivElement>(null)
  const conceptInView = useInView(conceptRef, { once: true, margin: '-10%' })

  const galleryRef = useRef<HTMLDivElement>(null)
  const galleryInView = useInView(galleryRef, { once: true, margin: '-10%' })

  return (
    <>
      {/* Hero */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-warm-white/60 mb-4">
              {project.category} — {project.year}
            </p>
            <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] text-warm-white leading-none">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-warm-beige dark:border-charcoal-light px-6 md:px-10 lg:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Location', value: project.location },
          { label: 'Area', value: project.area },
          { label: 'Status', value: project.status },
          { label: 'Year', value: project.year },
        ].map((item) => (
          <div key={item.label}>
            <p className="font-sans text-[10px] tracking-extra-wide uppercase text-charcoal-muted dark:text-stone mb-1">
              {item.label}
            </p>
            <p className="font-serif text-base text-charcoal dark:text-warm-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Description + Concept */}
      <div
        ref={conceptRef}
        className="px-6 md:px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={conceptInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel className="mb-6">Concept</SectionLabel>
          <p className="font-serif text-xl md:text-2xl text-charcoal dark:text-warm-white leading-snug italic mb-8">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={conceptInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
        >
          {project.concept.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="font-sans text-sm text-charcoal-light dark:text-warm-beige leading-relaxed"
            >
              {para}
            </p>
          ))}
        </motion.div>
      </div>

      {/* First image */}
      <div className="px-6 md:px-10 lg:px-16 mb-4">
        <ImageReveal
          src={project.images[0]}
          alt={`${project.title} — view 01`}
          containerClassName="aspect-[16/9] w-full"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
      </div>

      {/* Two images side by side */}
      <div className="px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <ImageReveal
          src={project.images[1]}
          alt={`${project.title} — view 02`}
          containerClassName="aspect-[4/5] w-full"
          delay={0.1}
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        <ImageReveal
          src={project.images[2]}
          alt={`${project.title} — view 03`}
          containerClassName="aspect-[4/5] w-full"
          delay={0.2}
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>

      {/* Approach + Materials */}
      <div className="px-6 md:px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-warm-beige dark:border-charcoal-light mt-10">
        <div>
          <SectionLabel className="mb-6">Approach</SectionLabel>
          <p className="font-sans text-sm text-charcoal-light dark:text-warm-beige leading-relaxed">
            {project.approach}
          </p>
        </div>

        <div>
          <SectionLabel className="mb-6">Materials</SectionLabel>
          <ul className="space-y-3">
            {project.materials.map((mat, i) => (
              <li
                key={i}
                className="flex items-center gap-4 font-sans text-sm text-charcoal-light dark:text-warm-beige border-b border-warm-beige dark:border-charcoal-light pb-3"
              >
                <span className="font-sans text-[10px] text-stone w-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {mat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Last gallery image */}
      <div ref={galleryRef} className="px-6 md:px-10 lg:px-16 mb-24">
        <ImageReveal
          src={project.images[3]}
          alt={`${project.title} — view 04`}
          containerClassName="aspect-[16/9] w-full"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      {/* Tags */}
      <div className="px-6 md:px-10 lg:px-16 mb-20 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans text-[10px] tracking-extra-wide uppercase px-3 py-1.5 border border-warm-beige dark:border-charcoal-light text-charcoal-muted dark:text-stone"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project navigation */}
      <div className="border-t border-warm-beige dark:border-charcoal-light grid grid-cols-1 md:grid-cols-2">
        {prev ? (
          <Link
            href={`/works/${prev.slug}`}
            className="group border-b md:border-b-0 md:border-r border-warm-beige dark:border-charcoal-light px-6 md:px-10 lg:px-16 py-10 flex flex-col gap-2 hover:bg-warm-beige/20 dark:hover:bg-charcoal-light/20 transition-colors"
          >
            <span className="font-sans text-[10px] tracking-extra-wide uppercase text-stone">
              ← Previous
            </span>
            <span className="font-serif text-2xl md:text-3xl text-charcoal dark:text-warm-white group-hover:opacity-60 transition-opacity">
              {prev.title}
            </span>
            <span className="font-sans text-[10px] text-stone">{prev.category}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/works/${next.slug}`}
            className="group px-6 md:px-10 lg:px-16 py-10 flex flex-col gap-2 text-right md:items-end hover:bg-warm-beige/20 dark:hover:bg-charcoal-light/20 transition-colors"
          >
            <span className="font-sans text-[10px] tracking-extra-wide uppercase text-stone">
              Next →
            </span>
            <span className="font-serif text-2xl md:text-3xl text-charcoal dark:text-warm-white group-hover:opacity-60 transition-opacity">
              {next.title}
            </span>
            <span className="font-sans text-[10px] text-stone">{next.category}</span>
          </Link>
        ) : (
          <Link
            href="/works"
            className="group px-6 md:px-10 lg:px-16 py-10 flex flex-col gap-2 text-right md:items-end hover:bg-warm-beige/20 dark:hover:bg-charcoal-light/20 transition-colors"
          >
            <span className="font-sans text-[10px] tracking-extra-wide uppercase text-stone">
              ← Back to Works
            </span>
          </Link>
        )}
      </div>
    </>
  )
}
