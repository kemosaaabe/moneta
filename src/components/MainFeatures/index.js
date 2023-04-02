import styles from './MainFeatures.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from './slideData';
import Balls from './Balls';
import { useMediaQuery } from '../../services/useMediaQuery';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import './carousel.scss';

import { EffectCoverflow, Navigation } from 'swiper';
import React from 'react';

const MainFeatures = () => {
    const [slideInfo, setSlideInfo] = React.useState(data[2]);

    return (
        <div className={styles.mainFeatures} id="features">
            <h2 className={styles.Title}>Возможности приложения</h2>
            <div className={styles.featuresSwiper}>
                <Swiper
                    modules={[EffectCoverflow, Navigation]}
                    effect={'coverflow'}
                    grabCursor
                    centeredSlides
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 240,
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
                    className="mainFeaturesSwiper"
                >
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/4.png"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/5.png"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/1.png"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/2.png"
                            alt="phone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/img/featuresImages/3.png"
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
