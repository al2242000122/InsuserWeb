import { useRef } from 'react'
import styles from './Footer.module.css'

const cols = [
  {
    title: 'Servicios',
    links: ['Impuestos', 'Auditoría', 'Estímulos Fiscales', 'Contabilidad', 'Estrategias de Finanzas'],
  },
  {
    title: 'Empresa',
    links: ['Nosotros', 'Clientes', 'Proyectos Especiales', 'Aviso de Privacidad'],
  },
  {
    title: 'Contacto',
    links: ['(55) 5243-7395', 'info@insuser.mx', 'Calle Moras No. 533-4, CDMX'],
  },
]

const logoUrl = 'https://insuser.mx/images/xlogo-insuser.jpg.pagespeed.ic.NOD3AKGdyr.webp'

const social = [
  { label: 'LinkedIn', short: 'in' },
  { label: 'Twitter', short: 'tw' },
  { label: 'Instagram', short: 'ig' },
]

export default function Footer() {
  const magnetRefs = useRef([])
  const year = new Date().getFullYear()

  const handleMagnetMove = (idx, event) => {
    const el = magnetRefs.current[idx]
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMagnetLeave = (idx) => {
    const el = magnetRefs.current[idx]
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C140,112 280,16 420,48 C560,80 700,120 840,88 C980,56 1120,8 1260,24 C1360,36 1420,72 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src={logoUrl} alt="International Support Services, S.C." />
          </div>
          <h3 className={styles.brandHeadline}>
            Seguridad fiscal con eficiencia operacional.
          </h3>
          <p className={styles.brandText}>
            International Support Services. Más de 30 años de experiencia internacional 
            optimizando resultados financieros de empresas líderes en México.
          </p>

          <a href="#contacto" className={styles.primaryAction}>
            Solicita una consultoría</a>

          <div className={styles.social}>
            {social.map((s, idx) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className={styles.socialLink}
                onMouseMove={(event) => handleMagnetMove(idx, event)}
                onMouseLeave={() => handleMagnetLeave(idx)}
                ref={(el) => {
                  magnetRefs.current[idx] = el
                }}
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>

        {cols.map(col => (
          <div key={col.title} className={styles.col}>
            <h4 className={styles.colTitle}>{col.title}</h4>
            {col.links.map(l => (
              <a key={l} href="#" className={styles.colLink}>{l}</a>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>© {year} International Support Services, S.C. Todos los derechos reservados.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  )
}
