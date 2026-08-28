import PageHero from '../components/PageHero'
import InvestmentSection from '../components/InvestmentSection'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'

export default function Investments() {
  return (
    <>
      <PageHero
        eyebrow="Investment Philosophy"
        title="Invest in Possibility. Build for Tomorrow."
        description="Strategic, patient, and grounded in careful evaluation of long-term value."
      />
      <div className="pt-8 md:pt-16">
        <InvestmentSection />
      </div>
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
