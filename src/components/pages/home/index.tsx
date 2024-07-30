import MainTemplate from "../../templates/main"
import Banner from "../../ui/organisms/banner"
import Features from "../../ui/organisms/features"

function HomePage() {
    return (
        <MainTemplate>
            <Banner />
            <Features />
        </MainTemplate>
    )
}

export default HomePage