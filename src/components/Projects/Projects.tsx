import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Section from '@/components/Section/Section'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
        A selection of projects I have built throughout my learning and
        development journey.
      </p>

      {/* One card per row on mobile, two per row on a tablet, and the three
          cards side by side from the large breakpoint up. */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </Section>
  )
}
