import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const testimonials = [
  [
    { text: '"Kristi provided me an amazing service and has the sweetest personality! She cleaned all the nooks and crannies in my place. My place smells soo good and all the fixtures are shining."', author: 'Swyah S.' },
    { text: '"Amazing work! Kristina was so kind and such a pleasure to be around! She was able to clean around our work setups with no distractions whatsoever. Her products smell AMAZING!"', author: 'Chelsie M.' },
    { text: '"Absolutely great! Kristi is sweet, professional, and did a tremendous job! I will be calling her again. She went above and beyond."', author: 'Nathan H.' },
  ],
  [
    { text: '"Amazing cleaning service! Very friendly and my apartment looked so clean. She even made my bed and made sure all of my toiletries looked nice and neat. Over the top amazing service!"', author: 'Breanna S.' },
    { text: '"Amazing job and such nice people! They made booking very easy, the whole process was so smooth. I will definitely be using them again!"', author: 'Taylor N.' },
    { text: '"They were so easy to schedule with & transparent. The cleaning was PERFECT. Best overall experience, highly recommended."', author: 'Kelsey A.' },
  ],
  [
    { text: '"Will be the only company I use! I booked a clean and an organization block. I came home to a beautiful apartment and all my boxes taken care of. Fantastic quality and communication!"', author: 'Meagan L.' },
    { text: '"Great clean! Very thorough, the apartment looked great. Look forward to using them again soon."', author: 'Kevin J.' },
    { text: '"Kristina did a WONDERFUL job on my move-out clean. Very detailed — floors, ceiling fans, baseboards, stove, refrigerator left SPOTLESS. Highly recommend Klean Sweep."', author: 'Christopher H.' },
  ],
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Home() {
  const [slide, setSlide] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    intervalRef.current = setInterval(() => setSlide(s => (s + 1) % 3), 6500)
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (i: number) => {
    setSlide((i + 3) % 3)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setSlide(s => (s + 1) % 3), 6500)
  }

  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', height: '100vh', minHeight: 680, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
          <div className="hero-bg-img" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.60) 0%, rgba(12,12,12,0.45) 60%, rgba(10,10,10,0.52) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }} className="px-6 max-w-3xl mx-auto">
            <div style={{ width: 48, height: 1, background: '#C4A46B', margin: '0 auto 1.75rem' }} />
            <p className="section-eyebrow" style={{ color: '#D8C4A8', letterSpacing: '0.3em' }}>Dallas's Premier Residential Cleaning</p>
            <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '0.01em', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
              Because Your Home<br /><em style={{ color: '#C4A46B', fontWeight: 400 }}>Is Your Sanctuary</em>
            </h1>
            <p className="text-white/70 mb-10 max-w-lg mx-auto leading-relaxed" style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.02em', textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}>
              Klean Sweep Co. brings meticulous, detail-driven cleaning to the finest homes in Central Dallas — so you can reclaim your time and enjoy a pristine sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-gold">Book a Cleaning</a>
              <Link to="/services" className="btn-outline-light">Our Services</Link>
            </div>
            <p className="text-white/40 mt-10 text-xs tracking-widest uppercase">
              Call or text: <a href="tel:4693364488" className="hover:text-gold transition-colors ml-1" style={{ color: 'rgba(255,255,255,0.65)' }}>469-336-4488</a>
            </p>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-24 px-6 text-center" style={{ background: 'white' }}>
          <div className="max-w-2xl mx-auto">
            <span className="section-eyebrow">The Klean Sweep Difference</span>
            <h2 className="section-title mb-6">Curating Exceptional<br /><em>Living Spaces</em></h2>
            <div className="gold-rule mx-auto mb-8" />
            <p className="text-muted leading-relaxed mb-6" style={{ fontSize: '1.05rem', fontWeight: 300 }}>
              At Klean Sweep, we believe that a clean and organized home is essential for a happy, healthy life. We go beyond surface-level cleaning — every corner, every detail, every time. We take pride in our attention to detail, using techniques that leave your space sparkling clean for you and your loved ones.
            </p>
            <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem', fontWeight: 300 }}>
              We are dedicated to delivering exceptional results with each visit. We understand that every home is unique, which is why we offer customized solutions tailored to your specific needs and preferences. Trust us to take the hassle out of cleaning.
            </p>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="py-8 px-6" style={{ background: '#111111' }}>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
            {[
              ['Locally Owned', 'Dallas Small Business'],
              ['5-Star Rated', 'Verified Client Reviews'],
              ['Precise Timing', 'No Arrival Windows'],
              ['Satisfaction', 'Guaranteed Always'],
            ].map(([title, sub], i) => (
              <div key={i} className="flex items-center gap-0">
                {i > 0 && <div className="hidden sm:block" style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)', marginRight: '2rem' }} />}
                <div>
                  <p style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.25rem' }}>{title}</p>
                  <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em' }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES OVERVIEW ── */}
        <section className="py-24 px-6" style={{ background: '#F5F3F0' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-eyebrow">What We Offer</span>
              <h2 className="section-title mb-4">Our Services</h2>
              <div className="gold-rule mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { eyebrow: 'Essential', title: 'Basic Clean', desc: 'Stay on top of your routine with consistent, reliable service covering all essential areas. Dusting, sanitizing, vacuuming, and more.', price: '$99', unit: 'bi-weekly', anchor: '#basic', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />, featured: false },
                { eyebrow: 'Thorough', title: 'Detail Clean', desc: 'For homes needing more attention — ceiling fans, baseboards, light fixtures, high-touch surfaces, linen refreshing, and every overlooked corner.', price: '$139', unit: 'bi-weekly', anchor: '#detail', icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />, featured: true },
                { eyebrow: 'Specialized', title: 'Move-out Clean', desc: 'Leave your old or new home in impeccable condition. Interior cabinets, appliances, windows, blinds — a complete final deep clean.', price: 'Call for Estimate', unit: '', anchor: '#moveout', icon: null, featured: false },
              ].map((s) => (
                <div key={s.title} className={`service-card ${s.featured ? 'featured' : ''}`}>
                  {s.featured && (
                    <div className="mb-2">
                      <span style={{ background: '#C4A46B', color: 'white', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.25rem 0.75rem' }}>Most Popular</span>
                    </div>
                  )}
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: s.featured ? '#f5ede0' : '#F5F3F0', border: `${s.featured ? '1.5px' : '1px'} solid ${s.featured ? '#C4A46B' : '#E0DDD8'}` }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {s.icon ?? <><path d="M5 3h14M5 12h14M5 21h14" /><rect x="8" y="7" width="8" height="5" rx="0.5" /></>}
                      </svg>
                    </div>
                  </div>
                  <p className="section-eyebrow mt-3">{s.eyebrow}</p>
                  <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6" style={{ fontWeight: 300 }}>{s.desc}</p>
                  <p style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                    {s.unit ? <>From <strong style={{ color: '#C4A46B' }}>{s.price}</strong> <span className="text-sm font-body text-muted" style={{ fontWeight: 300 }}>{s.unit}</span></> : <strong style={{ color: '#C4A46B' }}>{s.price}</strong>}
                  </p>
                  <Link to={`/services${s.anchor}`} style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4A46B', borderBottom: '1px solid rgba(184,146,74,0.3)', paddingBottom: 2, textDecoration: 'none' }}>View Checklist →</Link>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted mt-10" style={{ fontWeight: 300 }}>
              Need something extra? Explore our <Link to="/services#addons" style={{ color: '#C4A46B', textDecoration: 'none', borderBottom: '1px solid rgba(184,146,74,0.3)' }}>add-on services</Link> — laundry, organization, oven &amp; fridge cleaning, and more.
            </p>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="py-24 px-6" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="section-eyebrow">A Spotless Finish</span>
              <h2 className="section-title mb-4">The Spaces We Restore</h2>
              <div className="gold-rule mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=85&fit=crop', alt: 'Spotless luxury bedroom after Klean Sweep Co. deep cleaning service', ratio: '3/4' },
                { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85&fit=crop', alt: 'Immaculately cleaned luxury kitchen in Dallas home', ratio: '3/4' },
                { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=85&fit=crop', alt: 'Gleaming luxury bathroom cleaned and sanitized by Klean Sweep Co.', ratio: '3/4' },
              ].map((img) => (
                <div key={img.url} className="gallery-img" style={{ aspectRatio: img.ratio }}>
                  <img src={img.url} alt={img.alt} />
                  <div className="gallery-img-overlay" />
                </div>
              ))}
            </div>
            <div className="gallery-img mt-4" style={{ aspectRatio: '16/6' }}>
              <img src="https://images.unsplash.com/photo-1583845112203-29329902332e?w=1600&q=85&fit=crop" alt="Pristine open-plan living room in a luxury Dallas home cleaned by Klean Sweep Co." />
              <div className="gallery-img-overlay" />
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-dark">Explore All Services</Link>
            </div>
          </div>
        </section>

        {/* ── WHY KLEAN SWEEP ── */}
        <section className="py-24 px-6" style={{ background: '#111111' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=85&fit=crop" alt="Luxuriously clean and styled modern living space in Dallas" style={{ width: '100%', height: 560, objectFit: 'cover' }} />
              <div className="hidden lg:flex" style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', background: '#C4A46B', width: 120, height: 120, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '2rem', fontWeight: 600, lineHeight: 1, color: '#222' }}>5★</p>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#111', fontWeight: 600, marginTop: 4 }}>Rated</p>
              </div>
            </div>
            <div>
              <span className="section-eyebrow" style={{ color: '#D8C4A8' }}>Why Choose Us</span>
              <h2 className="font-display text-white mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.2 }}>
                A Cleaning Service Built<br />on <em style={{ color: '#C4A46B' }}>Trust &amp; Relationships</em>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', fontWeight: 300 }}>
                We are a locally owned and operated small business. At Klean Sweep, we value our clients and strive to build long-lasting relationships by ensuring your needs are understood and met through clear communication and the utmost reliability.
              </p>
              <ul className="space-y-6">
                {[
                  ['Customized to Your Specific Home', 'Every home is unique. We tailor our cleaning to your preferences, schedule, and needs.'],
                  ['Fully Equipped & Supplied', 'We arrive with everything needed. Prefer your own supplies? We offer a discounted rate.'],
                  ['Satisfaction Guaranteed', "Not satisfied? Contact us within 24 hours and we will make it right — every single time."],
                  ['Loyalty & Referral Discounts', 'Recurring customers and referrals receive exclusive discounts — our way of saying thank you.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-5">
                    <div style={{ color: '#C4A46B', marginTop: 2, flexShrink: 0 }}><CheckIcon /></div>
                    <div>
                      <p className="font-medium text-white mb-1" style={{ fontSize: '1.05rem', letterSpacing: '0.04em' }}>{title}</p>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-gold mt-10" style={{ display: 'inline-block' }}>Our Story</Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 px-6" style={{ background: '#F5F3F0' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-eyebrow">What Our Clients Say</span>
              <h2 className="section-title mb-4">Voices of Our Community</h2>
              <div className="gold-rule mx-auto" />
            </div>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <div className="testimonial-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
                {testimonials.map((group, gi) => (
                  <div key={gi} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                    {group.map((t) => (
                      <blockquote key={t.author} className="bg-white p-8" style={{ border: '1px solid #E0DDD8' }}>
                        <div className="text-gold mb-5" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>★★★★★</div>
                        <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.1rem', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, marginBottom: '1.5rem', color: '#1A1A1A' }}>{t.text}</p>
                        <footer style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A8886' }}>— {t.author}</footer>
                      </blockquote>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 mt-10">
                <button onClick={() => goTo(slide - 1)} aria-label="Previous" className="w-10 h-10 flex items-center justify-center border transition-colors" style={{ borderColor: '#C8C0B4', color: '#8A8886' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <div className="flex gap-3">
                  {[0, 1, 2].map(i => (
                    <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} style={{ width: i === slide ? 24 : 8, height: 2, background: i === slide ? '#C4A46B' : '#C8C0B4', transition: 'all 0.3s', border: 'none', cursor: 'pointer', padding: 0 }} />
                  ))}
                </div>
                <button onClick={() => goTo(slide + 1)} aria-label="Next" className="w-10 h-10 flex items-center justify-center border transition-colors" style={{ borderColor: '#C8C0B4', color: '#8A8886' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 px-6" style={{ background: 'white' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-eyebrow">Get in Touch</span>
              <h2 className="section-title mb-4">Begin Your Journey</h2>
              <div className="gold-rule mx-auto mb-6" />
              <p className="text-muted text-sm max-w-md mx-auto" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                Fill out the form and we'll respond within one business day. You can also call or text us directly at <a href="tel:4693364488" style={{ color: '#C4A46B', textDecoration: 'none' }}>469-336-4488</a>.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
