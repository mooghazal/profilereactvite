import card1Image from '@/assets/images/card1.png'
import card2Image from '@/assets/images/card2.png'
import card3Image from '@/assets/images/card3.png'

/**
 * The projects shown in the Projects section.
 *
 * They are static data so the section can render them with `.map()` instead of
 * repeating the same card markup three times.
 */
export type Project = {
  title: string
  description: string
  image: string
  /** The technologies used in the project, shown as small pills. */
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: 'Prayer Times Dashboard',
    description:
      'A responsive web application that displays daily prayer times through a clean and user-friendly interface.',
    image: card1Image,
    technologies: ['React', 'TypeScript', 'API', 'Axios'],
  },
  {
    title: 'Al Safa & Al Marwa Umrah Booking',
    description:
      'A responsive website designed to present Umrah services and provide a simple booking experience for users.',
    image: card2Image,
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'React Router'],
  },
  {
    title: 'Educational Platform',
    description:
      'A responsive frontend platform designed to present courses and provide a clear and engaging learning experience.',
    image: card3Image,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
  },
]
