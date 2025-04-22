// Importation du module CSS spécifique au Footer
import styles from './Footer.module.css'

// Composant réutilisable Footer, affiché en bas de chaque page
export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; Philippe Thibaut | La Cité collégiale
    </footer>
  )
}
