/**
 * MainLayout.jsx — Persistent application shell
 *
 * Why this exists:
 *   React Router renders <Outlet /> with the current page's content.
 *   MainLayout wraps it with the Navbar (top) and Footer (bottom).
 *   This means Navbar and Footer only need to be written ONCE —
 *   the router swaps only the <Outlet /> content between pages.
 *
 * The Outlet component is React Router's way of saying:
 *   "render the matched child route here"
 */

import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content" id="main-content" role="main">
        {/* Outlet renders the matched page (Home, etc.) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
