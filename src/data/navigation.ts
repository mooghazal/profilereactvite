/**
 * The links shown in the main navigation.
 *
 * They are stored as data so the Navbar can render them with `.map()`
 * instead of repeating the same markup for every section.
 *
 * Each `id` is the `id` of the matching section further down the page, so the
 * links scroll to it instead of opening a separate page.
 */

export type NavigationItem = {
  label: string
  id: string
}
export const navigationItems: NavigationItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]
