import React from "react";


export default function HomePage() {
    return (
        <div style={{ backgroundImage: "url('/hamburgerVectors.svg')" }} className={"w-full h-full bg-cover flex items-center justify-center"}>
            {/*left section*/}
            <div className={"bg-[red] w-[50%] h-full flex flex-col items-center justify-between"}>
                <img src="/Heroimages/HeroImage.png" alt="asd" className={"w-full"}/>

                <div>
                    <h1 className={"color-[#FEC100] font-[Katibeh]"}></h1>
                    <ul className={"w-full flex gap-2 "}>
                        <li className={"flex flex-col gap-1 items-center justify-center"}>
                            <img src="/Heroimages/drink.png" alt="asd" className={"w-12"}/>
                            <p>Drink</p>
                        </li>
                    </ul>
                </div>
            </div>



            {/*right section*/}
            <div className={"bg-[blue] w-[50%] h-full"}></div>
        </div>
    );
}