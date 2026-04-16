import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: 'rgba(255,255,255,0.55)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.3rem', color: 'white', fontWeight: 500, letterSpacing: '0.02em', marginBottom: '1rem' }}>
            Klean Sweep Co.
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ fontWeight: 300 }}>
            Premium residential cleaning services in Central Dallas. Your home is your sanctuary — let us keep it that way.
          </p>
          <div style={{ width: 32, height: 1, background: '#C4A46B' }} />
          <p className="text-xs mt-4 uppercase tracking-widest" style={{ color: '#C4A46B', letterSpacing: '0.2em' }}>Dallas Design District, TX</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-medium mb-6" style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.2em' }}>Navigation</h3>
          <ul className="space-y-3">
            {[['/', 'Home'], ['/services', 'Services & Pricing'], ['/about', 'About Us'], ['/faq', 'FAQ']].map(([path, label]) => (
              <li key={path}>
                <Link to={path} className="text-sm hover:text-white transition-colors" style={{ textDecoration: 'none', fontWeight: 300 }}>{label}</Link>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-sm hover:text-white transition-colors" style={{ textDecoration: 'none', fontWeight: 300 }}>Book a Cleaning</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-medium mb-6" style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.2em' }}>Contact</h3>
          <ul className="space-y-3 text-sm" style={{ fontWeight: 300 }}>
            <li><a href="tel:4693364488" className="hover:text-white transition-colors" style={{ textDecoration: 'none' }}>469-336-4488</a></li>
            <li>kleansweepco@gmail.com</li>
            <li>Mon – Friday, 9am – 5pm</li>
            <li className="pt-2">
              <span style={{ fontSize: '0.72rem', color: '#C4A46B', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Service Area</span><br />
              <span>Knox Henderson to Downtown Dallas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <p>© 2026 Klean Sweep Co. All rights reserved.</p>
          <p>Locally owned &amp; operated — Dallas, TX</p>
        </div>
      </div>
    </footer>
  )
}
