import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { companyInfo } from '../data/companyInfo'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

export default function PageLoader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setProgress(100)
      const t = setTimeout(() => setVisible(false), 200)
      return () => clearTimeout(t)
    }

    let raf
    const duration = 3200
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 350)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reducedMotion])

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(onFinish, 700)
      return () => clearTimeout(t)
    }
  }, [visible, onFinish])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <span className="font-display text-6xl md:text-7xl tracking-tight text-[#F5F1E8]">
              {companyInfo.initials}
            </span>
            <span className="mt-3 text-[10px] tracking-widest2 uppercase text-[#A7A39A] text-center max-w-xs px-4">
              {companyInfo.shortName}
            </span>
          </motion.div>

          <div className="absolute bottom-16 flex flex-col items-center gap-3 w-48">
            <div className="w-full h-px bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-[#C8A96B]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <span className="text-[10px] tracking-widest2 text-[#A7A39A] tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
