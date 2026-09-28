import { useEffect, useState } from 'react'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import Button from '@/components/Button/Button'
import { navigationItems } from '@/data/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState('home')

  // Every navigation click closes the mobile menu, otherwise it stays open on
  // top of the section the visitor just asked for.
  function closeMenu() {
    setIsMenuOpen(false)
  }

  // The page is one long scroll, so the current section is decided by the
  // scroll position instead of a URL. `IntersectionObserver` watches the
  // sections and reports which one crosses the middle of the screen.
  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section) => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)

        if (visibleSection) {
          setActiveSectionId(visibleSection.target.id)
        }
      },
      // Only the thin band across the middle of the screen counts as visible,
      // which makes the active link match the section actually being read.
      { rootMargin: '-45% 0px -45% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      {/* A fixed height keeps the bar identical on every section, so the space
          left for the page underneath can be calculated from it. */}
      <div className="mx-auto flex h-navbar w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Left: the logo. It is plain text, not an image. */}
        <a
          href="#home"
          onClick={closeMenu}
          className="font-heading text-2xl font-extrabold tracking-tight text-primary transition-colors hover:text-accent"
        >
          MK
        </a>

        {/* Center: the main navigation, shown from the large breakpoint up. */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeSectionId === item.id

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className="group relative block px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <span
                      className={
                        isActive
                          ? 'text-accent'
                          : 'text-muted group-hover:text-primary'
                      }
                    >
                      {item.label}
                    </span>

                    {/* The accent colour alone would not be enough to signal
                        the current section, so an underline is shown as well. */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-0.5 h-px bg-accent transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right: the CV button on desktop, the menu toggle on mobile. */}
        <div className="flex items-center gap-2">
          <Button
            href="/cv/Mohamed-Khamis-CV.pdf"
            download="Mohamed-Khamis-CV.pdf"
            variant="secondary"
            className="hidden lg:inline-flex"
          >
            Download CV
          </Button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-primary transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {isMenuOpen ? (
              <HiOutlineXMark size={22} aria-hidden="true" />
            ) : (
              <HiOutlineBars3 size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* The mobile menu sits in the normal flow below the bar, so it pushes
          the page content down instead of covering it. */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="animate-fade-down border-t border-white/10 px-5 pb-6 pt-2 sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {navigationItems.map((item) => {
              const isActive = activeSectionId === item.id

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`block border-l-2 py-3 pl-4 text-base font-medium transition-colors ${
                      isActive
                        ? 'border-accent text-accent'
                        : 'border-transparent text-muted hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <Button
            href="/cv/Mohamed-Khamis-CV.pdf"
            download="Mohamed-Khamis-CV.pdf"
            variant="secondary"
            className="mt-5 w-full"
          >
            Download CV
          </Button>
        </nav>
      )}
    </header>
  )
}
