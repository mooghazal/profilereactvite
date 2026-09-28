import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'

/**
 * The whole site is one page.
 *
 * The sections are stacked in the order they should be read, so scrolling down
 * walks through the whole portfolio and the navigation just jumps to them.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
