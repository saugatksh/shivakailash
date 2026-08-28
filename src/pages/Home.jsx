import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import InvestmentSection from '../components/InvestmentSection'
import VisualBreak from '../components/VisualBreak'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <InvestmentSection />
      <VisualBreak />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  )
}
