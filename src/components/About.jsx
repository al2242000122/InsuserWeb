import styles from './About.module.css'

const pillars = [
  { icon: '⚡', title: 'Tecnología Cloud', text: 'Plataforma digital para acceder a tus estados financieros en tiempo real desde cualquier dispositivo.' },
  { icon: '🛡️', title: 'Cumplimiento Total', text: 'SAT, IMSS, INFONAVIT — aseguramos que tu empresa esté siempre en regla y libre de contingencias.' },
  { icon: '📈', title: 'Crecimiento Estratégico', text: 'No solo registramos números, los interpretamos para convertirlos en decisiones que multiplican tu patrimonio.' },
]

export default function About() {
  return (
    <section className={styles.about} id="nosotros">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.tag} data-reveal>Nuestra Filosofía</p>
          <h2 className={`${styles.title} reveal`}>
            No somos solo contadores.<br />
            Somos <span className="grad-text">arquitectos</span><br />
            de tu patrimonio.
          </h2>
          <p className={`${styles.text} reveal reveal-d1`}>
            En Apex Contadores, cada número cuenta una historia. Nuestro enfoque combina
            tecnología de vanguardia con el criterio experto que solo décadas de experiencia
            pueden otorgar. Protegemos, optimizamos y multiplicamos el valor de tu empresa
            con estrategias fiscales inteligentes y dedicación inquebrantable.
          </p>
          <a href="#contacto" className={`${styles.btn} reveal reveal-d2`}
            onClick={e => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Conoce más →
          </a>
        </div>

        <div className={styles.right}>
          {pillars.map((p, i) => (
            <div key={i} className={`${styles.card} reveal reveal-d${i + 1}`}>
              <span className={styles.icon}>{p.icon}</span>
              <div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardText}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
