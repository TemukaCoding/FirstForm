import { FaPaperPlane } from "react-icons/fa"

export default function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>

      <div className="name-row">
         <input placeholder="First Name"/>
         <input placeholder="Last Name"/>
      </div>


      <input placeholder="Email Addres"/>

      <input placeholder="Subject Line"/>

      <textarea placeholder="Drop Your Message..."/>

      <div className="terms">
            <input type="checkbox" id="terms"/>

            <label htmlFor="terms">
            I've read and agree with
            <a href="#">Terms</a> & <a href="#">Privacy Policy</a>
            </label>
      </div>

      <button>Send Message <FaPaperPlane/>

      </button>


    </div>
  )
}