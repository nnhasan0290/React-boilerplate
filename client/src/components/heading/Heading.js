import React from 'react';
import './heading.css';

function Heading() {
  return (
    <nav className="navbar-area">
      <div className="logo-area">
        <img src="" alt="Logo area" />
      </div>
      <div className="menu">
        <a href="#home" className="menu-item">Home</a>
        <a href="#about" className="menu-item">About me</a>
        <a href="#resume" className="menu-item">Resume</a>
        <a href="#test" className="menu-item">Testimonial</a>
        <a href="#contact" className="menu-item">Contact me</a>
        <div className="menu-icon">
          <div className="bar-1" />
          <div className="bar-2" />
          <div className="bar-3" />
        </div>
      </div>

    </nav>
  );
}

export default Heading;
