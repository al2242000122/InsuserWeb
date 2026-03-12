import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta} id="contacto">
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>

      <div className={styles.inner}>
          <p className={`${styles.tag} reveal`}>¿Listo para optimizar tu empresa?</p>
        <h2 className={`${styles.title} reveal reveal-d1`}>
          Consultoría financiera<br />
          <span className="grad-text">sin compromiso</span>
        </h2>
        <p className={`${styles.text} reveal reveal-d2`}>
          International Support Services. Más de 30 años aportando seguridad, eficiencia 
          y valor a las decisiones financieras de las empresas más importantes de México.
        </p>

        <div className={`${styles.actions} reveal reveal-d3`}>
          <a href="tel:+525552437395" className={styles.btnPrimary}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 0117.92 2 2 2 0 0120 4.1v3a2 2 0 01-1.44 1.93 16 16 0 00-4.72-1.36 16 16 0 00-4.72 5.39 16 16 0 00-1.36 4.72A2 2 0 0116.92 22z"/>
            </svg>
            (55) 5243-7395
          </a>
          <a href="mailto:info@insuser.mx" className={styles.btnOutline}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            info@insuser.mx
          </a>
        </div>

        <div className={`${styles.features} reveal reveal-d4`}>
          {['Asesoría integral', 'Experiencia comprobada', 'Soluciones a la medida'].map(f => (
            <div key={f} className={styles.feature}>
              <span className={styles.check}>✓</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
