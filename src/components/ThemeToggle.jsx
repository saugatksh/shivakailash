import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.jsx'

export default function ThemeToggle({ className = '', overDarkPhoto = false }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const iconColorClass = overDarkPhoto ? 'text-white' : 'text-ink'

  return (
    <button
      type="button"
      onClick={(e) => toggleTheme(e)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={`relative w-11 h-11 flex items-center justify-center rounded-full border transition-colors duration-500 ${
        overDarkPhoto ? 'border-white/40 hover:border-white' : 'border-line hover:border-accent'
      } ${className}`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-4 h-4"
      >
        <motion.span
          className="absolute inset-0"
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.6 }}
          transition={{ duration: 0.35 }}
        >
          <Moon size={16} strokeWidth={1.5} className={iconColorClass} />
        </motion.span>
        <motion.span
          className="absolute inset-0"
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.6 : 1 }}
          transition={{ duration: 0.35 }}
        >
          <Sun size={16} strokeWidth={1.5} className={iconColorClass} />
        </motion.span>
      </motion.div>
    </button>
  )
}
