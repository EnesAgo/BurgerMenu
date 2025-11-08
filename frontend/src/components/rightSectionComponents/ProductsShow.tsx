import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";


export default function HomePage({products}: any) {

    console.log("products in the RightSection:", products);

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            direction="vertical"
            className="w-full h-full"
        >
            {products && products.length>0 && products.map((product: any, index: number) => (
                <SwiperSlide className="h-auto">
                    <div className={"h-full flex w-full p-2 gap-2 items-center"}>
                        <img src={product.image} alt="LogoHalal" className={"h-auto w-[35%]"}/>
                        <div className={"flex flex-col"}>
                            <h2 className={"text-[#FEC100] text-2xl"}>{product.title}</h2>
                            <p className={"text-white"}>{product.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>

    );
}