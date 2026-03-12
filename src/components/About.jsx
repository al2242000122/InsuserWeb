import styles from './About.module.css'

const pillars = [
  { icon: '🛡️', title: 'Confianza', text: 'Avalados por nuestra experiencia internacional, velamos por la seguridad e integridad de sus recursos y decisiones financieras.' },
  { icon: '⚡', title: 'Eficiencia', text: 'Desarrollamos e implementamos herramientas para optimizar los resultados de su negocio con máxima precisión.' },
  { icon: '🎯', title: 'Personalización', text: 'Flexibilidad dirigida a atender sus necesidades acorde a la operación y características únicas de su empresa.' },
]

export default function About() {
  return (
    <section className={styles.about} id="nosotros">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.tag} data-reveal>Nuestra Filosofía</p>
          <h2 className={`${styles.title} reveal`}>
            Colaboramos con despachos,<br />
            personas morales y <span className="grad-text">personas físicas</span>.
          </h2>
          <p className={`${styles.text} reveal reveal-d1`}>
            En International Support Services, ofrecemos calidad, seguridad y trato serio en sus problemas contables y fiscales.
            Promovemos la seguridad fiscal legal y eficiencia operacional de tal forma que permita optimizar los resultados 
            de su negocio con herramientas contables y financieras de vanguardia internacional.
          </p>
          <a href="#contacto" className={`${styles.btn} reveal reveal-d2`}
            onClick={e => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Agenda una sesión →
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
