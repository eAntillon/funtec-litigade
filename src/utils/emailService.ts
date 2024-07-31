import emailjs from "@emailjs/browser";

export type EmailData = {
  to_email: string;
  client_name: string;
  date: string;
  time: string;
  department: string;
};
export const sendEmail = async (data: EmailData) => {
  return emailjs.send(
    import.meta.env.VITE_MAIL_SERVICE_ID,
    import.meta.env.VITE_MAIL_TEMPLATE_ID,
    data,
    {
      publicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY,
    }
  );
};
