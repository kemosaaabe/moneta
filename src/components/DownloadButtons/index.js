import styles from './DownloadButtons.module.scss';

const DownloadButtons = ({ footer }) => {
    return (
        <div className={styles.buttons} style={{ gap: footer && '130px' }}>
            <a
                href="/"
                style={{
                    background: footer && '#fff',
                    color: footer && '#000',
                }}
            >
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
            <a
                href="/"
                style={{
                    background: footer && '#fff',
                    color: footer && '#000',
                }}
            >
                <img
                    src={
                        footer
                            ? '/assets/img/btns/apple_footer.svg'
                            : '/assets/img/btns/apple.svg'
                    }
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
