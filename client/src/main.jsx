/**
 * main.jsx — React entry point
 *
 * This is the very first JavaScript file executed by the browser.
 * It mounts the React application into the <div id="root"> in index.html.
 *
 * StrictMode: Wraps our app to detect potential problems during development.
 * It renders components twice in dev mode to catch side-effect bugs.
 * It has NO effect in production builds.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // Global CSS must be imported here — applied to everything
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
