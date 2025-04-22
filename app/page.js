// app/page.js

import Link from 'next/link'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import dinoData from '../data/dinosaure.json'
import styles from './Accueil.module.css' 

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>Liste des dinosaures</h2>
        <ul className={styles.liste}>
          {dinoData.map((dino) => (
            <li key={dino.nom}>
              <Link href={`/dino/${dino.nom}`}>{dino.nom}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}
