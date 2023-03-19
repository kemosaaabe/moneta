import styles from './Footer.module.scss';
import DownloadButtons from '../../components/DownloadButtons';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3>Скачивай и управляй финансами!</h3>
            <DownloadButtons />
            <div className={styles.author}></div>
            <div className={styles.linksBlock}>
                <div className={styles.main}></div>
                <div className={styles.contacts}></div>
            </div>
        </div>
    );
};

export default Footer;
