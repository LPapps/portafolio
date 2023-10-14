import './globals.css'
import Nav from '../componentes/Navbar'

export const metadata = {
  title: 'lPortafolio',
  description: 'send mail',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Nav />
        {children}
        </body>
    </html>
  )
}
