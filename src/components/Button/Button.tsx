import type { ReactNode } from 'react'

/**
 * The two button styles the design uses.
 * - `primary` is the main call to action and uses the filled accent colour.
 * - `secondary` is a supporting action and uses an outline.
 */
type ButtonVariant = 'primary' | 'secondary'

/**
 * The look shared by every button, regardless of its variant.
 * It also guarantees a comfortable touch target on mobile.
 */
const sharedStyles =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-3 ' +
  'text-center text-sm font-semibold tracking-wide transition duration-300 ' +
  'sm:px-7 sm:py-3.5 sm:text-base'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-background hover:shadow-[0_0_30px_rgba(0,229,153,0.35)] hover:brightness-110',
  secondary:
    'border border-white/15 text-primary hover:border-accent hover:text-accent',
}

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  /**
   * The destination. A `#name` value scrolls down to the section with that id,
   * and a normal path or file opens it as usual. Leave it out to get a
   * `<button>` instead, which is what a form needs for its submit button.
   */
  href?: string
  /** Extra classes, used for layout such as `w-full` or `flex-1`. */
  className?: string
  /** Triggers a browser download, used for the CV. */
  download?: string
  /** Only used when there is no `href`. */
  type?: 'submit' | 'reset'
}

/**
 * A single button used everywhere in the portfolio.
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  download,
  type = 'submit',
}: ButtonProps) {
  const buttonStyles = [sharedStyles, variantStyles[variant], className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} download={download} className={buttonStyles}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={buttonStyles}>
      {children}
    </button>
  )
}
