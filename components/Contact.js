import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    // Aquí iría la lógica para enviar el formulario (ej. con una API route o EmailJS)
    console.log('Formulario enviado:', formData);
    alert('Formulario enviado (simulado).'); // Mensaje de confirmación (simulado)

    setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de este formulario.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-container"> {/* Contenedor para Nombre y Correo */}
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div> {/* Cierre del contenedor form-container */}
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}