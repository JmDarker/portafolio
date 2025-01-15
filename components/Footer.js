export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {currentYear} Juan Sebatian Munar Diaz</p>
          <div className="footer-links">
            <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
            <a href="/terminos-de-uso" target="_blank" rel="noopener noreferrer">Términos de Uso</a>
            {/* Puedes agregar más enlaces aquí */}
          </div>
          <div className="footer-social">
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer"><img src="/github-icon.png" alt="GitHub" width="20" height="20"/></a>
            <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer"><img src="/linkedin-icon.png" alt="LinkedIn" width="20" height="20"/></a>
            {/* Agrega más íconos de redes sociales */}
          </div>
        </div>
      </footer>
    );
  }