import React from "react";
import "./SubscribeNewsLetter.css";
import icon from "../../assets/newsletter.png";

function SubscribeNewsLetter() {
  const subscribeNewsEvent = (e) => {
    e.preventDefault();
  };
  const emailValidityChecker = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  };
  return (
    <div className="subscribe-container">
      <div className="subscribe-article">
        <h3 className="subscribe-header">Subscribe to our newsletter</h3>
        <p className="subscribe-paragraph">
          Subscribe to our newsletter to recieve exclusive updates and news from
          us.
        </p>
        <div className="input-button">
          <input
            className="subscribe-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
            onChange={emailValidityChecker}
          />

          <button className="subscribe-button" onClick={subscribeNewsEvent}>
            Subscribe
          </button>
        </div>
      </div>
      <div className="subscribe-icon">
        <img src={icon} alt="" />
      </div>
    </div>
  );
}
export default SubscribeNewsLetter;
