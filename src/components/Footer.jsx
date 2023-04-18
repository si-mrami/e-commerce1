import React from "react";
import "./Style/Styling.scss";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";

const Footer = () => {

  

  return (
    <>
      <div className="Footer">
        <div className="Footer-Content">
          <div className="Footer_Left">
            <h1>Contact Us</h1>
            <div className="right-content">
              <input placeholder="Your Name?" type="text" className="input" />
              <input placeholder="Your Email?" type="email" className="input" />
              <input
                placeholder="Your Message?"
                type="text"
                className="inputMessge"
              />
            </div>
          </div>

          <div className="Footer_Right">
            <h1>Abouts</h1>
            <div className="right-content">
              <p>
                We Are Company Specialized In Selling Clothes For Men And Women,
                Luxury And High Quality Clothes.
              </p>
            </div>
            <div className="Footer_Center">
              <h1>Contacts Us With </h1>
              <div className="center-content">
                <Facebook className="Icons-Items" />
                <Instagram className="Icons-In" />
                <Twitter className="Icons-Tw" />
                <LinkedIn className="Icons-Items" />
                <WhatsApp className="Icons-Wh" />
              </div>
            </div>
          </div>
        </div>
          <div className="copyright">&copy;By Mrami</div>
      </div>
    </>
  );
};

export default Footer;
