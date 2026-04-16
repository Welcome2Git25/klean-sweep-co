import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

interface FAQItem {
  q: string
  a: string
}

const pricingFAQs: FAQItem[] = [
  {
    q: 'Need a quote? How do I request one?',
    a: 'Visit our contact form and fill out a quick request. Helpful details to include: number of bedrooms and bathrooms, estimated square footage, number of pets, and any specific concerns. You can also call or text us at 469-336-4488 or email kleansweepco@gmail.com.',
  },
  {
    q: 'What are the basic service cleaning rates?',
    a: 'Rates start at $99.00 for bi-weekly Basic Cleaning in a 1-bedroom/1-bath home or apartment, and $139.00 for our Detail Clean. Rates vary based on home size, frequency, and specific needs. View our full pricing page for details.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We currently accept Zelle, Apple Pay, and cash. For Basic and Detail Cleanings, payment is due at the time of service. For Move-In and Move-Out Cleanings, payment is required prior to the start of service.',
  },
  {
    q: 'Does Klean Sweep offer any discounts?',
    a: "Absolutely! We offer recurring customer discounts, referral rewards, and a discounted rate when you choose to provide your own cleaning supplies and equipment. These savings are designed to make regular cleanings even more affordable and put money back in your pocket.",
  },
  {
    q: 'Am I charged the full amount even if the clean takes less time?',
    a: "Our service prices are based on the cleaning package, not on time. If your home requires special attention and takes more than an extra hour beyond the estimate, we reserve the right to bill for the additional time at an hourly rate.",
  },
  {
    q: 'How are rates determined?',
    a: "Our cleaning plans are based on the average time it takes to clean a home of your size (bedrooms, bathrooms, and square footage). Regular cleanings allow our team to become familiar with your home, making visits faster and your rate lower. That's why weekly, bi-weekly, or monthly service costs less than a first-time clean.",
  },
  {
    q: 'Do you offer gift certificates?',
    a: "While we don't offer traditional gift cards, we're happy to provide service credits that can be gifted and applied to a future cleaning. It's a wonderful way to treat someone special — for a housewarming, birthday, or simply to say thank you.",
  },
  {
    q: 'Is it customary to tip my cleaner?',
    a: "Tipping is entirely optional and based on your satisfaction. While it's not expected, it is always appreciated. You're welcome to include it with your payment or give it directly to your cleaner. A 5-star review on Yelp or Google is also a wonderful way to show appreciation and helps us grow our small business.",
  },
]

const schedulingFAQs: FAQItem[] = [
  {
    q: 'Can I get a same-day booking?',
    a: "While we cannot guarantee same-day bookings, we can often accommodate them. Please call us directly to discuss your last-minute needs. If the only available time falls outside regular business hours (M\u2013F, 9am\u20135pm), an additional after-hours fee will apply.",
  },
  {
    q: 'Will I receive a reminder before my cleaning?',
    a: "Yes \u2014 a reminder text message will be sent to you the day before your scheduled cleaning so you're never caught off guard.",
  },
  {
    q: 'Do I have to be home during the cleaning?',
    a: "Not at all. Your presence is not required. In fact, many of our clients \u2014 especially busy professionals \u2014 prefer not to be home. Simply leave us with access instructions, and we'll take care of the rest. Your home will be sparkling when you return.",
  },
  {
    q: 'Can my pets be around during the cleaning?',
    a: "Absolutely. Your pets are welcome to stay. They are valued members of your family. We only ask that pets are kept in a secure, comfortable area away from the active cleaning process \u2014 this ensures their safety and allows our team to clean efficiently.",
  },
  {
    q: 'What time can I expect Klean Sweep to arrive?',
    a: "We respect your time by offering precise arrival times rather than vague arrival windows. In the rare event of unforeseen circumstances (weather delays, etc.), you will be contacted promptly with an updated ETA.",
  },
  {
    q: 'How do I change or cancel a scheduled cleaning?',
    a: "We understand life happens. You're welcome to modify or cancel your cleaning up to 48 hours prior to the appointment at no charge. Cancellations or changes made within 48 hours of the appointment will incur a $50 fee.",
  },
  {
    q: "Why doesn't Klean Sweep clean on weekends?",
    a: "At Klean Sweep, we prioritize work-life balance \u2014 for ourselves and our clients. Choosing not to schedule on weekends allows our team to recharge and show up fully refreshed for every weekday appointment. On certain occasions, we may accommodate weekend requests with a $50 after-hours service fee.",
  },
]

