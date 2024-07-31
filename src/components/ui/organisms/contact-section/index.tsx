import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import TextArea from "../../atoms/TextArea";

import * as Yup from "yup";
import toast from "react-hot-toast";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useFormik } from "formik";
import { sendEmail } from "../../../../utils/emailService";

const EmailFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "Name must be at least 4 characters")
        .max(50, "Name must be less than 50 characters")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    department: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
});

function ContactSection() {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            department: "",
            time: "",
        },
        validationSchema: EmailFormSchema,

        onSubmit: async (values) => {
            setIsLoading(true);
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
            } else {
                toast.error("Failed to send email");
            }
            setIsLoading(false);
        },
    });

    return (
        <>
            <div className="w-full px-5 py-20 pt-24 sm:px-16 md:px-14 lg:px-28 xl:px-48 bg-contact pb-14">
                <div className="w-full lg:w-1/2">
                    <h5 className="font-bold text-h5 font-martel text-text">
                        Contact Us
                    </h5>
                    <h2 className="mb-10 font-bold text-h2 font-martel text-text">
                        Make an Appointment
                    </h2>
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="grid gap-5 mb-10 md:grid-cols-2">
                            <Input
                                placeholder="Full Name"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                error={formik.errors.name}
                            />
                            <Input
                                placeholder="example@gmail.com"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                error={formik.errors.email}
                            />
                            <Select
                                placeholder="Please Select"
                                options={["Department 1", "Department 2", "Department 3"]}
                                id="department"
                                name="department"
                                onChange={formik.handleChange}
                                error={formik.errors.department}
                            />
                            <Select
                                placeholder="4:00 Available"
                                options={["Time 1", "Time 2", "Time 3"]}
                                id="time"
                                name="time"
                                onChange={formik.handleChange}
                                error={formik.errors.time}
                            />
                            <TextArea placeholder="Message" className="md:col-span-2" />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-10 py-4 font-bold text-white transition-colors rounded-md md:w-fit bg-secondary-2 text-btn-text font-open-sans hover:bg-secondary-2/90 duration-800"
                        >
                            {isLoading ? <Icon icon="mingcute:loading-fill" className="mx-auto animate-spin" /> : "Get Quote Now"}
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col justify-between w-full px-5 py-20 pt-24 lg:flex-row md:px-14 lg:px-28 xl:px-48 sm:px-16">
                <div className="flex flex-col">
                    <h3 className="font-bold text-h3 font-martel text-text">
                        Request A Free Consultation
                    </h3>
                    <p className="text-paragraph font-open-sans text-second-text">
                        the quick fox jumps over the lazy dog
                    </p>
                </div>
                <button
                    type="submit"
                    className="px-10 py-4 mt-10 font-bold text-white transition-colors rounded-md lg:mt-0 bg-secondary-2 text-btn-text font-open-sans hover:bg-secondary-2/90 duration-800"
                >
                    Contact Us
                </button>
            </div>
        </>
    );
}

export default ContactSection;
