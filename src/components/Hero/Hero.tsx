import heroImage from '@/assets/images/hero.jfif'
import Button from '@/components/Button/Button'
import { socialLinks } from '@/data/socialLinks'

export default function Hero() {
  return (
    /* One section for every screen size: it is a stacked column on small
       screens, and from `lg` up it becomes exactly as tall as the space left
       under the navbar, so the whole hero (buttons included) is already
       visible without scrolling. `justify-center` keeps it vertically
       balanced when there is spare room. */
    <section
      id="home"
      className="mx-auto flex w-full max-w-6xl scroll-mt-navbar flex-col px-5 pb-20 pt-12 sm:px-8 sm:pb-24 lg:min-h-[calc(100svh-var(--spacing-navbar))] lg:justify-center lg:px-8 lg:pb-10 lg:pt-10"
    >
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-10">
        {/* Top on mobile, right on desktop. The width is capped against the
            viewport height so a short screen shrinks the photo instead of
            pushing the buttons below the fold. */}
        <div className="order-1 w-full max-w-xs sm:max-w-sm lg:order-2 lg:w-[min(20rem,46svh)] lg:max-w-full lg:shrink-0">
          {/* The padding gives the glow room to spread without pushing the
              page wider than the viewport. */}
          <div className="animate-fade-up relative rounded-3xl p-4 sm:p-6">
            <div
              aria-hidden="true"
              className="animate-glow absolute inset-0 -z-10 rounded-3xl bg-accent/15 blur-2xl"
            />
            <img
              src={heroImage}
              alt="Portrait of Mohamed Khamis, Frontend Developer"
              width={343}
              height={361}
              className="relative aspect-4/5 w-full rounded-3xl border border-white/10 object-cover"
            />
          </div>
        </div>

        {/* Below the photo on mobile, left on desktop. */}
        <div className="order-2 flex w-full flex-col lg:order-1 lg:max-w-xl">
          <p
            style={{ animationDelay: '80ms' }}
            className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm"
          >
            Frontend Developer
          </p>

          {/* Syne becomes much wider as the weight increases, so the name uses
              weight 700. A heavier weight made "MOHAMED" wider than the column
              on small screens. The size is a clamp so the heading also shrinks
              on short desktop screens. */}
          <h1
            style={{ animationDelay: '160ms' }}
            className="animate-fade-up mt-5 font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,6.8svh,4rem)]"
          >
            <span className="block">Mohamed</span>
            <span className="block">Khamis</span>
          </h1>

          <p
            style={{ animationDelay: '240ms' }}
            className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg lg:mt-5 lg:text-base lg:leading-relaxed"
          >
            Frontend developer focused on building modern, responsive and
            user-friendly web experiences. I care about clean, accessible code
            and interfaces that feel effortless to use.
          </p>

          <div
            style={{ animationDelay: '320ms' }}
            className="animate-fade-up mt-8 flex flex-wrap gap-3 sm:gap-4 lg:mt-6"
          >
            <Button href="#projects" className="flex-1 sm:flex-none">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" className="flex-1 sm:flex-none">
              Contact Me
            </Button>
          </div>

          <div
            style={{ animationDelay: '400ms' }}
            className="animate-fade-up mt-8 flex w-fit items-center gap-3 rounded-full border border-accent/25 bg-accent/5 px-4 py-2 lg:mt-5"
          >
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium tracking-wide text-accent sm:text-sm">
              Available for Freelance Work
            </span>
          </div>

          <ul
            style={{ animationDelay: '480ms' }}
            className="animate-fade-up mt-8 flex items-center gap-3 lg:mt-6"
          >
            {socialLinks.map((socialLink) => {
              const SocialIcon = socialLink.icon
              // A link without a URL is a profile that is not added yet, so it
              // stays visible but cannot be clicked.
              const isClickable = socialLink.href !== ''

              return (
                <li key={socialLink.label}>
                  <a
                    href={isClickable ? socialLink.href : undefined}
                    target={isClickable && socialLink.opensInNewTab ? '_blank' : undefined}
                    rel={isClickable && socialLink.opensInNewTab ? 'noreferrer' : undefined}
                    aria-label={socialLink.label}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition duration-300 ${
                      isClickable
                        ? 'hover:-translate-y-0.5 hover:border-accent hover:text-accent'
                        : 'pointer-events-none opacity-60'
                    }`}
                  >
                    <SocialIcon size={18} aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
