import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

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

interface ContentData {
    products: Product[];
    fixedProducts: Product[];
    specialDeals: SpecialDeal[];
    addOns: AddOn[];
}

// Helper function to read data from local filesystem
const fetchDataFromLocalFS = (folderPath: string): any[] => {
    try {
        const fullPath = path.join(process.cwd(), folderPath);

        // Check if directory exists
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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ContentData>
) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const products = fetchDataFromLocalFS("content/products");
        const fixedProducts = fetchDataFromLocalFS("content/fixedProducts");
        const specialDeals = fetchDataFromLocalFS("content/special-deals");
        const addOns = fetchDataFromLocalFS("content/add-ons");

        res.status(200).json({
            products,
            fixedProducts,
            specialDeals,
            addOns
        });
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({
            products: [],
            fixedProducts: [],
            specialDeals: [],
            addOns: []
        });
    }
}

