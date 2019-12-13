import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import UIkit from "uikit";

const Home = () => {
  return (
    <div>
      <div className="uk-position-relative uk-light ">
        <div className="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
          <div
            className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top"
            data-uk-parallax="y: 0,50; easing:0; opacity:0.2"
          >
            <div
              className="uk-width-1-2@s main-info"
              data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150"
            >
              <h1 className="uk-margin-remove-top">
                La Educación Sexual (REAL) que Mereces
              </h1>
              <p className="subtitle-text uk-visible@s">
                Nosotros proveemos para ti un espacio seguro donde puedes,
                preguntar, leer, comprar, reaccionar y tomar el control no solo
                de tu salud si no de tu placer.
              </p>
              <a
                href="#"
                title="Learn More"
                className="uk-button main-btn uk-button-primary uk-border-pill"
                data-uk-scrollspy-className="uk-animation-fade"
              >
                ¡Entrar!
              </a>
            </div>
          </div>

          <img
            src=""
            data-srcset="https://www.talktabu.com/wp-content/uploads/2019/11/home_bedroom.png"
            data-sizes="100vw"
            alt=""
            data-uk-cover
            data-uk-img
            data-uk-parallax="opacity: 1,0.1; easing:0"
          />
        </div>
      </div>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h2 className="uk-heading-line uk-text-center	">Próximos Eventos</h2>
          <div className="uk-section uk-section-small uk-padding-remove-top pills-home">
            <ul
              className="uk-subnav uk-subnav-pill uk-flex uk-flex-center uk-text-center	"
              data-uk-switcher="connect: .uk-switcher; animation: uk-animation-fade"
            >
              <li>
                <a className="uk-border-pill" href="#">
                  Taller de <br /> Masturbación
                </a>
              </li>
              <li>
                <a className="uk-border-pill" href="#">
                  Autonomía <br /> Sexual
                </a>
              </li>
              <li>
                <a className="uk-border-pill" href="#">
                  Mi primera vez... <br /> Con Copa Menstrual
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
                    src=""
                    data-srcSet="https://www.talktabu.com/wp-content/uploads/2018/02/malehealth.png"
                    alt=""
                    data-uk-img
                  />
                </div>
                <div data-uk-scrollspy-className="uk-animation-slide-right-medium">
                  <h6 className="principal-text">Placer</h6>
                  <h2 className="uk-margin-small-top">
                    Aprende ¿qué, dónde, cómo?
                  </h2>
                  <p className="subtitle-text">
                    Aprenderas, técnicas principales y anatomía. Estrategias
                    para construir tu propio orgasmo.
                  </p>
                  <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>
                        <span data-uk-icon="icon: happy"></span> Expositora
                      </h4>
                      <p>Alicia Delicia</p>
                    </div>
                    <div>
                      <h4>
                        <span data-uk-icon="icon: calendar"></span> Fecha
                      </h4>

                      <p>02/01/2020</p>
                    </div>
                    <div>
                      <a className="uk-button custom-btn" href="">
                        Reservar lugar
                      </a>
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
                    data-srcSet="https://www.talktabu.com/wp-content/uploads/2019/12/community.png"
                    alt=""
                    data-uk-img
                  />
                </div>
                <div data-uk-scrollspy-className="uk-animation-slide-right-medium">
                  <h6 className="principal-text">Edúcate</h6>
                  <h2 className="uk-margin-small-top">Autonomía sexual</h2>
                  <p className="subtitle-text">
                    Conoce tu cuerpo y todos los derechos que le envuelven.
                  </p>
                  <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>
                        <span data-uk-icon="icon: happy"></span> Expositora
                      </h4>
                      <p>Dra. Fabiola Trejo</p>
                    </div>
                    <div>
                      <h4>
                        <span data-uk-icon="icon: calendar"></span> Fecha
                      </h4>
                      <p>05/02/2020</p>
                    </div>
                    <div>
                      <a className="uk-button custom-btn" href="">
                        Reservar lugar
                      </a>
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
                    data-srcSet="https://www.talktabu.com/wp-content/uploads/2018/01/menstrualcups.png"
                    alt=""
                    data-uk-img
                  />
                </div>
                <div
                  data-uk-scrollspy-
                  className="uk-animation-slide-right-medium"
                >
                  <h6 className="principal-text">Edúcate</h6>
                  <h2 className="uk-margin-small-top">
                    La copita que nadie me dijo antes que existía.
                  </h2>
                  <p className="subtitle-text">
                    Todo lo que tienes que saber sobre la copa mestrual, es un
                    buen momento de resolver cualquier tipo de duda.
                  </p>
                  <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>
                        <span data-uk-icon="icon: happy"></span> Expositora
                      </h4>
                      <p>Dra. Claudette Rivero</p>
                    </div>
                    <div>
                      <h4>
                        <span data-uk-icon="icon: calendar"></span> Fecha
                      </h4>
                      <p>13/01/2020</p>
                    </div>
                    <div>
                      <a className="uk-button custom-btn" href="">
                        Reservar lugar
                      </a>
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
          <h5 class="principal-text">Blog</h5>
          <h2 class="uk-margin-remove uk-h1">Dime algo que no sepa...</h2>
        </div>
        <div class="uk-container">
          <div
            class="uk-grid uk-grid-large uk-child-width-1-3@m"
            data-uk-grid
            data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
          >
            {/* <div class="uk-text-center">
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
            </div> */}
            {[0, 1, 2].map((item, i) => (
              <NavLink>
                <div key={i} class="uk-text-center">
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
                    24/7 support. We’re always here for you no matter what time
                    of day.
                  </p>
                </div>
              </NavLink>
            ))}
            {/* <div class="uk-text-center">
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
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
