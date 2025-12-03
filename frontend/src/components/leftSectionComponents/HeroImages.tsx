import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

function HeroImages({className, specialDeals}: any) {
    const [deals, setDeals] = useState<any>(specialDeals.specialDeals)
    const [todayDeals, setTodayDeals] = useState<any[]>([]);

    useEffect(() => {
        const today = new Date();
        const todaysDay = today.getDay(); // 0 (Sunday) to 6 (Saturday)

        // Convert numeric day to string (1-7 format)
        const dayToString = (day: number): string => {
            const adjustedDay = day === 0 ? "7" : day.toString();
            return adjustedDay;
        };

        if (deals && Array.isArray(deals)) {
            const todaysSpecials = deals.filter((deal: any) => deal.day === dayToString(todaysDay));
            setTodayDeals(todaysSpecials);
        }

        console.log(todayDeals)
    }, [specialDeals, deals]);

    return (
        <div className={`${className} overflow-hidden`} >
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
                className="mySwiper h-[100%] w-full"
            >
                {todayDeals.length > 0 ? (
                    todayDeals.map((deal: any, index: number) => (
                        <SwiperSlide key={index} className="flex items-center justify-start">
                            <img className="w-full h-full object-contain object-top-left" src={deal.image} alt={deal.name} />
                        </SwiperSlide>
                    ))
                ) : (

                    <SwiperSlide className="">
                        {/*{todayDeals.length>0 && todayDeals.map((e)=> <img className={"max-h-[40%]"} src={e.image}alt="Default Hero" />)}*/}
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default HeroImages;