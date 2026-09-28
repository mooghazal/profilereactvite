import type { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'

/**
 * The contact ways shown in the Contact section.
 *
 * They are stored as data so the section can render them with `.map()` instead
 * of repeating the same card markup four times.
 *
 * TODO: add the real GitHub URL in the GitHub entry below.
 */
export type ContactLink = {
  label: string
  /** The text shown on the card, for example the email address. */
  value: string
  /**
   * The destination. An empty `href` means the real link is not added yet, and
   * the card is shown but cannot be clicked.
   */
  href: string
  icon: IconType
  /** Links to another site should not replace the portfolio tab. */
  opensInNewTab: boolean
  /** Whether the footer also shows this link next to the copyright. */
  showInFooter: boolean
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'mohamedgazill@gmail.com',
    href: 'mailto:mohamedgazill@gmail.com',
    icon: FaEnvelope,
    opensInNewTab: false,
    showInFooter: true,
  },
  {
    label: 'WhatsApp',
    value: '01095517990',
    // The Egyptian country code (20) followed by the number without its
    // leading zero, which is the format wa.me expects.
    href: 'https://wa.me/201095517990',
    icon: FaWhatsapp,
    opensInNewTab: true,
    showInFooter: false,
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/motest',
    icon: FaLinkedinIn,
    opensInNewTab: true,
    showInFooter: true,
  },
  {
    label: 'GitHub',
    value: 'GitHub Profile',
    // TODO: add the real GitHub URL. Until then the card does nothing.
    href: '',
    icon: FaGithub,
    opensInNewTab: true,
    showInFooter: true,
  },
]
