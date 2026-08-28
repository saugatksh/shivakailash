import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function MagneticButton({
  children,
  variant = 'solid',
  as: Component = 'button',
  icon = true,
  className = '',
  ...props
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    setPos({ x, y })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const base =
    'group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide overflow-hidden transition-colors duration-300'
  const variants = {
    solid: 'bg-ink text-bg hover:bg-accent hover:text-bg',
    outline: 'border border-line text-ink hover:border-accent hover:text-accent',
    ghost: 'text-ink hover:text-accent',
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
        <span>{children}</span>
        {icon && (
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </Component>
    </motion.div>
  )
}
