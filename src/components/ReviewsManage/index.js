import styles from './ReviewsManage.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import './swiper.scss';

const Review = () => {
    return (
        <div className={styles.review}>
            <div className={styles.man}>
                <div className={styles.manImg}>
                    <img src="/assets/img/ReviewsManage/man.svg" alt="" />
                </div>
                <div className="manName">
                    <h3>Дмитрий</h3>
                    <div className="stars">
                        {[...Array(5)].map(() => (
                            <img src="/assets/img/ReviewsManage/star.svg" />
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

const ReviewsManage = () => {
    return (
        <div className={styles.reviewsManage}>
            <div className={styles.reviews}>
                <h2>Отзывы пользователей</h2>
                <Swiper
                    className="reviewsSwiper"
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    <SwiperSlide>
                        <Review />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review />
                    </SwiperSlide>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewsManage;
