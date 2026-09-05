import { motion } from 'framer-motion'
import { whyChooseUs } from '../data/companyInfo'
import SectionHeading from './SectionHeading'

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-bg">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14">
          <SectionHeading index="06" eyebrow="Why Choose Us" title="A Partner Worth Building With" />

          <div className="divide-y divide-line hairline">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8"
              >
                <h3 className="font-display text-xl md:text-2xl text-ink sm:w-72 shrink-0">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
