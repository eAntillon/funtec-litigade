import SectionTitle from "../../atoms/SectionTitle"
import videoImg from '../../../../assets/video.png'
function WhoWeAre() {
    return (
        <div className="relative flex flex-col items-center w-full pt-20 bg-[#FAFAFA]">
            <div className="w-full px-48">
                <SectionTitle title="Who We Are" description="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics"  />
            </div>
            <div className="relative flex flex-col justify-center w-full mt-20 h-fit">
                <div className="flex justify-center w-full h-10 ">
                </div>
                <div className="flex justify-center w-full h-96 bg-gradient-to-r from-gradient-1 to-gradient-2 brightness-50">
                </div>
                <img src={videoImg} alt="" className="absolute left-0 right-0 z-10 w-2/3 mx-auto my-auto transition-all duration-300 ease-out rounded-sm bottom-10 hover:cursor-pointer hover:shadow-lg hover:scale-[1.01]" />
            </div>
        </div>
    )
}

export default WhoWeAre