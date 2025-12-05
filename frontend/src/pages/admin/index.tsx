// src/pages/admin/index.tsx
import { useEffect } from "react";

const Admin = () => {
    useEffect(() => {
        // Only run in the browser
        if (typeof window !== "undefined") {
            // Manual init flag
            (window as any).CMS_MANUAL_INIT = true;

            import("decap-cms-app").then((CMS) => {
                CMS.default.init({
                    config: {
                        backend: {
                            name: "github",
                            repo: "EnesAgo/BurgerMenu",
                            branch: "main",
                        },
                        media_folder: "frontend/public/uploads",
                        public_folder: "/uploads",
                        collections: [
                            {
                                name: "products",
                                label: "Products",
                                folder: "frontend/content/products",
                                format: "json",
                                create: true,
                                slug: "{{slug}}",
                                fields: [
                                    { name: "title", label: "Title", widget: "string" },
                                    { name: "price", label: "Price", widget: "number" },
                                    { name: "description", label: "Description", widget: "text" },
                                    { name: "image", label: "Image", widget: "image" },
                                ],
                            },
                            {
                                name: "FixedProducts",
                                label: "Fixed Products",
                                folder: "frontend/content/fixedProducts",
                                format: "json",
                                create: true,
                                slug: "{{slug}}",
                                fields: [
                                    { name: "title", label: "Title", widget: "string" },
                                    { name: "price", label: "Price", widget: "number" },
                                    { name: "description", label: "Description", widget: "text" },
                                    { name: "image", label: "Image", widget: "image" },
                                ],
                            },
                            {
                                name: "special-deals",
                                label: "Special Deals",
                                folder: "frontend/content/special-deals",
                                format: "json",
                                create: true,
                                slug: "{{slug}}",
                                fields: [
                                    { name: "name", label: "Name", widget: "string" },
                                    { name: "image", label: "Image", widget: "image" },
                                    { name: "day", label: "Day", widget: "select", options: ["1", "2", "3", "4", "5", "6", "7"] },
                                ],
                            },
                            {
                                name: "add-ons",
                                label: "Add-ons & Sides",
                                folder: "frontend/content/add-ons",
                                format: "json",
                                create: true,
                                slug: "{{slug}}",
                                fields: [
                                    { name: "title", label: "Title", widget: "string" },
                                    { name: "price", label: "Price", widget: "number" },
                                    { name: "category", label: "Category", widget: "select", options: ["Sides", "Drinks", "Sauces", "Extras"] },
                                    { name: "image", label: "Image", widget: "image" },
                                ],
                            },
                            {
                                name: "menu",
                                label: "Menu (Burger + Combo)",
                                folder: "frontend/content/menu",
                                format: "json",
                                create: true,
                                slug: "{{slug}}",
                                fields: [
                                    { name: "burgerTitle", label: "Burger Title", widget: "string" },
                                    { name: "burgerPrice", label: "Burger Price", widget: "number" },
                                    { name: "burgerDescription", label: "Burger Description", widget: "text" },
                                    { name: "burgerImage", label: "Burger Image", widget: "image" },
                                    { name: "menuPrice", label: "Menu Price (Burger + Sides)", widget: "number" },
                                    { name: "menuDescription", label: "Menu Description", widget: "text" },
                                    { name: "menuImage", label: "Menu Image", widget: "image" },
                                ],
                            },
                        ],
                    },
                });
            });
        }
    }, []);

    return (
        <div style={{ minHeight: "100vh" }}>
            <div id="nc-root" />
        </div>
    );
};

export default Admin;
