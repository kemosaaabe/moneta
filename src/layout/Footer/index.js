import styles from './Footer.module.scss';
import DownloadButtons from '../../components/DownloadButtons';
import { useMediaQuery } from '../../services/useMediaQuery';

const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 850px)');

    return (
        <div className={styles.footer}>
            <h3>Скачивай и управляй финансами!</h3>
            <DownloadButtons footer={true} />
            <div className={styles.footerText}>
                <div className={styles.author}>
                    <div className={styles.logo}>
                        <img src="/assets/img/logo.svg" alt="logo" />
                        <span>Приложение для учета личных финансов</span>
                    </div>
                    {!isMobile && (
                        <div className={styles.authorText}>
                            © 2023, ИП Полтавец Станислав Владиславович Все
                            права защищены
                        </div>
                    )}
                </div>
                <div className={styles.linksBlock}>
                    <div className={styles.main}>
                        <h5>Основное:</h5>
                        <ul>
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
                                <a href="/">Частые вопросы</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contacts}>
                        <h5>Контакты</h5>
                        <ul>
                            <li>moneta@yandex.ru</li>
                            <li>
                                <a href="/">Поддержка</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {isMobile && (
                    <div className={styles.authorText}>
                        © 2023, ИП Полтавец Станислав Владиславович Все права
                        защищены
                    </div>
                )}
            </div>
        </div>
    );
};

export default Footer;
