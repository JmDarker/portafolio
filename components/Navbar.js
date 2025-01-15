import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ activeSection, onClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Definimos closeMobileMenu dentro del componente
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: 'profile', label: 'Perfil' },
    { href: 'summary', label: 'Resumen' },
    { href: 'education', label: 'Estudios' },
    { href: 'work', label: 'Trabajo' },
    { href: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <a href="#" className={styles['navbar-brand']}>Mi Portafolio</a>
        <div className={styles['navbar-toggle']} onClick={toggleMobileMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles['navbar-menu']} ${isMobileMenuOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.href}
              className={`${styles['navbar-item']} ${activeSection === item.href ? styles.active : ''}`}
            >
              <a
                className={styles['navbar-link']}
                onClick={(e) => {
                  e.preventDefault();
                  onClick(item.href);
                  closeMobileMenu(); // Ahora closeMobileMenu está definida
                }}
                href="#"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}