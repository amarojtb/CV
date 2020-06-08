import React, { Fragment } from 'react';

const Portfolio = () => {
	return (
    <Fragment>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              I'm taking on freelance work at the moment. Want some help
              building your software?
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/contact.html"
            target="_blank"
          >
            <svg
              className="svg-inline--fa fa-paper-plane fa-w-16 mr-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="paper-plane"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
              ></path>
            </svg>{" "}
            <i className="fas fa-paper-plane mr-2"></i> Hire Me
          </a>
        </div>
      </section>
      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="text-center">
            <ul id="filters" className="filters mb-5 mx-auto pl-0">
              <li className="type active mb-3 mb-lg-0" data-filter="*">
                All
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".webapp">
                We App
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".mobileapp">
                Mobile App
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".frontend">
                Frontend
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".backend">
                Backend
              </li>
            </ul>
          </div>

          <div
            className="project-cards row isotope"
          >
            <div
              className="isotope-item col-md-6 mb-5 mobileapp frontend"
            >
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-img-holder">
                    <img
                      src="./portfolio_files/project-1.jpg"
                      className="card-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                          className="theme-link"
                        >
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Project intro lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Cum sociis natoque penatibus et magnis
                        dis parturient montes.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Google</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                    >
                      <svg
                        className="svg-inline--fa fa-eye fa-w-18 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>{" "}
                      <i className="fas fa-eye mr-2"></i> View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-md-6 mb-5 webapp frontend"
            >
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-img-holder">
                    <img
                      src="./portfolio_files/project-2.jpg"
                      className="card-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                          className="theme-link"
                        >
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Dropbox</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                    >
                      <svg
                        className="svg-inline--fa fa-eye fa-w-18 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>{" "}
                      <i className="fas fa-eye mr-2"></i> View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-md-6 mb-5 mobileapp"
            >
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-img-holder">
                    <img
                      src="./portfolio_files/project-3.jpg"
                      className="card-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                          className="theme-link"
                        >
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Google</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                    >
                      <svg
                        className="svg-inline--fa fa-eye fa-w-18 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>{" "}
                      <i className="fas fa-eye mr-2"></i> View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-md-6 mb-5 webapp backend"
            >
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-img-holder">
                    <img
                      src="./portfolio_files/project-4.jpg"
                      className="card-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                          className="theme-link"
                        >
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Client: Startup Hub
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                    >
                      <svg
                        className="svg-inline--fa fa-eye fa-w-18 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>{" "}
                      <i className="fas fa-eye mr-2"></i> View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-md-6 mb-5 mobileapp frontend"
            >
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-img-holder">
                    <img
                      src="./portfolio_files/project-5.jpg"
                      className="card-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                          className="theme-link"
                        >
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: SalesForce</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                    >
                      <svg
                        className="svg-inline--fa fa-eye fa-w-18 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>{" "}
                      <i className="fas fa-eye mr-2"></i> View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-md-6 mb-5 webapp backend"
            >
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-img-holder">
                    <img
                      src="./portfolio_files/project-6.jpg"
                      className="card-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                          className="theme-link"
                        >
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Uber</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                    >
                      <svg
                        className="svg-inline--fa fa-eye fa-w-18 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>{" "}
                      <i className="fas fa-eye mr-2"></i> View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-md-6 mb-5 webapp frontend backend"
            >
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-img-holder">
                    <img
                      src="./portfolio_files/project-7.jpg"
                      className="card-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                          className="theme-link"
                        >
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Lyft</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                    >
                      <svg
                        className="svg-inline--fa fa-eye fa-w-18 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>{" "}
                      <i className="fas fa-eye mr-2"></i> View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-md-6 mb-5 webapp frontend"
            >
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-img-holder">
                    <img
                      src="./portfolio_files/project-8.jpg"
                      className="card-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                          className="theme-link"
                        >
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: GitLab</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"
                    >
                      <svg
                        className="svg-inline--fa fa-eye fa-w-18 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="eye"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>{" "}
                      <i className="fas fa-eye mr-2"></i> View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
    };

    export default Portfolio;