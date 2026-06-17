'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/shared/section-label'

export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })
  const formRef = useRef<HTMLDivElement>(null)
  const formInView = useInView(formRef, { once: true, margin: '-5%' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div
        ref={headerRef}
        className="px-6 md:px-10 lg:px-16 pb-20 border-b border-warm-beige dark:border-charcoal-light"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>Get In Touch</SectionLabel>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-8 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,7vw,6rem)] text-charcoal dark:text-warm-white leading-none"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-sans text-sm text-charcoal-muted dark:text-stone leading-relaxed max-w-sm"
          >
            We review every inquiry personally. If your project is a good fit,
            we will arrange a meeting — in person where possible, or by video.
          </motion.p>
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Info column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="space-y-10">
            <div>
              <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-stone mb-3">
                Email
              </p>
              <a
                href="mailto:studio@forma.com"
                className="font-serif text-xl text-charcoal dark:text-warm-white hover:opacity-50 transition-opacity"
              >
                studio@forma.com
              </a>
            </div>

            <div>
              <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-stone mb-3">
                Instagram
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-charcoal dark:text-warm-white hover:opacity-50 transition-opacity"
              >
                @formastudio
              </a>
            </div>

            <div>
              <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-stone mb-3">
                Offices
              </p>
              <div className="space-y-3">
                {[
                  ['Zurich', 'Seestrasse 14, 8002 Zürich'],
                  ['Berlin', 'Torstraße 99, 10119 Berlin'],
                  ['Amsterdam', 'Keizersgracht 264, 1016 EV'],
                ].map(([city, address]) => (
                  <div key={city}>
                    <p className="font-sans text-[10px] tracking-wide-sm uppercase text-charcoal-muted dark:text-stone/60 mb-0.5">
                      {city}
                    </p>
                    <p className="font-sans text-sm text-charcoal-light dark:text-warm-beige">
                      {address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-warm-beige dark:border-charcoal-light">
              <p className="font-sans text-[10px] tracking-extra-wide uppercase text-stone mb-3">
                New Projects
              </p>
              <p className="font-sans text-xs text-charcoal-muted dark:text-stone leading-relaxed max-w-xs">
                We are currently accepting inquiries for projects beginning in
                late 2025. Response time is typically 2–3 working days.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form column */}
        <div ref={formRef}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col justify-center"
            >
              <p className="font-serif text-3xl text-charcoal dark:text-warm-white mb-4">
                Thank you.
              </p>
              <p className="font-sans text-sm text-charcoal-muted dark:text-stone leading-relaxed">
                We have received your inquiry and will be in touch within 2–3
                working days.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block font-sans text-[10px] tracking-extra-wide uppercase text-stone mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-warm-beige dark:border-charcoal-light pb-3 font-serif text-lg text-charcoal dark:text-warm-white focus:outline-none focus:border-charcoal dark:focus:border-warm-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-[10px] tracking-extra-wide uppercase text-stone mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-warm-beige dark:border-charcoal-light pb-3 font-serif text-lg text-charcoal dark:text-warm-white focus:outline-none focus:border-charcoal dark:focus:border-warm-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Project type */}
              <div>
                <label
                  htmlFor="type"
                  className="block font-sans text-[10px] tracking-extra-wide uppercase text-stone mb-2"
                >
                  Project Type
                </label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-warm-beige dark:border-charcoal-light pb-3 font-serif text-lg text-charcoal dark:text-warm-white focus:outline-none focus:border-charcoal dark:focus:border-warm-white transition-colors appearance-none"
                >
                  <option value="" className="bg-warm-white dark:bg-charcoal">
                    Select a type
                  </option>
                  {[
                    'Architecture',
                    'Interior',
                    'Renovation',
                    'Competition',
                    'Consulting',
                    'Other',
                  ].map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-warm-white dark:bg-charcoal"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-[10px] tracking-extra-wide uppercase text-stone mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-warm-beige dark:border-charcoal-light pb-3 font-serif text-lg text-charcoal dark:text-warm-white focus:outline-none focus:border-charcoal dark:focus:border-warm-white transition-colors resize-none"
                  placeholder="Tell us about your project…"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 font-sans text-[11px] tracking-extra-wide uppercase text-charcoal dark:text-warm-white border border-charcoal dark:border-warm-white px-8 py-4 hover:bg-charcoal hover:text-warm-white dark:hover:bg-warm-white dark:hover:text-charcoal transition-all duration-300"
                >
                  Send Inquiry
                  <span className="block w-4 h-px bg-current transition-all group-hover:w-8" />
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  )
}
