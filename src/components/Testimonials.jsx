import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/companyInfo'
import SectionHeading from './SectionHeading'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const reducedMotion = usePrefersReducedMotion()

  const next = useCallback(() => {
    setDirection(1)
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setDirection(-1)
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (reducedMotion) return
    const t = setInterval(next, 6500)
    return () => clearInterval(t)
  }, [next, reducedMotion])

  const current = testimonials[index]

  return (
    <section className="py-24 md:py-32 bg-surface hairline">
      <div className="container-editorial">
        <SectionHeading index="06" eyebrow="Testimonials" title="What People Say" align="center" />

        <div className="mt-14 max-w-3xl mx-auto text-center relative min-h-[280px] flex flex-col items-center justify-center">
          <Quote className="text-accent/40 mb-6" size={32} aria-hidden="true" />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-xl md:text-2xl text-ink leading-relaxed">
                "{current.quote}"
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-ink">{current.name}</p>
                <p className="text-xs text-muted mt-1">
                  {current.role} · {current.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-6 mt-10">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-accent transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === index ? 'w-6 bg-accent' : 'w-1.5 bg-muted/40'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-accent transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted text-center">
          Testimonials shown are placeholder content pending real client submissions.
        </p>
      </div>
    </section>
  )
}
