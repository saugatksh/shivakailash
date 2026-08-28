import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/companyInfo'

function StatItem({ label, placeholder, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center md:text-left"
    >
      <span className="font-display text-5xl md:text-6xl text-accent tabular-nums">
        {placeholder}
      </span>
      <p className="mt-3 text-xs tracking-widest2 uppercase text-muted">{label}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-surface hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} label={stat.label} placeholder={stat.placeholder} delay={i * 0.1} />
          ))}
        </div>
        <p className="mt-10 text-xs text-muted text-center md:text-left max-w-xl">
          Figures shown are placeholders pending confirmed company data.
        </p>
      </div>
    </section>
  )
}
