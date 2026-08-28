import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

const IMAGE =
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2400&auto=format&fit=crop'

export default function VisualBreak() {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-60, 60])

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[440px] overflow-hidden grain">
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img
          src={IMAGE}
          alt="Sweeping mountain landscape representing the vision behind Shiva Kailash"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative h-full flex items-center justify-center container-editorial">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl leading-tight"
        >
          "Where Vision Meets Opportunity."
        </motion.h2>
      </div>
    </section>
  )
}
