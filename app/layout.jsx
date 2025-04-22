import './globals.css'

export const metadata = {
  title: "Encyclopédie Dinos",
  description: "Un site pour explorer les dinosaures à travers une interface dynamique.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
