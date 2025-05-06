import React, {useRef} from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    alert("Message sent successfully!");
                    formRef.current?.reset();
                },
                (error) => {
                    console.log("Email error:", error.text);
                    alert("Failed to send message. Please try again.");
                }
            );
    };
    
    return (
        <main className={styles.contactContainer} id="contact">
            <h1>Contact Me</h1>
            <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm}>
                <input type="text" name="username" placeholder="Full Name" required />
                <input type="email" name="useremail" placeholder="Email Address" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </main>
    );
}

export default Contact;