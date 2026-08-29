import { Link } from 'react-router-dom'
import { companyInfo, navigation, contactInfo, services } from '../data/companyInfo'
import logoIcon from '../logo-icon.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-bg pt-20 pb-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden="true" />
      <div className="container-editorial pt-16">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={logoIcon}
                alt={`${companyInfo.name} logo`}
                className="h-10 w-auto"
              />
              <span className="text-xs tracking-widest2 uppercase text-muted align-middle">
                {companyInfo.shortName}
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              {companyInfo.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest2 uppercase text-muted mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="link-underline text-sm text-ink/80 hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest2 uppercase text-muted mb-5">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.number} className="text-sm text-ink/80">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest2 uppercase text-muted mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-ink/80">
              <li>{contactInfo.address}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              {contactInfo.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs tracking-wide text-muted hover:text-accent transition-colors"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {year} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted">
          <span>Powered By:</span>
          <a
            href="https://www.sakoratech.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            Sakora Tech Pvt. Ltd.
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}