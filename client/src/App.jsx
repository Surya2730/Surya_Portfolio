/**
 * App.jsx — Root component with routing and loading screen
 *
 * What this component does:
 *   1. Shows the LoadingScreen for ~2.5s on the very first visit
 *   2. Sets up React Router so different URLs show different pages
 *   3. Provides the overall application wrapper
 *
 * React concepts used here:
 *   - useState: tracks whether loading is done
 *   - useEffect: sets a timer to dismiss loading screen after delay
 *   - BrowserRouter/Routes/Route: React Router DOM for client-side routing
 *   - Conditional rendering: shows LoadingScreen OR the page, never both
 */

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/ui/LoadingScreen'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const LOADING_DURATION = 2500 // milliseconds — short enough to not annoy visitors

function App() {
  // isLoading: true on first render, becomes false after timer
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Dismiss the loading screen after LOADING_DURATION
    // This is decorative — not tied to actual asset loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, LOADING_DURATION)

    // Cleanup: cancel the timer if component unmounts before it fires
    // (prevents memory leaks — a very common interview question!)
    return () => clearTimeout(timer)
  }, []) // empty dependency array = run only once on mount

  // If still loading, show the loading screen (full-screen overlay)
  if (isLoading) {
    return <LoadingScreen />
  }

  // After loading: show the full application with routing
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout wraps the Home page (gives it Navbar + Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Catch-all: any unknown URL shows the 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
