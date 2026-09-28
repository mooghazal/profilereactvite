import type { IconType } from 'react-icons'

/**
 * One contact way in the Contact section, for example the email card.
 *
 * The label and the value are both written as text, and the icon is only
 * decoration, so the card never depends on recognising an icon.
 */
type ContactInfoCardProps = {
  label: string
  value: string
  href: string
  icon: IconType
  /** Links to another site should not replace the portfolio tab. */
  opensInNewTab: boolean
}

export default function ContactInfoCard({
  label,
  value,
  href,
  icon: ContactIcon,
  opensInNewTab,
}: ContactInfoCardProps) {
  // A link without a URL is a profile that is not added yet, so it stays
  // visible but cannot be clicked.
  const isClickable = href !== ''

  return (
    <a
      href={isClickable ? href : undefined}
      target={isClickable && opensInNewTab ? '_blank' : undefined}
      rel={isClickable && opensInNewTab ? 'noreferrer' : undefined}
      className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 ${
        isClickable
          ? 'hover:-translate-y-0.5 hover:border-accent/40'
          : 'pointer-events-none opacity-60'
      }`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/5 text-accent">
        <ContactIcon size={20} aria-hidden="true" />
      </span>

      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
        {/* The value can be longer than the card, so it wraps instead of
            pushing the card wider than the screen. */}
        <span className="mt-1 block break-words text-sm font-medium text-primary sm:text-base">
          {value}
        </span>
      </span>
    </a>
  )
}
