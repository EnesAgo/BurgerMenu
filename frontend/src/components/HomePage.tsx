import React from "react";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";


export default function HomePage() {
    return (
        <div style={{ backgroundImage: "url('/hamburgerVectors.svg')" }} className={"w-full h-full bg-cover flex items-center justify-center"}>
            {/*left section*/}
            <LeftSection />

            {/*right section*/}
            <RightSection />
        </div>
    );
}