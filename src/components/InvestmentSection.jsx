import { motion } from 'framer-motion'
import { investmentProcess } from '../data/companyInfo'
import SectionHeading from './SectionHeading'
import ContourMotif from './ContourMotif'

export default function InvestmentSection() {
  return (
    <section id="investments" className="relative py-24 md:py-32 bg-[#0E1512] text-white overflow-hidden">
      <ContourMotif className="absolute inset-0 w-full h-full text-white" opacity={0.12} />
      <div className="container-editorial relative">
        <SectionHeading
          index="05"
          eyebrow="Investment Philosophy"
          title="Invest in Possibility. Build for Tomorrow."
          description="Every opportunity we pursue is grounded in careful analysis, patient strategy, and a long-term view of value creation."
          light
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {investmentProcess.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0E1512] p-8 md:p-9 min-h-[260px] flex flex-col justify-between"
            >
              <span className="font-display text-4xl text-[#C8A96B]">{step.number}</span>
              <div>
                <h3 className="font-display text-2xl text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
