import styles from './Hero.module.scss';
import DownloadButtons from '../DownloadButtons';

const Hero = () => {
    return (
        <div className="container">
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
                    <DownloadButtons />
                </div>
                <div className={styles.heroImg}>
                    <div className={styles.bg}>Хуй</div>
                    <img src="/assets/img/mockup_hero.svg" alt="Main mockup" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
