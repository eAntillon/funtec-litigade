import { Icon } from "@iconify/react/dist/iconify.js"
import ClientPhoto from "../../../assets/client-photo.png"
interface ClientReviewCardProps {
    name: string
    role: string
    review: string
}
function ClientReviewCard({
    name,
    role,
    review,
}: ClientReviewCardProps) {
    return (
        <div className="flex flex-col gap-5 py-8 bg-white border border-gray-200 rounded-md border-second-text px-9">
            <div className="flex text-secondary-1">
                <Icon icon="ic:round-star" />
                <Icon icon="ic:round-star" />
                <Icon icon="ic:round-star" />
                <Icon icon="ic:round-star" />
                <Icon icon="ic:round-star-border" />
            </div>
            <p className="font-bold text-second-text font-open-sans text-h6">
                {review}
            </p>
            <div className="flex items-center gap-4">
                <img src={ClientPhoto} className="w-12 h-12" alt="" />
                <div className="flex flex-col">
                    <p className="font-semibold text-link font-open-sans text-primary">{name}</p>
                    <p className="font-semibold text-link font-open-sans text-text">{role}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientReviewCard