import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { services } from '../data/companyInfo'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services Built Around Long-Term Value"
        description="From development to advisory, every service reflects the same standard of care."
      />

      <section className="py-8 md:py-16 pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid sm:grid-cols-2 border-t border-l border-line">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border-r border-b border-line p-9 md:p-12 min-h-[300px] flex flex-col justify-between transition-colors duration-500 hover:bg-surface"
              >
                <div className="absolute left-0 top-0 h-0 w-[2px] bg-accent transition-all duration-500 group-hover:h-full" />
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl text-muted/50 group-hover:text-accent transition-colors duration-500">
                    {service.number}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-muted opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-400"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-3">{service.title}</h3>
                  <p className="text-muted leading-relaxed max-w-md">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
