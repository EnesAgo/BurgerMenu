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
        <div className={"h-[30%] w-full px-5 flex justify-between items-stretch w-full"}>

            <div className={"flex-[3] w-full flex flex-col justify-around "}>
                <div className={"w-full"}>
                    <img src={"/Extras.png"} alt="Extras" className="w-[10%] h-auto"/>
                </div>
                <AddOnsSwiper addOns={addOns} className="" />
            </div>


        </div>
    );
}