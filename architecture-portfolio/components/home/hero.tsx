'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const words = ['Clarity.', 'Permanence.', 'Restraint.']

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return
      const scrolled = window.scrollY
      const overlay = containerRef.current.querySelector(
        '[data-parallax]'
      ) as HTMLElement
      if (overlay) {
        overlay.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div data-parallax className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1549407015-ab7e6d9a3e59?w=1920&q=85"
          alt="FORMA Studio — architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[10px] tracking-ultra-wide uppercase text-warm-beige/70 mb-8"
          >
            Architecture & Design
          </motion.p>

          {/* Studio name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.9] text-warm-white tracking-tight mb-10"
          >
            FORMA
            <br />
            Studio
          </motion.h1>

          {/* Philosophy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(1rem,2.5vw,1.5rem)] text-warm-white/80 max-w-lg leading-snug italic"
          >
            Designing spaces with{' '}
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.2, duration: 0.6 }}
                className="not-italic text-warm-white"
              >
                {w}{i < words.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 right-6 md:right-10 lg:right-16 flex flex-col items-center gap-3"
        >
          <Link
            href="/works"
            className="font-sans text-[9px] tracking-ultra-wide uppercase text-warm-white/60 hover:text-warm-white transition-colors rotate-90 origin-center"
          >
            Selected Works
          </Link>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-warm-white/30"
          />
        </motion.div>
      </div>

      {/* Bottom project count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-6 md:left-10 lg:left-16 flex items-baseline gap-2"
      >
        <span className="font-serif text-5xl text-warm-white/20 leading-none">
          06
        </span>
        <span className="font-sans text-[10px] tracking-extra-wide uppercase text-warm-white/40">
          Projects
        </span>
      </motion.div>
    </section>
  )
}
