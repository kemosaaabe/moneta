import styles from './MainFeatures.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from './slideData';
import Balls from './Balls';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import './carousel.scss';

import { EffectCoverflow, Navigation } from 'swiper';
import React from 'react';

const MainFeatures = () => {
    const [slideInfo, setSlideInfo] = React.useState({
        index: 2,
        title: 'В приложении подробная и прозрачная аналитика',
        description: `Наше приложение ведет статистику за выбранный период
        времени по категориям, доходам и расходам, а также по
        каждому банковскому счету — это позволяет проводить
        полноценный финансовый анализ.`,
    });

    return (
        <div className={styles.mainFeatures}>
            <h2 className={styles.Title}>Возможности приложения</h2>
            <div className={styles.featuresSwiper}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor
                    centeredSlides
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2.4,
                        slideShadows: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    onSwiper={(swiper) => swiper.slideTo(2, 0)}
                    onSlideChange={({ activeIndex }) => {
                        const obj = data.find(
                            (item) => item.index === activeIndex
                        );
                        setSlideInfo(obj);
                    }}
                    modules={[EffectCoverflow, Navigation]}
                >
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/4.svg"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/5.svg"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/1.svg"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/2.svg"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/3.svg"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
                <div className={styles.slideInfo}>
                    <h3>{slideInfo.title}</h3>
                    <p>{slideInfo.description}</p>
                </div>
            </div>
            <Balls />
        </div>
    );
};

export default MainFeatures;
