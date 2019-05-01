import React from 'react';


// components
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Works from './components/Works.js';
import Blogs from './components/Blogs.js';
import Testimony from './components/Testimony.js';


import './App.css';
import img_1 from './images/img-1.jpg';

// import './main.js';
function App() {
  return (
    <div className="App">
      <Nav />
      <div id="colorlib-page">
        <Header />
        <About />
        <Services />
        <Works /> 
        <Blogs />
        <Testimony />
        <footer>
          <div id="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-pb-sm">
                  <div className="row">
                    <div className="col-md-10">
                      <h2>Let's Talk</h2>
                      <p>A small river named Duden flows by their place and supplies.</p>
                      <p><a href="#">noah@info.com</a></p>
                      <p className="colorlib-social-icons">
                        <a href="#"><i className="icon-facebook4" /></a>
                        <a href="#"><i className="icon-twitter3" /></a>
                        <a href="#"><i className="icon-googleplus" /></a>
                        <a href="#"><i className="icon-dribbble2" /></a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-pb-sm">
                  <h2>Latest Blog</h2>
                  <div className="f-entry">
                    <a href="#" className="featured-img" style={{backgroundImage: 'url(images/img-1.jpg)'}} />
                    <div className="desc">
                      <span>February 15, 2018</span>
                      <h3><a href="#">Art Gallery in Japan</a></h3>
                    </div>
                  </div>
                  <div className="f-entry">
                    <a href="#" className="featured-img" style={{backgroundImage: 'url(images/img-2.jpg)'}} />
                    <div className="desc">
                      <span>February 9, 2018</span>
                      <h3><a href="#">A Japanese Constellation</a></h3>
                    </div>
                  </div>
                  <div className="f-entry">
                    <a href="#" className="featured-img" style={{backgroundImage: 'url(images/img-3.jpg)'}} />
                    <div className="desc">
                      <span>February 15, 2018</span>
                      <h3><a href="#">Road Trip</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-pb-sm">
                  <h2>Newsletter</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                  <div className="subscribe text-center">
                    <div className="form-group">
                      <input type="text" className="form-control text-center" placeholder="Enter Email address" />
                      <input type="submit" defaultValue="Subscribe" className="btn btn-primary btn-custom" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>
                    © {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="icon-heart4" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    
    </div>
  );
}

export default App;
