import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroTextBlock}>
                <h1 className={styles.heroTitle}>
                    <span>Управляйте финансами</span> вместе с мобильным
                    приложением Moneta
                </h1>
                <div className={styles.heroText}>
                    <div>
                        <img src="/assets/img/icons/union.svg" alt="Union" />
                    </div>
                    <p>
                        Скачайте приложение с аналитикой ваших трат, продуманным
                        интерфейсом и приятным дизайном{' '}
                    </p>
                </div>
                <div className={styles.buttons}>
                    <a href="/">
                        <img
                            src="/assets/img/btns/google_play.svg"
                            width={55}
                            height="auto"
                            alt="Google Play"
                        />
                        <span className={styles.linkText}>
                            <span>Загрузить в</span>
                            <span className={styles.linkName}>Google Play</span>
                        </span>
                    </a>
                    <a href="/">
                        <img
                            src="/assets/img/btns/apple.svg"
                            alt="App Store"
                            width={55}
                            height="auto"
                        />
                        <span className={styles.linkText}>
                            <span>Загрузить в</span>
                            <span className={styles.linkName}>App Store</span>
                        </span>
                    </a>
                </div>
            </div>
            <div className={styles.heroImg}>
                <div className={styles.bg}>Хуй</div>
                <img src="/assets/img/mockup_hero.svg" alt="Main mockup" />
            </div>
        </div>
    );
};

export default Hero;
