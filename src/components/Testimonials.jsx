import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'Apex Contadores transformó por completo nuestra estrategia fiscal. En el primer año ahorramos más de $3.2M en impuestos de forma completamente legal. Su equipo es excepcional.',
    name: 'María Rodríguez',
    role: 'CEO — Grupo Industrial del Norte',
    initials: 'MR',
    featured: true,
  },
  {
    quote: 'Profesionalismo de otro nivel. Nos resolvieron una auditoría del SAT en tiempo récord y sin una sola observación pendiente.',
    name: 'Carlos López',
    role: 'Dir. Finanzas — TechMX',
    initials: 'CL',
  },
  {
    quote: 'Llevan nuestra contabilidad desde hace 8 años. La tranquilidad que dan no tiene precio. Recomendados totalmente.',
    name: 'Ana García',
    role: 'Fundadora — Restaurantes Doña Ana',
    initials: 'AG',
  },
  {
    quote: 'Su plataforma digital para revisar estados financieros en tiempo real cambió las reglas del juego para nosotros.',
    name: 'Jorge Pérez',
    role: 'COO — Constructora Pérez Hnos.',
    initials: 'JP',
  },
]

function Stars() {
  return <div className={styles.stars}>{'★'.repeat(5)}</div>
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials
  return (
    <section className={styles.section} id="testimonios">
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.tag}>Testimonios</p>
          <h2 className={styles.title}>Lo que dicen nuestros <span className="grad-text">clientes</span></h2>
        </div>

        <div className={styles.grid}>
          {/* Featured */}
          <div className={`${styles.featured} reveal`}>
            <div className={styles.quoteIcon}>"</div>
            <Stars />
            <blockquote className={styles.featuredQuote}>{featured.quote}</blockquote>
            <div className={styles.author}>
              <div className={styles.avatar}>{featured.initials}</div>
              <div>
                <p className={styles.name}>{featured.name}</p>
                <p className={styles.role}>{featured.role}</p>
              </div>
            </div>
          </div>

          {/* Rest */}
          <div className={styles.side}>
            {rest.map((t, i) => (
              <div key={i} className={`${styles.card} reveal reveal-d${i + 1}`}>
                <Stars />
                <p className={styles.cardQuote}>"{t.quote}"</p>
                <div className={styles.author}>
                  <div className={`${styles.avatar} ${styles.avatarSm}`}>{t.initials}</div>
                  <div>
                    <p className={styles.name}>{t.name}</p>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
