import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'International Support Services nos ayudó a optimizar significativamente nuestra estructura fiscal. Su conocimiento integral de impuestos nacionales e internacionales fue clave en nuestro crecimiento estratégico.',
    name: 'Gerente Financiero',
    role: 'Empresa Multinacional de México',
    initials: 'EX',
    featured: true,
  },
  {
    quote: 'Profesionalismo de clase mundial. Manejaron nuestra auditoría con un nivel de detalle y precisión excepcional.',
    name: 'Director de Operaciones',
    role: 'Grupo Industrial',
    initials: 'DO',
  },
  {
    quote: 'Más de 15 años trabajando juntos. Confiamos en su capacidad de resolver los problemas contables más complejos.',
    name: 'CEO',
    role: 'Empresa Establecida',
    initials: 'CE',
  },
  {
    quote: 'Su asesoría en estímulos fiscales nos permitió acceder a beneficios que no sabíamos que existían para nuestra empresa.',
    name: 'Director Administrativo',
    role: 'PyME en Crecimiento',
    initials: 'DA',
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
