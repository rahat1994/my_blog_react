import React from 'react';

// components
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Works from './components/Works.js';
import Blogs from './components/Blogs.js';
import Testimony from './components/Testimony.js';
import Footer from './components/footer.js';


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
        <Blogs />
        <Testimony />
        <Footer />
      </div>
    
    </div>
  );
}

export default App;
