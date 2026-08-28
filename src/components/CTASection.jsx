import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticButton from './MagneticButton'
import ContourMotif from './ContourMotif'

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0E1512] text-[#F5F1E8] overflow-hidden">
      <ContourMotif className="absolute inset-0 w-full h-full text-[#F5F1E8]" opacity={0.08} />
      <div className="container-editorial relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-tight"
        >
          Let's Build the Future Together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl mx-auto text-[#F5F1E8]/70 text-base md:text-lg leading-relaxed"
        >
          Whether you're looking for your next property opportunity, exploring an investment, or
          seeking a trusted real estate partner, let's start the conversation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton as={Link} to="/contact" variant="solid" className="!bg-[#F5F1E8] !text-[#0E1512] hover:!bg-[#C8A96B] hover:!text-[#0E1512]">
            Get in Touch
          </MagneticButton>
          <MagneticButton as={Link} to="/investments" variant="ghost" className="!text-[#F5F1E8] border border-[#F5F1E8]/30 hover:!border-[#F5F1E8]">
            Explore Opportunities
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
