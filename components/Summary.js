export default function Summary() {
    const skills = [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Next.js', level: 70 },
      { name: 'Node.js', level: 65 },
      // Agrega más habilidades
    ];
  
    return (
      <section className="summary">
        <div className="summary-content">
          <h2>Resumen</h2>
          <p>
            Soy un desarrollador apasionado con experiencia en el desarrollo de
            aplicaciones web modernas y responsivas. Me enfoco en crear soluciones
            eficientes y fáciles de usar, utilizando tecnologías como React, Next.js
            y Node.js. Mi objetivo es seguir aprendiendo y creciendo como
            profesional para ofrecer siempre el mejor resultado.
          </p>
  
          <h3>Habilidades</h3>
          <div className="skills-container">
            {skills.map((skill) => (
              <div key={skill.name} className="skill">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
  
          <h3>Experiencia</h3>
          <p>
            Breve descripción de tu experiencia laboral o proyectos relevantes.
            Puedes mencionar logros, responsabilidades y tecnologías utilizadas.
            Por ejemplo: "He trabajado en el desarrollo de aplicaciones web para
            clientes de diferentes sectores, utilizando metodologías ágiles y
            enfocándome en la calidad del código."
          </p>
  
          <h3>Educación</h3>
          <p>
            Aquí puedes mencionar tu formación académica, cursos o certificaciones.
          </p>
        </div>
      </section>
    );
  }