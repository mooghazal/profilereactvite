import type { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

/**
 * The social links shown in the Hero section.
 *
 * TODO: add the real GitHub URL in the GitHub entry below.
 */
export type SocialLink = {
  label: string
  /**
   * The destination. An empty `href` means the real profile is not added yet,
   * and the link is shown but cannot be clicked.
   */
  href: string
  icon: IconType
  /** Only external profiles should open in a new tab. */
  opensInNewTab: boolean
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    // TODO: add the real GitHub URL. Until then the icon does nothing.
    href: '',
    icon: FaGithub,
    opensInNewTab: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/motest',
    icon: FaLinkedinIn,
    opensInNewTab: true,
  },
  {
    label: 'Email',
    href: 'mailto:mohamedgazill@gmail.com',
    icon: FaEnvelope,
    opensInNewTab: false,
  },
]
