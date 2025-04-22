import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1> Encyclopédie des Dinosaures</h1>
      <nav>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/dino/Brontosaurus">Brontosaurus</Link></li>
          <li><Link href="/dino/Stegosaurus">Stegosaurus</Link></li>
          <li><Link href="/dino/Tyrannosaurus">Tyrannosaurus</Link></li>
        </ul>
      </nav>
    </header>
  )
}
