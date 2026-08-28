import { Link } from 'react-router-dom'
import MagneticButton from '../components/MagneticButton'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center container-editorial text-center">
      <div>
        <span className="font-display text-7xl text-accent">404</span>
        <h1 className="font-display text-3xl md:text-4xl mt-4 text-ink">Page Not Found</h1>
        <p className="text-muted mt-4 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8">
          <MagneticButton as={Link} to="/" variant="solid">
            Back to Home
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
