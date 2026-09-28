import Section from '@/components/Section/Section'
import SkillCard from '@/components/SkillCard/SkillCard'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
        Technologies and skills I have developed throughout my learning journey.
      </p>

      {/* Three cards per row on mobile, then five per row from the tablet size
          up, which fills exactly two rows. */}
      <ul className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-5 sm:gap-5">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            // Ten cards in a three column grid leave the last one alone in the
            // left column, so it is moved to the middle one. The five column
            // grid fills two whole rows, so `sm:col-start-auto` puts it back in
            // the last column there.
            className={index === skills.length - 1 ? 'col-start-2 sm:col-start-auto' : ''}
          />
        ))}
      </ul>
    </Section>
  )
}
