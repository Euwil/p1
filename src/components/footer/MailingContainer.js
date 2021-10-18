import React from "react";
import sendIcon from "../../assets/svg/iconsend.svg";
import Button from "../common/Button";

const MailingContainer = () => {
  return (
    <div>
      <h3 className="footer-title">Подписаться на рассылку</h3>
      <form class="footer-form">
        <input
          type="email"
          placeholder="E-mail"
          class="footer-email-input"
          required
        />
        <Button type="submit" className="email-submit">
          Подписаться
          <img src={sendIcon} className="button-icon" />
        </Button>
      </form>
    </div>
  );
};

export default MailingContainer;
