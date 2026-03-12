import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#testimonios', label: 'Clientes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo} onClick={e => handleLink(e, '#inicio')}>
        <div className={styles.logoIcon}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <span className={styles.logoText}>Apex <span>Contadores</span></span>
      </a>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contacto" className={styles.cta} onClick={e => handleLink(e, '#contacto')}>
        Consulta gratis
      </a>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menú">
        <span className={open ? styles.top : ''}></span>
        <span className={open ? styles.mid : ''}></span>
        <span className={open ? styles.bot : ''}></span>
      </button>
    </nav>
  )
}
