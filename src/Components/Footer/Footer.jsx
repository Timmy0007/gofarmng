import React from "react";
import app from "../images/appstore.svg";
import google from "../images/googleplay.svg";
import facebook from "../images/facebook.svg";
import insta from "../images/insta.svg";
import twitt from "../images/twitter.svg";
import face from "../images/face.svg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-ul1">
            <ul className="footer-ul">
              <li className="footer-contact">
                <h5>Contact</h5>
              </li>
              <li className="footer-list">Help /FAQ</li>
              <li className="footer-list">Press</li>
              <li className="footer-list">Affiliates</li>
              <li className="footer-list">About Us</li>
            </ul>
          </div>

          <div>
            <ul className="footer-ul">
              <li className="footer-legal">
                <h5>Legal</h5>
              </li>
              <li className="footer-list">Terms & Condition</li>
              <li className="footer-list">Privacy Policy</li>
              <li className="footer-list">Cookies Policy</li>
            </ul>
          </div>

          <div className="footer-3">
            <ul className="footer-ul">
              <li className="footer-quest">
                <h5>Got Questions</h5>
              </li>
              <li className="footer-list">Call: 081000000000</li>
              <li className="footer-list">Email:pmgrazac@gmail.com</li>
            </ul>
          </div>
          <div className="footer-image">
            <div className="footer-img">
              <img src={app} alt="appstore" />
              <img src={google} alt="googleplay" />
            </div>
            <div>
              <p className="footer-p">Download and contect with us</p>
            </div>
            <div className="footer-img">
              <img src={facebook} alt="Facebook" />
              <img src={insta} alt="Instagram" />
              <img src={twitt} alt="Twitter" />
              <img src={face} alt="Facebook" />
            </div>
          </div>
        </div>

        <div>
          <hr />
          <span>
            <b className="farm">GOFARMNG</b>
            <b className="copy">@Copyright2022. All Right Reserved</b>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
