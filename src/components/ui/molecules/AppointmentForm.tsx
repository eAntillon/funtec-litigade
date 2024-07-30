import Input from "../atoms/Input"
import Select from "../atoms/Select"

function AppointmentForm() {
    return (
        <div className="px-10 py-10 rounded-lg bg-light-background">
            <h3 className="px-2 mb-8 font-bold text-h3 font-martel">
                Book Appointment
            </h3>
            <form action="" className="flex flex-col gap-3">
                <Input title="Name" placeholder="Full Name" />
                <Input title="Email" placeholder="example@gmail.com" />
                <Select title="Department" placeholder="Please Select" options={[
                    "Department 1",
                    "Department 2",
                    "Department 3",
                ]} />
                <Select title="Time" placeholder="4:00 Available" options={[
                    "Time 1",
                    "Time 2",
                    "Time 3",
                ]} />
                <button className="w-full py-4 font-bold transition-colors ease-out rounded-md duration-50 bg-secondary-4 px-14 text-btn-text text-light-text font-open-sans hover:bg-secondary-4/90">
                    Book Appointment
                </button>
            </form>
        </div>
    )
}

export default AppointmentForm