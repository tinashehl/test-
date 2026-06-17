import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-warm-beige dark:border-charcoal-light px-6 md:px-10 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {/* Brand */}
        <div>
          <p className="font-serif text-base text-charcoal dark:text-warm-white mb-2">
            FORMA Studio
          </p>
          <p className="font-sans text-xs text-charcoal-muted dark:text-stone leading-relaxed max-w-48">
            Architecture of quiet intensity.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-charcoal-muted dark:text-stone mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {[
              ['Works', '/works'],
              ['Studio', '/studio'],
              ['Services', '/services'],
              ['Journal', '/journal'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-sans text-xs text-charcoal-light dark:text-warm-beige hover:text-charcoal dark:hover:text-warm-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-charcoal-muted dark:text-stone mb-4">
            Contact
          </p>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:studio@forma.com"
                className="font-sans text-xs text-charcoal-light dark:text-warm-beige hover:text-charcoal dark:hover:text-warm-white transition-colors"
              >
                studio@forma.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-charcoal-light dark:text-warm-beige hover:text-charcoal dark:hover:text-warm-white transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <p className="font-sans text-xs text-charcoal-light dark:text-warm-beige">
                Zurich — Berlin — Amsterdam
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-warm-beige dark:border-charcoal-light flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="font-sans text-[10px] tracking-wide-sm text-charcoal-muted dark:text-stone">
          © {year} FORMA Studio. All rights reserved.
        </p>
        <p className="font-sans text-[10px] tracking-wide-sm text-charcoal-muted dark:text-stone">
          Architecture & Design
        </p>
      </div>
    </footer>
  )
}
