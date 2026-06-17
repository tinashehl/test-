'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [visible, setVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setVisible(v > 0.01 && v < 0.99)
    })
    return unsub
  }, [scrollYProgress])

  if (!visible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px bg-charcoal dark:bg-warm-white/60 origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}
