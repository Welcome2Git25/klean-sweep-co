import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const CheckIcon = () => (
  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const basicItems = [
  'Dust horizontal surfaces',
  'Dust countertop items & decor',
  'Dust blinds & window sills',
  'Dust furniture tops with soft bristle brush',
  'Bed straightening with existing linens',
  'Mirror cleaning',
  'Countertop cleaning & sanitization',
  'Clean & sanitize sinks',
  'Polish plumbing fixtures',
  'Clean & sanitize showers & bathtubs',
  'Clean & sanitize toilets',
  'Microwave cleaning (interior & exterior)',
  'Clean kitchen appliances (exterior)',
  'Empty & reline waste baskets',
  'Sweep, vacuum carpets & rugs',
  'Mop floors',
]

const detailItems = [
  'Ceiling fan dusting',
  'Light fixture dusting',
  'Dust wall art',
  'Door frame dusting',
  'Baseboard dusting',
  'A/C vent dusting',
  'Cobweb removal',
  'Linen changing & refreshing of bedding',
  'Spot-clean kitchen & bathroom cabinet fronts',
  'Clean kitchen backsplash',
  'Clean all high-touch points (handles, switches)',
]

const moveoutItems = [
  'Dust & wipe interior windows, blinds & sills',
  'Dust & wipe ceiling fans & light fixtures',
  'Wipe down all baseboards',
  'Dust & wipe interior of all cabinets & drawers',
  'Wipe down all cabinet & drawer fronts',
  'Sanitize all countertops & backsplashes',
  'Sanitize shower, tub, toilets, sinks & fixtures',
  'Vacuum, sweep & mop all floors',
  'Clean interior & exterior of all appliances',
]

const addonTitles = ['Laundry Service', 'Organization', 'Refrigerator', 'Oven Cleaning', 'Dish Washing', 'Interior Cabinets', 'Interior Drawers', 'Special Projects']
const addonDescs = [
  'Wash, dry, fold, and put away',
  'Declutter, sort & organize any space',
  'Interior deep clean & sanitize',
  'Interior degreasing & clean',
  'Hand-wash & dry your dishes',
  'Wipe all interior cabinet shelves',
  'Wipe all interior drawer surfaces',
  "Just ask — we'll tailor a solution",
]

export default function Services() {
  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <div style={{
          position: 'relative', padding: '10rem 1.5rem 5rem', textAlign: 'center', overflow: 'hidden',
          backgroundImage: 'linear-gradient(160deg,rgba(20,16,10,0.55) 0%,rgba(22,18,10,0.40) 100%), url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85&fit=crop")',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}>
          <span className="section-eyebrow" style={{ color: '#D8C4A8' }}>Premium Residential Cleaning</span>
          <h1 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 300, letterSpacing: '0.01em', marginBottom: '1rem' }}>Our Services</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8 }}>Transparent pricing. Meticulous execution. Every service is crafted to leave your home in its finest state.</p>
        </div>

        {/* INTRO STRIP */}
        <div style={{ background: 'white', borderBottom: '1px solid #E0DDD8', padding: '3rem 1.5rem' }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300, maxWidth: 500 }}>Our service plans are based on the average time it takes to clean a home the size of yours. We focus on your satisfaction, not the clock. Regular clients enjoy discounted rates as our team gets to know your home.</p>
            <div className="flex-shrink-0">
              <a href="#contact" className="btn-dark">Get a Free Quote</a>
            </div>
          </div>
        </div>

        {/* PRICING CARDS */}
        <section className="py-24 px-6" style={{ background: '#F5F3F0' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-eyebrow">Pricing &amp; Packages</span>
              <h2 className="section-title mb-4">Choose Your Level<br />of <em>Clean</em></h2>
              <div className="gold-rule mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* BASIC CLEAN */}
              <div className="pricing-card" id="basic">
                <div className="pricing-card-header">
                  <span className="section-eyebrow">Essential</span>
                  <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Basic Clean</h3>
                  <p className="text-muted text-sm mb-5" style={{ fontWeight: 300, lineHeight: 1.7 }}>Stay on top of your routine with consistent, reliable service covering all essential areas of your home or apartment.</p>
                  <div style={{ borderTop: '1px solid #E0DDD8', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
                    <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.8rem', color: '#111111', fontWeight: 300 }}>From <strong style={{ color: '#C4A46B', fontWeight: 500 }}>$99</strong></p>
                    <p className="text-muted text-xs uppercase tracking-widest mt-1" style={{ letterSpacing: '0.15em', fontWeight: 500 }}>Bi-weekly &middot; 1 bed / 1 bath</p>
                  </div>
                  <p className="text-xs text-muted" style={{ fontWeight: 300, fontStyle: 'italic' }}>Does not include pantries, closets, laundry rooms, or stairwells &mdash; add-on fee applies to include these areas.</p>
                </div>
                <div className="pricing-card-body">
                  <p className="section-eyebrow mb-3">What&apos;s Included</p>
                  <div>{basicItems.map(item => <div className="check-item" key={item}><CheckIcon />{item}</div>)}</div>
                  <a href="#contact" className="btn-outline w-full text-center block mt-8">Book Basic Clean</a>
                </div>
              </div>

              {/* DETAIL CLEAN */}
              <div className="pricing-card featured" id="detail">
                <div style={{ background: '#C4A46B', padding: '0.5rem 1.5rem', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#111111' }}>Most Popular Choice</span>
                </div>
                <div className="pricing-card-header">
                  <span className="section-eyebrow">Thorough</span>
                  <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Detail Clean</h3>
                  <p className="text-muted text-sm mb-5" style={{ fontWeight: 300, lineHeight: 1.7 }}>For homes that deserve more attention &mdash; a comprehensive clean that tackles every surface, fixture, and forgotten corner.</p>
                  <div style={{ borderTop: '1px solid #E0DDD8', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
                    <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.8rem', color: '#111111', fontWeight: 300 }}>From <strong style={{ color: '#C4A46B', fontWeight: 500 }}>$139</strong></p>
                    <p className="text-muted text-xs uppercase tracking-widest mt-1" style={{ letterSpacing: '0.15em', fontWeight: 500 }}>Bi-weekly &middot; 1 bed / 1 bath</p>
                  </div>
                  <p className="text-xs text-muted" style={{ fontWeight: 300, fontStyle: 'italic' }}>Includes everything in the Basic Clean, <em>plus</em> all of the following.</p>
                </div>
                <div className="pricing-card-body">
                  <p className="section-eyebrow mb-3">Everything in Basic, Plus</p>
                  <div>{detailItems.map(item => <div className="check-item" key={item}><CheckIcon />{item}</div>)}</div>
                  <a href="#contact" className="btn-gold w-full text-center block mt-8">Book Detail Clean</a>
                </div>
              </div>

              {/* MOVE-OUT CLEAN */}
              <div className="pricing-card" id="moveout">
                <div className="pricing-card-header">
                  <span className="section-eyebrow">Specialized</span>
                  <h3 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Move-out Clean</h3>
                  <p className="text-muted text-sm mb-5" style={{ fontWeight: 300, lineHeight: 1.7 }}>Leave your old home spotless or welcome a new one in pristine condition &mdash; a complete top-to-bottom final clean.</p>
                  <div style={{ borderTop: '1px solid #E0DDD8', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
                    <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.8rem', color: '#111111', fontWeight: 300 }}><strong style={{ color: '#C4A46B', fontWeight: 500 }}>Call for Estimate</strong></p>
                    <p className="text-muted text-xs uppercase tracking-widest mt-1" style={{ letterSpacing: '0.15em', fontWeight: 500 }}>Flexible scheduling</p>
                  </div>
                  <div className="text-xs text-muted space-y-1" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                    <p>Home must be clear of personal belongings and trash.</p>
                    <p>Utilities must still be active at time of service.</p>
                    <p>Payment required prior to start of service.</p>
                  </div>
                </div>
                <div className="pricing-card-body">
                  <p className="section-eyebrow mb-3">Full Deep Clean Includes</p>
                  <div>{moveoutItems.map(item => <div className="check-item" key={item}><CheckIcon />{item}</div>)}</div>
                  <a href="tel:4693364488" className="btn-outline w-full text-center block mt-8">Call for Estimate</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PAYMENT & POLICIES */}
        <section className="py-16 px-6" style={{ background: '#111111' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <h4 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Payment Methods</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7 }}>We accept Zelle, Apple Pay, and cash. Payment is due at the time of service for Basic and Detail cleans.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Cancellation Policy</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7 }}>Modify or cancel up to 48 hours prior at no charge. Changes within 48 hours carry a $50 fee.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Satisfaction Guaranteed</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7 }}>Not satisfied? Send a photo within 24 hours and we&apos;ll make it right at no extra charge.</p>
            </div>
          </div>
        </section>

        {/* ADD-ON SERVICES */}
        <section className="py-24 px-6" style={{ background: 'white' }} id="addons">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-eyebrow">Go Further</span>
              <h2 className="section-title mb-4">Add-on Services</h2>
              <div className="gold-rule mx-auto mb-6" />
              <p className="text-muted text-sm max-w-xl mx-auto" style={{ fontWeight: 300, lineHeight: 1.8 }}>Need to delegate more chores? Layer on exactly what your home needs. Don&apos;t see what you&apos;re looking for? Just ask &mdash; we&apos;ll do our best to accommodate.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {addonTitles.map((title, i) => (
                <div className="addon-item" key={title}>
                  <div className="flex justify-center mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.5" strokeLinecap="round">
                      {i === 0 && <><path d="M21 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/><path d="M1 10h22"/></>}
                      {i === 1 && <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></>}
                      {i === 2 && <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></>}
                      {i === 3 && <><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/><path d="M9 15h6"/></>}
                      {i === 4 && <><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></>}
                      {i === 5 && <><path d="M3 4h18v2H3zM5 6v14h14V6"/><path d="M9 10h6"/><path d="M9 14h6"/></>}
                      {i === 6 && <><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 9h16"/><path d="M4 14h16"/></>}
                      {i === 7 && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>}
                    </svg>
                  </div>
                  <h4 style={{ fontFamily: '"Cormorant Garamond",serif', color: '#1A1A1A', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem' }}>{title}</h4>
                  <p className="text-muted" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.6 }}>{addonDescs[i]}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted text-sm mt-10" style={{ fontWeight: 300 }}>
              Add-on pricing varies by scope.{' '}
              <a href="#contact" style={{ color: '#C4A46B', textDecoration: 'none', borderBottom: '1px solid rgba(184,146,74,0.3)' }}>Request a custom quote &rarr;</a>
            </p>
          </div>
        </section>

        {/* LOYALTY */}
        <section className="py-20 px-6" style={{ background: '#F5F3F0' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-eyebrow">Loyalty &amp; Savings</span>
              <h2 className="section-title mb-3">We Reward<br /><em>Our Regulars</em></h2>
              <span className="section-eyebrow" style={{ display: 'block', marginBottom: '2rem' }}>Move from Customer to Client.</span>
              <div className="gold-rule mb-8" />
              <p className="text-muted text-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>We reward customers who stick with us. Regularly scheduled cleanings come at a lower rate, and every referral earns you a reward &mdash; our way of thanking you for trusting us with your home.</p>
              <p className="text-muted text-sm leading-relaxed" style={{ fontWeight: 300 }}>Regular cleanings also allow our team to become familiar with your home &mdash; meaning cleanings are faster, more efficient, and your rate stays lower. That&apos;s why weekly, bi-weekly, or monthly service costs less than a first-time clean.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-8 bg-white" style={{ border: '1px solid #E0DDD8' }}>
                <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '2.5rem', fontWeight: 300, color: '#C4A46B', marginBottom: '0.5rem' }}>%</p>
                <p className="text-xs uppercase tracking-widest font-medium" style={{ letterSpacing: '0.15em', color: '#3A3A3A' }}>Recurring<br />Discounts</p>
              </div>
              <div className="text-center p-8 bg-white" style={{ border: '1px solid #E0DDD8' }}>
                <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '2.5rem', fontWeight: 300, color: '#C4A46B', marginBottom: '0.5rem' }}>$</p>
                <p className="text-xs uppercase tracking-widest font-medium" style={{ letterSpacing: '0.15em', color: '#3A3A3A' }}>Referral<br />Rewards</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6" style={{ background: '#111111' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-eyebrow" style={{ color: '#D8C4A8' }}>Ready to Begin?</span>
              <h2 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.25rem' }}>Request Your<br /><em style={{ color: '#C4A46B' }}>Free Quote</em></h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '2rem' }}>Tell us about your home and we&apos;ll prepare a personalized quote &mdash; transparent pricing, no surprises. We respond within one business day.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div style={{ width: 2, height: 36, background: '#C4A46B', flexShrink: 0 }} />
                  <div>
                    <p className="text-white text-sm font-medium">469-336-4488</p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>Call or text anytime M&ndash;F, 9am&ndash;5pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div style={{ width: 2, height: 36, background: '#C4A46B', flexShrink: 0 }} />
                  <div>
                    <p className="text-white text-sm font-medium">kleansweepco@gmail.com</p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>We respond within 1 business day</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm dark />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
