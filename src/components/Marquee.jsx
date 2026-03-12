import styles from './Marquee.module.css'

const items = [
  'Auditoría Financiera',
  'Planeación Fiscal',
  'Consultoría Estratégica',
  'Contabilidad Corporativa',
  'Cumplimiento Regulatorio',
  'Nóminas & IMSS',
  'Declaraciones Anuales',
  'Reestructura Corporativa',
]

export default function Marquee() {
  const all = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {all.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
