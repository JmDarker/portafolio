import { useState } from 'react';
import styles from './Contact.module.css'; // Importa los estilos de Contact.module.css

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de formulario
    if (!validateForm(formData)) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    // Lógica para enviar el formulario (ej. con una API route o EmailJS)
    console.log('Formulario enviado:', formData);
    alert('Formulario enviado (simulado).'); // Mensaje de confirmación (simulado)

    setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
  };

  const validateForm = (data) => {
    return data.name && data.email && data.message;
  };

  return (
    <section className={styles.contact}> {/* Usa la clase del CSS Module */}
      <div className={styles['contact-content']}>
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de este formulario.</p>
        <form onSubmit={handleSubmit} className={styles['form-container']}>
          <div className={styles['form-group']}>
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
          <div className={styles['form-group']}>
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
          <div className={styles['form-group']}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles['btn-primary']}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}