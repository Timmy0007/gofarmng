import React from "react";
import app from "./../../assets/appstore.svg";
import google from "../../assets/googleplay.svg";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import twitt from "../../assets/twitter.svg";
import face from "../../assets/face.svg";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-ul1">
            <ul className="footer-ul">
              <li className="footer-contact">
                <h5 className="fc">Contact</h5>
              </li>
              <li className="footer-list">Help /FAQ</li>
              <li className="footer-list">Press</li>
              <li className="footer-list">Affiliates</li>
              <li className="footer-list">About Us</li>
            </ul>
          </div>

          <div>
            <ul id="footer-2" className="footer-ul">
              <li className="footer-legal">
                <h5 className="fl">Legal</h5>
              </li>
              <li className="footer-list">Terms & Condition</li>
              <li className="footer-list">Privacy Policy</li>
              <li className="footer-list">Cookies Policy</li>
            </ul>
          </div>

          <div className="footer-3">
            <ul className="footer-ul">
              <li className="footer-quest">
                <h5 className="gq">Got Questions</h5>
              </li >
              <li className="footer-list">Call: 081000000000</li>
              <li id="f-mail" className="footer-list">Email:pmgrazac@gmail.com</li>
            </ul>
          </div>
          <div className="footer-image">
            <div id="f-img" className="footer-img">
              <img id="app-img" src={app} alt="appstore" />
              <img id="gog-img" src={google} alt="googleplay" />
            </div>
            <div>
              <p className="footer-p">Download and contect with us</p>
            </div>
            <div id="finf" className="footer-img">
              <img className="sm-imgs" src={facebook} alt="Facebook" />
              <img className="sm-imgs" src={insta} alt="Instagram" />
              <img className="sm-imgs" src={twitt} alt="Twitter" />
              <img className="sm-imgs" src={face} alt="Facebook" />
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
