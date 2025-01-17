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

const throttledScroll = (callback) => {
  let ticking = false;
  return () => {
    if (!ticking) {
      ticking = true;
      callback();
      setTimeout(() => {
        ticking = false;
      }, 200); // Adjust throttle time as needed (in milliseconds)
    }
  };
};

export default function Home() {
  const sections = {
    profile: useRef(null),
    summary: useRef(null),
    education: useRef(null),
    work: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = throttledScroll(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    for (const sectionName in sections) {
      const section = sections[sectionName].current;
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Adjust for activation a bit before reaching the center
        if (
          scrollPosition >= sectionTop - windowHeight / 2.5 &&
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2.5
        ) {
          const navbarLinks = document.querySelectorAll(`.${styles['navbar-link']}`);
          navbarLinks.forEach(link => link.classList.remove(styles.active));

          const activeLink = document.querySelector(`a[href="/#${sectionName}"]`);
          if (activeLink) {
            activeLink.classList.add(styles.active);
          }
          break; // Stop loop after finding an active section
        }
      }
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set active class on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portafolio personal" />
        <meta charSet="utf-8" /> {/* Character encoding */}
      </Head>
      <Navbar />
      <main className={styles.mainContainer}>
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