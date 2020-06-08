import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SideBar from './areas/components/SideBar/SideBar';

import Portfolio from './areas/components/Portfolio/Portfolio';
import Services from "./areas/components/MainContent/Services";
import Testimonials from "./areas/components/MainContent/Testimonials";
import Resume from "./areas/components/Resume/Resume";
import Projects from "./areas/components/MainContent/Projects";
import Footer from "./utils/components/Footer/Footer";
import MainContent from "./areas/components/MainContent/MainContent";

import "./App.css";
import "./styles/icons.css";

function App() {
  return (
    <Fragment>
      <Router>
        <SideBar />
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/">
              <MainContent />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/services">
              <Services />
              <div className="container">
                <hr></hr>
              </div>
            </Route>
            <Route path="/testimonials">
              <Testimonials />
              <div className="container">
                <hr></hr>
              </div>
            </Route>
            <Route path="/resume">
              <Resume />
              <div className="container">
                <hr></hr>
              </div>
            </Route>
            <Route path="/Projects">
              <Projects />
              <div className="container">
                <hr></hr>
              </div>
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
