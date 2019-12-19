import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="uk-section footer uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid uk-grid-large" data-uk-grid>
            <div className="uk-width-1-2@m">
              <h5>¡Oh rgasmo!</h5>
              <p>
                App de educación sexual que te orienta, te educa y te enseña
                TODO lo que tienes que saber sobre sexo y sexualidad en general.
              </p>
            </div>
            <div class="uk-width-1-6@m">
              <div>
                <a
                  href=""
                  className="uk-icon-button"
                  data-uk-icon="twitter"
                ></a>
                <a
                  href=""
                  className="uk-icon-button"
                  data-uk-icon="facebook"
                ></a>
                <a
                  href=""
                  className="uk-icon-button"
                  data-uk-icon="instagram"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
          <span className="uk-text-small uk-text-muted">
            © 2019 Patricia Rey
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
