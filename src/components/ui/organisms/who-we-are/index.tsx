import SectionTitle from "../../atoms/SectionTitle"
import videoImg from '../../../../assets/video.png'
function WhoWeAre() {
    return (
        <div className="relative bg-[#FAFAFA] flex flex-col items-center justify-between w-full ">
            <div className="w-full px-5 pt-20 pb-0 md:px-14 lg:px-28 xl:px-48">
                <SectionTitle title="Who We Are" description="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics"  />
            </div>
            <div className="relative flex flex-col justify-center w-full mt-20 h-fit">
                <div className="flex justify-center w-full h-10 ">
                </div>
                <div className="flex justify-center w-full h-96 bg-gradient-to-r from-gradient-1 to-gradient-2 brightness-50">
                </div>
                <img src={videoImg} alt="" className="absolute left-0 right-0 z-10 w-4/5 h-full object-cover  lg:w-2/3 mx-auto my-auto transition-all duration-300 ease-out rounded-sm bottom-24 lg:bottom-10 hover:cursor-pointer hover:shadow-lg hover:scale-[1.01]" />
            </div>
        </div>
    )
}

export default WhoWeAre