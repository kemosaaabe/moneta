import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>логотип</div>
            <nav className={styles.nav}>
                <ul>
                    <li>Главная</li>
                    <li>Обзор</li>
                    <li>Отзывы</li>
                    <li>FAQ</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div>
                <a href="">Скачать</a>
            </div>
        </header>
    );
};

export default Header;
