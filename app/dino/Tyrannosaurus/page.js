
import Link from 'next/link'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import dinoData from '../data/dinosaure.json'
import styles from './Accueil.module.css' 

export const metadata = {
  title: "Tyrannosaurus – Encyclopédie Dinos",
  description: "Prédateur redouté du Crétacé. Découvrez le tyrannosaurus.",
}

export default function Tyrannosaurus() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>Tyrannosaurus</h2>
        <Image src="/tyrannosaurus.png" alt="Tyrannosaurus" width={600} height={400} className={styles.image} />
        <p>Prédateur redouté du Crétacé.</p>
        <Regime type="carnivore" />
        <Link href="/">← Retour à l’accueil</Link>
      </main>
      <Footer />
    </>
  )
}
