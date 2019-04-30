import React from 'react';

import './App.css';
import main_img from './images/about.jpg';
import main_img_2 from './images/about-2.jpg';

// import './main.js';
function App() {
  return (
    <div className="App">
      <nav id="colorlib-main-nav" role="navigation">
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
          <div className="js-fullheight colorlib-table">
            <div className="colorlib-table-cell js-fullheight">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" id="search" placeholder="Enter any key to search..." />
                    <button type="submit" className="btn btn-primary"><i className="icon-search3" /></button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="work.html">Work</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h2 className="head-title">Works</h2>
                  <a href="images/work-1.jpg" className="gallery image-popup-link text-center" style={{backgroundImage: 'url(images/work-1.jpg)'}}>
                    <span><i className="icon-search3" /></span>
                  </a>
                  <a href="images/work-2.jpg" className="gallery image-popup-link text-center" style={{backgroundImage: 'url(images/work-2.jpg)'}}>
                    <span><i className="icon-search3" /></span>
                  </a>
                  <a href="images/work-3.jpg" className="gallery image-popup-link text-center" style={{backgroundImage: 'url(images/work-3.jpg)'}}>
                    <span><i className="icon-search3" /></span>
                  </a>
                  <a href="images/work-4.jpg" className="gallery image-popup-link text-center" style={{backgroundImage: 'url(images/work-4.jpg)'}}>
                    <span><i className="icon-search3" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </nav>
      <div id="colorlib-page">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="colorlib-navbar-brand">
                  <a className="colorlib-logo" href="index.html"><span>No</span><span>ah</span></a>
                </div>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
              </div>
            </div>
          </div>
        </header>
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
                      <h2><span>Noah</span><span>Henderson</span></h2>
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
                          <h3>1 - Graphic Design</h3>
                          <ul>
                            <li>UI Design</li>
                            <li>Website &amp; Digital Design</li>
                            <li>Brading &amp; Visual Identity</li>
                            <li>Print Design</li>
                          </ul>
                        </div>
                        <div className="services animate-box">
                          <h3>3 - Front End Development</h3>
                          <ul>
                            <li>HTML / CSS</li>
                            <li>JS &amp; Jquery Startup</li>
                            <li>WordPress</li>
                            <li>Jomla</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="services animate-box">
                          <h3>2 - Illustration</h3>
                          <ul>
                            <li>Editorial</li>
                            <li>Narrative</li>
                            <li>Motion Graphics</li>
                            <li>Animation</li>
                            <li>Visual Effects</li>
                          </ul>
                        </div>
                        <div className="services animate-box">
                          <h3>4 - Web Marketing</h3>
                          <ul>
                            <li>Sales Marketing</li>
                            <li>Invoice</li>
                            <li>eCommerce</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="one-forth services-img" style={{backgroundImage: 'url(images/services-img-1.jpg)'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="colorlib-work">
          <div className="container">
            <div className="row text-center">
              <h2 className="bold">Works</h2>
            </div>
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                <span>Portfolio</span>
                <h2>Done Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rotate">
                  <h2 className="heading">Portfolio</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="work-entry animate-box">
                  <a href="work.html" className="work-img" style={{backgroundImage: 'url(images/work-1.jpg)'}}>
                    <div className="display-t">
                      <div className="work-name">
                        <h2>Pursuing Best</h2>
                      </div>
                    </div>
                  </a>
                  <div className="col-md-4 col-md-offset-4">
                    <div className="desc">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p className="read"><a href="#">View details</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="work-entry animate-box">
                  <a href="work.html" className="work-img" style={{backgroundImage: 'url(images/work-2.jpg)'}}>
                    <div className="display-t">
                      <div className="work-name">
                        <h2>Coordinates</h2>
                      </div>
                    </div>
                  </a>
                  <div className="col-md-4 col-md-offset-4">
                    <div className="desc">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p className="read"><a href="#">View Details</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="work-entry animate-box">
                  <a href="work.html" className="work-img" style={{backgroundImage: 'url(images/work-3.jpg)'}}>
                    <div className="display-t">
                      <div className="work-name">
                        <h2>Cristall</h2>
                      </div>
                    </div>
                  </a>
                  <div className="col-md-4 col-md-offset-4">
                    <div className="desc">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p className="read"><a href="#">View details</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="work-entry animate-box">
                  <a href="work.html" className="work-img" style={{backgroundImage: 'url(images/work-4.jpg)'}}>
                    <div className="display-t">
                      <div className="work-name">
                        <h2>Black</h2>
                      </div>
                    </div>
                  </a>
                  <div className="col-md-4 col-md-offset-4">
                    <div className="desc">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      <p className="read"><a href="#">View details</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="colorlib-blog">
          <div className="container">
            <div className="row text-center">
              <h2 className="bold">Blog</h2>
            </div>
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                <span>Blog</span>
                <h2>Read Our Case</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rotate">
                  <h2 className="heading">Our Blog</h2>
                </div>
              </div>
            </div>
            <div className="row animate-box">
              <div className="owl-carousel1">
                <div className="item">
                  <div className="col-md-12">
                    <div className="article">
                      <a href="blog.html" className="blog-img">
                        <img className="img-responsive" src="images/img-1.jpg" alt="html5 bootstrap by colorlib.com" />
                        <div className="overlay" />
                        <div className="link">
                          <span className="read">Read more
                          </span></div>
                      </a>
                      <div className="desc">
                        <span className="meta">15, Feb 2018</span>
                        <h2><a href="blog.html">A Japanese Constellation</a></h2>
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-12">
                    <div className="article">
                      <a href="blog.html" className="blog-img">
                        <img className="img-responsive" src="images/img-2.jpg" alt="html5 bootstrap by colorlib.com" />
                        <div className="overlay" />
                        <div className="link">
                          <span className="read">Read more
                          </span></div>
                      </a>
                      <div className="desc">
                        <span className="meta">15, Feb 2018</span>
                        <h2><a href="blog.html">A Japanese Constellation</a></h2>
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-12">
                    <div className="article">
                      <a href="blog.html" className="blog-img">
                        <img className="img-responsive" src="images/img-3.jpg" alt="html5 bootstrap by colorlib.com" />
                        <div className="overlay" />
                        <div className="link">
                          <span className="read">Read more
                          </span></div>
                      </a>
                      <div className="desc">
                        <span className="meta">15, Feb 2018</span>
                        <h2><a href="blog.html">A Japanese Constellation</a></h2>
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="colorlib-testimony">
          <div className="container">
            <div className="row text-center">
              <h2 className="bold">Testimonies</h2>
            </div>
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                <span>Testimonies</span>
                <h2>Clients Says</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="rotate">
                  <h2 className="heading">Says</h2>
                </div>
              </div>
            </div>
            <div className="row animate-box">
              <div className="owl-carousel">
                <div className="item">
                  <div className="col-md-12 text-center">
                    <div className="testimony">
                      <blockquote>
                        <p>"A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <span>" — George Brooks</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-12 text-center">
                    <div className="testimony">
                      <blockquote>
                        <p>"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        <span>" — Daniel Foster</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-12 text-center">
                    <div className="testimony">
                      <blockquote>
                        <p>"When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>
                        <span>" — Liam Jenkins</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
