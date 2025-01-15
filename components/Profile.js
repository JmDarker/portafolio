import React from 'react';
import Image from 'next/image';
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <section className={styles.profile}>
            <div className={styles['profile-content']}>
                <div className={styles['profile-image']}>
                    <Image
                        src="/images.jpg"
                        alt="Foto de Perfil"
                        width={200}
                        height={200}
                        className={styles.profileImage}
                    />
                </div>
                <div className={styles['profile-info']}>
                    <h1>Juan Sebastian Munar Diaz</h1>
                    <h2>Técnico en Mantenimiento de Equipos de Computo</h2>
                    <p>
                        Motivado por mi pasión por la tecnología, estoy constantemente explorando nuevas herramientas y conocimientos. Mi experiencia en hardware y software, combinada con mi proactividad, me permiten enfrentar desafíos técnicos y encontrar soluciones creativas. Aspiro a convertirme en un referente en el campo y contribuir al desarrollo de proyectos innovadores.
                    </p>
                    <div className={styles['contact-info']}>
                        <div className={styles['contact-item']}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles['contact-icon']} />
                            <a href="mailto:jsmd2499@outlook.com">jsmd2499@outlook.com</a>
                        </div>
                        <div className={styles['contact-item']}>
                            <FontAwesomeIcon icon={faPhone} className={styles['contact-icon']} />
                            <a href="tel:+573014310093">+57 301 431 0093</a> {/* Formato de número de teléfono */}
                        </div>
                        <div className={styles['contact-item']}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles['contact-icon']} />
                            <span>Bogotá, Colombia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;