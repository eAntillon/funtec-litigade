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
        <div className={cn("flex flex-col items-center gap-2 mx-24 mb-20", className)}>
            <h2 className="font-bold text-h2 font-martel text-text">{title}</h2>
            <p className="mx-48 text-center text-paragraph font-open-sans text-second-text">{description}</p>
        </div>
    )
}

export default SectionTitle