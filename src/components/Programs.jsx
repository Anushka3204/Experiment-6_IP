import React from 'react';
import './index.css'; // Import CSS

const Programs = () => (
  <div className="container my-5" id="programs">
    <h2 className="section-heading text-center">Our Programs</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card program-card">
          <img src="./file (2).jpg" className="card-img-top" alt="Program Image 1" />
          <div className="card-body">
            <h5 className="card-title">B.Tech Computer Science</h5>
            <p className="card-text">Explore the field of Computers and it's origin</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card program-card">
          <img src="./file (3).jpg" className="card-img-top" alt="Program Image 2" />
          <div className="card-body">
            <h5 className="card-title">B.Tech Information Technology</h5>
            <p className="card-text">Dive into the world of technology and innovation with our top-notch IT program.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card program-card">
          <img src="./file (4).jpg" className="card-img-top" alt="Program Image 3" />
          <div className="card-body">
            <h5 className="card-title">B.Tech Artificial Intelligence</h5>
            <p className="card-text">Explore the cutting-edge field of engineering with hands-on experience.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Programs;
