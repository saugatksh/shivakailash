import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import MagneticButton from '../components/MagneticButton'
import { contactInfo, companyInfo } from '../data/companyInfo'

const initialState = { name: '', email: '', phone: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    // Frontend-only: no backend endpoint has been provided.
    // Replace this block with a real API call once an endpoint exists.
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setValues(initialState)
    }, 900)
  }

  const fieldClass = (field) =>
    `w-full bg-transparent border-b py-3 text-ink placeholder:text-muted/60 focus:outline-none transition-colors duration-300 ${
      errors[field] ? 'border-red-500' : 'border-line focus:border-accent'
    }`

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start the Conversation"
        description="Whether it's a property, a project, or an investment opportunity — we're glad to hear from you."
      />

      <section className="py-24 md:py-32">
        <div className="container-editorial grid lg:grid-cols-[1fr_1.3fr] gap-16">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-8 text-ink">
              {companyInfo.shortName}
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-ink font-medium">Address</p>
                  <p className="text-sm text-muted mt-1">{contactInfo.address}</p>
                  <p className="text-xs text-muted/70 mt-0.5">{contactInfo.addressNote}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-ink font-medium">Phone</p>
                  <p className="text-sm text-muted mt-1">{contactInfo.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-ink font-medium">Email</p>
                  <p className="text-sm text-muted mt-1">{contactInfo.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={18} className="text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-ink font-medium">Business Hours</p>
                  <p className="text-sm text-muted mt-1">{contactInfo.hours}</p>
                </div>
              </li>
            </ul>

            <div className="flex items-center gap-5 mt-10">
              {contactInfo.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="link-underline text-sm text-ink/80 hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center py-20 border border-line"
                  role="status"
                >
                  <CheckCircle2 size={40} className="text-accent mb-5" />
                  <h3 className="font-display text-2xl text-ink mb-2">Message Sent</h3>
                  <p className="text-muted max-w-sm">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="link-underline mt-6 text-sm text-ink"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-7"
                >
                  <div className="grid sm:grid-cols-2 gap-7">
                    <div>
                      <label htmlFor="name" className="text-xs tracking-widest2 uppercase text-muted">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        className={fieldClass('name')}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-red-500 mt-1.5">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs tracking-widest2 uppercase text-muted">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className={fieldClass('email')}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-500 mt-1.5">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-7">
                    <div>
                      <label htmlFor="phone" className="text-xs tracking-widest2 uppercase text-muted">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={handleChange}
                        className={fieldClass('phone')}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="text-xs tracking-widest2 uppercase text-muted">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={values.subject}
                        onChange={handleChange}
                        className={fieldClass('subject')}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-xs text-red-500 mt-1.5">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs tracking-widest2 uppercase text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      className={`${fieldClass('message')} resize-none`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500 mt-1.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <MagneticButton
                    type="submit"
                    variant="solid"
                    disabled={submitting}
                    className="!py-4 !px-9 disabled:opacity-60"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
