import PageHero from '../components/PageHero'

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="py-20 md:py-28">
        <div className="container-editorial max-w-3xl">
          <p className="text-muted leading-relaxed">
            This page is a placeholder. Replace this content with your organization's actual
            terms of service governing use of this website.
          </p>
        </div>
      </section>
    </>
  )
}
