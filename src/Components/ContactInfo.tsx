import PhoneIcon from "../assets/TelephoneOutboundFill.png";
import GmailIcon from "../assets/Vector.png";
import AdressIcon from "../assets/Vector.png";
import FacebookIcon from "../assets/1 1.png";
import TwitterIcon from "../assets/2 1.png";
import LinkedinIcon from "../assets/3 163.png";
import InstagramIcon from "../assets/4 1.png";
import WhatsappIcon from "../assets/5 1.png";

export default function ContactInfo() {
      return (   
            <div className="contact-info">
                  <div className="map">

                  </div>

                  <div className="Info">
                        <img src={PhoneIcon} alt="Phone Icon" />
                        <a href="#">+880 123 456 7890</a>

                        <img src={GmailIcon} alt="Gmail Icon" />
                        <a href="#">example@email.com</a>

                        <img src={AdressIcon} alt="Address Icon" />
                        <a href="#">123 Main Street, City, Country</a>
                  </div>

                  <div className="line"></div>

                  <div className="Social">
                        <p>
                              Connect with us
                        </p>

                        <img src={FacebookIcon} alt="Facebook Icon" />
                        <img src={TwitterIcon} alt="Twitter Icon" />
                        <img src={LinkedinIcon} alt="LinkedIn Icon" />
                        <img src={InstagramIcon} alt="Instagram Icon" />
                        <img src={WhatsappIcon} alt="WhatsApp Icon" />

                  </div>
            </div>
       )
}