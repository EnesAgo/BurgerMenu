import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

interface AddOn {
    title: string;
    price: number;
    category: string;
    image: string;
    slug: string;
}

interface AddOnsSwiperProps {
    addOns: AddOn[];
    className?: string;
}

function AddOnsSwiper({ addOns, className }: AddOnsSwiperProps) {
    return (
        <div className={`${className} z-10 w-full`}>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="addOnsSwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 8
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    }
                }}
            >
                {addOns && addOns.length > 0 ? (
                    addOns.map((addOn, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <img
                                    src={addOn.image}
                                    alt={addOn.title}
                                    className="max-h-40 object-contain"
                                />
                                <p className="text-2xl text-center">{addOn.title}</p>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    // Fallback content when no add-ons are available
                    <>
                        Data Not Fetched
                    </>
                )}
            </Swiper>
        </div>
    );
}

export default AddOnsSwiper;
