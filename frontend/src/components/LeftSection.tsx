import React from "react";
import HeroImages from "@/components/leftSectionComponents/HeroImages";
import AddOnsSwiper from "@/components/leftSectionComponents/AddOnsSwiper";

interface Product {
    title: string;
    price: number;
    description: string;
    image: string;
    slug: string;
}

interface SpecialDeal {
    name: string;
    image: string;
    day: string;
    slug: string;
}

interface LeftSectionProps {
    fixedProducts?: Product[];
    addOns: any,
    specialDeals: {
        specialDeals: SpecialDeal[];
    };
}

export default function LeftSection({addOns, fixedProducts, specialDeals}: LeftSectionProps) {
    console.log("addOns data:", addOns);
    console.log("fixedProducts data:", fixedProducts);
    console.log("specialDeals data:", specialDeals);

    return (
        <div className={"h-full flex flex-col justify-between items-stretch max-w-[40%] [@media(min-width:1600px)]:max-w-[50%]"}>
            <div className="flex-[2] h-[60%]">
                <HeroImages className={"z-10 w-full h-full object-contain"} specialDeals={specialDeals} />
            </div>

            <div className={"flex-[3] w-full p-8 gap-5 flex flex-col justify-around "}>
                <div className="hidden absolute bottom-[-35%] left-[-50%] h-[100%] w-[100%] aspect-[2] bg-[#328C201A] blur-xs rounded-full z-0"></div>

                <h1 className={" z-10 text-[#FEC100] font-[Katibeh] pl-8 text-5xl"}>Add-ons</h1>
                <AddOnsSwiper addOns={addOns} className="" />
            </div>
        </div>
    );
}