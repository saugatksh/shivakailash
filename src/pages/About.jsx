import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import { values } from '../data/companyInfo'

const IMAGE =
  'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2400&auto=format&fit=crop'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Vision Built on Trust"
        description="Real estate development, property opportunities, and investment — grounded in long-term thinking."
        image={IMAGE}
        alt="Modern building facade at golden hour"
      />

      <section className="py-24 md:py-32">
        <div className="container-editorial grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-6 text-ink">
              Building With Purpose
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Shiva Kailash Real Estate and Investment Pvt. Ltd. was founded on the belief that
              real estate is not just about property — it is about the trust placed in every
              transaction, and the long-term value created for the people involved.
            </p>
            <p className="text-muted leading-relaxed">
              We approach every project and investment opportunity with the same discipline:
              careful evaluation, transparent communication, and a commitment to quality that
              extends well beyond a single deal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Vision & Mission</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-6 text-ink">
              Vision, Mission, and Values
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-ink font-medium">Vision:</strong> To be a trusted name in
              real estate and investment, known for quality, integrity, and long-term value.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-ink font-medium">Mission:</strong> To deliver thoughtful
              real estate solutions and investment opportunities that serve our clients and
              communities well beyond the transaction itself.
            </p>
          </motion.div>
        </div>

        <div className="container-editorial mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-bg p-8"
              >
                <h3 className="font-display text-xl text-ink mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </>
  )
}
