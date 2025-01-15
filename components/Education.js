export default function Education() {
    const educationData = [
      {
        institution: 'Nombre de la Universidad/Institución',
        degree: 'Título Obtenido (ej. Licenciatura en Informática)',
        period: 'Año de Inicio - Año de Fin (o Actualidad)',
        description: 'Breve descripción de tus estudios o enfoque principal.',
      },
      {
        institution: 'Nombre del Curso/Certificación',
        degree: 'Nombre del Curso/Certificación (ej. Desarrollo Web con React)',
        period: 'Mes Año - Mes Año (o Actualidad)',
        description: 'Descripción del curso y habilidades adquiridas.',
      },
      // Puedes agregar más entradas para otros estudios o certificaciones
    ];
  
    return (
      <section className="education">
        <div className="education-content">
          <h2>Educación</h2>
          {educationData.map((item, index) => (
            <div key={index} className="education-item">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p className="education-period">{item.period}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }