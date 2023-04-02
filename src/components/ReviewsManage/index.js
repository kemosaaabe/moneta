import styles from './ReviewsManage.module.scss';
import DownloadButtons from '../DownloadButtons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import './swiper.scss';

const Review = () => {
    return (
        <div className={styles.review}>
            <div className={styles.man}>
                <div className={styles.manImg}>
                    <img src="/assets/img/ReviewsManage/man.svg" alt="man" />
                </div>
                <div className={styles.manName}>
                    <h3>Дмитрий</h3>
                    <div className={styles.stars}>
                        {[...Array(5)].map((item, index) => (
                            <div key={index}>
                                <img
                                    src="/assets/img/ReviewsManage/star.svg"
                                    alt="start"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.reviewText}>
                Наконец-то нашел удобное приложение, чтобы следить за своими
                расходами. Без багов, быстрое и удобное. Вносить траты одно
                удовольствие. Жду, когда добавят возможность сканировать чеки и
                оффлайн сохранение
            </div>
        </div>
    );
};

const Reviews = () => {
    return (
        <div className={styles.reviews} id="reviews">
            <h2>Отзывы пользователей</h2>
            <div className={styles.reviewsSwiperWrapper}>
                <Swiper
                    className="reviewsSwiper"
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {[...Array(3)].map((item, index) => (
                        <SwiperSlide key={index}>
                            <Review />
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
            </div>
        </div>
    );
};

const ManageBlock = () => {
    return (
        <div className={styles.manageBlock}>
            <div className={styles.textBlock}>
                <h2>
                    Управляйте своими деньгами <span>вместе с нами</span>
                </h2>
                <p>
                    С помощью нашего приложения вы сможете контролировать свои
                    расходы и планировать бюджет в рамках установленных лимитов
                </p>
                <DownloadButtons />
            </div>
            <div className={styles.imageBlock}>
                <img
                    src="/assets/img/ReviewsManage/manageImg.svg"
                    alt="phones"
                />
            </div>
        </div>
    );
};

const ReviewsManage = () => {
    return (
        <div className={styles.reviewsManage}>
            <Reviews />
            <ManageBlock />
        </div>
    );
};

export default ReviewsManage;
