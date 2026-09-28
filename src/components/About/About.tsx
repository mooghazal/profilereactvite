import AboutCard from '@/components/AboutCard/AboutCard'
import Section from '@/components/Section/Section'
import { aboutCards } from '@/data/aboutCards'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
        I am a Computer Science student at Minya National University, and web
        development is what I care about most. I have completed my Frontend
        Development track, and I am currently expanding my skills toward
        Full-Stack Development. I am passionate about improving my technical
        skills, building real-world projects, and continuously learning.
      </p>

      {/* One column on mobile, then the three cards sit side by side from the
          smallest tablet size upward. */}
      <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-3">
        {aboutCards.map((card) => (
          <AboutCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </div>
    </Section>
  )
}
