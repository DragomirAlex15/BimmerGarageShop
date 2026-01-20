// src/pages/Contact.jsx
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contactează-ne</h1>

      <div className="contact-info">
        <p><strong>Email:</strong> contact@bimgarage.ro</p>
        <p><strong>Telefon:</strong> +40 721 123 456</p>
        <p><strong>Adresă:</strong> Str. Take Ionescu 45, Timișoara, România</p>
      </div>

      <div className="map-container">
        <iframe
          title="BimGarage Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.262452222624!2d21.22963997648487!3d45.75386787107988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d817e0d02b5%3A0x7e586eebc6b1838!2sTimi%C8%99oara!5e0!3m2!1sen!2sro!4v1716659939173!5m2!1sen!2sro"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
