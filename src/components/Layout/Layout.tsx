import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'

/**
 * The frame that every page shares.
 *
 * It renders the Navbar and the Footer once, then lets the page that matched the
 * current route appear between them through React Router's <Outlet />.
 */
export default function Layout() {
  return (
    <>
      <Navbar />

      {/* The page for the current route is rendered here. */}
      <Outlet />

      {/* Because the Footer is here and not inside a section, it shows up
          under every page without being written more than once. */}
      <Footer />
    </>
  )
}
