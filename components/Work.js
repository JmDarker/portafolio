import React from 'react';
import styles from './Work.module.css';

const Work = () => {
  const workExperience = [
    {
      company: 'Finca S.A.S.',
      position: 'Auxiliar Técnico Sistemas',
      period: 'Julio 2018 - Enero 2019',
      description: [
        'Descripción de tus responsabilidades y logros principales en Finca S.A.S.',
        'Menciona las tecnologías que utilizaste (ej. configuración de redes, mantenimiento de equipos).',
        'Describe proyectos específicos en los que trabajaste y tus contribuciones, por ejemplo, "Implementación de un nuevo sistema de inventario que redujo los errores en un 15%".',
      ],
    },
    // Puedes agregar más entradas para otros trabajos
  ];

  return (
    <section className={styles.work}>
      <div className={styles['work-content']}>
        <h2>Experiencia Laboral</h2>
        {workExperience.map((item, index) => (
          <div key={index} className={styles['work-item']}>
            <h3>{item.position}</h3>
            <h4>{item.company}</h4>
            <p className={styles['work-period']}>{item.period}</p>
            <ul className={styles['work-description']}> {/* Aplicando estilo a la lista */}
              {item.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;