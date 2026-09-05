import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { owner, staff } from '../data/teamInfo'

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The People Behind Our Work"
        description="A team built on trust, discipline, and long-term thinking — led with experience and grounded in every detail."
      />

      {/* Owner */}
      <section className="py-24 md:py-32">
        <div className="container-editorial grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 1.04, clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[260px] lg:max-w-[320px] lg:sticky lg:top-32">

            <div className="absolute -inset-4 border border-accent/25 rounded-[2rem] -z-10" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">Leadership</span>
              <h2 className="font-display text-3xl md:text-4xl mt-4 mb-1.5 text-ink">
                {owner.name}
              </h2>
              <p className="text-sm tracking-wide uppercase text-accent mb-8">{owner.title}</p>
            </motion.div>

            <div className="space-y-4 mb-10">
              {owner.bio.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="text-muted leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-px bg-line"
            >
              {owner.highlights.map((h) => (
                <div key={h.label} className="bg-bg p-6">
                  <p className="font-display text-xl text-ink mb-1">{h.value}</p>
                  <p className="text-xs tracking-widest2 uppercase text-muted">{h.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staff */}
      {/* <section className="py-24 md:py-32 bg-surface">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">The Team</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 text-ink">
              Meet the People Who Make It Happen
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              A dedicated team supporting every client, property, and investment opportunity from
              start to finish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {staff.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg p-8"
              >
                <div className="w-14 h-14 rounded-full bg-line/60 flex items-center justify-center mb-5">
                  <span className="font-display text-lg text-ink">
                    {member.name
                      .replace(/[\[\]]/g, '')
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink mb-1">{member.name}</h3>
                <p className="text-xs tracking-widest2 uppercase text-accent mb-3">{member.title}</p>
                <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <CTASection />
    </>
  )
}