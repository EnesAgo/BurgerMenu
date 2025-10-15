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
                        media_folder: "frontend/public/uploads", // where images are stored in repo
                        public_folder: "/uploads", // URL path to access images
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
