import Input from "../../atoms/Input"
import Select from "../../atoms/Select"
import TextArea from "../../atoms/TextArea"

function ContactSection() {
    return (
        <>
            <div className="w-full px-48 pt-24 bg-contact pb-14">
                <div className="w-full md:w-1/2">

                    <h5 className="font-bold text-h5 font-martel text-text">Contact Us</h5>
                    <h2 className="mb-10 font-bold text-h2 font-martel text-text">Make an Appointment</h2>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className="grid grid-cols-2 gap-5 mb-10">
                            <Input placeholder="Full Name" />
                            <Input placeholder="example@gmail.com" />
                            <Select placeholder="Please Select" options={[
                                "Department 1",
                                "Department 2",
                                "Department 3",
                            ]} />
                            <Select placeholder="4:00 Available" options={[
                                "Time 1",
                                "Time 2",
                                "Time 3",
                            ]} />
                            <TextArea placeholder="Message" className="col-span-2" />
                        </div>
                        <button type="submit" className="px-10 py-4 font-bold text-white transition-colors rounded-md bg-secondary-2 text-btn-text font-open-sans hover:bg-secondary-2/90 duration-800">
                            Get Quote Now
                        </button>
                    </form>
                </div>

            </div>
            <div className="flex justify-between w-full px-48 py-10">
                <div className="flex flex-col">
                    <h3 className="font-bold text-h3 font-martel text-text">Request A Free Consultation</h3>
                    <p className="text-paragraph font-open-sans text-second-text">the quick fox jumps over the lazy dog</p>
                </div>
                <button type="submit" className="px-10 py-4 font-bold text-white transition-colors rounded-md bg-secondary-2 text-btn-text font-open-sans hover:bg-secondary-2/90 duration-800">
                    Contact Us
                </button>
            </div>
        </>

    )
}

export default ContactSection