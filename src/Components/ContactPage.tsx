import ContactForm from "./ContactForm";
import "../App.css"
import ContactInfo from "./ContactInfo";

export default function ContactPage() {
  return (
      <div className="contact-container">
            <ContactForm />
            <ContactInfo/>
      </div>
  );
}