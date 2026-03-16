import { useState } from "react"
import SendIcon from "../assets/Group 1.png"

export default function ContactForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    agreed: false
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData({ ...formData, [name]: checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="contact-form">

      <h2>Get in Touch</h2>

      <form onSubmit={handleSubmit}>

        <div className="name-row">

          <input
            name="firstName"
            placeholder="First Name"
            pattern="[A-Za-z]+"
            title="Only letters allowed"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            name="lastName"
            placeholder="Last Name"
            pattern="[A-Za-z]+"
            title="Only letters allowed"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

        </div>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="subject"
          placeholder="Subject Line"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Drop Your Message..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className="terms">

          <input
            type="checkbox"
            id="terms"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            required
          />

          <label htmlFor="terms">
            I've read and agree with{" "}
            <a href="#">Terms</a> & <a href="#">Privacy Policy</a>
          </label>

        </div>

        <button type="submit">
          Send Message <img src={SendIcon} alt="Send Icon" />
        </button>

      </form>

    </div>
  )
}
