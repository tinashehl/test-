'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const isHovering = useRef(false)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const onMouseEnterLink = () => {
      isHovering.current = true
      if (ringRef.current) {
        ringRef.current.style.transform = `scale(2)`
        ringRef.current.style.opacity = '0.5'
      }
    }

    const onMouseLeaveLink = () => {
      isHovering.current = false
      if (ringRef.current) {
        ringRef.current.style.transform = `scale(1)`
        ringRef.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', onMouseMove)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink)
        link.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [cursorX, cursorY, dotX, dotY])

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        ref={ringRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ left: springX, top: springY }}
      >
        <div
          className="w-8 h-8 rounded-full border border-charcoal/40 dark:border-warm-white/40 transition-all duration-300"
          style={{ borderWidth: '0.5px' }}
        />
      </motion.div>

      {/* Sharp dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ left: dotX, top: dotY }}
      >
        <div className="w-1 h-1 rounded-full bg-charcoal dark:bg-warm-white" />
      </motion.div>
    </>
  )
}
