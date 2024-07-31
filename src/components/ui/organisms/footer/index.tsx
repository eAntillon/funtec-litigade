import FooterSiteMap from "../../molecules/FooterSiteMap"
import FooterSocialMedia from "../../molecules/FooterSocialMedia"

function Footer() {
    return (
        <>
            <div className="w-full px-5 py-16 md:px-14 lg:px-28 xl:px-48 bg-text ">
                <div className="flex flex-col justify-between gap-12 border-gray-600 lg:py-10 lg:border-b sm:flex-row">
                    <h3 className="font-bold text-h3 font-martel text-light-text">Litigade</h3>
                    <FooterSocialMedia />
                </div>
                <FooterSiteMap />
            </div>
            <div className="flex items-center w-full px-5 py-4 md:px-14 lg:px-28 xl:px-48 bg-gradient-to-r from-gradient-1 to-gradient-2 brightness-100">
                <p className="font-bold text-white text-h6 font-open-sans">Made By Erick Antillón All Right Reserved </p>
            </div>
        </>

    )
}

export default Footer