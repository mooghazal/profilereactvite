import type { FormEvent } from 'react'
import Button from '@/components/Button/Button'

/**
 * The look shared by every form control, so the four fields look the same.
 * The focus ring comes from the global `:focus-visible` rule, and the border
 * colour is the extra feedback on top of it.
 */
const fieldStyles =
  'w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm ' +
  'text-primary placeholder:text-muted/70 transition duration-300 ' +
  'focus:border-accent sm:text-base'

const labelStyles = 'block text-sm font-medium text-primary'

/**
 * The contact form.
 *
 * There is no backend yet, so submitting only prevents the page from
 * reloading. The `action` to a real service can be added later.
 */
export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            className={`mt-2 ${fieldStyles}`}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className={`mt-2 ${fieldStyles}`}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className={labelStyles}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+20 100 000 0000"
          className={`mt-2 ${fieldStyles}`}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelStyles}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you working on?"
          required
          className={`mt-2 resize-y ${fieldStyles}`}
        />
      </div>

      <Button className="mt-6 w-full">Let&apos;s Work Together</Button>
    </form>
  )
}
