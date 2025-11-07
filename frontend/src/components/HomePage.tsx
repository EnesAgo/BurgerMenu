import React from "react";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

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
    specialDeals: SpecialDeal[];
    addOns: AddOn[];
}

export default function HomePage({ products, specialDeals, addOns }: HomePageProps) {
    return (
        <div style={{ backgroundImage: "url('/hamburgerVectors.svg')" }} className={"w-full h-full bg-cover flex items-center justify-center"}>
            {/*left section*/}
            <LeftSection products={products} specialDeals={specialDeals} />

            {/*right section*/}
            <RightSection addOns={addOns} />
        </div>
    );
}