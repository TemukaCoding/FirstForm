import PhoneIcon from "../assets/TelephoneOutboundFill.png";
import GmailIcon from "../assets/Vector.png";
import AddressIcon from "../assets/Vector (1).png";
import FacebookIcon from "../assets/1 1.png";
import TwitterIcon from "../assets/2 1.png";
import LinkedinIcon from "../assets/3 163.png";
import InstagramIcon from "../assets/4 1.png";
import WhatsappIcon from "../assets/5 1.png";
import Icon from "../assets/Vector (2).png";

const infoItems = [
  { icon: PhoneIcon, alt: "Phone", text: "+995 123 456 789", url: "tel:+995123456789" },
  { icon: GmailIcon, alt: "Email", text: "contact@example.com", url: "https://mail.google.com/mail/?view=cm&to=contact@example.com" },
  { icon: AddressIcon, alt: "Address", text: "Rustaveli Ave, Tbilisi, Georgia", url: "https://www.google.com/maps/search/Rustaveli+Ave+Tbilisi+Georgia" },
]

const socialIcons = [
  { icon: FacebookIcon, alt: "Facebook", url: "https://facebook.com" },
  { icon: TwitterIcon, alt: "Twitter", url: "https://x.com" },
  { icon: LinkedinIcon, alt: "LinkedIn", url: "https://linkedin.com" },
  { icon: InstagramIcon, alt: "Instagram", url: "https://instagram.com" },
  { icon: WhatsappIcon, alt: "WhatsApp", url: "https://whatsapp.com" },
]

export default function ContactInfo() {
  return (
    <div className="contact-info">

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95743.29525650728!2d44.72364!3d41.69411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e4493f49%3A0x449cd9e66c0b4c0d!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2s!4v1699999999999"
          title="Google Maps"
        />
      </div>

      <div className="info-items">
        {infoItems.map((item, i) => (
          <a href={item.url} key={i} target="_blank" rel="noreferrer" className="info-item">
            <div className="info-icon">
              <img src={item.icon} alt={item.alt} />
            </div>
            <span>{item.text}</span>
          </a>
        ))}
      </div>

      <div className="line" />

      <div className="social-section">
        <p>Connect with us</p>
        <div className="social-icons">
          {socialIcons.map((item, i) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={i}>
              <img src={item.icon} alt={item.alt} />
            </a>
          ))}
          <img src={Icon} className="icon" />
        </div>
        
      </div>

      

    </div>
  )
}