import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { ScrollToTopOnRoute, ScrollToTopButton } from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import PageTransition from './components/PageTransition'

import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Investments from './pages/Investments'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  return (
    <>
      {loading && <PageLoader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <ScrollToTopOnRoute />
          <Navbar />

          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                <Route path="/investments" element={<PageTransition><Investments /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  )
}
