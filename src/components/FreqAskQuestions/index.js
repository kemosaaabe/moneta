import styles from './FreqAskQuestions.module.scss';

const FreqAskQuestions = () => {
    return (
        <div className={styles.faqBlock}>
            <h2 className={styles.title}>Частые вопросы</h2>
            <div className={styles.faqContent}>
                <div className={styles.faqImg}>
                    <img src="/assets/img/faq_mockup.svg" alt="faqMockup" />
                </div>
                <div className={styles.faqText}>
                    <p>
                        <span>Доступно ли приложение для IOS?</span>
                        <div className={styles.faqTextArrow}></div>
                    </p>
                    <p>
                        <span>Доступно ли приложение для IOS?</span>
                        <div className={styles.faqTextArrow}></div>
                    </p>
                    <p>
                        <span>Сколько категорий можно добавить?</span>
                        <div className={styles.faqTextArrow}></div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FreqAskQuestions;
