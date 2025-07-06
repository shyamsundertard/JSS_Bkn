import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <p>Our Technical Support Team is always willing to lend a hand. Each and every customer is a valuable asset to Jan Shikshan Sansthan. We value your privacy and are here to handle all your difficulties or doubts related to sales, support, and general queries related to our products.</p>
      </div>

      <div className="contact-cards">
        <div className="contact-card contact-form-card">
          <h2>Contact Form</h2>
          <form>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mobile">Mobile *</label>
            <input type="tel" id="mobile" name="mobile" required />

            <label htmlFor="message">Your Message *</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-card map-card">
          <h2>Contact Information</h2>
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840291.7327990606!2d73.07137180962703!3d28.02250096973033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d61c628d1a55f%3A0x1d024549baf3e0d6!2sBikaner%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1634192648952!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
          <div className="contact-info">
            <p><strong>Jan Shikshan Sansthan Bikaner</strong></p>
            <p>Bikaner</p>
            <p><strong>Phone:</strong> +91 xx</p>
            <p><strong>Email:</strong> jssbikaner@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
