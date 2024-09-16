import React from 'react';
import './index.css'; // Import CSS

const Testimonials = () => (
  <div className="container my-5" id="testimonials">
    <h2 className="section-heading text-center">What Our Students Say</h2>
    <div id="testimonialCarousel" className="carousel slide testimonials" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <p>"The faculty here are extremely supportive and always encourage us to reach our full potential!"</p>
          <h5>- Sakshi Kulkarni, Business Administration</h5>
        </div>
        <div className="carousel-item">
          <p>"I've learned so much and made lifelong friends in the process. It's been an amazing journey."</p>
          <h5>- Rahul, Computer Science</h5>
        </div>
        <div className="carousel-item">
          <p>"The hands-on projects and internships have given me the skills I need to succeed in my career."</p>
          <h5>- Anushka Shahane, Engineering</h5>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

export default Testimonials;
