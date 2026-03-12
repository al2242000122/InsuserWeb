import styles from './Services.module.css'

const services = [
  {
    n: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Impuestos',
    text: 'Asesoría en cumplimiento de legislación fiscal nacional e internacional. Gestión de obligaciones fiscales, diagnóstico y análisis de incumplimientos.',
  },
  {
    n: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Auditoría',
    text: 'Revisión de estados financieros para efectos fiscales y financieros. Auditorías operacionales, administrativas y detección de fraudes.',
  },
  {
    n: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Estímulos Fiscales',
    text: 'Detección de oportunidades y diagnóstico de factibilidad. Definición de proyectos y seguimiento posterior a la obtención de beneficios.',
  },
  {
    n: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Contabilidad',
    text: 'Gestión contable integral interna o externa. Preparación de estados financieros en cualquier moneda e idioma con formatos internacionales.',
  },
  {
    n: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Estrategias de Finanzas',
    text: 'Evaluación de situación financiera y detección de áreas de oportunidad. Diseño e implementación de optimización financiera de proyectos.',
  },
  {
    n: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: 'Proyectos Especiales',
    text: 'Valuación de empresas, análisis y diagnóstico documental. Análisis económicos y estudios especializados según necesidades específicas.',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="servicios">
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.tag}>Lo que hacemos</p>
          <h2 className={styles.title}>Servicios <span className="grad-text">especializados</span></h2>
          <p className={styles.sub}>06 soluciones integrales para fortalecer tus finanzas</p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={`${styles.card} reveal reveal-d${(i % 3) + 1}`}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{s.icon}</div>
                <span className={styles.num}>{s.n}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
              <span className={styles.more}>Conocer más →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
