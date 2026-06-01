import ServiceProjects from '@/components/service-page/ServiceProjects'
import type { PricingProject } from '@/types/pricing'

interface PricingProjectsProps {
  projects: PricingProject[]
}

export default function PricingProjects({ projects }: PricingProjectsProps) {
  return <ServiceProjects eyebrow="Relevant work" title="Similar projects and patterns." projects={projects} />
}
