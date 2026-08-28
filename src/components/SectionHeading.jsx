import { motion } from 'framer-motion'

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center gap-4 mb-5 ${align === 'center' ? 'justify-center' : ''}`}
      >
        {index && (
          <span className={`font-body text-xs tracking-widest2 uppercase ${light ? 'text-white/50' : 'text-muted'}`}>
            {index}
          </span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className={`font-display font-normal text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className={`mt-5 text-base md:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
