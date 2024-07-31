import { useFormik } from "formik";
import Input from "../atoms/Input";
import Select from "../atoms/Select";

import * as Yup from "yup";
import { cn } from "../../../utils/cn";
import { sendEmail } from "../../../utils/emailService";
import toast from "react-hot-toast";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const EmailFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "Name must be at least 4 characters")
        .max(50, "Name must be less than 50 characters")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    department: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
});

function AppointmentForm() {

    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            department: "",
            time: "",
        },
        validationSchema: EmailFormSchema,

        onSubmit: async (values) => {
            setIsLoading(true)
            const res = await sendEmail({
                client_name: values.name,
                to_email: values.email,
                date: new Date().toISOString().split("T")[0],
                time: values.time,
                department: values.department,
            });
            if (res.status === 200) {
                formik.resetForm();
                toast.success("Email sent successfully");
            }
            else {
                toast.error("Failed to send email");
            }
            setIsLoading(false)
        },
    });

    return (
        <div className="px-10 py-10 rounded-lg bg-light-background">
            <h3 className="px-2 mb-8 font-bold text-h3 font-martel">
                Book Appointment
            </h3>
            <form onSubmit={formik.handleSubmit} className={cn({
                "flex flex-col": true,
                "gap-1": !formik.isValid,
                "gap-3": formik.isValid
            })}>
                <Input
                    title="Name"
                    placeholder="Full Name"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                />
                <Input
                    title="Email"
                    placeholder="example@gmail.com"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}
                />
                <Select
                    title="Department"
                    placeholder="Please Select"
                    options={["Department 1", "Department 2", "Department 3"]}
                    id="department"
                    name="department"
                    onChange={formik.handleChange}
                    error={formik.errors.department}
                />
                <Select
                    title="Time"
                    placeholder="4:00 Available"
                    options={["Time 1", "Time 2", "Time 3"]}
                    id="time"
                    name="time"
                    onChange={formik.handleChange}
                    error={formik.errors.time}

                />
                <button className="w-full py-4 mt-1 font-bold transition-colors ease-out rounded-md duration-50 bg-secondary-4 px-14 text-btn-text text-light-text font-open-sans hover:bg-secondary-4/90" type="submit" disabled={isLoading}>
                    {isLoading ? <Icon icon="mingcute:loading-fill" className="mx-auto animate-spin"/> : "Book Appointment"}
                </button>
            </form>
        </div>
    );
}

export default AppointmentForm;
