import { GetStaticProps } from "next";
import HomePage from "@/components/HomePage";
import { useEffect, useState } from "react";
import fs from "fs";
import path from "path";

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

interface HomeProps {
    products: Product[];
    fixedProducts?: Product[];
    specialDeals: SpecialDeal[];
    addOns: AddOn[];
}

const fetchDataFromLocalFS = async (folderPath: string): Promise<any[]> => {
    try {
        const fullPath = path.join(process.cwd(), folderPath);

        if (!fs.existsSync(fullPath)) {
            console.log(`Folder ${folderPath} not found locally`);
            return [];
        }

        const files = fs.readdirSync(fullPath);
        const jsonFiles = files.filter((file) => file.endsWith(".json"));

        if (jsonFiles.length === 0) {
            console.log(`No JSON files found in ${folderPath}`);
            return [];
        }

        const data = jsonFiles.map((file) => {
            try {
                const filePath = path.join(fullPath, file);
                const fileContent = fs.readFileSync(filePath, "utf-8");
                const jsonData = JSON.parse(fileContent);
                return { ...jsonData, slug: file.replace(".json", "") };
            } catch (error) {
                console.error(`Error parsing JSON file ${file}:`, error);
                return null;
            }
        });

        return data.filter((item) => item !== null);
    } catch (error) {
        console.error(`Error reading data from ${folderPath}:`, error);
        return [];
    }
};

const fetchProducts = async (): Promise<Product[]> => {
    return await fetchDataFromLocalFS("content/products");
};

const fetchFixedProducts = async (): Promise<Product[]> => {
    return await fetchDataFromLocalFS("content/fixedProducts");
};

const fetchSpecialDeals = async (): Promise<SpecialDeal[]> => {
    return await fetchDataFromLocalFS("content/special-deals");
};

const fetchAddOns = async (): Promise<AddOn[]> => {
    return await fetchDataFromLocalFS("content/add-ons");
};

export default function Home({ products: initialProducts, fixedProducts: initialFixedProducts, specialDeals: initialSpecialDeals, addOns: initialAddOns }: HomeProps) {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [fixedProducts, setFixedProducts] = useState<Product[]>(initialFixedProducts || []);
    const [specialDeals, setSpecialDeals] = useState<SpecialDeal[]>(initialSpecialDeals);
    const [addOns, setAddOns] = useState<AddOn[]>(initialAddOns);

    useEffect(() => {
        console.log("Current products:", products);
        console.log("Current fixed products:", fixedProducts);
        console.log("Current special deals:", specialDeals);
        console.log("Current add-ons:", addOns);

        const updateAllData = async () => {
            try {
                const response = await fetch('/api/content');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.products || []);
                    setFixedProducts(data.fixedProducts || []);
                    setSpecialDeals(data.specialDeals || []);
                    setAddOns(data.addOns || []);
                    console.log("Updated data from API");
                }
            } catch (error) {
                console.error("Error fetching fresh data:", error);
            }
        };

        // Set up interval to fetch every 60 seconds
        const interval = setInterval(updateAllData, 60000); // 60 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <main className={"w-[100%] h-screen bg-[#393D47]"}>
            <HomePage
                products={products}
                fixedProducts={fixedProducts}
                specialDeals={specialDeals}
                addOns={addOns}
            />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const [products, fixedProducts, specialDeals, addOns] = await Promise.all([
        fetchProducts(),
        fetchFixedProducts(),
        fetchSpecialDeals(),
        fetchAddOns()
    ]);

    return {
        props: {
            products,
            fixedProducts,
            specialDeals,
            addOns
        },
        revalidate: 60, // Regenerate every minute
    };
};
