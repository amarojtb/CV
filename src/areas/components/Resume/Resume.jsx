import React, { Fragment } from "react";

import config from '../../../utils/config/config';

const { email, mobile, website, location } = config;

const Resume = () => {
  return (
    <Fragment>
      {/* <ContentHeader /> */}
      <div className="container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <div className="resume-header">
            <div className="row align-items-center">
              <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 className="resume-name mb-0 text-uppercase">
                  Amaro Barros
                </h2>
                <div className="resume-tagline mb-3 mb-md-0">
                  Senior Software Engineer
                </div>
              </div>
              <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-phone-square fa-w-14 fa-fw fa-lg mr-2"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="phone-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"
                      ></path>
                    </svg>
                    <i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i>
                    <a className="resume-link" href="tel:#">
                      {mobile}
                    </a>
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-envelope-square fa-w-14 fa-fw fa-lg mr-2"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="envelope-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"
                      ></path>
                    </svg>
                    <i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i>
                    <a className="resume-link" href="mailto:#">
                      {email}
                    </a>
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-globe fa-w-16 fa-fw fa-lg mr-2"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="globe"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                      ></path>
                    </svg>
                    <i className="fas fa-globe fa-fw fa-lg mr-2"></i>
                    <a
                      className="resume-link"
                      href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html#"
                    >
                      {website}
                    </a>
                  </li>
                  <li className="mb-0">
                    <svg
                      className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-fw fa-lg mr-2"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-marker-alt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </svg>
                    <i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>
                     {location}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="resume-intro py-3">
            <div className="media flex-column flex-md-row align-items-center">
              <img
                className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
                src="./resume_files/resume-profile.png"
                alt=""
              ></img>
              <div className="media-body text-left">
                <p className="mb-0">
                  Passioned front-end developer with 8+ years of experience,
                  experienced working in complex solutions with several business
                  requirements and high volumes of traffic. Highly experienced
                  in developing user interfaces, using the latest available
                  technologies, coding JavaScript to achieve complex tasks.
                  Outgoing and detail-oriented, proficient at building and
                  maintaining professional relationships. Proficient in latest
                  frontend tools and app and in possession of a Bachelor’s in
                  Computer Science.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                <section className="work-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Work Experiences
                  </h3>
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Software Engineer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Google | 2019 - Present
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Donec pede justo, fringilla vel.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis.
                      </p>
                      <ul className="resume-list">
                        <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                        <li>Aenean commodo ligula eget dolor.</li>
                        <li>Etiam ultricies nisi vel augue.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Lead Software Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Apple | 2016 - 2019
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Donec pede justo, fringilla vel.
                      </p>
                      <ul className="resume-list">
                        <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                        <li>Aenean commodo ligula eget dolor.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Software Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Dropbox | 2014 - 2016
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Uber | 2013 - 2014
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Backend Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Amazon | 2014 - 2016
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Frontend Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Startup | 2013 - 2014
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        Role description goes here ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus.{" "}
                      </p>
                    </div>
                  </div>
                </section>

                <section className="project-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Projects
                  </h3>
                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Project Lorem Ipsum
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Open Source
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        You can use this section for your side projects. You can{" "}
                        <a
                          href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html#"
                          className="theme-link"
                        >
                          provide a project link here
                        </a>{" "}
                        as well. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Project Sed Fringilla
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Open Source
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        You can use this section for your side projects. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Project Praesent{" "}
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Open Source
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        You can use this section for your side projects. Cras
                        dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Skills
                  </h3>
                  <div className="item">
                    <h4 className="item-title">Technical</h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">JavaScript/Angular/React/Vue</li>
                      <li className="mb-2">Python/Ruby/PHP</li>
                      <li></li>
                      <li className="mb-2">Node.js/ASP.NET</li>
                      <li className="mb-2">PostgreSQL/MySQL</li>
                      <li className="mb-2">Object-oriented design</li>
                      <li className="mb-2">
                        Design and implement database structures
                      </li>
                      <li>Lead and deliver complex software systems</li>
                    </ul>
                  </div>
                  <div className="item">
                    <h4 className="item-title">Professional</h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">Effective communication</li>
                      <li className="mb-2">Team player</li>
                      <li></li>
                      <li className="mb-2">Strong problem solver</li>
                      <li>Good time management</li>
                    </ul>
                  </div>
                </section>
                <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Education
                  </h3>
                  <ul className="list-unstyled resume-education-list">
                    <li className="mb-3">
                      <div className="resume-degree font-weight-bold">
                        MSc in Computer Science
                      </div>
                      <div className="resume-degree-org text-muted">
                        University College London
                      </div>
                      <div className="resume-degree-time text-muted">
                        2010 - 2011
                      </div>
                    </li>
                    <li>
                      <div className="resume-degree font-weight-bold">
                        BSc Maths and Physics
                      </div>
                      <div className="resume-degree-org text-muted">
                        Imperial College London
                      </div>
                      <div className="resume-degree-time text-muted">
                        2007 - 2010
                      </div>
                    </li>
                  </ul>
                </section>
                <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Awards
                  </h3>
                  <ul className="list-unstyled resume-awards-list">
                    <li className="mb-3">
                      <div className="font-weight-bold">Award Lorem Ipsum</div>
                      <div className="text-muted">
                        Microsoft lorem ipsum (2019)
                      </div>
                    </li>
                    <li>
                      <div className="font-weight-bold">
                        Award Donec Sodales
                      </div>
                      <div className="text-muted">Oracle Aenean (2017)</div>
                    </li>
                  </ul>
                </section>
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Languages
                  </h3>
                  <ul className="list-unstyled resume-lang-list">
                    <li className="mb-2">
                      English <span className="text-muted">(Native)</span>
                    </li>
                    <li>
                      Spanish <span className="text-muted">(Professional)</span>
                    </li>
                  </ul>
                </section>
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Interests
                  </h3>
                  <ul className="list-unstyled resume-interests-list mb-0">
                    <li className="mb-2">Climbing</li>
                    <li className="mb-2">Snowboarding</li>
                    <li className="mb-2">Photography</li>
                    <li>Travelling</li>
                  </ul>
                </section>
              </aside>
            </div>
          </div>
          <hr></hr>
          <div className="resume-footer text-center">
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
              <li className="list-inline-item mb-lg-0 mr-3">
                <a
                  className="resume-link"
                  href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html#"
                >
                  <svg
                    className="svg-inline--fa fa-github-square fa-w-14 fa-2x mr-2"
                    data-fa-transform="down-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <g transform="translate(224 256)">
                      <g transform="translate(0, 128)  scale(1, 1)  rotate(0 0 0)">
                        <path
                          fill="currentColor"
                          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
                          transform="translate(-224 -256)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <i
                    className="fab fa-github-square fa-2x mr-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    github.com/username
                  </span>
                </a>
              </li>
              <li className="list-inline-item mb-lg-0 mr-3">
                <a
                  className="resume-link"
                  href="https://www.linkedin.com/in/amarojtb/"
                  target="_blank"
                >
                  <svg
                    className="svg-inline--fa fa-linkedin fa-w-14 fa-2x mr-2"
                    data-fa-transform="down-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <g transform="translate(224 256)">
                      <g transform="translate(0, 128)  scale(1, 1)  rotate(0 0 0)">
                        <path
                          fill="currentColor"
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          transform="translate(-224 -256)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <i
                    className="fab fa-linkedin fa-2x mr-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    linkedin.com/in/amarojtb
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Fragment>
  );
};

export default Resume;
