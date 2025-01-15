import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      institution: 'Colegio Integrado de Fontibon',
      degree: 'Bachiller Académico',
      period: '2018',
      description: 'Estudios de bachillerato académico.',
    },
    {
      institution: 'SENA',
      degree: 'Técnico en Mantenimiento de Equipos de Computo',
      period: '2018 - 2019',
      description: 'Formación técnica en mantenimiento preventivo y correctivo de equipos de cómputo, diagnóstico de fallas, ensamblaje y configuración de software y hardware.',
    },
    // Puedes agregar más entradas para otras instituciones educativas
  ];

  return (
    <section className={styles.education}>
      <div className={styles['education-content']}>
        <h2>Formación Académica</h2>
        {educationData.map((item, index) => (
          <div key={index} className={styles['education-item']}>
            <h3>{item.degree}</h3>
            <h4>{item.institution}</h4>
            <p className={styles['education-period']}>{item.period}</p>
            <p className={styles['education-description']}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;