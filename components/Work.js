export default function Work() {
    const workExperience = [
      {
        company: 'Nombre de la Empresa',
        position: 'Tu Puesto (ej. Desarrollador Front-end)',
        period: 'Mes Año - Mes Año (o Actualidad)',
        description: [
          'Descripción de tus responsabilidades y logros principales.',
          'Menciona las tecnologías que utilizaste (ej. React, Angular, Vue.js).',
          'Describe proyectos específicos en los que trabajaste y tus contribuciones.',
        ],
      },
      {
        company: 'Otra Empresa',
        position: 'Otro Puesto (ej. Desarrollador Back-end)',
        period: 'Año - Año',
        description: [
          'Descripción de tus responsabilidades en este puesto.',
          'Enfócate en los resultados que obtuviste.',
        ],
      },
      // Puedes agregar más entradas para otros trabajos
    ];
  
    return (
      <section className="work">
        <div className="work-content">
          <h2>Experiencia Laboral</h2>
          {workExperience.map((item, index) => (
            <div key={index} className="work-item">
              <h3>{item.position}</h3>
              <h4>{item.company}</h4>
              <p className="work-period">{item.period}</p>
              <ul>
                {item.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }