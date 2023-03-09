import styles from './LongMockup.module.scss';
import DownloadButtons from '../DownloadButtons';

const LongMockup = () => {
    return (
        <div className={styles.longMockup}>
            <div className={styles.mockupImg}>
                <img src="" alt="" />
            </div>
            <div className={styles.mockupText}>
                <h2></h2>
                <p></p>
                <DownloadButtons />
            </div>
        </div>
    );
};

export default LongMockup;
