import { useState } from 'react';

export default function Navbar({ activeSection, onClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Mi Portafolio</div>
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.href}
              className={`navbar-item ${activeSection === item.href ? 'active' : ''}`}
            >
              <a
                className="navbar-link"
                onClick={(e) => { // e (evento) añadido
                  e.preventDefault(); // Previene el comportamiento por defecto del enlace
                  onClick(item.href);
                  closeMobileMenu();
                }}
                href="#" // Corrección CRUCIAL: href="#"
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