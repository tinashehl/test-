import type { Metadata } from 'next'
import Hero from '@/components/home/hero'
import SelectedWorks from '@/components/home/selected-works'
import StudioPreview from '@/components/home/studio-preview'
import ServicesPreview from '@/components/home/services-preview'
import JournalPreview from '@/components/home/journal-preview'

export const metadata: Metadata = {
  title: 'FORMA Studio — Architecture & Design',
  description:
    'An architecture practice designing spaces with clarity, permanence, and restraint. Selected works across Europe.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <StudioPreview />
      <ServicesPreview />
      <JournalPreview />
    </>
  )
}
