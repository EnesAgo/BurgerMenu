import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import 'swiper/css';


export default function HomePage({products}: any) {

    console.log("products in the RightSection:", products);

    return (
        <Swiper
            slidesPerView={4}
            className="mySwiper text-white w-full flex flex-col h-full"
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            direction={'vertical'}

            // direction="vertical"
        >
            {products && products.length>0 && products.map((product: any, index: number) => (
                <SwiperSlide className="h-[25%] rounded-lg" key={index}>
                    <div className={"h-full flex w-full p-2 gap-5 items-center"}>
                        <div className={"h-full flex w-1/2 gap-2 items-center"}>
                            <img src={product.image} alt="LogoHalal" className={"max-h-[100%] w-auto max-w-[35%]"}/>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-[#FEC100] text-2xl"}>{product.title}</h2>
                                <p className={"text-white"}>{product.description}</p>
                                <h4 className={"text-[#FEC100] text-2xl"}>€{product.price}</h4>
                            </div>
                        </div>
                        <div className={"h-full flex w-1/2 gap-2 items-center"}>
                            <img src={product.image} alt="LogoHalal" className={"max-h-[100%] w-auto max-w-[35%]"}/>
                            <div className={"flex flex-col"}>
                                <h2 className={"text-[#FEC100] text-2xl"}>{product.title}</h2>
                                <p className={"text-white"}>{product.description}</p>
                                <h4 className={"text-[#FEC100] text-2xl"}>€{product.price}</h4>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}