import React from "react";
import TopSection from "@/components/TopSection";
import BotSection from "@/components/BotSection";

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

interface AddOn {
    title: string;
    price: number;
    category: string;
    image: string;
    slug: string;
}

interface HomePageProps {
    products: Product[];
    fixedProducts?: Product[];
    specialDeals: SpecialDeal[];
    addOns: AddOn[];
}

export default function HomePage({ products, fixedProducts, specialDeals, addOns }: HomePageProps) {
    return (
        <div style={{ backgroundImage: "url('/Background.png')" }} className={"w-full h-screen bg-cover flex flex-col items-center justify-center"}>
            <TopSection addOns={addOns} fixedProducts={fixedProducts} specialDeals={{ specialDeals }} />
            {/*<div className={"w-full h-[5%]"}></div>*/}
            <BotSection addOns={addOns} fixedProducts={fixedProducts} specialDeals={{ specialDeals }} />
        </div>
    );
}