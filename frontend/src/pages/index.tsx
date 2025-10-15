import { GetStaticProps } from "next";
import HomePage from "@/components/HomePage";

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

export default function Home({ products }: HomeProps) {
    return (
    <main className={"w-[100%] h-[100%] bg-[#393D47]"}>
        <HomePage />
    </main>

    );
}

export const getStaticProps: GetStaticProps = async () => {
    const repo = "EnesAgo/BurgerMenu";
    const path = "frontend/content/products";

    // 1️⃣ Fetch all JSON files in the folder
    const listRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`);
    const files = await listRes.json();
    console.log(files);
    console.log(1)

    // 2️⃣ Download and parse each JSON file
    const products = await Promise.all(
        files
            .filter((file: any) => file.name.endsWith(".json"))
            .map(async (file: any) => {
                const res = await fetch(file.download_url);
                const data = await res.json();
                return { ...data, slug: file.name.replace(".json", "") };
            })
    );

    return {
        props: { products },
        revalidate: 60, // Regenerate every minute (ISR)
    };
};
