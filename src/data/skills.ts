import type { IconType } from 'react-icons'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa6'
import { SiAxios, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'

/**
 * The technologies shown in the Skills section.
 *
 * They are static data so the section can render them with `.map()` instead of
 * repeating the same card markup ten times.
 */
export type Skill = {
  name: string
  icon: IconType
}

export const skills: Skill[] = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Axios', icon: SiAxios },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Sass', icon: FaSass },
]
