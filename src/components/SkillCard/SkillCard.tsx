import type { IconType } from 'react-icons'

/**
 * One technology in the Skills section.
 *
 * The icon is decoration only: the name is always written next to it, so the
 * technology never depends on recognising a logo.
 */
type SkillCardProps = {
  name: string
  icon: IconType
  /** Extra classes, used by the grid for the last card. */
  className?: string
}

export default function SkillCard({ name, icon: SkillIcon, className = '' }: SkillCardProps) {
  return (
    <li
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/40 sm:gap-4 sm:p-5 ${className}`}
    >
      {/* The square keeps the icon area the same size for every technology, so
          the cards all look balanced. */}
      <span className="flex h-12 w-12 items-center justify-center text-accent">
        <SkillIcon size={30} aria-hidden="true" />
      </span>

      <span className="text-sm font-medium leading-snug text-primary">{name}</span>
    </li>
  )
}
