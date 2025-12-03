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
        <div className={"h-[35%] w-full flex justify-between items-stretch w-full"}>

            <div className={"flex-[3] w-full gap-5 flex flex-col justify-around "}>
                    <h1 className={"z-10 text-[#FEC100] font-[Katibeh] pl-8 text-4xl"}>Add-ons</h1>
                    <AddOnsSwiper addOns={addOns} className="" />
            </div>


        </div>
    );
}