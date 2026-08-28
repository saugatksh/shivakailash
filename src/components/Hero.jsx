import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { companyInfo } from '../data/companyInfo'
import MagneticButton from './MagneticButton'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop'

export default function Hero() {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const imageY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, 160])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85])
  const contentY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, 80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const words = companyInfo.tagline.split(' ')

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden grain">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <img
          src={HERO_IMAGE}
          alt="Modern architectural building against a dramatic sky, representing Shiva Kailash's real estate developments"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" aria-hidden="true" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-28"
      >
        <div className="container-editorial">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-white/80 !text-[#D9BC85]"
          >
            Shiva Kailash Real Estate and Investment Pvt. Ltd.
          </motion.span>

          <h1 className="font-display font-normal text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-5 max-w-4xl">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 md:mr-4 align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 1.75 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-white/75 text-base md:text-lg leading-relaxed"
          >
            {companyInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton as={Link} to="/projects" variant="solid" className="!bg-white !text-black hover:!bg-[#C8A96B] hover:!text-black">
              Explore Our Projects
            </MagneticButton>
            <MagneticButton as={Link} to="/contact" variant="ghost" className="!text-white border border-white/30 hover:!border-white">
              Talk to Us
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        className="absolute bottom-8 inset-x-0 flex justify-center z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-white/60" size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
