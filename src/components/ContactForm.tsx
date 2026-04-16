import { useState } from 'react'

interface ContactFormProps {
  dark?: boolean
  simple?: boolean
}

export default function ContactForm({ dark = false, simple = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const inputStyle = {
    color: dark ? 'white' : '#2C2C2C',
    borderBottomColor: dark ? 'rgba(255,255,255,0.2)' : '#C8C0B4',
  }
  const labelStyle = { color: dark ? 'rgba(255,255,255,0.5)' : '#8A8886' }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.5rem', color: dark ? 'white' : '#1A1A1A', fontWeight: 300 }}>
          Thank You — We'll Be in Touch!
        </p>
        <p style={{ color: dark ? 'rgba(255,255,255,0.5)' : '#8A8886', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 300 }}>
          We respond within 1 business day · M–F, 9am–5pm
        </p>
      </div>
    )
  }

  if (simple) {
    return (
      <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem' }}>
        <p style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: '1.4rem', fontWeight: 300, marginBottom: '1.5rem' }}>Send Us a Message</p>
        <div className="space-y-7 mb-7">
          <div>
            <label className="form-label" style={labelStyle}>Your Name</label>
            <input className="form-input" style={inputStyle} type="text" name="name" placeholder="Jane Smith" required />
          </div>
          <div>
            <label className="form-label" style={labelStyle}>Phone / Email</label>
            <input className="form-input" style={inputStyle} type="text" name="contact" placeholder="469-000-0000 or jane@email.com" required />
          </div>
          <div>
            <label className="form-label" style={labelStyle}>Your Question or Message</label>
            <textarea className="form-input" style={{ ...inputStyle, resize: 'none' }} name="message" rows={4} placeholder="Ask us anything…" required />
          </div>
        </div>
        <button type="submit" className="btn-gold w-full" style={{ cursor: 'pointer', textAlign: 'center' }}>Send Message</button>
        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: '1rem', fontWeight: 300 }}>We respond within 1 business day</p>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={dark ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem' } : {}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-8">
        <div>
          <label className="form-label" style={labelStyle}>First Name</label>
          <input className="form-input" style={inputStyle} type="text" name="first_name" placeholder="Jane" required />
        </div>
        <div>
          <label className="form-label" style={labelStyle}>Last Name</label>
          <input className="form-input" style={inputStyle} type="text" name="last_name" placeholder="Smith" required />
        </div>
        <div>
          <label className="form-label" style={labelStyle}>Phone Number</label>
          <input className="form-input" style={inputStyle} type="tel" name="phone" placeholder="(469) 000-0000" required />
        </div>
        <div>
          <label className="form-label" style={labelStyle}>Email Address</label>
          <input className="form-input" style={inputStyle} type="email" name="email" placeholder="jane@example.com" required />
        </div>
        <div className="sm:col-span-2">
          <label className="form-label" style={labelStyle}>Service Type</label>
          <select className="form-input" style={{ ...inputStyle, background: 'transparent' }} name="service" required defaultValue="">
            <option value="" disabled>Select a service…</option>
            <option value="basic">Basic Clean — From $99</option>
            <option value="detail">Detail Clean — From $139</option>
            <option value="moveout">Move-out Clean — Call for Estimate</option>
            <option value="addon">Add-on Services</option>
            <option value="unsure">Not Sure Yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="form-label" style={labelStyle}>
            Message <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0, color: '#B0A89A' }}>(bedrooms, sq ft, pets, any details)</span>
          </label>
          <textarea className="form-input" style={{ ...inputStyle, resize: 'none' }} name="message" rows={4} placeholder="Tell us about your home…" />
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn-gold" style={{ width: '100%', maxWidth: 280, cursor: 'pointer' }}>Request a Quote</button>
        <p className="text-muted mt-4" style={{ fontSize: '0.75rem', fontWeight: 300, letterSpacing: '0.05em' }}>We respond within 1 business day · M–F, 9am–5pm</p>
      </div>
    </form>
  )
}
