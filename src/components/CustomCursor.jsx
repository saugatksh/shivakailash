import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40 })
  const springY = useSpring(y, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || reducedMotion) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const move = (e) => {
      x.set(e.clientX - 10)
      y.set(e.clientY - 10)
    }
    const over = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(true)
    }
    const out = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(false)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 1.8 : 1 }}
      transition={{ scale: { duration: 0.25 } }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full border border-accent pointer-events-none z-[200] mix-blend-difference"
      aria-hidden="true"
    />
  )
}
