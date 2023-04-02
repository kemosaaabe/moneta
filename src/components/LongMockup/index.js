import styles from './LongMockup.module.scss';
import DownloadButtons from '../DownloadButtons';

const LongMockup = () => {
    return (
        <div className="container">
            <div className={styles.longMockup}>
                <div className={styles.mockupImg}>
                    <img src="assets/img/long_mockup.svg" alt="" />
                </div>
                <div className={styles.mockupText}>
                    <h2>
                        Наше приложение поможет грамотно и эффективно{' '}
                        <span>управлять финансами</span>
                    </h2>
                    <p>
                        Moneta разработана для того, чтобы у вас была полная
                        финансовая прозрачность и рациональное использование
                        ваших средств
                    </p>
                    <DownloadButtons />
                </div>
            </div>
        </div>
    );
};

export default LongMockup;
