import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, description, image, alt }) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden grain">
      {image && (
        <>
          <img src={image} alt={alt || ''} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        </>
      )}
      <div className={`relative container-editorial pb-14 ${!image ? 'pt-40' : ''}`}>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`eyebrow ${image ? '!text-[#D9BC85]' : ''}`}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className={`font-display text-4xl sm:text-5xl md:text-6xl mt-4 max-w-3xl leading-[1.05] ${
            image ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-5 max-w-xl text-base md:text-lg leading-relaxed ${
              image ? 'text-white/75' : 'text-muted'
            }`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
