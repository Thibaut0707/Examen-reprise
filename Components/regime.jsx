import styles from './Regime.module.css'

export default function Regime({ type }) {
  const regimes = ['herbivore', 'piscivore', 'carnivore']
  return (
    <div className={styles.container}>
      {regimes.map((regime) => (
        <div
          key={regime}
          className={regime === type ? styles.actif : styles.inactif}
        >
          {regime}
        </div>
      ))}
    </div>
  )
}
