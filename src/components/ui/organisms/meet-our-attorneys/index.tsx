import SectionTitle from "../../atoms/SectionTitle";
import AttorneyCard from "../../molecules/AttorneyCard";
import client1 from "../../../../assets/client1.png";
import client2 from "../../../../assets/client2.png";
import client3 from "../../../../assets/client3.png";
function MeetOutAttorneys() {
    return (
        <div className="relative flex flex-col items-center w-full px-5 py-20 md:px-14 lg:px-28 xl:px-48 bg-light-background">
            <SectionTitle
                title="Meet Our Attorneys"
                description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
            />
            <div className="grid w-full gap-8 sm:grid-cols-3">
                <AttorneyCard name="Ashley Fletcher" role="LAYER & CEO" photo={client1} />
                <AttorneyCard name="Rodney Stratton" role="CEO" photo={client2} />
                <AttorneyCard name="Avie Beaton" role="Layer Civil Law" photo={client3} />
            </div>
        </div>
    )
}

export default MeetOutAttorneys