import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image'; // Importa el componente Image

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <p>&copy; {currentYear} Juan Sebastian Munar Diaz</p>
        <div className={styles['footer-links']}>
          <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>
          <a href="/terminos-de-uso" target="_blank" rel="noopener noreferrer">
            Términos de Uso
          </a>
          {/* Puedes agregar más enlaces aquí */}
        </div>
        <div className={styles['footer-social']}>
          <a href="https://github.com/JmDarker" target="_blank" rel="noopener noreferrer">
            <Image src="/images/github-icon.png" alt="GitHub" width={25} height={25} /> {/* Usando Image */}
          </a>
          <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">
            <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={25} height={25} /> {/* Usando Image */}
          </a>
          {/* Agrega más íconos de redes sociales */}
        </div>
      </div>
    </footer>
  );
}