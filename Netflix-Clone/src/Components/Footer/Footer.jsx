import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-outer-container">
      <div className="Footer-inner-container">
        <div className="Footer-icons">
          <li><FacebookRoundedIcon /></li>
          <li><InstagramIcon /></li>
          <li><YouTubeIcon /></li>
        </div>
        <div className="Footer-data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Helpe Center</li>
              <li>Job</li>
              <li>Cockie Performance</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Coporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="Service-data">
          <p>Service Code</p>
        </div>
        <div className="Copy-write">
          &copy; 1997,2024 Netflix. inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
