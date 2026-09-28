/**
 * One learning track on the About page.
 *
 * The title is a heading so the page keeps a correct order:
 * the page `h1` comes first, then one `h2` per card.
 */
type AboutCardProps = {
  title: string
  /** Optional source of the track, shown as a small label above the title. */
  subtitle?: string
  description: string
}

export default function AboutCard({ title, subtitle, description }: AboutCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      {subtitle && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {subtitle}
        </p>
      )}

      <h2 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-primary sm:text-xl lg:text-2xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  )
}
