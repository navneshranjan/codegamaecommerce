// Footer.js

import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Furniture</li>
            {/* Add more categories as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>Support</li>
            <li>FAQ</li>
            <li>Shipping</li>
            {/* Add more help links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            magna nec consectetur iaculis.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
