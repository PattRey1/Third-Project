import React from "react";
import UIkit from "uikit";

const Footer = () => {
  return (
    <div>
      <footer class="uk-section footer uk-padding-remove-bottom">
        <div class="uk-container">
          <div class="uk-grid uk-grid-large" data-uk-grid>
            <div class="uk-width-1-2@m">
              <h5>OUR COMPANY</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud cillum dolore eu fugiat nulla
                contact to:{" "}
                <a href="#" title="">
                  info@company.com
                </a>
              </p>
              <div>
                <a href="" class="uk-icon-button" data-uk-icon="twitter"></a>
                <a href="" class="uk-icon-button" data-uk-icon="facebook"></a>
                <a href="" class="uk-icon-button" data-uk-icon="instagram"></a>
              </div>
            </div>
            <div class="uk-width-1-6@m">
              <h5>PRODUCTS</h5>
              <ul class="uk-list">
                <li>Big Data</li>
                <li>Marketing</li>
                <li>Analytics</li>
                <li>AI Lab</li>
              </ul>
            </div>
            <div class="uk-width-1-6@m">
              <h5>OUR COMPANY</h5>
              <ul class="uk-list">
                <li>Team</li>
                <li>Work</li>
                <li>Culture</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div class="uk-width-1-6@m">
              <h5>OUR OFFICES</h5>
              <ul class="uk-list">
                <li>London</li>
                <li>Chicago</li>
                <li>Dubai</li>
                <li>Brussels</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="uk-text-center uk-padding uk-padding-remove-horizontal">
          <span class="uk-text-small uk-text-muted">© 2019 Patricia Rey</span>
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
