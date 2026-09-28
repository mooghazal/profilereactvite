type ProjectCardProps = {
  title: string
  description: string
  image: string
  technologies: string[]
}

/**
 * One project in the Projects section.
 *
 * The three projects share the same structure, so one component renders all of
 * them and the text lives in `data/projects.ts`.
 */
export default function ProjectCard({
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      {/* A fixed ratio gives the three cards the same image area, and
          `object-cover` crops the picture instead of stretching it. */}
      <img
        src={image}
        alt={`${title} project preview`}
        className="aspect-16/9 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-6">
        {/* An `h3` because the section title above is the `h2`. */}
        <h3 className="font-heading text-lg font-bold leading-snug text-primary sm:text-xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        {/* A list of pills: they wrap on their own when the row gets narrow. */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
