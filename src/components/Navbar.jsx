import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { companyInfo, navigation } from '../data/companyInfo'
import ThemeToggle from './ThemeToggle'
import MagneticButton from './MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // The transparent navbar only sits over a full-bleed dark photo on the
  // homepage hero. Everywhere else the transparent state sits over the
  // page background, so it must use the theme's normal ink color.
  const overDarkPhoto = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', mobileOpen)
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-cinematic ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(0,0,0,0.02)] py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="container-editorial flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" aria-label={companyInfo.name}>
            <span
              className={`font-display text-xl md:text-2xl tracking-tight transition-colors duration-500 ${
                overDarkPhoto ? 'text-white' : 'text-ink'
              }`}
            >
              {companyInfo.initials}
            </span>
            <span
              className={`hidden md:block text-[11px] leading-tight tracking-wide uppercase mt-0.5 max-w-[220px] transition-colors duration-500 ${
                overDarkPhoto ? 'text-white/60' : 'text-muted'
              }`}
            >
              {companyInfo.shortName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {navigation.map((item) => {
              const active = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`link-underline text-sm font-medium tracking-wide transition-colors duration-500 ${
                    active
                      ? 'text-accent'
                      : overDarkPhoto
                        ? 'text-white/85 hover:text-white'
                        : 'text-ink/80 hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle overDarkPhoto={overDarkPhoto} />
            <MagneticButton
              as={Link}
              to="/contact"
              variant="outline"
              className={`!py-2.5 !px-5 !text-xs transition-colors duration-500 ${
                overDarkPhoto ? '!text-white !border-white/40 hover:!border-white hover:!text-white' : ''
              }`}
            >
              Talk to Us
            </MagneticButton>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle overDarkPhoto={overDarkPhoto} />
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className={`w-11 h-11 flex items-center justify-center border rounded-full transition-colors duration-500 ${
                overDarkPhoto ? 'border-white/40 text-white' : 'border-line text-ink'
              }`}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-bg lg:hidden"
          >
            <div className="h-full flex flex-col justify-center container-editorial">
              <ul className="flex flex-col gap-2">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.href}
                      className="font-display text-4xl sm:text-5xl py-3 block text-ink hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10"
              >
                <MagneticButton as={Link} to="/contact" variant="solid">
                  Talk to Us
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
