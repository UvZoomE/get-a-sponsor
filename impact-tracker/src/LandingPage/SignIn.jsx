import React from "react";
import {
  RuxClock,
  RuxContainer,
  RuxIcon,
  RuxMenuItem,
  RuxStatus,
  RuxMonitoringIcon,
  RuxIconImage,
} from "@astrouxds/react";
import "../css/SignIn.css";

const SignIn = () => {
  return (
    <RuxContainer className="container">
      <div slot="header" className="header-container">
        <h3 className="first-header-item">LOGO</h3>
        <RuxClock timezone="Z"></RuxClock>
        <RuxMonitoringIcon status="normal"></RuxMonitoringIcon>
      </div>
      <div className="body-container">
        <form className="rux-form">
          <h2 className="body-sign-in">SIGN IN</h2>
          <h6>Measure your success in the Space Force!</h6>
          <div className="sign-in-inputs">
            <rux-input
              id="email"
              placeholder="Email@astro.com"
              label="Email"
              type="email"
              ruxblur="{handleValidation()}"
            ></rux-input>
            <rux-input id="pw" label="Password" type="password"></rux-input>
          </div>
          <div className="sign-in-helper-functions">
            <rux-checkbox class="checkbox">Remember me</rux-checkbox>
            <p className="forgot-password">Forgot Password?</p>
          </div>
          <div className="sign-in-container">
            <rux-button className="sign-in-btn" type="submit">
              Sign in
            </rux-button>
          </div>
        </form>
      </div>
      <div slot="footer" className="footer">
        <p>hi</p>
      </div>
    </RuxContainer>
  );
};

export default SignIn;
