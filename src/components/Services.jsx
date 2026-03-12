import styles from './Services.module.css'

const services = [
  {
    n: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    title: 'Auditoría Financiera',
    text: 'Revisión exhaustiva de estados financieros con metodología internacional. Transparencia y confianza ante inversores y reguladores.',
  },
  {
    n: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Planeación Fiscal',
    text: 'Estrategias legales para optimizar tu carga tributaria. Aprovechamos cada incentivo fiscal disponible para maximizar tu rentabilidad.',
  },
  {
    n: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Consultoría Estratégica',
    text: 'Asesoramiento integral para decisiones financieras críticas. Análisis profundo que convierte datos en ventajas competitivas reales.',
  },
  {
    n: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Contabilidad Corporativa',
    text: 'Gestión contable integral con tecnología cloud. Registros impecables, reportes en tiempo real y cumplimiento normativo garantizado.',
  },
  {
    n: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Cumplimiento Regulatorio',
    text: 'Navegamos el laberinto normativo por ti. SAT, IMSS, INFONAVIT — aseguramos que tu empresa esté siempre en regla.',
  },
  {
    n: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Nóminas & Capital Humano',
    text: 'Procesamiento de nómina preciso y puntual. Cálculos de ISR, IMSS, prestaciones y finiquitos con total certeza legal.',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="servicios">
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.tag}>Lo que hacemos</p>
          <h2 className={styles.title}>Servicios que impulsan <span className="grad-text">resultados</span></h2>
          <p className={styles.sub}>06 soluciones especializadas para llevar tus finanzas al siguiente nivel</p>
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
