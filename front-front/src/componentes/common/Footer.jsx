import React from "react";
import UIkit from "uikit";

const Footer = () => {
  return (
    <div>
      <footer class="uk-section footer uk-padding-remove-bottom">
        <div class="uk-container">
          <div class="uk-grid uk-grid-large" data-uk-grid>
            <div class="uk-width-1-2@m">
              <h5>¡Oh rgasmo!</h5>
              <p>
                App de educación sexual que te orienta, te educa y te enseña
                TODO lo que tienes que saber sobre sexo y sexualidad en general.
              </p>
            </div>
            <div class="uk-width-1-6@m">
              <div>
                <a href="" class="uk-icon-button" data-uk-icon="twitter"></a>
                <a href="" class="uk-icon-button" data-uk-icon="facebook"></a>
                <a href="" class="uk-icon-button" data-uk-icon="instagram"></a>
              </div>
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
