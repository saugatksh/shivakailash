import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { values } from '../data/companyInfo'
import SectionHeading from './SectionHeading'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg">
      <div className="container-editorial grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1"
        >
          <img
            src={ABOUT_IMAGE}
            alt="Interior architectural detail of a modern building with natural light"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 right-6 border border-white/25 backdrop-blur-sm bg-black/20 px-5 py-4">
            <p className="text-white text-xs tracking-widest2 uppercase">Est. in Nepal</p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            index="01"
            eyebrow="About Us"
            title="A Vision Built on Trust"
            description="Shiva Kailash Real Estate and Investment Pvt. Ltd. focuses on real estate development, property opportunities, and investment — creating long-term value for the people and communities we work with."
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="hairline pt-4"
              >
                <h3 className="font-display text-lg text-ink mb-1.5">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/about"
              className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              Explore Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
