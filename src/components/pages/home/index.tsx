import MainTemplate from "../../templates/main"
import Banner from "../../ui/organisms/banner"
import Features from "../../ui/organisms/features"
import MeetOutAttorneys from "../../ui/organisms/meet-our-attorneys"
import WhatClientsSay from "../../ui/organisms/what-clients-say"
import WhoWeAre from "../../ui/organisms/who-we-are"

function HomePage() {
    return (
        <MainTemplate>
            <Banner />
            <Features />
            <WhoWeAre />
            <WhatClientsSay />
            <MeetOutAttorneys />
        </MainTemplate>
    )
}

export default HomePage