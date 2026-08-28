import PageHero from '../components/PageHero'
import ProjectsSection from '../components/ProjectsSection'
import CTASection from '../components/CTASection'

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Featured Work"
        title="Projects Designed With Intention"
        description="A showcase of developments structured for long-term value and quality execution."
      />
      <div className="pt-8 md:pt-16">
        <ProjectsSection />
      </div>
      <CTASection />
    </>
  )
}
