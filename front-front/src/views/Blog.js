import React from "react";
import UIkit from "uikit";

const Blog = () => {
  return (
    <div>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-height-large uk-cover-container uk-border-rounded">
            <img
              src="https://www.talktabu.com/wp-content/uploads/2018/04/checkup.png"
              alt="Alt img"
              data-uk-cover
            />
            <div className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
              <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
                <span>Artículo Principal</span>
                <h1 className="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent">
                  ¿Cada cuándo debo ir al doctor?
                </h1>

                <a
                  href="#"
                  className="uk-button uk-button-default uk-margin-top"
                >
                  Ver artículo completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div
            className="uk-grid uk-child-width-expand@s uk-grid-match margin js-filter uk-child-width-1-2@s uk-child-width-1-3@m card-art"
            data-uk-grid="masonry: true"
            data-ukgrid
          >
            <div className="uk-width-1">
              <h4 className="uk-heading-line uk-text-bold">
                <span>Latest News</span>
              </h4>

              <article class=" uk-width-1-3 uk-margin-medium-right uk-card uk-card-default	uk-padding-small custom-art-card">
                <header>
                  <h2 class="uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom">
                    <a
                      title="Fusce facilisis tempus magna ac dignissim."
                      class="uk-link-reset"
                      href="#"
                    >
                      Fusce facilisis tempus magna ac dignissim.
                    </a>
                  </h2>
                  <p class="uk-article-meta">
                    Written on March 23, 2019. Posted in <a href="#">Blog</a> |{" "}
                    <span data-uk-icon="icon: future"></span> Takes 7 min
                    reading.
                  </p>
                </header>
                <figure>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAYAAAA7Ldc6AAADuUlEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA3p/4AAaxRls8AAAAASUVORK5CYII="
                    data-src="https://picsum.photos/800/300/?random=1"
                    width="800"
                    height="300"
                    alt="Alt text"
                    className="lazy"
                    data-uk-img
                  />
                </figure>
                <p>
                  UPDATE 24th October 15.10 BST — Vivamus sed consequat urna.
                  Fusce vitae urna sed ante placerat iaculis. Suspendisse
                  potenti. Pellentesque quis fringilla libero. In hac habitasse
                  platea dictumst.
                </p>
                <p>
                  Ultricies eget, tempor sit amet, ante. Donec eu libero sit
                  amet quam egestas semper. Aenean ultricies mi vitae est.
                  Mauris placerat eleifend leo.
                </p>
                <a
                  href="#"
                  title="Read More"
                  className="uk-button uk-button-default uk-button-small"
                >
                  READ MORE
                </a>
              </article>
              <article class="uk-width-1-3 uk-margin-medium-right uk-card uk-card-default uk-padding-small custom-art-card	">
                <header>
                  <h2 class="uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom">
                    <a
                      title="Fusce facilisis tempus magna ac dignissim."
                      class="uk-link-reset"
                      href="#"
                    >
                      Fusce facilisis tempus magna ac dignissim.
                    </a>
                  </h2>
                  <p class="uk-article-meta">
                    Written on March 23, 2019. Posted in <a href="#">Blog</a> |{" "}
                    <span data-uk-icon="icon: future"></span> Takes 7 min
                    reading.
                  </p>
                </header>
                <figure>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAYAAAA7Ldc6AAADuUlEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA3p/4AAaxRls8AAAAASUVORK5CYII="
                    data-src="https://picsum.photos/800/300/?random=1"
                    width="800"
                    height="300"
                    alt="Alt text"
                    className="lazy"
                    data-uk-img
                  />
                </figure>
                <p>
                  UPDATE 24th October 15.10 BST — Vivamus sed consequat urna.
                  Fusce vitae urna sed ante placerat iaculis. Suspendisse
                  potenti. Pellentesque quis fringilla libero. In hac habitasse
                  platea dictumst.
                </p>
                <p>
                  Ultricies eget, tempor sit amet, ante. Donec eu libero sit
                  amet quam egestas semper. Aenean ultricies mi vitae est.
                  Mauris placerat eleifend leo.
                </p>
                <a
                  href="#"
                  title="Read More"
                  className="uk-button uk-button-default uk-button-small"
                >
                  READ MORE
                </a>
              </article>
              <article class="uk-width-1-3 uk-card uk-card-default uk-padding-small	custom-art-card">
                <header>
                  <h2 class="uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom">
                    <a
                      title="Fusce facilisis tempus magna ac dignissim."
                      class="uk-link-reset"
                      href="#"
                    >
                      Fusce facilisis tempus magna ac dignissim.
                    </a>
                  </h2>
                  <p class="uk-article-meta">
                    Written on March 23, 2019. Posted in <a href="#">Blog</a> |{" "}
                    <span data-uk-icon="icon: future"></span> Takes 7 min
                    reading.
                  </p>
                </header>
                <figure>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAYAAAA7Ldc6AAADuUlEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA3p/4AAaxRls8AAAAASUVORK5CYII="
                    data-src="https://picsum.photos/800/300/?random=1"
                    width="800"
                    height="300"
                    alt="Alt text"
                    className="lazy"
                    data-uk-img
                  />
                </figure>
                <p>
                  UPDATE 24th October 15.10 BST — Vivamus sed consequat urna.
                  Fusce vitae urna sed ante placerat iaculis. Suspendisse
                  potenti. Pellentesque quis fringilla libero. In hac habitasse
                  platea dictumst.
                </p>
                <p>
                  Ultricies eget, tempor sit amet, ante. Donec eu libero sit
                  amet quam egestas semper. Aenean ultricies mi vitae est.
                  Mauris placerat eleifend leo.
                </p>
                <a
                  href="#"
                  title="Read More"
                  className="uk-button uk-button-default uk-button-small"
                >
                  READ MORE
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
