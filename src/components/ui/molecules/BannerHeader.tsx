
function BannerHeader() {
    return (
        <div className="flex flex-col w-full gap-6 lg:w-1/2">
            <h1 className="font-bold leading-tight text-center lg:font-black text-h2 lg:text-left lg:text-h1 font-martel text-text">
                Help to reclaim your life and freedom
            </h1>
            <h4 className="font-medium tracking-tight text-center text-second-text lg:text-left text-h5 lg:text-h4 font-montserrat">
                We know how large objects will act, but things on a
                small scale.
            </h4>
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:item">
                <button className="px-9 py-[10px] w-fit text-white rounded-full bg-secondary-2 text-btn-text font-open-sans font-bold hover:bg-secondary-2/90 transition-colors duration-800">
                    Get Quote Now
                </button>
                <button className="px-9 py-[10px] w-fit rounded-full border border-secondary-2 text-secondary-2 text-btn-text font-open-sans font-bold hover:bg-secondary-2/10 transition-colors duration-800">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default BannerHeader