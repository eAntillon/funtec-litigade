import SectionTitle from "../../atoms/SectionTitle";
import ClientReviewCard from "../../molecules/ClientReviewCard";
function WhatClientsSay() {
    return (
        <div className="relative flex flex-col items-center w-full px-48 py-20 bg-[#FAFAFA]">
            <SectionTitle
                title="What Clients Say"
                description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
            />
            <div className="grid w-full grid-cols-3 gap-8">
                <ClientReviewCard
                    name="Regina Miles"
                    review="Slate helps you see how many more days you need to work to reach your financial goal."
                    role="Designer"
                />
                <ClientReviewCard
                    name="Regina Miles"
                    review="Slate helps you see how many more days you need to work to reach your financial goal."
                    role="Designer"
                />
                <ClientReviewCard
                    name="Regina Miles"
                    review="Slate helps you see how many more days you need to work to reach your financial goal."
                    role="Designer"
                />
            </div>
        </div>
    );
}

export default WhatClientsSay;
