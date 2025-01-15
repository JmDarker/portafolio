import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null); // Mensaje de éxito o error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Limpia el error al escribir
        setSubmitMessage(null); // Limpia cualquier mensaje anterior
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null); // Limpia cualquier mensaje anterior

        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulación de envío (reemplazar con tu lógica de envío real)
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simula una petición de 1 segundo
            console.log('Formulario enviado:', formData);
            setSubmitMessage({ type: 'success', message: '¡Mensaje enviado correctamente!' });
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setSubmitMessage({ type: 'error', message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const validateForm = (data) => {
        let newErrors = {};
        if (!data.name) {
            newErrors.name = 'Por favor, ingresa tu nombre.';
        }
        if (!data.email) {
            newErrors.email = 'Por favor, ingresa tu correo electrónico.';
        } else if (!isValidEmail(data.email)) {
            newErrors.email = 'Por favor, ingresa un correo electrónico válido.';
        }
        if (!data.message) {
            newErrors.message = 'Por favor, ingresa un mensaje.';
        }
        return newErrors;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className={styles.contact}>
            <div className={styles['contact-content']}>
                <h2>Contacto</h2>
                <p>Puedes contactarme a través de este formulario.</p>
                {submitMessage && (
                    <div className={`${styles['submit-message']} ${styles[submitMessage.type]}`}>
                        {submitMessage.message}
                    </div>
                )}
                <form onSubmit={handleSubmit} className={styles['form-container']}>
                    <div className={styles['name-email-container']}>
                        <div className={`${styles['form-group']} ${styles['half-width']}`}>
                            <label htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles['form-control']}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className={styles['error-message']}>{errors.name}</span>}
                        </div>
                        <div className={`${styles['form-group']} ${styles['half-width']}`}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles['form-control']}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className={styles['error-message']}>{errors.email}</span>}
                        </div>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles['form-control']}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className={styles['error-message']}>{errors.message}</span>}
                    </div>
                    <button type="submit" className={styles['btn-primary']} disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </section>
    );
}