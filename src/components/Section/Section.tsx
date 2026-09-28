import type { ReactNode } from 'react'

/**
 * One full section of the single scrolling page.
 *
 * It keeps the things every section needs in one place:
 * - the `id` the navigation links jump to,
 * - the same container width and spacing,
 * - a heading, so the page keeps a correct `h1` then `h2` order.
 */
type SectionProps = {
  /** Also used by the navigation to jump to this section. */
  id: string
  /**
   * The standard section heading. It is optional because a section may need a
   * heading of its own shape, such as the Contact section.
   */
  title?: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      // A section without a standard heading is labelled by its own content.
      aria-labelledby={title ? `${id}-title` : undefined}
      // `scroll-mt-navbar` leaves room for the sticky navbar, so jumping to a
      // section never hides its heading underneath the bar.
      className="mx-auto w-full max-w-6xl scroll-mt-navbar px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      {title && (
        <h2
          id={`${id}-title`}
          className="font-heading text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl"
        >
          {title}
        </h2>
      )}

      {children}
    </section>
  )
}
