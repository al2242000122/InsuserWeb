import styles from './Marquee.module.css'

const clients = [
  { name: 'Grupo Roche Syntex', image: 'https://insuser.mx/images/clientes/cliente-01.jpg' },
  { name: 'Volkswagen de México', image: 'https://insuser.mx/images/clientes/cliente-02.jpg' },
  { name: 'Grupo Tornel', image: 'https://insuser.mx/images/clientes/cliente-03.jpg' },
  { name: 'Grupo Santos CMI', image: 'https://insuser.mx/images/clientes/cliente-04.jpg' },
  { name: 'Grupo Lakeside', image: 'https://insuser.mx/images/clientes/cliente-05.jpg' },
  { name: 'Mack Trucks', image: 'https://insuser.mx/images/clientes/cliente-06.jpg' },
  { name: 'Grupo Scorpión', image: 'https://insuser.mx/images/clientes/cliente-07.jpg' },
  { name: 'Grupo Havells', image: 'https://insuser.mx/images/clientes/cliente-08.jpg' },
  { name: 'Grupo SDI', image: 'https://insuser.mx/images/clientes/cliente-09.jpg' },
  { name: 'Grupo Doctor Readdy', image: 'https://insuser.mx/images/clientes/cliente-10.jpg' },
  { name: 'Grupo Papel', image: 'https://insuser.mx/images/clientes/cliente-11.jpg' },
  { name: 'Grupo Multisistemas de Seguridad', image: 'https://insuser.mx/images/clientes/cliente-12.jpg' },
  { name: 'Grupo Radio Mil', image: 'https://insuser.mx/images/clientes/cliente-13.jpg' },
  { name: 'Grupo Grisi', image: 'https://insuser.mx/images/clientes/cliente-14.jpg' },
  { name: 'Grupo Signa', image: 'https://insuser.mx/images/clientes/cliente-15.jpg' },
  { name: 'Grupo Finafilms', image: 'https://insuser.mx/images/clientes/cliente-16.jpg' },
  { name: 'Grupo Quan' },
  { name: 'Grupo SANDI' },
  { name: 'Grupo Automotriz San Ángel' },
  { name: 'Grupo Progreso' },
]

export default function Marquee() {
  const all = [...clients, ...clients]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {all.map((client, i) => (
          <div key={i} className={styles.item}>
            {client.image ? (
              <>
                <img src={client.image} alt={client.name} className={styles.logo} />
              </>
            ) : (
              <span className={styles.textClient}>{client.name}</span>
            )}
            <span className={styles.sep}>◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
