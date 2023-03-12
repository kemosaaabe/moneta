import styles from './ShortFeatures.module.scss';

const ShortFeatures = () => {
    return (
        <div className="container">
            <div className={styles.shortFeatures}>
                <div className={styles.featureBlock}>
                    <div className={styles.featureTitle}>
                        <div className={styles.featureIcon}>
                            <img
                                src="/assets/img/shortFeatures/diamond.svg"
                                alt="Diamond"
                            />
                        </div>
                        <h3>Продуманный интерфейс</h3>
                    </div>
                    <p>
                        Мы сделали приложение максимально понятным, удобным,
                        функциональным и приятным
                    </p>
                </div>
                <div className={styles.featureBlock}>
                    <div className={styles.featureTitle}>
                        <div className={styles.featureIcon}>
                            <img
                                src="/assets/img/shortFeatures/check_mark.svg"
                                alt="Check mark"
                            />
                        </div>
                        <h3>Все необходимое — бесплатно</h3>
                    </div>
                    <p>
                        В нашем приложении доступны все необходимые функции для
                        грамотного ведения бюджета совершенно бесплатно
                    </p>
                </div>
                <div className={styles.featureBlock}>
                    <div className={styles.featureTitle}>
                        <div className={styles.featureIcon}>
                            <img
                                src="/assets/img/shortFeatures/bar_chart.svg"
                                alt="Bar chart"
                            />
                        </div>
                        <h3>Аналитика и советы</h3>
                    </div>
                    <p>
                        Вам доступна подробная аналитика, а также в скором
                        времени появятся советы по грамотному ведению бюджета
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShortFeatures;
