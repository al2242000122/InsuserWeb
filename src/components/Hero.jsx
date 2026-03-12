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
          Fundada en 2002 · Excelencia Contable
        </div>

        <h1 className={styles.title}>
          Tu visión financiera<br />
          merece <span className="grad-text">precisión absoluta</span>
        </h1>

        <p className={styles.desc}>
          Transformamos la complejidad fiscal en estrategias claras.
          Contabilidad de élite para empresas que aspiran a más.
        </p>

        <div className={styles.actions}>
          <a href="#contacto" className={styles.btnPrimary} onClick={e => scrollTo(e, '#contacto')}>
            Agenda tu consultoría
          </a>
          <a href="#servicios" className={styles.btnGhost} onClick={e => scrollTo(e, '#servicios')}>
            Explorar servicios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className={styles.statsRow}>
          {[
            { value: '23+', label: 'Años de experiencia' },
            { value: '98%', label: 'Retención de clientes' },
            { value: '$2.4B', label: 'Patrimonio gestionado' },
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
