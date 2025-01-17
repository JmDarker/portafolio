import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Summary from '../components/Summary';
import Education from '../components/Education';
import Work from '../components/Work';
import Contact from '../components/Contact';
import styles from '../styles/sections.module.css';

export default function Home() {
    const sections = {
        profile: useRef(null),
        summary: useRef(null),
        education: useRef(null),
        work: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            for (const sectionName in sections) {
                const section = sections[sectionName].current;
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    // Ajuste para que la sección se active un poco antes de llegar al centro
                    if (scrollPosition >= sectionTop - windowHeight / 2.5 && scrollPosition < sectionTop + sectionHeight - windowHeight / 2.5) {
                        // Selecciona todos los enlaces del navbar usando la clase de CSS Modules
                        const navbarLinks = document.querySelectorAll(`.${styles['navbar-link']}`);

                        // Elimina la clase active de todos los enlaces
                        navbarLinks.forEach(link => link.classList.remove(styles.active));

                        // Selecciona el enlace correspondiente a la sección actual usando el atributo href
                        const activeLink = document.querySelector(`a[href="/#${sectionName}"]`);

                        // Añade la clase active al enlace actual
                        if (activeLink) {
                            activeLink.classList.add(styles.active);
                        }

                        break; // Detiene el bucle una vez que se encuentra una sección activa
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Llama a handleScroll al montar el componente para que la clase active se aplique al inicio

        return () => window.removeEventListener('scroll', handleScroll); // Limpia el listener al desmontar el componente
    }, [styles]); // styles como dependencia para que el efecto se actualice si cambian los estilos

    return (
        <>
            <Head>
                <title>Mi Portafolio</title>
                <meta name="description" content="Portafolio personal" />
                <meta charSet="utf-8" /> {/* Codificación de caracteres */}
            </Head>
            <Navbar />
            <main className={styles.mainContainer}> {/* Contenedor principal */}
                <section ref={sections.profile} id="profile" className={styles.section}>
                    <Profile />
                </section>
                <section ref={sections.summary} id="summary" className={styles.section}>
                    <Summary />
                </section>
                <section ref={sections.education} id="education" className={styles.section}>
                    <Education />
                </section>
                <section ref={sections.work} id="work" className={styles.section}>
                    <Work />
                </section>
                <section ref={sections.contact} id="contact" className={styles.section}>
                    <Contact />
                </section>
            </main>
            <Footer />
        </>
    );
}