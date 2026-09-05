import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/companyInfo'
import SectionHeading from './SectionHeading'

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-bg">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            index="03"
            eyebrow="What We Do"
            title="Services Built Around Long-Term Value"
          />
          <Link
            to="/services"
            className="link-underline hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink whitespace-nowrap"
          >
            View all services
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-r border-b border-line p-8 md:p-10 min-h-[280px] flex flex-col justify-between transition-colors duration-500 hover:bg-surface"
            >
              <div className="absolute left-0 top-0 h-0 w-[2px] bg-accent transition-all duration-500 group-hover:h-full" />
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl text-muted/50 group-hover:text-accent transition-colors duration-500">
                  {service.number}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-muted opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-400"
                />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-ink mb-3">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
