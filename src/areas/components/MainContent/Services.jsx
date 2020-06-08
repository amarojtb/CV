
import React from 'react';

const Services = () => {
    return (
      <section className="overview-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-3">What I do</h2>
          <div className="section-intro mb-5">
            I have more than 10 years' experience building software for clients
            all over the world. Below is a quick overview of my main technical
            skill sets and technologies I use. Want to find out more about my
            experience? Check out my{" "}
            <a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html">
              online resume
            </a>{" "}
            and{" "}
            <a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/portfolio.html">
              project portfolio
            </a>
            .
          </div>
          <div className="row">
            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <svg
                    className="svg-inline--fa fa-js-square fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="js-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                    ></path>
                  </svg>
                  <i className="fab fa-js-square"></i>
                </div>
                <h3 className="item-title">Vanilla JavaScript</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+{" "}
                  <a
                    className="theme-link"
                    rel="noopener noreferrer"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            <a
              href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/services.html"
              className="btn btn-primary"
            >
              <svg
                className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 mr-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-alt-circle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"
                ></path>
              </svg>{" "}
              <i className="fas fa-arrow-alt-circle-right mr-2"></i> &amp;
              Pricing
            </a>
          </div>
        </div>
      </section>
    );
};
export default Services;