import React from 'react';
import main_img from '../images/about.jpg';
import main_img_2 from '../images/about-2.jpg';

// import './main.js';
export default function About() {
  return (
    
    <div id="colorlib-about">
        <div className="container">
        <div className="row text-center">
            <h2 className="bold">About</h2>
        </div>
        <div className="row">
            <div className="col-md-5 animate-box">
            <div className="owl-carousel3">
                <div className="item">
                <img className="img-responsive about-img" src={main_img}/>
                </div>
                <div className="item">
                <img className="img-responsive about-img" src={main_img_2} alt="html5 bootstrap template by colorlib.com" />
                </div>
            </div>
            </div>
            <div className="col-md-6 col-md-push-1 animate-box">
            <div className="about-desc">
                <div className="owl-carousel3">
                <div className="item">
                    <h2><span>Rahat</span><span>&nbsp;&nbsp;&nbsp;Baksh</span></h2>
                </div>
                <div className="item">
                    <h2><span>I'm</span><span>A Designer</span></h2>
                </div>
                </div>
                <div className="desc">
                <div className="rotate">
                    <h2 className="heading">About</h2>
                </div>
                <p>A small river named Duden <a href="#">flows by their place</a> and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                <p className="colorlib-social-icons">
                    <a href="#"><i className="icon-facebook4" /></a>
                    <a href="#"><i className="icon-twitter3" /></a>
                    <a href="#"><i className="icon-googleplus" /></a>
                    <a href="#"><i className="icon-dribbble2" /></a>
                </p>
                <p><a href="#" className="btn btn-primary btn-outline">Contact Me!</a></p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    
  );
}


