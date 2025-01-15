import Image from 'next/image';

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-content">
        <div className="profile-image">
          <Image
            src="/images.jpg" // Ruta a tu imagen de perfil en la carpeta public
            alt="Foto de Perfil"
            width={200} // Ancho de la imagen
            height={200} // Alto de la imagen
            style={{ borderRadius: '50%', objectFit: 'cover' }} // Estilos para redondear la imagen
          />
        </div>
        <div className="profile-info">
          <h1>Juan Sebastian Munar Diaz</h1>
          <h2>Tecnico en Mantenimieto de Equipos de Computo</h2>
          <p>
          Motivado por mi pasión por la tecnología, estoy constantemente explorando nuevas herramientas y conocimientos. Mi experiencia en hardware y software, combinada con mi proactividad, me permiten enfrentar desafíos técnicos y encontrar soluciones creativas. Aspiro a convertirme en un referente en el campo y contribuir al desarrollo de proyectos innovadores.
          </p>
          <div className="profile-contact">
            <p>Email: jsmd2499@outlook.com</p>
            <p>Teléfono: +57 3014310093</p>
            <p>Ubicación: Bogotá, Colombia</p>
          </div>
        </div>
      </div>
    </section>
  );
}