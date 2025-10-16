import React from "react";

export default function LeftSection() {
    return (
        <div className={"h-full flex flex-col justify-between items-stretch max-w-[40%] [@media(min-width:1600px)]:max-w-[50%]"}>
            <img src="/Heroimages/HeroImage.png" alt="asd" className={"z-10 w-full h-auto object-contain"}/>

            <div className={"w-full h-full p-8 gap-5 flex flex-col justify-around "}>
                <div className="hidden absolute bottom-[-35%] left-[-50%] h-[100%] w-[100%] aspect-[2] bg-[#328C201A] blur-xs rounded-full z-0"></div>

                <h1 className={" z-10 text-[#FEC100] font-[Katibeh] pl-8 text-5xl"}>Drinks</h1>
                <ul className={" z-10 w-full flex gap-2 justify-between overflow-auto"}>
                    <li className={"flex flex-col items-center justify-center gap-2"}>
                        <img src="/Heroimages/drink.png" alt="asd" className={"max-h-44"}/>
                        <p className={"text-3xl"}>Drink</p>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-2"}>
                        <img src="/Heroimages/drink2.png" alt="asd" className={"max-h-44"}/>
                        <p className={"text-3xl"}>Drink</p>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-2"}>
                        <img src="/Heroimages/drink3.png" alt="asd" className={"max-h-44"}/>
                        <p className={"text-3xl"}>Drink</p>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-2"}>
                        <img src="/Heroimages/drink.png" alt="asd" className={"max-h-44"}/>
                        <p className={"text-3xl"}>Drink</p>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-2"}>
                        <img src="/Heroimages/drink.png" alt="asd" className={"max-h-44"}/>
                        <p className={"text-3xl"}>Drink</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}