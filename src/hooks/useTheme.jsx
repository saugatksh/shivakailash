import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'

const ThemeContext = createContext(null)
const STORAGE_KEY = 'sk-theme-preference'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'

  const stored = window.localStorage.getItem(STORAGE_KEY)

  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', theme === 'dark')

    const stored = window.localStorage.getItem(STORAGE_KEY)

    // Only persist if the user has explicitly chosen a theme.
    if (stored === 'light' || stored === 'dark') {
      window.localStorage.setItem(STORAGE_KEY, theme)
    }
  }, [theme])

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = (e) => {
      const stored = window.localStorage.getItem(STORAGE_KEY)

      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mql.addEventListener('change', handler)

    return () => {
      mql.removeEventListener('change', handler)
    }
  }, [])

  const toggleTheme = useCallback((e) => {
    const next = theme === 'dark' ? 'light' : 'dark'

    // Mark this as an explicit user preference.
    window.localStorage.setItem(STORAGE_KEY, next)

    const supportsViewTransitions =
      typeof document !== 'undefined' &&
      typeof document.startViewTransition === 'function'

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!supportsViewTransitions || prefersReducedMotion) {
      setTheme(next)
      return
    }

    const x = e?.clientX ?? window.innerWidth / 2
    const y = e?.clientY ?? window.innerHeight / 2

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = document.startViewTransition(() => {
      setTheme(next)
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        [
          { clipPath: `circle(0px at ${x}px ${y}px)` },
          { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` },
        ],
        {
          duration: 650,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)

  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return ctx
}
