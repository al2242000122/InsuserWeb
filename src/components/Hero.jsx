import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className={styles.hero} id="inicio">
      {/* Orbs background */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Desde 2008 · Experiencia Internacional
        </div>

        <h1 className={styles.title}>
          Asesoría Fiscal y Contable<br />
          de <span className="grad-text">élite para tu empresa</span>
        </h1>

        <p className={styles.desc}>
          International Support Services: contabilidad estratégica con más de 30 años de experiencia
          internacional. Seguridad, eficiencia y valor agregado en tus decisiones financieras.
        </p>

        <div className={styles.actions}>
          <a href="#contacto" className={styles.btnPrimary} onClick={e => scrollTo(e, '#contacto')}>
            Solicita una consultoría gratuita
          </a>
          <a href="#servicios" className={styles.btnGhost} onClick={e => scrollTo(e, '#servicios')}>
            Ver servicios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className={styles.statsRow}>
          {[
            { value: '30+', label: 'Años de experiencia' },
            { value: '20+', label: 'Empresas grandes como clientes' },
            { value: '40+', label: 'Años de experiencia del fundador' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
