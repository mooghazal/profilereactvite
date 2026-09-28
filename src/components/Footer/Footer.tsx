import { contactLinks } from '@/data/contactLinks'

/**
 * The links shown in the footer.
 *
 * They come from the same data as the Contact section, so a URL is only ever
 * written in one place. WhatsApp stays in the contact cards only.
 */
const footerLinks = contactLinks.filter((contactLink) => contactLink.showInFooter)

/**
 * The bottom of the page.
 *
 * It lives in the shared Layout, which means it appears under every section
 * without repeating its markup anywhere else.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        {/* The same look as the navbar logo, in the accent colour. */}
        <a
          href="#home"
          className="font-heading text-2xl font-extrabold tracking-tight text-accent"
        >
          MK
        </a>

        <p className="text-sm text-muted">
          © 2026 Mohamed Khamis. All rights reserved.
        </p>

        <ul className="flex items-center gap-4 sm:gap-5">
          {footerLinks.map((contactLink) => (
            <li key={contactLink.label}>
              <a
                href={contactLink.href || undefined}
                target={contactLink.opensInNewTab ? '_blank' : undefined}
                rel={contactLink.opensInNewTab ? 'noreferrer' : undefined}
                // A link without a URL is a profile that is not added yet, so
                // it stays visible but cannot be clicked. A little padding
                // keeps the tap area comfortable on touch.
                className={`inline-block py-1 text-sm text-muted ${
                  contactLink.href
                    ? 'transition-colors hover:text-accent'
                    : 'pointer-events-none opacity-60'
                }`}
              >
                {contactLink.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
