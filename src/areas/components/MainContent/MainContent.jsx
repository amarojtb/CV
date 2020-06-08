import React, { Fragment } from 'react';
import Resume from './Resume';
import Services from "./Services";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
import Footer from "./Projects";

const SideBar = () => {
    return (
		<Fragment>
			<Resume />
			<Services />
			<div className="container"><hr></hr></div>
			<Testimonials />
			<div className="container"><hr></hr></div>
			<Projects />
			<div className="container"><hr></hr></div>
			<Footer />
		</Fragment>
    );
}

export default SideBar;