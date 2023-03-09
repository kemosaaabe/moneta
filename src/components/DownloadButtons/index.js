import styles from './DownloadButtons.module.scss';

const DownloadButtons = () => {
    return (
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
    );
};

export default DownloadButtons;
