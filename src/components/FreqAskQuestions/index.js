import styles from './FreqAskQuestions.module.scss';

const FreqAskQuestions = () => {
    return (
        <div className={styles.faqBlock}>
            <div className={styles.title}></div>
            <div className={styles.faqContent}>
                <div className={styles.faqImg}></div>
                <div className={styles.faqText}>
                    <p>Доступно ли приложение для IOS?</p>
                    <p>Доступно ли приложение для IOS?</p>
                    <p>Сколько категорий можно добавить?</p>
                </div>
            </div>
        </div>
    );
};

export default FreqAskQuestions;
