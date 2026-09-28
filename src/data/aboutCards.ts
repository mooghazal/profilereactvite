/**
 * The learning tracks shown as cards on the About page.
 *
 * They are stored as data so the page can render them with `.map()` instead of
 * repeating the same markup three times.
 */

export type AboutCardItem = {
  /** Two cards share the same title, so each one needs its own key. */
  id: string
  title: string
  /** Optional source of the track, shown as a small label above the title. */
  subtitle?: string
  description: string
}

export const aboutCards: AboutCardItem[] = [
  {
    id: 'react-iti',
    title: 'React Development',
    subtitle: 'ITI',
    description: 'Completed a React Development course through ITI.',
  },
  {
    id: 'react-udemy',
    title: 'React Development',
    subtitle: 'Udemy',
    description: 'Completed a React Development course through Udemy.',
  },
  {
    id: 'self-development',
    title: 'Self Development',
    description:
      'Continuously improving my skills through self-learning and practical projects.',
  },
]
