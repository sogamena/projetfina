import React from 'react';
import './ContactCard.css';
import tel from "../../styles/icônes/icons8-tel-58 (1).png";
import mess from "../../styles/icônes/icons8-courrier-48.png";

const ContactCard = () => {
    const handleEmailClick = () => {
        window.location.href =
          "mailto:tezraftarofficial@gmail.com?subject=Subject%20Here&body=Your%20message%20here";
      };
    
      const handleWhatsAppClick = () => {
        window.location.href = "https://wa.me/03212338391?text=Hello%20there!";
      };
  return (
    <div className="contact-card">
      <h2>Contact us</h2>
      <div className="contact-method">
      <ul className="siege-social siege-social-c">
              <li>
                <img className="ico" src={tel} alt="Phone Icon" />
                <button className="btn-email" onClick={handleWhatsAppClick}>
                  03 212 33 83 91
                </button>
              </li>
              <li>
                <img className="ico" src={mess} alt="Mail Icon" />
                <button className="btn-email" onClick={handleEmailClick}>
                    tezraftarofficial@gmail.com@gmail.com
                </button>
              </li>
            </ul>
      </div>
    </div>
  );
};

export default ContactCard;
