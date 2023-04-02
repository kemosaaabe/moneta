import styles from './FreqAskQuestions.module.scss';

const FreqAskQuestions = () => {
    return (
        <div className={styles.faqBlock} id="faq">
            <h2 className={styles.title}>Частые вопросы</h2>
            <div className={styles.faqContent}>
                <div className={styles.faqImg}>
                    <img src="assets/img/faq_mockup.png" alt="faqMockup" />
                </div>
                <div className={styles.faqText}>
                    <div className={styles.faqItem}>
                        <input type="checkbox" name="" id="arrow-checkbox-1" />
                        <label htmlFor="arrow-checkbox-1">
                            Доступно ли приложение для IOS?
                            <span className={styles.arrow}></span>
                        </label>
                        <div className={styles.faq}>
                            На данный момент нет, мобильное приложение для IOS
                            на стадии разработки
                        </div>
                    </div>
                    <div className={styles.faqItem}>
                        <input type="checkbox" name="" id="arrow-checkbox-2" />
                        <label htmlFor="arrow-checkbox-2">
                            Доступно ли приложение для IOS?
                            <span className={styles.arrow}></span>
                        </label>
                        <div className={styles.faq}>
                            На данный момент нет, мобильное приложение для IOS
                            на стадии разработки
                        </div>
                    </div>
                    <div className={styles.faqItem}>
                        <input type="checkbox" name="" id="arrow-checkbox-3" />
                        <label htmlFor="arrow-checkbox-3">
                            Сколько категорий можно добавить?
                            <span className={styles.arrow}></span>
                        </label>
                        <div className={styles.faq}>
                            На данный момент нет, мобильное приложение для IOS
                            на стадии разработки
                        </div>
                    </div>
                    <div className={styles.link}>
                        Не нашел ответа? <a href="/">Напиши нам</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreqAskQuestions;
