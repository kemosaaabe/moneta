import styles from './Header.module.scss';
import { useMediaQuery } from '../../services/useMediaQuery';
import React from 'react';

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 900px)');
    const [isOpen, setIsOpen] = React.useState(false);

    const onOpenMenu = (isMenuOpen) => {
        if (isMenuOpen) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'visible';
        }

        setIsOpen(isMenuOpen);
    };

    const onLinkClick = (e) => {
        const eventLink = e.target.closest('a');
        if (!eventLink) return;

        document.querySelector('input').checked = false;
        onOpenMenu(false);
    };

    return (
        <div className="container">
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="assets/img/logo.svg" alt="logo" />
                </div>
                <div className={styles.navWrapper}>
                    {isMobile ? (
                        <div className={styles.hamburgerWrapper}>
                            <input
                                type="checkbox"
                                onClick={() => onOpenMenu(!isOpen)}
                            />
                            <div className={styles.hamburger}>
                                <span className={styles.line}></span>
                                <span className={styles.line}></span>
                                <span className={styles.line}></span>
                            </div>
                            <div
                                className={styles.menuItems}
                                onClick={onLinkClick}
                            >
                                <ul className={styles.menuItem}>
                                    <li>
                                        <a href="#features">Обзор</a>
                                    </li>
                                    <li>
                                        <a href="#reviews">Отзывы</a>
                                    </li>
                                    <li>
                                        <a href="#faq">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#footer">Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <>
                            <nav className={styles.nav}>
                                <ul className={styles.navList}>
                                    <li>
                                        <a href="#features">Обзор</a>
                                    </li>
                                    <li>
                                        <a href="#reviews">Отзывы</a>
                                    </li>
                                    <li>
                                        <a href="#faq">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#footer">Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className={styles.btn}>
                                <a href="/">
                                    <img
                                        src="assets/img/icons/download.svg"
                                        alt="download"
                                    />
                                    Скачать
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
