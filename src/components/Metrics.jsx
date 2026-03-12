import { useEffect, useRef } from 'react'
import styles from './Metrics.module.css'

const metrics = [
  { value: 850, suffix: '+', label: 'Clientes activos' },
  { value: 98, suffix: '%', label: 'Tasa de retención' },
  { value: 2400, prefix: '$', suffix: 'M', label: 'Patrimonio gestionado' },
  { value: 15, suffix: 'K', label: 'Declaraciones anuales' },
]

function Counter({ target }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const start = performance.now()
        const animate = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 4)
          el.textContent = Math.floor(target * eased).toLocaleString()
          if (t < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.6 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>0</span>
}

export default function Metrics() {
  return (
    <section className={styles.metrics} id="resultados">
      <div className={styles.orb}></div>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.tag}>Números que hablan</p>
          <h2 className={styles.title}>Resultados que <span className="grad-text">demuestran</span> nuestro valor</h2>
        </div>
        <div className={styles.grid}>
          {metrics.map((m, i) => (
            <div key={i} className={`${styles.card} reveal reveal-d${i + 1}`}>
              <div className={styles.value}>
                {m.prefix && <span>{m.prefix}</span>}
                <Counter target={m.value} />
                <span className={styles.suffix}>{m.suffix}</span>
              </div>
              <p className={styles.label}>{m.label}</p>
              <div className={styles.bar}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
