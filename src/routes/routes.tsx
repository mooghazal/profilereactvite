import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import Home from '@/pages/Home/Home'

export default function AppRoutes() {
  return (
    <Routes>
      {/* The Navbar comes from Layout, once, above the whole page. Every path
          shows the same scrolling page, so an old or mistyped link still lands
          on the portfolio instead of an empty screen. */}
      <Route element={<Layout />}>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
