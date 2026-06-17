'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/works', label: 'Works' },
  { href: '/studio', label: 'Studio' },
  { href: '/services', label: 'Services' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-warm-white/90 dark:bg-charcoal/90 backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <nav className="px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'font-serif text-sm tracking-wide-sm transition-colors duration-300',
              scrolled || !isHome
                ? 'text-charcoal dark:text-warm-white'
                : 'text-warm-white'
            )}
          >
            FORMA Studio
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'font-sans text-[11px] tracking-extra-wide uppercase transition-colors duration-300',
                    'hover:opacity-60',
                    pathname.startsWith(link.href)
                      ? 'opacity-100'
                      : 'opacity-70',
                    scrolled || !isHome
                      ? 'text-charcoal dark:text-warm-white'
                      : 'text-warm-white'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={cn(
              'md:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300',
              scrolled || !isHome
                ? 'text-charcoal dark:text-warm-white'
                : 'text-warm-white'
            )}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-5 h-px bg-current origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              className="block w-5 h-px bg-current"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-5 h-px bg-current origin-center"
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-warm-white dark:bg-charcoal flex flex-col justify-center px-8"
          >
            <ul className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-4xl text-charcoal dark:text-warm-white hover:opacity-50 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 left-8"
            >
              <p className="font-sans text-[11px] tracking-extra-wide uppercase text-charcoal-muted dark:text-stone">
                Architecture & Design
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
