import { Icon } from "@iconify/react/dist/iconify.js"

interface FeatureCardProps {
    title: string
    description: string[]
    image: string
}
function FeatureCard({
    title,
    description,
    image
}: FeatureCardProps) {
    return (
        <div className="bg-[#F6E4D7] rounded-lg w-full flex flex-col justify-between">
            <div className="flex items-center justify-between gap-4 px-12 py-7">
                <div className="px-5 py-5 rounded-full bg-light-background">
                    <Icon icon={image} className="h-6 w-7 text-primary" />
                </div>
                <h5 className="font-bold text-h5 font-martel">{title}</h5>
            </div>
            <div className="px-12 bg-white border rounded-lg py-7 border-[#A9D6FF]/40 text-second-text">
                {
                    description.map((desc, index) => (
                        <p key={index} className="font-semibold leading-relaxed text-h6 font-open-sans text-second-text">- {desc}</p>
                    ))
                }
                <a href="/" className="font-semibold font-open-sans text-secondary-3 text-link">
                    Learn More
                </a>
            </div>
        </div>
    )
}

export default FeatureCard