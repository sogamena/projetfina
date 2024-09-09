import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import fb from "../../styles/icônes/uil_facebook.png";
import tel from "../../styles/icônes/icons8-tel-58 (1).png";
import mess from "../../styles/icônes/icons8-courrier-48.png";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:adnanautov@gmail.com?subject=Subject%20Here&body=Your%20message%20here";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/03212338391?text=Hello%20there!";
  };

  return (
    <div className="container">
      <footer>
        <div className="d-flex">
          <div className="col-5">
            <h4>CONTACT</h4>
            <ul className="siege-social">
              <li>
                <img className="ico" src={tel} alt="Phone Icon" />
                <button className="btn-email" onClick={handleWhatsAppClick}>
                  03 212 33 83 91
                </button>
              </li>
              <li>
                <img className="ico" src={mess} alt="Mail Icon" />
                <button className="btn-email" onClick={handleEmailClick}>
                    tezraftarofficial@gmail.com
                </button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4>MENU</h4>
            <ul
              style={{
                marginTop: "20px",
                fontWeight: "lighter",
                lineHeight: "1.5",
              }}
            >
              <li>
                <Link to="/" style={{ color: "#d9d9d9" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/vehicules" style={{ color: "#d9d9d9" }}>
                  Vehicules
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "#d9d9d9" }}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "#d9d9d9" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="d-flex"
            style={{ flexDirection: "column", alignItems: "flex-end" }}
          >
            <h4>FOLLOW US</h4>
            <div className="res-sociaux">
          
              <Link to="/">
                <img src={fb} alt="Facebook" />
              </Link>
             
            </div>
          </div>
        </div>
        <hr />
        <p className="pied" style={{ textAlign: "center" }}>
          © 2024 Copyright &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All Right to Us
        </p>
      </footer>
    </div>
  );
};

export default Footer;
