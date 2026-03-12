import styles from './Footer.module.css'

const cols = [
  {
    title: 'Servicios',
    links: ['Auditoría', 'Planeación Fiscal', 'Consultoría', 'Contabilidad', 'Nóminas'],
  },
  {
    title: 'Empresa',
    links: ['Nosotros', 'Equipo', 'Carreras', 'Blog'],
  },
  {
    title: 'Contacto',
    links: ['+52 55 1234 5678', 'contacto@apexcontadores.mx', 'Av. Reforma 505, CDMX'],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className={styles.logoText}>Apex <span>Contadores</span></span>
          </div>
          <p className={styles.brandText}>
            Contabilidad estratégica de élite. Más de dos décadas construyendo
            el futuro financiero de las empresas más ambiciosas de México.
          </p>
          <div className={styles.social}>
            {[
              { label: 'LinkedIn', short: 'in' },
              { label: 'Twitter', short: 'tw' },
              { label: 'Instagram', short: 'ig' },
            ].map(s => (
              <a key={s.label} href="#" aria-label={s.label} className={styles.socialLink}>
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
        <p>© 2026 Apex Contadores. Todos los derechos reservados.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
      </div>
    </footer>
  )
}
