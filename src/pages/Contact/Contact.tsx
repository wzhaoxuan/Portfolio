import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
    return (
        <main className={styles.contactContainer} id="contact">
            <h1>Contact Me</h1>
            <form className={styles.contactForm}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </main>
    );
}

export default Contact;