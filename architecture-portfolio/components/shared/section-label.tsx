import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: ReactNode
  index?: string
  className?: string
}

export default function SectionLabel({
  children,
  index,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 font-sans text-[10px] tracking-ultra-wide uppercase text-charcoal-muted dark:text-stone',
        className
      )}
    >
      {index && <span className="opacity-50">{index}</span>}
      <span>{children}</span>
      <div className="h-px flex-1 bg-current opacity-20 max-w-16" />
    </div>
  )
}
