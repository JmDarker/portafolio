import React from 'react';
import styles from './Summary.module.css'; // Importa los estilos

const Summary = () => {
  const skills = [
    "Diagnóstico y resolución de problemas de hardware.",
    "Instalación y configuración de sistemas operativos (Windows, macOS, Linux).",
    "Mantenimiento preventivo y correctivo de equipos.",
    "Limpieza interna y externa de computadoras.",
    "Reemplazo de componentes (discos duros, memorias RAM, tarjetas gráficas, etc.).",
    "Configuración de redes (Wi-Fi, cableado).",
    "Recuperación de datos.",
    "Instalación y configuración de software.",
    "Solución de problemas de software.",
    "Atención al cliente y soporte técnico.",
    "Ensamblaje de equipos de computo"
  ];

  return (
    <div className={styles.summary}>
      <div className={styles['summary-content']}>
        <h2>Resumen</h2>
        <p>
          Técnico en reparación de computadoras con experiencia en diagnóstico, mantenimiento y solución de problemas de hardware y software. Apasionado por la tecnología y comprometido con brindar soluciones eficientes y de calidad.
        </p>
        <h3>Habilidades Técnicas</h3>
        <ul className={styles['skills-list']}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Summary;