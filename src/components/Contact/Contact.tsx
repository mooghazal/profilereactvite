import ContactForm from '@/components/ContactForm/ContactForm'
import ContactInfoCard from '@/components/ContactInfoCard/ContactInfoCard'
import Section from '@/components/Section/Section'
import { contactLinks } from '@/data/contactLinks'

export default function Contact() {
  return (
    <Section id="contact">
      {/* The small accent label, the same style as the one in the Hero. */}
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
        Contact
      </p>

      <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
        Have something in mind?
        <br />
        Let&apos;s talk.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Whether you have a freelance project, a collaboration idea, or simply
        want to get in touch, I&apos;d love to hear from you. Send me a message
        and let&apos;s talk.
      </p>

      {/* Two columns from the large breakpoint up: the ways to contact on the
          left, the form on the right. Everything stacks on smaller screens. */}
      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Contact Information
          </h3>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {contactLinks.map((contactLink) => (
              <li key={contactLink.label} className="h-full">
                <ContactInfoCard
                  label={contactLink.label}
                  value={contactLink.value}
                  href={contactLink.href}
                  icon={contactLink.icon}
                  opensInNewTab={contactLink.opensInNewTab}
                />
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
