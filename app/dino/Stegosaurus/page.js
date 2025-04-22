
import Link from 'next/link'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import dinoData from '../data/dinosaure.json'
import styles from './Accueil.module.css' 

export const metadata = {
  title: "Stegosaurus – Encyclopédie Dinos",
  description: "Dinosaure à plaques dorsales, aussi herbivore.",
}

export default function Stegosaurus() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>Stegosaurus</h2>
        <Image src="/stegosaurus.png" alt="Stegosaurus" width={600} height={400} className={styles.image} />
        <p>Dinosaure à plaques dorsales, aussi herbivore.</p>
        <Regime type="herbivore" />
        <Link href="/">← Retour à l’accueil</Link>
      </main>
      <Footer />
    </>
  )
}
