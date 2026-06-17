'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { type Project } from '@/lib/data/projects'
import { padIndex } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  large?: boolean
  priority?: boolean
}

export default function ProjectCard({
  project,
  large = false,
  priority = false,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/works/${project.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div
        className={`relative overflow-hidden bg-warm-beige dark:bg-charcoal-light ${
          large ? 'aspect-[4/3]' : 'aspect-[3/4]'
        }`}
      >
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority={priority}
            sizes={
              large
                ? '(max-width: 768px) 100vw, 66vw'
                : '(max-width: 768px) 100vw, 33vw'
            }
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          animate={{ opacity: hovered ? 0.4 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-charcoal"
        />

        {/* Hover label */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-5 left-5"
        >
          <span className="font-sans text-[10px] tracking-extra-wide uppercase text-warm-white/80">
            View Project →
          </span>
        </motion.div>
      </div>

      {/* Meta */}
      <div className="pt-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-sans text-[10px] text-stone">
              {padIndex(project.index)}
            </span>
            <h3
              className={`font-serif transition-opacity duration-300 ${
                large ? 'text-2xl md:text-3xl' : 'text-xl'
              } text-charcoal dark:text-warm-white group-hover:opacity-60`}
            >
              {project.title}
            </h3>
          </div>
          <p className="font-sans text-[10px] tracking-wide-sm uppercase text-charcoal-muted dark:text-stone">
            {project.category}
          </p>
        </div>
        <span className="font-sans text-[10px] text-stone shrink-0 mt-1">
          {project.year}
        </span>
      </div>
    </Link>
  )
}
