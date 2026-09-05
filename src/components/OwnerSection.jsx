import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { owner } from '../data/teamInfo'
import SectionHeading from './SectionHeading'

export default function OwnerSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-editorial grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[240px] lg:max-w-[280px]">

          <div className="absolute -inset-4 border border-accent/25 rounded-[2rem] -z-10" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] ring-1 ring-black/5 [&>img]:rounded-[1.75rem]">
            <img
              src={owner.photo}
              alt={owner.name}
              className="w-full h-full object-cover object-top scale-[1.15]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 border border-white/25 backdrop-blur-sm bg-black/25 px-5 py-3 rounded-xl">
              <p className="text-white text-xs tracking-widest2 uppercase">Founder</p>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            index="02"
            eyebrow="Leadership"
            title={owner.name}
            description={`${owner.title} — bringing real estate development, property, and investment experience to every decision Shiva Kailash makes.`}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-muted leading-relaxed max-w-xl"
          >
            {owner.bio[0]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              to="/team"
              className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              Meet the Full Team
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}