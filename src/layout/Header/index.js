import styles from './Header.module.scss';
import { useMediaQuery } from '../../services/useMediaQuery';
import React from 'react';

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 900px)');
    const [isOpen, setIsOpen] = React.useState(false);

    if (isOpen) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflowY = 'visible';
    }

    return (
        <div className="container">
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="/assets/img/logo.svg" alt="logo" />
                </div>
                <div className={styles.navWrapper}>
                    {isMobile ? (
                        <div className={styles.hamburgerWrapper}>
                            <input
                                type="checkbox"
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            />
                            <div className={styles.hamburger}>
                                <span className={styles.line}></span>
                                <span className={styles.line}></span>
                                <span className={styles.line}></span>
                            </div>
                            <div className={styles.menuItems}>
                                <ul className={styles.menuItem}>
                                    <li>
                                        <a href="/">Обзор</a>
                                    </li>
                                    <li>
                                        <a href="/">Отзывы</a>
                                    </li>
                                    <li>
                                        <a href="/">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="/">Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <>
                            <nav className={styles.nav}>
                                <ul className={styles.navList}>
                                    <li>
                                        <a href="/">Обзор</a>
                                    </li>
                                    <li>
                                        <a href="/">Отзывы</a>
                                    </li>
                                    <li>
                                        <a href="/">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="/">Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className={styles.btn}>
                                <a href="/">
                                    <img
                                        src="/assets/img/icons/download.svg"
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
