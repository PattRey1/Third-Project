import React, { useContext } from "react";
import UIkit from "uikit";

const Home = () => {
  return (
    <div>
      <div className="top-wrap uk-position-relative uk-light uk-background-secondary">
        <div className="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
          <div
            className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top"
            data-uk-parallax="y: 0,50; easing:0; opacity:0.2"
          >
            <div
              className="uk-width-1-2@s"
              data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150"
            >
              <h6 className="uk-text-primary uk-margin-small-bottom">
                RESEARCH
              </h6>
              <h1 className="uk-margin-remove-top">
                Innovation in your hands.
              </h1>
              <p className="subtitle-text uk-visible@s">
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
              <a
                href="#"
                title="Learn More"
                className="uk-button uk-button-primary uk-border-pill"
                data-uk-scrollspy-className="uk-animation-fade"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-srcset="https://picsum.photos/640/700/?image=816 640w,
				https://picsum.photos/960/700/?image=816 960w,
				https://picsum.photos/1200/900/?image=816 1200w,
				https://picsum.photos/2000/1000/?image=816 2000w"
            data-sizes="100vw"
            data-src="https://picsum.photos/1200/900/?image=816"
            alt=""
            data-uk-cover
            data-uk-img
            data-uk-parallax="opacity: 1,0.1; easing:0"
          />
        </div>
        <div className="uk-position-bottom-center uk-position-medium uk-position-z-index uk-text-center">
          <a
            href="#content"
            data-uk-scroll="duration: 500"
            data-uk-icon="icon: arrow-down; ratio: 2"
          ></a>
        </div>
      </div>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div className="uk-section uk-section-small uk-padding-remove-top">
            <ul
              className="uk-subnav uk-subnav-pill uk-flex uk-flex-center"
              data-uk-switcher="connect: .uk-switcher; animation: uk-animation-fade"
            >
              <li>
                <a className="uk-border-pill" href="#">
                  Discover
                </a>
              </li>
              <li>
                <a className="uk-border-pill" href="#">
                  Benefits
                </a>
              </li>
              <li>
                <a className="uk-border-pill" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <ul className="uk-switcher uk-margin">
            <li>
              <div
                className="uk-grid uk-child-width-1-2@l uk-flex-middle"
                data-uk-grid
                data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
              >
                <div>
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="img/marketing-1.svg"
                    alt=""
                    data-uk-img
                  />
                </div>
                <div data-uk-scrollspy-className="uk-animation-slide-right-medium">
                  <h6 className="uk-text-primary">MAIN REASONS</h6>
                  <h2 className="uk-margin-small-top">
                    Take decisions with real time data based on users
                    interaction.
                  </h2>
                  <p className="subtitle-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>Great stuff</h4>
                      <p>
                        Ut enim ad minim veniam, quis nostrud magna aliqua
                        exercitation. <a href="">Learn more.</a>
                      </p>
                    </div>
                    <div>
                      <h4>Data analysis</h4>
                      <p>
                        Ut enim ad minim veniam, quis nostrud magna aliqua
                        exercitation. <a href="">Learn more.</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div
                className="uk-grid uk-child-width-1-2@l uk-flex-middle"
                data-uk-grid
                data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
              >
                <div>
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="img/marketing-8.svg"
                    alt=""
                    data-uk-img
                  />
                </div>
                <div data-uk-scrollspy-className="uk-animation-slide-right-medium">
                  <h6 className="uk-text-primary">MAIN REASONS</h6>
                  <h2 className="uk-margin-small-top">
                    Take decisions with real time data based on users
                    interaction.
                  </h2>
                  <p className="subtitle-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>Great stuff</h4>
                      <p>
                        Ut enim ad minim veniam, quis nostrud magna aliqua
                        exercitation. <a href="">Learn more.</a>
                      </p>
                    </div>
                    <div>
                      <h4>Data analysis</h4>
                      <p>
                        Ut enim ad minim veniam, quis nostrud magna aliqua
                        exercitation. <a href="">Learn more.</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div
                className="uk-grid uk-child-width-1-2@l uk-flex-middle"
                data-uk-grid
                data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
              >
                <div>
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="img/marketing-9.svg"
                    alt=""
                    data-uk-img
                  />
                </div>
                <div
                  data-uk-scrollspy-
                  className="uk-animation-slide-right-medium"
                >
                  <h6 className="uk-text-primary">MAIN REASONS</h6>
                  <h2 className="uk-margin-small-top">
                    Take decisions with real time data based on users
                    interaction.
                  </h2>
                  <p className="subtitle-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>Great stuff</h4>
                      <p>
                        Ut enim ad minim veniam, quis nostrud magna aliqua
                        exercitation. <a href="">Learn more.</a>
                      </p>
                    </div>
                    <div>
                      <h4>Data analysis</h4>
                      <p>
                        Ut enim ad minim veniam, quis nostrud magna aliqua
                        exercitation. <a href="">Learn more.</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <section class="uk-section uk-section-default">
        <div class="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top">
          <h5 class="uk-text-primary">ANALYTICS</h5>
          <h2 class="uk-margin-remove uk-h1">
            Know the behavior of your potential customers.
          </h2>
        </div>
        <div class="uk-container">
          <div
            class="uk-grid uk-grid-large uk-child-width-1-3@m"
            data-uk-grid
            data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
          >
            <div class="uk-text-center">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="img/marketing-3.svg"
                data-uk-img
                alt="Image"
              />
              <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                24/7 support. We’re always here for you no matter what time of
                day.
              </p>
            </div>
            <div class="uk-text-center">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="img/marketing-4.svg"
                data-uk-img
                alt="Image"
              />
              <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                24/7 support. We’re always here for you no matter what time of
                day.
              </p>
            </div>
            <div class="uk-text-center">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="img/marketing-5.svg"
                data-uk-img
                alt="Image"
              />
              <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                24/7 support. We’re always here for you no matter what time of
                day.
              </p>
            </div>
            <div class="uk-text-center">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="img/marketing-5.svg"
                data-uk-img
                alt="Image"
              />
              <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                24/7 support. We’re always here for you no matter what time of
                day.
              </p>
            </div>
            <div class="uk-text-center">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="img/marketing-4.svg"
                data-uk-img
                alt="Image"
              />
              <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                24/7 support. We’re always here for you no matter what time of
                day.
              </p>
            </div>
            <div class="uk-text-center">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="img/marketing-3.svg"
                data-uk-img
                alt="Image"
              />
              <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                Lorem ipsum dolor sit amet
              </h4>
              <p>
                24/7 support. We’re always here for you no matter what time of
                day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer class="uk-section uk-section-secondary uk-padding-remove-bottom">
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
          <span class="uk-text-small uk-text-muted">
            © 2019 Marketing Layout -{" "}
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
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
