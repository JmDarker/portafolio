import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const sectionRefs = useRef({});

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { href: '/#profile', label: 'Perfil' },
        { href: '/#summary', label: 'Resumen' },
        { href: '/#education', label: 'Estudios' },
        { href: '/#work', label: 'Trabajo' },
        { href: '/#contact', label: 'Contacto' },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting) {
                        // Desactiva todos los enlaces
                        navItems.forEach(item => {
                            const link = document.querySelector(`a[href="${item.href}"]`);
                            if (link) link.classList.remove(styles.active);
                        });
                        // Activa el enlace correspondiente a la sección visible
                        const activeLink = document.querySelector(`a[href="/#${id}"]`);
                        if (activeLink) activeLink.classList.add(styles.active);
                    }
                });
            },
            { threshold: 0.5 } // Ajusta este valor según necesites (0 a 1)
        );

        navItems.forEach(item => {
            const id = item.href.substring(item.href.indexOf('#') + 1);
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
                sectionRefs.current[id] = section;
            }
        });

        return () => {
            navItems.forEach(item => {
                const id = item.href.substring(item.href.indexOf('#') + 1);
                const section = sectionRefs.current[id];
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [navItems, router.asPath]);

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <span className={styles['navbar-brand']}>JM</span>
                <div className={styles['navbar-toggle']} onClick={toggleMobileMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
                <ul className={`${styles['navbar-menu']} ${isMobileMenuOpen ? styles.active : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.href} className={styles['navbar-item']}>
                            <Link href={item.href} legacyBehavior passHref>
                                <a
                                    className={styles['navbar-link']}
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}