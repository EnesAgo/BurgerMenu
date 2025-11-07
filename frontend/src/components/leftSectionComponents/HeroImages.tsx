import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

function HeroImages({className}: {className?: string}) {
    return (
        <div className={className} >
            {/*<img src="/Heroimages/HeroImage.png"/>*/}

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide><img src="/Heroimages/HeroImage.png"/></SwiperSlide>
                <SwiperSlide><img src="/Heroimages/drink.png"/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeroImages;