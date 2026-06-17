import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects, getProjectBySlug, getAdjacentProjects } from '@/lib/data/projects'
import ProjectDetail from '@/components/works/project-detail'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)

  return <ProjectDetail project={project} prev={prev} next={next} />
}
