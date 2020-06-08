
import React from 'react';

const Projects = () => {
    return (
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
										<svg className="svg-inline--fa fa-eye fa-w-18 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg><i className="fas fa-eye mr-2"></i>View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center py-3">
                    <a href="https://themes.3rdwavemedia.com/devcard/bs4/2.2/portfolio.html" className="btn btn-primary"><svg className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg> <i className="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio</a></div>
				
			</div>
		</section>
        );
    };
        export default Projects;
