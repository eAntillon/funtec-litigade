import { cn } from "../../../utils/cn";

interface SectionTitleProps {
    title: string;
    description: string;
    className?: string;
}

function SectionTitle({
    title,
    description,
    className
}: SectionTitleProps) {
    return (
        <div className={cn("flex flex-col items-center gap-2 mx-12 lg:mx-24 mb-20", className)}>
            <h2 className="font-bold text-center text-h2 font-martel text-text">{title}</h2>
            <p className="text-center xl:mx-48 text-paragraph font-open-sans text-second-text">{description}</p>
        </div>
    )
}

export default SectionTitle