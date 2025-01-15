import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

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

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <span className={styles['navbar-brand']}>JM</span> {/* Logo sin enlace */}
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
                                    className={`${styles['navbar-link']} ${router.asPath === item.href ? styles.active : ''}`}
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