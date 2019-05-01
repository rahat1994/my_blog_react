import React from 'react';
import services_img from '../images/services-img-1.jpg';
// import main_img_2 from './images/about-2.jpg';

// import './main.js';
export default function Services() {
  return (
    
    <div id="colorlib-services">
          <div className="container">
            <div className="row text-center">
              <h2 className="bold">Services</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="services-flex">
                  <div className="one-third">
                    <div className="row">
                      <div className="col-md-12 col-md-offset-0 animate-box intro-heading">
                        <span>My Services</span>
                        <h2>Here Are Some of My Skills</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="rotate">
                          <h2 className="heading">Services</h2>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="services animate-box">
                          <h3>Server side</h3>
                          <ul>
                            <li>Laravel</li>
                            <li>Codeigniter</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>Express.js</li>
                          </ul>
                        </div>
                        <div className="services animate-box">
                          <h3>Web FrontEnd</h3>
                          <ul>
                            <li>JS &amp; Jquery</li>
                            <li>React</li>
                            <li>Redux</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="services animate-box">
                          <h3>API</h3>
                          <ul>
                            <li>SOAP</li>
                            <li>REST</li>
                            
                          </ul>
                        </div>
                        <div className="services animate-box">
                          <h3>What I am upto</h3>
                          <ul>
                            <li>Docker</li>
                            <li>GraphQL</li>
                            <li>React Native</li>
                            <li>Django</li>
                            <li>Scrum</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="one-forth services-img" style={{backgroundImage: `url(${services_img})`}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
  );
}


