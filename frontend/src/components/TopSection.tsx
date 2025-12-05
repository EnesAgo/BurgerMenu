import React, {useEffect, useState} from "react";
import HeroImages from "@/components/leftSectionComponents/HeroImages";
import AddOnsSwiper from "@/components/leftSectionComponents/AddOnsSwiper";
import ProductShow from "@/components/rightSectionComponents/ProductsShow";

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

    const [fixed4Products, setFixed4Products] = useState<any>([])

    useEffect(() => {
        if(fixedProducts && fixedProducts.length>4){
            setFixed4Products(fixedProducts.slice(0,4));
        }
        else{
            setFixed4Products(fixedProducts);
        }

    }, [fixedProducts]);

    return (
        <div className={"flex justify-between items-stretch w-full h-[70%]"}>
            <div className="w-[55%] h-full flex items-start">

                <HeroImages className={"z-10 w-full h-full object-contain"} specialDeals={specialDeals} />
            </div>
            <div className="w-[45%] h-full flex flex-col">
                <div className={"flex w-full p-2 gap-5 items-center"}>
                    <div className={"w-1/2"}>
                        <img src="/Burgers.png" alt="Burgers" className="w-[50%] pl-2 h-auto"/>
                    </div>
                    <div className={"w-1/2"}>
                        <img src="/Burgers.png" alt="Burgers" className="w-[50%] pl-2 h-auto"/>
                    </div>
                </div>
                <ProductShow products={fixedProducts}/>
            </div>
        </div>
    );
}