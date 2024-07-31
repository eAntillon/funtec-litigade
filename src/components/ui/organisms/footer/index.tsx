import FooterSiteMap from "../../molecules/FooterSiteMap"
import FooterSocialMedia from "../../molecules/FooterSocialMedia"

function Footer() {
    return (
        <>
            <div className="w-full px-48 bg-text ">
                <div className="flex justify-between py-10 border-b border-gray-600">
                    <h3 className="font-bold text-h3 font-martel text-light-text">Litigade</h3>
                    <FooterSocialMedia />
                </div>
                <FooterSiteMap />
            </div>
            <div className="flex items-center w-full px-48 py-5 bg-gradient-to-r from-gradient-1 to-gradient-2 brightness-100">
                <p className="font-bold text-white text-h6 font-open-sans">Made With Love By Erick Antillón All Right Reserved </p>
            </div>
        </>

    )
}

export default Footer