import React from 'react';
import Image from 'next/image';
import styles from './Profile.module.css'; // Importa los estilos

const Profile = () => {
  return (
    <section className={styles.profile}> {/* Usa className con CSS Modules */}
      <div className={styles['profile-content']}>
        <div className={styles['profile-image']}>
          <Image
            src="/images.jpg" // Ruta a tu imagen de perfil (en public/images)
            alt="Foto de Perfil"
            width={200}
            height={200}
            className={styles.profileImage} // Aplica estilos a la imagen
          />
        </div>
        <div className={styles['profile-info']}>
          <h1>Juan Sebastian Munar Diaz</h1>
          <h2>Tecnico en Mantenimieto de Equipos de Computo</h2>
          <p>
            Motivado por mi pasión por la tecnología, estoy constantemente explorando nuevas herramientas y conocimientos. Mi experiencia en hardware y software, combinada con mi proactividad, me permiten enfrentar desafíos técnicos y encontrar soluciones creativas. Aspiro a convertirme en un referente en el campo y contribuir al desarrollo de proyectos innovadores.
          </p>
          <div className={styles['profile-contact']}>
            <p>Email: jsmd2499@outlook.com</p>
            <p>Teléfono: +57 3014310093</p>
            <p>Ubicación: Bogotá, Colombia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;