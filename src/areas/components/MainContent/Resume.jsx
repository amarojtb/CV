import React from 'react';
import profileImg from '../../../images/profile-lg.jpg';

const Resume = () => {
    return (
      <section className="about-me-section p-3 p-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser media flex-column flex-lg-row">
            <div className="media-body">
              <h2 className="name font-weight-bold mb-1">Amaro Barros</h2>
              <div className="tagline mb-3">Senior Software Engineer</div>
              <div className="bio mb-4">
                I'm a software engineer specialised in frontend and backend
                development for complex scalable web apps. I write about
                software development on{" "}
                <a
                  className="link-on-bg"
                  href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-home.html"
                >
                  my blog
                </a>
                . Want to know how I may help your project? Check out my project{" "}
                <a
                  className="link-on-bg"
                  href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/projects.html"
                >
                  portfolio
                </a>{" "}
                and{" "}
                <a
                  className="link-on-bg"
                  href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html"
                >
                  online resume
                </a>
                .
              </div>
              <div className="mb-4">
                <a
                  className="btn btn-primary mr-2 mb-3"
                  href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/portfolio.html"
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
                  </svg>
                  <i className="fas fa-arrow-alt-circle-right mr-2"></i>
                  <span className="d-none d-md-inline">View</span> Portfolio
                </a>
                <a
                  className="btn btn-secondary mb-3"
                  href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html"
                >
                  <svg
                    className="svg-inline--fa fa-file-alt fa-w-12 mr-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="file-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                    ></path>
                  </svg>
                  <i className="fas fa-file-alt mr-2"></i>
                  <span className="d-none d-md-inline">View</span> Resume
                </a>
              </div>
            </div>
            <img
              className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0"
              src={profileImg}
              alt=""
            ></img>
          </div>
        </div>
      </section>
    );
};
    
export default Resume;
