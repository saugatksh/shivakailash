import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/companyInfo'
import SectionHeading from './SectionHeading'

const PROJECT_IMAGES = {
  'architecture-1':
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
  'architecture-2':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
  'architecture-3':
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
}

function ProjectCard({ project, index, large }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden ${large ? 'aspect-[4/5] md:aspect-[16/11]' : 'aspect-[4/5]'}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={PROJECT_IMAGES[project.image]}
          alt={`${project.name} — ${project.category} development, ${project.status}`}
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-cinematic group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <span className="text-[10px] tracking-widest2 uppercase text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1.5 border border-white/20">
          {project.status}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <span className="text-[10px] tracking-widest2 uppercase text-white/60">
          {project.category} · {project.location}
        </span>
        <div className="flex items-end justify-between mt-2">
          <h3 className="font-display text-2xl md:text-3xl text-white">{project.name}</h3>
          <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0 transition-all duration-400 group-hover:bg-white group-hover:border-white">
            <ArrowUpRight size={16} className="text-white transition-colors duration-400 group-hover:text-black" />
          </span>
        </div>
        <p className="mt-3 text-sm text-white/70 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-cinematic">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-bg">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            index="03"
            eyebrow="Featured Work"
            title="Projects Designed With Intention"
          />
          <Link
            to="/projects"
            className="link-underline hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink whitespace-nowrap"
          >
            View all projects
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <div className="md:col-span-2">
            <ProjectCard project={projects[0]} index={0} large />
          </div>
          <ProjectCard project={projects[1]} index={1} />
          <ProjectCard project={projects[2]} index={2} />
        </div>

        <p className="mt-8 text-xs text-muted max-w-xl">
          Project details above are placeholder entries pending confirmed project data.
        </p>
      </div>
    </section>
  )
}
