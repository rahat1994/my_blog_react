import React from 'react';
import main_img from '../images/about.jpg';
// import main_img_2 from './images/about-2.jpg';
import img_1 from '../images/img-1.jpg';

// import './main.js';
export default function Blogs() {
  return (
    
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
                        <img className="img-responsive" src={img_1}/>
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
                        <img className="img-responsive" src={img_1}/>
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
                        <img className="img-responsive" src={img_1}/>
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
        
           
  );
}


