import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className="container">
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="/assets/img/logo.svg" alt="logo" />
                </div>
                <div className={styles.navWrapper}>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>
                                <a href="/">Главная</a>
                            </li>
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
                            <img src="/assets/img/icons/download.svg" />
                            Скачать
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
