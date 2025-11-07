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

interface HomeProps {
    products: Product[];
}

// Helper function to fetch products from GitHub API
const fetchProducts = async (): Promise<Product[]> => {
    const repo = "EnesAgo/BurgerMenu";
    const path = "frontend/content/products";

    try {
        const listRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`);

        if (!listRes.ok) {
            console.error("Failed to fetch files from GitHub:", listRes.statusText);
            return [];
        }

        const files = await listRes.json();

        const products = await Promise.all(
            files
                .filter((file: any) => file.name.endsWith(".json"))
                .map(async (file: any) => {
                    const res = await fetch(file.download_url);
                    const data = await res.json();
                    return { ...data, slug: file.name.replace(".json", "") };
                })
        );

        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export default function Home({ products: initialProducts }: HomeProps) {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    useEffect(() => {
        console.log("Current products:", products);

        // Fetch fresh data immediately on mount
        const updateProducts = async () => {
            const freshProducts = await fetchProducts();
            if (freshProducts.length > 0) {
                setProducts(freshProducts);
                console.log("Updated products:", freshProducts);
            }
        };

        // Initial fetch
        updateProducts();

        // Set up interval to fetch every 60 seconds
        const interval = setInterval(updateProducts, 60000); // 60 seconds

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <main className={"w-[100%] h-[100%] bg-[#393D47]"}>
            <HomePage />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const products = await fetchProducts();

    return {
        props: { products },
        revalidate: 60, // Regenerate every minute (ISR) - fallback for SEO
    };
};
