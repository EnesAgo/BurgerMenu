import { GetStaticProps } from "next";
import HomePage from "@/components/HomePage";
import { useEffect, useState } from "react";

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
    specialDeals: SpecialDeal[];
    addOns: AddOn[];
}

// Helper function to fetch data from GitHub API
const fetchDataFromGitHub = async (path: string): Promise<any[]> => {
    const repo = "EnesAgo/BurgerMenu";

    try {
        const listRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`);

        // Handle 404 errors (folder doesn't exist or is empty in GitHub)
        if (listRes.status === 404) {
            console.log(`Folder ${path} not found in GitHub repository (likely empty)`);
            return [];
        }

        if (!listRes.ok) {
            console.error(`Failed to fetch files from GitHub path ${path}:`, listRes.status, listRes.statusText);
            return [];
        }

        const files = await listRes.json();

        // Filter out .gitkeep files and only process .json files
        const jsonFiles = files.filter((file: any) => file.name.endsWith(".json"));

        if (jsonFiles.length === 0) {
            console.log(`No JSON files found in ${path}`);
            return [];
        }

        const data = await Promise.all(
            jsonFiles.map(async (file: any) => {
                const res = await fetch(file.download_url);
                const data = await res.json();
                return { ...data, slug: file.name.replace(".json", "") };
            })
        );

        return data;
    } catch (error) {
        console.error(`Error fetching data from ${path}:`, error);
        return [];
    }
};

// Specific fetch functions for each collection
const fetchProducts = async (): Promise<Product[]> => {
    return await fetchDataFromGitHub("frontend/content/products");
};

const fetchSpecialDeals = async (): Promise<SpecialDeal[]> => {
    return await fetchDataFromGitHub("frontend/content/special-deals");
};

const fetchAddOns = async (): Promise<AddOn[]> => {
    return await fetchDataFromGitHub("frontend/content/add-ons");
};

export default function Home({ products: initialProducts, specialDeals: initialSpecialDeals, addOns: initialAddOns }: HomeProps) {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [specialDeals, setSpecialDeals] = useState<SpecialDeal[]>(initialSpecialDeals);
    const [addOns, setAddOns] = useState<AddOn[]>(initialAddOns);

    useEffect(() => {
        console.log("Current products:", products);
        console.log("Current special deals:", specialDeals);
        console.log("Current add-ons:", addOns);

        // Fetch fresh data immediately on mount
        const updateAllData = async () => {
            const [freshProducts, freshSpecialDeals, freshAddOns] = await Promise.all([
                fetchProducts(),
                fetchSpecialDeals(),
                fetchAddOns()
            ]);

            if (freshProducts.length > 0) {
                setProducts(freshProducts);
                console.log("Updated products:", freshProducts);
            }

            if (freshSpecialDeals.length >= 0) { // Allow empty arrays
                setSpecialDeals(freshSpecialDeals);
                console.log("Updated special deals:", freshSpecialDeals);
            }

            if (freshAddOns.length >= 0) { // Allow empty arrays
                setAddOns(freshAddOns);
                console.log("Updated add-ons:", freshAddOns);
            }
        };

        // Initial fetch
        updateAllData();

        // Set up interval to fetch every 60 seconds
        const interval = setInterval(updateAllData, 60000); // 60 seconds

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <main className={"w-[100%] h-[100%] bg-[#393D47]"}>
            <HomePage products={products} specialDeals={specialDeals} addOns={addOns} />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const [products, specialDeals, addOns] = await Promise.all([
        fetchProducts(),
        fetchSpecialDeals(),
        fetchAddOns()
    ]);

    return {
        props: { products, specialDeals, addOns },
        revalidate: 60, // Regenerate every minute (ISR) - fallback for SEO
    };
};
