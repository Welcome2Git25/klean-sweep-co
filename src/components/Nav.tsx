import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => { setMenuOpen(false) }, [location])

  const linkColor = scrolled ? '#3A3A3A' : 'rgba(255,255,255,0.85)'
  const logoColor = scrolled ? '#1A1A1A' : 'white'

  return (
    <header
      id="nav-bar"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(248,245,240,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.4s, box-shadow 0.4s',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.25rem', color: logoColor, fontWeight: 500, letterSpacing: '0.03em', transition: 'color 0.3s' }}>
            Klean Sweep Co.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/faq', 'FAQ']].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className="nav-link"
              style={{ color: location.pathname === path ? '#C4A46B' : linkColor }}
            >
              {label}
            </Link>
          ))}
          <a href="#contact" className="btn-gold" style={{ padding: '0.65rem 1.6rem' }}>Book Now</a>
        </nav>

        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={scrolled ? '#1A1A1A' : 'white'} strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6" style={{ background: scrolled ? '#F5F3F0' : '#222222', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <nav className="flex flex-col gap-5 pt-4">
            {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/faq', 'FAQ']].map(([path, label]) => (
              <Link
                key={path}
                to={path}
                style={{ textDecoration: 'none', color: location.pathname === path ? '#C4A46B' : (scrolled ? '#3A3A3A' : 'rgba(255,255,255,0.8)'), fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}
              >
                {label}
              </Link>
            ))}
            <a href="#contact" className="btn-gold text-center mt-2">Book Now</a>
          </nav>
        </div>
      )}
    </header>
  )
}
