import React from "react";
import UIkit from "uikit";

const Article = () => {
  return (
    <div>
      <div className="uk-container">
        <section className="uk-section uk-section-small">
          <div className="uk-container">
            <h1 className="uk-heading-divider">¿Cuándo debo ir al doctor?</h1>
            <div className="uk-flex uk-margin-bottom ">
              <span class="uk-label">Default</span>

              <span class="uk-label uk-label-success">Success</span>

              <span class="uk-label uk-label-warning">Warning</span>

              <span class="uk-label uk-label-danger">Danger</span>
            </div>
            <div>
              <img
                className="img-art"
                data-srcSet="https://www.talktabu.com/wp-content/uploads/2018/04/checkup.png"
                alt=""
                data-uk-img
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Article;
