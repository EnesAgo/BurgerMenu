import React, {useState, useEffect} from "react";
import ProductShow from "@/components/rightSectionComponents/ProductsShow";

export default function RightSection({products, fixedProducts}: any) {

    const [fixed4Products, setFixed4Products] = useState<any>([])

    useEffect(() => {
        if(fixedProducts && fixedProducts.lenth>4){
            setFixed4Products(fixedProducts.slice(0,4));
        }
        else{
            setFixed4Products(fixedProducts);
        }

    }, [fixedProducts]);

    return (
        <div className={"flex-1 h-full flex-col"}>
            <div className={"flex w-full h-[80%] pb-5"}>

                <div className="w-1/2 h-full">
                    <ProductShow products={products}/>
                </div>



                <div className="w-1/2 h-full">
                    <ProductShow products={fixedProducts}/>
                </div>
                {/*<div className={"flex flex-col w-[50%]"}>*/}
                {/*    {fixed4Products && fixed4Products.length>0 && fixed4Products.map((product: any, index: number) => (*/}
                {/*        <div className={"flex w-full h-[25%] p-2 gap-2  items-center gap-2"}>*/}
                {/*            <img src={product.image} alt="LogoHalal" className={"h-auto w-[35%]"}/>*/}
                {/*            <div className={"flex flex-col"}>*/}
                {/*                <h2 className={"text-[#FEC100] text-2xl"}>{product.title}</h2>*/}
                {/*                <p className={"text-white"}>{product.description}</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

            </div>

            <div className={"w-full h-[20%] w-full  items-center flex justify-end gap-4 pr-16 pt-5 pb-1"}>
                <img src="/HalalLogo.png" alt="LogoHalal" className={"h-[90%]"}/>
                <img src="/BurgerLogo.png" alt="Logo"  className={"h-[90%]"}/>
            </div>

        </div>
    );

}