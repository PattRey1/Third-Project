import React from "react";
import UIkit from "uikit";

const Blog = () => {
  return (
    <div>
      <div className="uk-container">
        <nav className="nav-scroll">
          <ul className="uk-subnav uk-flex uk-flex-between uk-flex-nowrap">
            <li className="uk-active">
              <a href="#">World</a>
            </li>
            <li>
              <a href="#">Politics</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Trends</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">Science</a>
            </li>
            <li>
              <a href="#">Opinion</a>
            </li>
            <li>
              <a href="#">Culture</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-height-large uk-cover-container uk-border-rounded">
            <img
              src="https://picsum.photos/1300/500/?random"
              alt="Alt img"
              data-uk-cover
            />
            <div className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
              <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
                <span>FEATURED ARTICLE</span>
                <h1 className="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent">
                  This is a featured blog post
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore
                  magna aliqua.
                </p>
                <a
                  href="#"
                  className="uk-button uk-button-default uk-margin-top"
                >
                  GO TO ARTICLE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div
            className="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match margin js-filter"
            data-uk-grid="masonry: true"
            data-uk-sortable="handle: .drag-icon"
            data-ukgrid
          >
            <div className="uk-width-1">
              <h4 className="uk-heading-line uk-text-bold">
                <span>Latest News</span>
              </h4>

              <article class="uk-section uk-section-small uk-padding-remove-top uk-width-1-3">
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
      <section className="uk-section uk-section-small uk-section-default uk-padding-remove-bottom">
        <div className="uk-container uk-container-expand uk-margin-large-bottom">
          <ul className="uk-subnav uk-subnav-pill">
            <li className="uk-active" data-uk-filter-control>
              <a href="#">Show All</a>
            </li>
            <li data-uk-filter-control=".nature-card">
              <a href="#">Nature</a>
            </li>
            <li data-uk-filter-control=".music-card">
              <a href="#">Music</a>
            </li>
            <li data-uk-filter-control=".photo-card">
              <a href="#">Photography</a>
            </li>
            <li data-uk-filter-control=".design-card">
              <a href="#">Design</a>
            </li>
          </ul>
          <div
            className="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter"
            data-uk-grid="masonry: true"
            data-uk-sortable="handle: .drag-icon"
          >
            <div
              className="nature-card"
              data-tags="a beautiful landscape - nature outdoor"
            >
              <div className="uk-card uk-card-small uk-card-default">
                <div className="uk-card-header">
                  <div
                    className="uk-grid uk-grid-small uk-text-small"
                    data-uk-grid
                  >
                    <div className="uk-width-expand">
                      <span className="cat-txt">Nature / Outdoor</span>
                    </div>
                    <div className="uk-width-auto uk-text-right uk-text-muted">
                      <span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
                    </div>
                  </div>
                </div>
                <div className="uk-card-media">
                  <div
                    className="uk-inline-clip uk-transition-toggle"
                    tabindex="0"
                  >
                    <img
                      className="lazy"
                      data-src="https://picsum.photos/400/300/?random=5"
                      data-width="400"
                      data-height="300"
                      data-uk-img
                      alt=""
                      src="img/transp.gif"
                    />
                    <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                      <span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345{" "}
                      <span data-uk-icon="icon:comment; ratio: 0.8"></span>{" "}
                      12.345
                    </div>
                  </div>
                </div>
                <div className="uk-card-body">
                  <h6 className="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">
                    A BEAUTIFUL LANDSCAPE HERE
                  </h6>
                  <p className="uk-text-small uk-text-muted">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </p>
                </div>
                <div className="uk-card-footer">
                  <div
                    className="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle"
                    data-uk-grid
                  >
                    <div className="uk-width-expand uk-text-small">
                      John Doe
                    </div>
                    <div className="uk-width-auto uk-text-right">
                      <a
                        href="#"
                        data-uk-tooltip="title: Twitter"
                        className="uk-icon-link"
                        data-uk-icon="icon:twitter; ratio: 0.8"
                      ></a>
                      <a
                        href="#"
                        data-uk-tooltip="title: Instagram"
                        className="uk-icon-link"
                        data-uk-icon="icon:instagram; ratio: 0.8"
                      ></a>
                      <a
                        href="#"
                        data-uk-tooltip="title: Behance"
                        className="uk-icon-link"
                        data-uk-icon="icon:behance; ratio: 0.8"
                      ></a>
                      <a
                        href="#"
                        data-uk-tooltip="title: Pinterest"
                        className="uk-icon-link"
                        data-uk-icon="icon:pinterest; ratio: 0.8"
                      ></a>
                    </div>
                    <div className="uk-width-auto uk-text-right">
                      <a
                        data-uk-tooltip="title: Drag this card"
                        href="#"
                        className="uk-icon-link drag-icon"
                        data-uk-icon="icon:move; ratio: 1"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="uk-section uk-section-small uk-section-muted">
        <div class="uk-container">
          <p class="uk-text-small uk-text-center">
            Copyright 2019 -{" "}
            <a href="https://github.com/zzseba78/Kick-Off">
              Created by KickOff
            </a>{" "}
            | Built with{" "}
            <a
              href="http://getuikit.com"
              title="Visit UIkit 3 site"
              target="_blank"
              data-uk-tooltip
            >
              <span data-uk-icon="uikit"></span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