const otherFAQs: FAQItem[] = [
  {
    q: 'What sets Klean Sweep apart from other cleaning companies?',
    a: "We are a locally owned and operated small business. At Klean Sweep, we value our clients and strive to build long-lasting relationships through clear communication and the utmost reliability. We're not a faceless national franchise \u2014 we're your neighbors, and we treat your home like our own.",
  },
  {
    q: 'What locations do you service?',
    a: "Klean Sweep's primary service area is Central Dallas \u2014 from the Knox Henderson neighborhood to Downtown Dallas, and everything in between. Please contact us if you are just outside this area and we'll do our best to accommodate.",
  },
  {
    q: 'Are cleaning supplies included?',
    a: "Yes \u2014 Klean Sweep arrives fully equipped with everything needed. However, if you prefer us to use your own supplies and equipment (mop, broom, vacuum), we offer a reduced rate tailored to your needs. This also eliminates any concerns about cross-contamination between homes. Please have your supplies ready upon our arrival.",
  },
  {
    q: 'How many cleaners will come to my home?',
    a: "One cleaner is typically sent to each home, unless it is predetermined that the size or scope requires two cleaners. This will be discussed and agreed upon during the booking process.",
  },
  {
    q: "What if I'm not happy with my cleaning?",
    a: "Your satisfaction is our top priority. Please send a message with a photo within 24 hours of the completed service and we will make arrangements to rectify the situation promptly and at no additional charge. Building relationships and rapport is one of our top priorities.",
  },
  {
    q: 'Do you offer add-on or specialty services?',
    a: "Yes! We offer a wide range of add-on services including interior refrigerator and oven cleaning, interior cabinet and drawer cleaning, laundry, dishes, home organization, and special projects. If you don't see what you need, just ask \u2014 we'll do our best to accommodate.",
  },
  {
    q: 'What is your illness / health policy?',
    a: "Your health and safety \u2014 along with our team's \u2014 is our top priority. We sanitize all equipment after every visit. We ask that you give us a heads-up if anyone in your home is ill or has something potentially contagious, so we can easily reschedule. As a small local business, we'll give you a quick call if we need to reschedule due to illness on our end. Your understanding means so much to us.",
  },
]

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`acc-item${isOpen ? ' open' : ''}`}>
      <button className="acc-trigger" onClick={onToggle}>
        <span className="acc-question">{item.q}</span>
        <div className="acc-icon">
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            strokeWidth="2.5" strokeLinecap="round"
            stroke={isOpen ? '#1A1A1A' : '#C4A46B'}
            style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>
      <div className={`acc-body${isOpen ? ' open' : ''}`}>
        <p className="acc-answer">{item.a}</p>
      </div>
    </div>
  )
}

function AccordionSection({ title, items }: { title: string; items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="mb-16">
      <div className="flex items-center gap-5 mb-10">
        <span style={{ padding: '1rem 1.5rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'white', background: '#111111', display: 'inline-block', flexShrink: 0 }}>{title}</span>
        <div style={{ flex: 1, height: 1, background: '#E0DDD8' }} />
      </div>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <div style={{
          position: 'relative', padding: '10rem 1.5rem 5rem', textAlign: 'center',
          backgroundImage: 'linear-gradient(160deg,rgba(18,14,8,0.54) 0%,rgba(20,16,8,0.44) 100%), url("https://images.unsplash.com/photo-1583845112203-29329902332e?w=1920&q=85&fit=crop")',
          backgroundSize: 'cover', backgroundPosition: 'center top',
        }}>
          <span className="section-eyebrow" style={{ color: '#D8C4A8' }}>Your Questions Answered</span>
          <h1 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 300, marginBottom: '1rem' }}>
            Frequently Asked<br /><em style={{ color: '#C4A46B' }}>Questions</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8 }}>Everything you need to know before your first cleaning &mdash; and beyond.</p>
        </div>

        {/* FAQ SECTIONS */}
        <section className="py-24 px-6" style={{ background: 'white' }}>
          <div className="max-w-3xl mx-auto">
            <AccordionSection title="Pricing Questions" items={pricingFAQs} />
            <AccordionSection title="Scheduling Questions" items={schedulingFAQs} />
            <AccordionSection title="Other Questions" items={otherFAQs} />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6" style={{ background: '#111111' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow" style={{ color: '#D8C4A8' }}>Still Have Questions?</span>
              <h2 style={{ fontFamily: '"Cormorant Garamond",serif', color: 'white', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.25rem' }}>
                We&apos;d Love to<br /><em style={{ color: '#C4A46B' }}>Hear From You</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem' }}>Don&apos;t see your question here? Reach out directly &mdash; we&apos;re happy to walk you through our process, answer any questions, and get you scheduled.</p>
              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,146,74,0.12)', border: '1px solid rgba(184,146,74,0.3)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.9 3.34 2 2 0 0 1 3.88 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">469-336-4488</p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>Call or text &mdash; Mon&ndash;Fri, 9am&ndash;5pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,146,74,0.12)', border: '1px solid rgba(184,146,74,0.3)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">kleansweepco@gmail.com</p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>We respond within 1 business day</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,146,74,0.12)', border: '1px solid rgba(184,146,74,0.3)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4A46B" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Dallas Design District, TX 75207</p>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>Serving Central Dallas &mdash; Knox Henderson to Downtown</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm dark simple />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
