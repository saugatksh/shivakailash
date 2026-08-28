import PageHero from '../components/PageHero'

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-20 md:py-28">
        <div className="container-editorial max-w-3xl">
          <p className="text-muted leading-relaxed">
            This page is a placeholder. Replace this content with your organization's actual
            privacy policy, covering what information is collected, how it is used, and how
            visitors can exercise their data rights.
          </p>
        </div>
      </section>
    </>
  )
}
