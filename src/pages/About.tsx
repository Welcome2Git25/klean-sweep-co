import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const stats = [
  { value: '5\u2605', label: 'Rating', sub: 'Verified reviews' },
  { value: 'M\u2013F', label: 'Availability', sub: '9am \u2013 5pm' },
  { value: '48h', label: 'Cancellation', sub: 'Free with notice' },
  { value: '100%', label: 'Satisfaction', sub: 'Guaranteed' },
]

export default function About() {
  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <div style={{
          position: 'relative', padding: '10rem 1.5rem 5rem', textAlign: 'center', overflow: 'hidden',
          backgroundImage: 'linear-gradient(160deg,rgba(18,14,8,0.52) 0%,rgba(22,18,10,0.38) 100%), url("https://images.unsplash.com/photo-1586023492125-27b2c045efd3?w=1920&q=85&fit=crop")',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}>
          <span className="section-eyebrow" style={{ color: '#D8C4A8' }}>Our Story</span>
          <h1 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 300, letterSpacing: '0.01em', marginBottom: '1rem' }}>About Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8 }}>A Dallas small business built on trust, relationships, and an unwavering commitment to your home.</p>
        </div>

        {/* MISSION SPLIT */}
        <section className="py-24 px-6" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div style={{ position: 'relative', overflow: 'hidden', height: 580 }}>
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85&fit=crop"
                  alt="Beautifully maintained Dallas home interior - Klean Sweep Co."
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="hidden lg:block" style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', background: '#F5F3F0', padding: '2rem', width: 200 }}>
                <p className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Based in</p>
                <p style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.1 }}>Dallas<br />Design District</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-eyebrow">Who We Are</span>
              <h2 className="section-title mb-6">Your Home Deserves<br /><em>More Than Clean</em></h2>
              <div className="gold-rule mb-8" />
              <p className="text-muted leading-relaxed mb-5" style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9 }}>At Klean Sweep, we believe that a clean and organized living space is essential for a happy and healthy life. Our mission is to provide top-notch cleaning services that go beyond surface-level cleaning &mdash; ensuring that every nook and cranny of your home or apartment is thoroughly refreshed.</p>
              <p className="text-muted leading-relaxed mb-5" style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9 }}>We take pride in our attention to detail, using techniques that leave your space sparkling clean for you and your loved ones. We are dedicated to delivering exceptional results with each visit, understanding that every home is unique.</p>
              <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9 }}>At Klean Sweep, we value our clients and strive to build long-lasting relationships by ensuring your needs are understood and met with the utmost professionalism. Trust us to take the hassle out of cleaning, allowing you to enjoy a clean and comfortable living environment while you focus on the things that matter most to you.</p>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="py-20 px-6 text-center" style={{ background: '#111111' }}>
          <div className="max-w-3xl mx-auto">
            <div className="gold-rule mx-auto mb-8" />
            <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.6rem,3.5vw,2.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.3 }}>
              &ldquo;We are committed to your satisfaction &mdash; and what will make us your{' '}
              <span style={{ color: '#C4A46B' }}>go-to for trusted, consistent cleaning services.&rdquo;</span>
            </p>
            <div className="gold-rule mx-auto mt-8" />
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 px-6" style={{ background: 'white' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0" style={{ border: '1px solid #E0DDD8' }}>
            {stats.map((s, i) => (
              <div key={s.label} className="text-center p-8" style={{ borderRight: i < stats.length - 1 ? '1px solid #E0DDD8' : 'none' }}>
                <div style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 300, color: '#C4A46B', lineHeight: 1 }}>{s.value}</div>
                <p className="text-xs uppercase tracking-widest mt-2 font-medium" style={{ letterSpacing: '0.15em', color: '#8A8886' }}>{s.label}</p>
                <p className="text-muted text-xs mt-1" style={{ fontWeight: 300 }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 px-6" style={{ background: '#F5F3F0' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-eyebrow">Our Promise</span>
              <h2 className="section-title mb-4">The Values We<br /><em>Clean By</em></h2>
              <div className="gold-rule mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="value-card">
                <div className="mb-6"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.3" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.75rem' }}>Attention to Detail</h3>
                <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300, lineHeight: 1.8 }}>We go beyond surface-level. Every corner, fixture, and hard-to-reach area gets the same meticulous care. No cutting corners &mdash; ever.</p>
              </div>

              <div className="value-card">
                <div className="mb-6"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.3" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.75rem' }}>Customized Solutions</h3>
                <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300, lineHeight: 1.8 }}>Every home is different. We tailor every clean to your specific space, lifestyle, and preferences &mdash; not a one-size-fits-all approach.</p>
              </div>

              <div className="value-card">
                <div className="mb-6"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.3" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.75rem' }}>Long-Lasting Relationships</h3>
                <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300, lineHeight: 1.8 }}>We&apos;re not a transaction &mdash; we&apos;re your cleaning partner. We get to know your home and build trust over time, visit after visit.</p>
              </div>

              <div className="value-card">
                <div className="mb-6"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.3" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.75rem' }}>Safety &amp; Discretion</h3>
                <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300, lineHeight: 1.8 }}>Your home and privacy are treated with the utmost respect. Equipment is sanitized after every visit. Your trust is paramount.</p>
              </div>

              <div className="value-card">
                <div className="mb-6"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.3" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.75rem' }}>Reliability &amp; Precision</h3>
                <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300, lineHeight: 1.8 }}>We provide precise arrival times &mdash; no inconvenient arrival windows. Your schedule matters, and we honor it with punctuality every time.</p>
              </div>

              <div className="value-card">
                <div className="mb-6"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.75rem' }}>Satisfaction Guaranteed</h3>
                <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300, lineHeight: 1.8 }}>If something isn&apos;t right, contact us within 24 hours with a photo and we&apos;ll make it right. Building your trust is our top priority.</p>
              </div>

            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-24 px-6" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow">Where We Serve</span>
              <h2 className="section-title mb-6">Proudly Rooted in<br /><em>Central Dallas</em></h2>
              <div className="gold-rule mb-8" />
              <p className="text-muted leading-relaxed mb-5" style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9 }}>Klean Sweep&apos;s primary service area is Central Dallas &mdash; from the Knox Henderson neighborhood all the way to Downtown, and everything in between. We are a true neighborhood business serving our own community.</p>
              <p className="text-muted leading-relaxed mb-8" style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9 }}>Our base is in the Dallas Design District, placing us at the heart of the city we love. Every home we clean is a home in our own backyard.</p>
              <div className="flex items-center gap-4 mb-8">
                <div style={{ width: 2, height: 48, background: '#C4A46B' }} />
                <div>
                  <p style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.2rem', fontWeight: 400 }}>Dallas Design District, TX 75207</p>
                  <p className="text-muted text-sm" style={{ fontWeight: 300 }}>Knox Henderson &middot; Uptown &middot; Downtown &amp; surrounding neighborhoods</p>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link to="/services" className="btn-dark">View Our Services</Link>
                <a href="#contact" className="btn-gold">Book a Clean</a>
              </div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', height: 480 }}>
              <img
                src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=900&q=85&fit=crop"
                alt="Beautiful Dallas-area home interior spotlessly maintained by Klean Sweep Co."
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6" style={{ background: '#111111' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow" style={{ color: '#D8C4A8' }}>Let&apos;s Connect</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1rem' }}>
              Ready to Experience<br /><em style={{ color: '#C4A46B' }}>the Klean Sweep Difference?</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 3rem' }}>
              Book your first cleaning today &mdash; whether you&apos;re a busy professional looking for a reliable weekly cleaner, or a homeowner who wants your space treated with the care it deserves.
            </p>
            <div style={{ textAlign: 'left' }}>
              <ContactForm dark />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
