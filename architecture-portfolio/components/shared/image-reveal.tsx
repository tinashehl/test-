'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  priority?: boolean
  delay?: number
  sizes?: string
}

export default function ImageReveal({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  delay = 0,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div ref={ref} className={cn('relative overflow-hidden', containerClassName)}>
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 bg-warm-beige dark:bg-charcoal-light z-10 pointer-events-none"
      />
      <motion.div
        initial={{ scale: 1.08 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{
          duration: 1.4,
          delay: delay + 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn('object-cover', className)}
        />
      </motion.div>
    </div>
  )
}
