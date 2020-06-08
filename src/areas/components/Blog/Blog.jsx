import React, { Fragment } from 'react';
import Footer from "../../../utils/components/Footer/Footer";

import profileImg from "../../../images/profile-lg.jpg";

const Blog = () => {
    return (
		<Fragment>
		<section className="about-me-section p-3 p-lg-5 theme-bg-light">
			<div className="container">
				<div className="profile-teaser media flex-column flex-lg-row">
					
					<div className="media-body">
						<h2 className="name font-weight-bold mb-1">Simon Doe</h2>
						<div className="tagline mb-3">Senior Software Engineer</div>
						<div className="bio mb-4">I'm a software engineer specialised in 
frontend and backend development for complex scalable web apps. I write 
about software development on <a className="link-on-bg" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-home.html">my blog</a>. Want to know how I may help your project? Check out my project <a className="link-on-bg" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/projects.html">portfolio</a> and <a className="link-on-bg" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html">online resume</a>.
						</div>
						<div className="mb-4">
							<a className="btn btn-primary mr-2 mb-3" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/portfolio.html"><svg className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg><i className="fas fa-arrow-alt-circle-right mr-2"></i> <span className="d-none d-md-inline">View</span> Portfolio</a>
							<a className="btn btn-secondary mb-3" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html"><svg className="svg-inline--fa fa-file-alt fa-w-12 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg><i className="fas fa-file-alt mr-2"></i> <span className="d-none d-md-inline">View</span> Resume</a>
						</div>
					</div>
					<img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src={profileImg} alt=""></img>
				</div>
			</div>
		</section>
		
		<section className="overview-section p-3 p-lg-5">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-3">What I do</h2>
				<div className="section-intro mb-5">I have more than 10 years' 
experience building software for clients all over the world. Below is a 
quick overview of my main technical skill sets and technologies I use. 
Want to find out more about my experience? Check out my <a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/resume.html">online resume</a> and <a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/portfolio.html">project portfolio</a>.</div>
				<div className="row">
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><svg className="svg-inline--fa fa-js-square fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg><i className="fab fa-js-square"></i> </div>
							<h3 className="item-title">Vanilla JavaScript</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.</div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><svg className="svg-inline--fa fa-angular fa-w-14 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="angular" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg><i className="fab fa-angular mr-2"></i> <svg className="svg-inline--fa fa-react fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="react" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg><i className="fab fa-react mr-2"></i> <svg className="svg-inline--fa fa-vuejs fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="vuejs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path></svg><i className="fab fa-vuejs"></i> </div>
							<h3 className="item-title">Angular, React &amp;  Vue</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><svg className="svg-inline--fa fa-node-js fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="node-js" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path></svg><i className="fab fa-node-js"></i> </div>
							<h3 className="item-title">Node.js</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><svg className="svg-inline--fa fa-python fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="python" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path></svg><i className="fab fa-python"></i> </div>
							<h3 className="item-title">Python &amp; Django</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><svg className="svg-inline--fa fa-php fa-w-20" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="php" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg><i className="fab fa-php"></i> </div>
							<h3 className="item-title">PHP</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><svg className="svg-inline--fa fa-npm fa-w-18 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="npm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"></path></svg><i className="fab fa-npm mr-2"></i> <svg className="svg-inline--fa fa-gulp fa-w-8 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gulp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M209.8 391.1l-14.1 24.6-4.6 80.2c0 8.9-28.3 16.1-63.1 16.1s-63.1-7.2-63.1-16.1l-5.8-79.4-14.9-25.4c41.2 17.3 126 16.7 165.6 0zm-196-253.3l13.6 125.5c5.9-20 20.8-47 40-55.2 6.3-2.7 12.7-2.7 18.7.9 5.2 3 9.6 9.3 10.1 11.8 1.2 6.5-2 9.1-4.5 9.1-3 0-5.3-4.6-6.8-7.3-4.1-7.3-10.3-7.6-16.9-2.8-6.9 5-12.9 13.4-17.1 20.7-5.1 8.8-9.4 18.5-12 28.2-1.5 5.6-2.9 14.6-.6 19.9 1 2.2 2.5 3.6 4.9 3.6 5 0 12.3-6.6 15.8-10.1 4.5-4.5 10.3-11.5 12.5-16l5.2-15.5c2.6-6.8 9.9-5.6 9.9 0 0 10.2-3.7 13.6-10 34.7-5.8 19.5-7.6 25.8-7.6 25.8-.7 2.8-3.4 7.5-6.3 7.5-1.2 0-2.1-.4-2.6-1.2-1-1.4-.9-5.3-.8-6.3.2-3.2 6.3-22.2 7.3-25.2-2 2.2-4.1 4.4-6.4 6.6-5.4 5.1-14.1 11.8-21.5 11.8-3.4 0-5.6-.9-7.7-2.4l7.6 79.6c2 5 39.2 17.1 88.2 17.1 49.1 0 86.3-12.2 88.2-17.1l10.9-94.6c-5.7 5.2-12.3 11.6-19.6 14.8-5.4 2.3-17.4 3.8-17.4-5.7 0-5.2 9.1-14.8 14.4-21.5 1.4-1.7 4.7-5.9 4.7-8.1 0-2.9-6-2.2-11.7 2.5-3.2 2.7-6.2 6.3-8.7 9.7-4.3 6-6.6 11.2-8.5 15.5-6.2 14.2-4.1 8.6-9.1 22-5 13.3-4.2 11.8-5.2 14-.9 1.9-2.2 3.5-4 4.5-1.9 1-4.5.9-6.1-.3-.9-.6-1.3-1.9-1.3-3.7 0-.9.1-1.8.3-2.7 1.5-6.1 7.8-18.1 15-34.3 1.6-3.7 1-2.6.8-2.3-6.2 6-10.9 8.9-14.4 10.5-5.8 2.6-13 2.6-14.5-4.1-.1-.4-.1-.8-.2-1.2-11.8 9.2-24.3 11.7-20-8.1-4.6 8.2-12.6 14.9-22.4 14.9-4.1 0-7.1-1.4-8.6-5.1-2.3-5.5 1.3-14.9 4.6-23.8 1.7-4.5 4-9.9 7.1-16.2 1.6-3.4 4.2-5.4 7.6-4.5.6.2 1.1.4 1.6.7 2.6 1.8 1.6 4.5.3 7.2-3.8 7.5-7.1 13-9.3 20.8-.9 3.3-2 9 1.5 9 2.4 0 4.7-.8 6.9-2.4 4.6-3.4 8.3-8.5 11.1-13.5 2-3.6 4.4-8.3 5.6-12.3.5-1.7 1.1-3.3 1.8-4.8 1.1-2.5 2.6-5.1 5.2-5.1 1.3 0 2.4.5 3.2 1.5 1.7 2.2 1.3 4.5.4 6.9-2 5.6-4.7 10.6-6.9 16.7-1.3 3.5-2.7 8-2.7 11.7 0 3.4 3.7 2.6 6.8 1.2 2.4-1.1 4.8-2.8 6.8-4.5 1.2-4.9.9-3.8 26.4-68.2 1.3-3.3 3.7-4.7 6.1-4.7 1.2 0 2.2.4 3.2 1.1 1.7 1.3 1.7 4.1 1 6.2-.7 1.9-.6 1.3-4.5 10.5-5.2 12.1-8.6 20.8-13.2 31.9-1.9 4.6-7.7 18.9-8.7 22.3-.6 2.2-1.3 5.8 1 5.8 5.4 0 19.3-13.1 23.1-17 .2-.3.5-.4.9-.6.6-1.9 1.2-3.7 1.7-5.5 1.4-3.8 2.7-8.2 5.3-11.3.8-1 1.7-1.6 2.7-1.6 2.8 0 4.2 1.2 4.2 4 0 1.1-.7 5.1-1.1 6.2 1.4-1.5 2.9-3 4.5-4.5 15-13.9 25.7-6.8 25.7.2 0 7.4-8.9 17.7-13.8 23.4-1.6 1.9-4.9 5.4-5 6.4 0 1.3.9 1.8 2.2 1.8 2 0 6.4-3.5 8-4.7 5-3.9 11.8-9.9 16.6-14.1l14.8-136.8c-30.5 17.1-197.6 17.2-228.3.2zm229.7-8.5c0 21-231.2 21-231.2 0 0-8.8 51.8-15.9 115.6-15.9 9 0 17.8.1 26.3.4l12.6-48.7L228.1.6c1.4-1.4 5.8-.2 9.9 3.5s6.6 7.9 5.3 9.3l-.1.1L185.9 74l-10 40.7c39.9 2.6 67.6 8.1 67.6 14.6zm-69.4 4.6c0-.8-.9-1.5-2.5-2.1l-.2.8c0 1.3-5 2.4-11.1 2.4s-11.1-1.1-11.1-2.4c0-.1 0-.2.1-.3l.2-.7c-1.8.6-3 1.4-3 2.3 0 2.1 6.2 3.7 13.7 3.7 7.7.1 13.9-1.6 13.9-3.7z"></path></svg><i className="fab fa-gulp mr-2"></i> <svg className="svg-inline--fa fa-grunt fa-w-12" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="grunt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M61.3 189.3c-1.1 10 5.2 19.1 5.2 19.1.7-7.5 2.2-12.8 4-16.6.4 10.3 3.2 23.5 12.8 34.1 6.9 7.6 35.6 23.3 54.9 6.1 1 2.4 2.1 5.3 3 8.5 2.9 10.3-2.7 25.3-2.7 25.3s15.1-17.1 13.9-32.5c10.8-.5 21.4-8.4 21.1-19.5 0 0-18.9 10.4-35.5-8.8-9.7-11.2-40.9-42-83.1-31.8 4.3 1 8.9 2.4 13.5 4.1h-.1c-4.2 2-6.5 7.1-7 12zm28.3-1.8c19.5 11 37.4 25.7 44.9 37-5.7 3.3-21.7 10.4-38-1.7-10.3-7.6-9.8-26.2-6.9-35.3zm142.1 45.8c-1.2 15.5 13.9 32.5 13.9 32.5s-5.6-15-2.7-25.3c.9-3.2 2-6 3-8.5 19.3 17.3 48 1.5 54.8-6.1 9.6-10.6 12.3-23.8 12.8-34.1 1.8 3.8 3.4 9.1 4 16.6 0 0 6.4-9.1 5.2-19.1-.6-5-2.9-10-7-11.8h-.1c4.6-1.8 9.2-3.2 13.5-4.1-42.3-10.2-73.4 20.6-83.1 31.8-16.7 19.2-35.5 8.8-35.5 8.8-.2 10.9 10.4 18.9 21.2 19.3zm62.7-45.8c3 9.1 3.4 27.7-7 35.4-16.3 12.1-32.2 5-37.9 1.6 7.5-11.4 25.4-26 44.9-37zM160 418.5h-29.4c-5.5 0-8.2 1.6-9.5 2.9-1.9 2-2.2 4.7-.9 8.1 3.5 9.1 11.4 16.5 13.7 18.6 3.1 2.7 7.5 4.3 11.8 4.3 4.4 0 8.3-1.7 11-4.6 7.5-8.2 11.9-17.1 13-19.8.6-1.5 1.3-4.5-.9-6.8-1.8-1.8-4.7-2.7-8.8-2.7zm189.2-101.2c-2.4 17.9-13 33.8-24.6 43.7-3.1-22.7-3.7-55.5-3.7-62.4 0-14.7 9.5-24.5 12.2-26.1 2.5-1.5 5.4-3 8.3-4.6 18-9.6 40.4-21.6 40.4-43.7 0-16.2-9.3-23.2-15.4-27.8-.8-.6-1.5-1.1-2.2-1.7-2.1-1.7-3.7-3-4.3-4.4-4.4-9.8-3.6-34.2-1.7-37.6.6-.6 16.7-20.9 11.8-39.2-2-7.4-6.9-13.3-14.1-17-5.3-2.7-11.9-4.2-19.5-4.5-.1-2-.5-3.9-.9-5.9-.6-2.6-1.1-5.3-.9-8.1.4-4.7.8-9 2.2-11.3 8.4-13.3 28.8-17.6 29-17.6l12.3-2.4-8.1-9.5c-.1-.2-17.3-17.5-46.3-17.5-7.9 0-16 1.3-24.1 3.9-24.2 7.8-42.9 30.5-49.4 39.3-3.1-1-6.3-1.9-9.6-2.7-4.2-15.8 9-38.5 9-38.5s-13.6-3-33.7 15.2c-2.6-6.5-8.1-20.5-1.8-37.2C184.6 10.1 177.2 26 175 40.4c-7.6-5.4-6.7-23.1-7.2-27.6-7.5.9-29.2 21.9-28.2 48.3-2 .5-3.9 1.1-5.9 1.7-6.5-8.8-25.1-31.5-49.4-39.3-7.9-2.2-16-3.5-23.9-3.5-29 0-46.1 17.3-46.3 17.5L6 46.9l12.3 2.4c.2 0 20.6 4.3 29 17.6 1.4 2.2 1.8 6.6 2.2 11.3.2 2.8-.4 5.5-.9 8.1-.4 1.9-.8 3.9-.9 5.9-7.7.3-14.2 1.8-19.5 4.5-7.2 3.7-12.1 9.6-14.1 17-5 18.2 11.2 38.5 11.8 39.2 1.9 3.4 2.7 27.8-1.7 37.6-.6 1.4-2.2 2.7-4.3 4.4-.7.5-1.4 1.1-2.2 1.7-6.1 4.6-15.4 11.7-15.4 27.8 0 22.1 22.4 34.1 40.4 43.7 3 1.6 5.8 3.1 8.3 4.6 2.7 1.6 12.2 11.4 12.2 26.1 0 6.9-.6 39.7-3.7 62.4-11.6-9.9-22.2-25.9-24.6-43.8 0 0-29.2 22.6-20.6 70.8 5.2 29.5 23.2 46.1 47 54.7 8.8 19.1 29.4 45.7 67.3 49.6C143 504.3 163 512 192.2 512h.2c29.1 0 49.1-7.7 63.6-19.5 37.9-3.9 58.5-30.5 67.3-49.6 23.8-8.7 41.7-25.2 47-54.7 8.2-48.4-21.1-70.9-21.1-70.9zM305.7 37.7c5.6-1.8 11.6-2.7 17.7-2.7 11 0 19.9 3 24.7 5-3.1 1.4-6.4 3.2-9.7 5.3-2.4-.4-5.6-.8-9.2-.8-10.5 0-20.5 3.1-28.7 8.9-12.3 8.7-18 16.9-20.7 22.4-2.2-1.3-4.5-2.5-7.1-3.7-1.6-.8-3.1-1.5-4.7-2.2 6.1-9.1 19.9-26.5 37.7-32.2zm21 18.2c-.8 1-1.6 2.1-2.3 3.2-3.3 5.2-3.9 11.6-4.4 17.8-.5 6.4-1.1 12.5-4.4 17-4.2.8-8.1 1.7-11.5 2.7-2.3-3.1-5.6-7-10.5-11.2 1.4-4.8 5.5-16.1 13.5-22.5 5.6-4.3 12.2-6.7 19.6-7zM45.6 45.3c-3.3-2.2-6.6-4-9.7-5.3 4.8-2 13.7-5 24.7-5 6.1 0 12 .9 17.7 2.7 17.8 5.8 31.6 23.2 37.7 32.1-1.6.7-3.2 1.4-4.8 2.2-2.5 1.2-4.9 2.5-7.1 3.7-2.6-5.4-8.3-13.7-20.7-22.4-8.3-5.8-18.2-8.9-28.8-8.9-3.4.1-6.6.5-9 .9zm44.7 40.1c-4.9 4.2-8.3 8-10.5 11.2-3.4-.9-7.3-1.9-11.5-2.7C65 89.5 64.5 83.4 64 77c-.5-6.2-1.1-12.6-4.4-17.8-.7-1.1-1.5-2.2-2.3-3.2 7.4.3 14 2.6 19.5 7 8 6.3 12.1 17.6 13.5 22.4zM58.1 259.9c-2.7-1.6-5.6-3.1-8.4-4.6-14.9-8-30.2-16.3-30.2-30.5 0-11.1 4.3-14.6 8.9-18.2l.5-.4c.7-.6 1.4-1.2 2.2-1.8-.9 7.2-1.9 13.3-2.7 14.9 0 0 12.1-15 15.7-44.3 1.4-11.5-1.1-34.3-5.1-43 .2 4.9 0 9.8-.3 14.4-.4-.8-.8-1.6-1.3-2.2-3.2-4-11.8-17.5-9.4-26.6.9-3.5 3.1-6 6.7-7.8 3.8-1.9 8.8-2.9 15.1-2.9 12.3 0 25.9 3.7 32.9 6 25.1 8 55.4 30.9 64.1 37.7.2.2.4.3.4.3l5.6 3.9-3.5-5.8c-.2-.3-19.1-31.4-53.2-46.5 2-2.9 7.4-8.1 21.6-15.1 21.4-10.5 46.5-15.8 74.3-15.8 27.9 0 52.9 5.3 74.3 15.8 14.2 6.9 19.6 12.2 21.6 15.1-34 15.1-52.9 46.2-53.1 46.5l-3.5 5.8 5.6-3.9s.2-.1.4-.3c8.7-6.8 39-29.8 64.1-37.7 7-2.2 20.6-6 32.9-6 6.3 0 11.3 1 15.1 2.9 3.5 1.8 5.7 4.4 6.7 7.8 2.5 9.1-6.1 22.6-9.4 26.6-.5.6-.9 1.3-1.3 2.2-.3-4.6-.5-9.5-.3-14.4-4 8.8-6.5 31.5-5.1 43 3.6 29.3 15.7 44.3 15.7 44.3-.8-1.6-1.8-7.7-2.7-14.9.7.6 1.5 1.2 2.2 1.8l.5.4c4.6 3.7 8.9 7.1 8.9 18.2 0 14.2-15.4 22.5-30.2 30.5-2.9 1.5-5.7 3.1-8.4 4.6-8.7 5-18 16.7-19.1 34.2-.9 14.6.9 49.9 3.4 75.9-12.4 4.8-26.7 6.4-39.7 6.8-2-4.1-3.9-8.5-5.5-13.1-.7-2-19.6-51.1-26.4-62.2 5.5 39 17.5 73.7 23.5 89.6-3.5-.5-7.3-.7-11.7-.7h-117c-4.4 0-8.3.3-11.7.7 6-15.9 18.1-50.6 23.5-89.6-6.8 11.2-25.7 60.3-26.4 62.2-1.6 4.6-3.5 9-5.5 13.1-13-.4-27.2-2-39.7-6.8 2.5-26 4.3-61.2 3.4-75.9-.9-17.4-10.3-29.2-19-34.2zM34.8 404.6c-12.1-20-8.7-54.1-3.7-59.1 10.9 34.4 47.2 44.3 74.4 45.4-2.7 4.2-5.2 7.6-7 10l-1.4 1.4c-7.2 7.8-8.6 18.5-4.1 31.8-22.7-.1-46.3-9.8-58.2-29.5zm45.7 43.5c6 1.1 12.2 1.9 18.6 2.4 3.5 8 7.4 15.9 12.3 23.1-14.4-5.9-24.4-16-30.9-25.5zM192 498.2c-60.6-.1-78.3-45.8-84.9-64.7-3.7-10.5-3.4-18.2.9-23.1 2.9-3.3 9.5-7.2 24.6-7.2h118.8c15.1 0 21.8 3.9 24.6 7.2 4.2 4.8 4.5 12.6.9 23.1-6.6 18.8-24.3 64.6-84.9 64.7zm80.6-24.6c4.9-7.2 8.8-15.1 12.3-23.1 6.4-.5 12.6-1.3 18.6-2.4-6.5 9.5-16.5 19.6-30.9 25.5zm76.6-69c-12 19.7-35.6 29.3-58.1 29.7 4.5-13.3 3.1-24.1-4.1-31.8-.4-.5-.9-1-1.4-1.5-1.8-2.4-4.3-5.8-7-10 27.2-1.2 63.5-11 74.4-45.4 5 5 8.4 39.1-3.8 59zM191.9 187.7h.2c12.7-.1 27.2-17.8 27.2-17.8-9.9 6-18.8 8.1-27.3 8.3-8.5-.2-17.4-2.3-27.3-8.3 0 0 14.5 17.6 27.2 17.8zm61.7 230.7h-29.4c-4.2 0-7.2.9-8.9 2.7-2.2 2.3-1.5 5.2-.9 6.7 1 2.6 5.5 11.3 13 19.3 2.7 2.9 6.6 4.5 11 4.5s8.7-1.6 11.8-4.2c2.3-2 10.2-9.2 13.7-18.1 1.3-3.3 1-6-.9-7.9-1.3-1.3-4-2.9-9.4-3z"></path></svg><i className="fab fa-grunt"></i> </div>
							<h3 className="item-title">npm, Gulp &amp; Grunt</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><svg className="svg-inline--fa fa-html5 fa-w-12 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="html5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg><i className="fab fa-html5 mr-2"></i> <svg className="svg-inline--fa fa-css3-alt fa-w-12" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="css3-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg><i className="fab fa-css3-alt"></i> </div>
							<h3 className="item-title">HTML &amp; CSS</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><svg className="svg-inline--fa fa-sass fa-w-20 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="sass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"></path></svg><i className="fab fa-sass mr-2"></i> <svg className="svg-inline--fa fa-less fa-w-20" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="less" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M612.7 219c0-20.5 3.2-32.6 3.2-54.6 0-34.2-12.6-45.2-40.5-45.2h-20.5v24.2h6.3c14.2 0 17.3 4.7 17.3 22.1 0 16.3-1.6 32.6-1.6 51.5 0 24.2 7.9 33.6 23.6 37.3v1.6c-15.8 3.7-23.6 13.1-23.6 37.3 0 18.9 1.6 34.2 1.6 51.5 0 17.9-3.7 22.6-17.3 22.6v.5h-6.3V393h20.5c27.8 0 40.5-11 40.5-45.2 0-22.6-3.2-34.2-3.2-54.6 0-11 6.8-22.6 27.3-23.6v-27.3c-20.5-.7-27.3-12.3-27.3-23.3zm-105.6 32c-15.8-6.3-30.5-10-30.5-20.5 0-7.9 6.3-12.6 17.9-12.6s22.1 4.7 33.6 13.1l21-27.8c-13.1-10-31-20.5-55.2-20.5-35.7 0-59.9 20.5-59.9 49.4 0 25.7 22.6 38.9 41.5 46.2 16.3 6.3 32.1 11.6 32.1 22.1 0 7.9-6.3 13.1-20.5 13.1-13.1 0-26.3-5.3-40.5-16.3l-21 30.5c15.8 13.1 39.9 22.1 59.9 22.1 42 0 64.6-22.1 64.6-51s-22.5-41-43-47.8zm-358.9 59.4c-3.7 0-8.4-3.2-8.4-13.1V119.1H65.2c-28.4 0-41 11-41 45.2 0 22.6 3.2 35.2 3.2 54.6 0 11-6.8 22.6-27.3 23.6v27.3c20.5.5 27.3 12.1 27.3 23.1 0 19.4-3.2 31-3.2 53.6 0 34.2 12.6 45.2 40.5 45.2h20.5v-24.2h-6.3c-13.1 0-17.3-5.3-17.3-22.6s1.6-32.1 1.6-51.5c0-24.2-7.9-33.6-23.6-37.3v-1.6c15.8-3.7 23.6-13.1 23.6-37.3 0-18.9-1.6-34.2-1.6-51.5s3.7-22.1 17.3-22.1H93v150.8c0 32.1 11 53.1 43.1 53.1 10 0 17.9-1.6 23.6-3.7l-5.3-34.2c-3.1.8-4.6.8-6.2.8zM379.9 251c-16.3-6.3-31-10-31-20.5 0-7.9 6.3-12.6 17.9-12.6 11.6 0 22.1 4.7 33.6 13.1l21-27.8c-13.1-10-31-20.5-55.2-20.5-35.7 0-59.9 20.5-59.9 49.4 0 25.7 22.6 38.9 41.5 46.2 16.3 6.3 32.1 11.6 32.1 22.1 0 7.9-6.3 13.1-20.5 13.1-13.1 0-26.3-5.3-40.5-16.3l-20.5 30.5c15.8 13.1 39.9 22.1 59.9 22.1 42 0 64.6-22.1 64.6-51 .1-28.9-22.5-41-43-47.8zm-155-68.8c-38.4 0-75.1 32.1-74.1 82.5 0 52 34.2 82.5 79.3 82.5 18.9 0 39.9-6.8 56.2-17.9l-15.8-27.8c-11.6 6.8-22.6 10-34.2 10-21 0-37.3-10-41.5-34.2H290c.5-3.7 1.6-11 1.6-19.4.6-42.6-22.6-75.7-66.7-75.7zm-30 66.2c3.2-21 15.8-31 30.5-31 18.9 0 26.3 13.1 26.3 31h-56.8z"></path></svg><i className="fab fa-less"></i> </div>
							<h3 className="item-title">Sass &amp; LESS</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
				</div>
				<div className="text-center py-3"><a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/services.html" className="btn btn-primary"><svg className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg><i className="fas fa-arrow-alt-circle-right mr-2"></i> Services &amp; Pricing
					
				</a></div>
				
			</div>
		</section>
		
		<div className="container"><hr></hr></div>
		
		<section className="testimonials-section p-3 p-lg-5">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
				
				<div className="testiomonial-carousel-container">
					<div className="tns-outer" id="tns1-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">9 to 11</span>  of 6</div><div id="tns1-mw" className="tns-ovh"><div className="tns-inner" id="tns1-iw"><div className="testimonial-carousel  tiny-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns1" ><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-2.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Kate Sanders</div>
										<div className="info">Project Manager, Uber</div>
									</div>
								</div>
							</div>
						</div><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-3.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">James Lee</div>
										<div className="info">Product Manager, Amazon</div>
									</div>
								</div>
						    </div>
						</div><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-4.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">James Lee</div>
										<div className="info">Product Manager, Amazon</div>
									</div>
								</div>
						    </div>
						</div><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-5.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Olivia White</div>
										<div className="info">Product Manager, Dropbox</div>
									</div>
								</div>
						    </div>
						</div><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-6.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Samuel Reyes</div>
										<div className="info">CTO, StartupHub</div>
									</div>
								</div>
						    </div>
						</div>
	                    <div className="item tns-item" id="tns1-item0" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-1.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Brandon James</div>
										<div className="info">Project Manager, Google</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="item tns-item" id="tns1-item1" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-2.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Kate Sanders</div>
										<div className="info">Project Manager, Uber</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="item tns-item" id="tns1-item2" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-3.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">James Lee</div>
										<div className="info">Product Manager, Amazon</div>
									</div>
								</div>
						    </div>
						</div>
						
						<div className="item tns-item tns-slide-active" id="tns1-item3">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-4.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">James Lee</div>
										<div className="info">Product Manager, Amazon</div>
									</div>
								</div>
						    </div>
						</div>
						
						<div className="item tns-item tns-slide-active" id="tns1-item4">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-5.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Olivia White</div>
										<div className="info">Product Manager, Dropbox</div>
									</div>
								</div>
						    </div>
						</div>
						
						<div className="item tns-item tns-slide-active" id="tns1-item5">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-6.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Samuel Reyes</div>
										<div className="info">CTO, StartupHub</div>
									</div>
								</div>
						    </div>
						</div>
					<div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-1.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Brandon James</div>
										<div className="info">Project Manager, Google</div>
									</div>
								</div>
							</div>
						</div><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-2.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Kate Sanders</div>
										<div className="info">Project Manager, Uber</div>
									</div>
								</div>
							</div>
						</div><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-3.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">James Lee</div>
										<div className="info">Product Manager, Amazon</div>
									</div>
								</div>
						    </div>
						</div><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-4.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">James Lee</div>
										<div className="info">Product Manager, Amazon</div>
									</div>
								</div>
						    </div>
						</div><div className="item tns-item" aria-hidden="true" tabIndex="-1">
							<div className="item-inner">
								<div className="quote-holder">
									<blockquote className="quote-content">
										Simon is a brilliant software engineer! Lorem ipsum dolor sit 
amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis.
									</blockquote>
									<svg className="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><i className="fas fa-quote-left"></i> 
								</div>
								<div className="source-holder">
									<div className="source-profile">
										<img src="images/profile-5.png" alt=""></img>
									</div>
									<div className="meta">
										<div className="name">Olivia White</div>
										<div className="info">Product Manager, Dropbox</div>
									</div>
								</div>
						    </div>
						</div></div></div></div><div className="tns-nav" aria-label="Carousel Pagination"><button type="button" data-nav="0" aria-controls="tns1" aria-label="Carousel Page 1" className="" tabIndex="-1"></button><button type="button" data-nav="1" aria-controls="tns1" aria-label="Carousel Page 2 (Current Slide)" className="tns-nav-active"></button><button type="button" data-nav="2" tabIndex="-1" aria-controls="tns1" aria-label="Carousel Page 3"></button><button type="button" data-nav="3" tabIndex="-1" aria-controls="tns1" aria-label="Carousel Page 4"></button><button type="button" data-nav="4" tabIndex="-1" aria-controls="tns1" aria-label="Carousel Page 5"></button><button type="button" data-nav="5" tabIndex="-1" aria-controls="tns1" aria-label="Carousel Page 6"></button></div></div>	
				</div>
			</div>
		</section>
		
		<div className="container"><hr></hr></div>
		
		<section className="featured-section p-3 p-lg-5">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-5">Featured Projects</h2>
				<div className="row">
					<div className="col-md-6 mb-5">
						<div className="card project-card">
							<div className="row no-gutters">
								<div className="col-lg-4 card-img-holder">
									<img src="images/project-1.jpg" className="card-img" alt=""></img>
								</div>
								<div className="col-lg-8">
									<div className="card-body">
										<h5 className="card-title"><a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Project intro lorem ipsum dolor sit amet,
 consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis 
dis parturient montes.</p>
										<p className="card-text"><small className="text-muted">Client: Google</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html">
										<svg className="svg-inline--fa fa-eye fa-w-18 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg><i className="fas fa-eye mr-2"></i> View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-5">	
						<div className="card project-card">
							<div className="row no-gutters">
								<div className="col-lg-4 card-img-holder">
									<img src="images/project-2.jpg" className="card-img" alt=""></img>
								</div>
								<div className="col-lg-8">
									<div className="card-body">
										<h5 className="card-title"><a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: Dropbox</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html">
										<svg className="svg-inline--fa fa-eye fa-w-18 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg><i className="fas fa-eye mr-2"></i> View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-5">
						<div className="card project-card">
							<div className="row no-gutters">
								<div className="col-lg-4 card-img-holder">
									<img src="images/project-3.jpg" className="card-img" alt=""></img>
								</div>
								<div className="col-lg-8">
									<div className="card-body">
										<h5 className="card-title"><a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: Google</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html">
										<svg className="svg-inline--fa fa-eye fa-w-18 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg><i className="fas fa-eye mr-2"></i> View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-5">
						<div className="card project-card">
							<div className="row no-gutters">
								<div className="col-lg-4 card-img-holder">
									<img src="images/project-4.jpg" className="card-img" alt=""></img>
								</div>
								<div className="col-lg-8">
									<div className="card-body">
										<h5 className="card-title"><a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: Uber</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/project.html">
										<svg className="svg-inline--fa fa-eye fa-w-18 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg><i className="fas fa-eye mr-2"></i> View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center py-3"><a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/portfolio.html" className="btn btn-primary"><svg className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg><i className="fas fa-arrow-alt-circle-right mr-2"></i> View Portfolio</a></div>
				
			</div>
		</section>
		
		<div className="container"><hr></hr></div>
		
		<section className="latest-blog-section p-3 p-lg-5">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-5">Latest Blog Posts</h2>
				<div className="row">
					<div className="col-md-4 mb-5">
						<div className="card blog-post-card">
							<img className="card-img-top" src="images/blog-post-thumb-card-1.jpg" alt=""></img>
							<div className="card-body">
								<h5 className="card-title"><a className="theme-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-post.html">Top 3 JavaScript Frameworks</a></h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum 
sociis natoque penatibus et magnis dis parturient...</p>
								<p className="mb-0"><a className="more-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-post.html">Read more →</a></p>
								
							</div>
							<div className="card-footer">
								<small className="text-muted">Published 2 days ago</small>
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-5">
						<div className="card blog-post-card">
							<img className="card-img-top" src="images/blog-post-thumb-card-2.jpg" alt=""></img>
							<div className="card-body">
								<h5 className="card-title"><a className="theme-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-post.html">About Remote Working</a></h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum 
sociis natoque penatibus et magnis dis parturient...</p>
								<p className="mb-0"><a className="more-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-post.html">Read more →</a></p>
							</div>
							<div className="card-footer">
								<small className="text-muted">Published a week ago</small>
								
							</div>
						</div>
					</div>
					<div className="col-md-4 mb-5">
						<div className="card blog-post-card">
							<img className="card-img-top" src="images/blog-post-thumb-card-3.jpg" alt=""></img>
							<div className="card-body">
								<h5 className="card-title"><a className="theme-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-post.html">A Guide to Becoming a Full-Stack Developer</a></h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum 
sociis natoque penatibus et magnis dis parturient...</p>
								<p className="mb-0"><a className="more-link" href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-post.html">Read more →</a></p>
							</div>
							<div className="card-footer">
								<small className="text-muted">Published 3 weeks ago</small>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center py-3"><a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/blog-home.html" className="btn btn-primary"><svg className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg><i className="fas fa-arrow-alt-circle-right mr-2"></i> View Blog</a></div>
			</div>
			
		</section>

		<Footer />
		
    </Fragment>
    );
};

export default Blog;