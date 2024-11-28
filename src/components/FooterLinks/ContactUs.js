import React from "react";

const ContactUs = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us through the following channels:</p>

      <h2>Business Details</h2>
      <p><strong>Email:</strong> <a href="mailto:developer.web.magic@gmail.com">developer.web.magic@gmail.com</a></p>
      <p><strong>Phone:</strong> Not available</p>
      <p><strong>Address:</strong> Bommasandra Industrial Area, Omar Road</p>

      <h2>Follow Us on Social Media</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
