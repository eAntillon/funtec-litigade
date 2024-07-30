import { Icon } from "@iconify/react/dist/iconify.js"

interface AttorneyCardProps {
    name: string
    role: string
    photo: string
}
function AttorneyCard({
    name,
    role,
    photo
}: AttorneyCardProps): JSX.Element {
    return (
        <div className="flex flex-col items-center pb-8 border border-gray-200">
            <img src={photo} alt={name} className="w-full mb-8" />
            <div className="flex flex-col justify-center mb-1">
                <h5 className="font-bold text-h5 font-martel">{name}</h5>
                <p className="font-bold text-center text-second-text text-h6">{role}</p>
            </div>
            <div className="flex gap-1">
                <button className="group">
                    <Icon icon="fe:facebook" className="w-6 h-6 text-secondary-4 group-hover:text-secondary-4/70" />
                </button>
                <button className="group">
                    <Icon icon="fe:instagram" className="w-6 h-6 text-secondary-4 group-hover:text-secondary-4/70"/>
                </button>
                <button className="group">
                    <Icon icon="fe:twitter" className="w-6 h-6 text-secondary-4 group-hover:text-secondary-4/70"/>
                </button>
            </div>
        </div>
    )
}
export default AttorneyCard