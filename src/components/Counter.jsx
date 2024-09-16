import React from 'react';
import './index.css'; // Import CSS

const Counter = () => (
  <div className="container my-5">
    <div className="row text-center">
      <div className="col-md-4 counter">
        <span className="counter-number">10,000+</span>
        <p className="counter-label">Students Enrolled</p>
      </div>
      <div className="col-md-4 counter">
        <span className="counter-number">50+</span>
        <p className="counter-label">Programs Offered</p>
      </div>
      <div className="col-md-4 counter">
        <span className="counter-number">100+</span>
        <p className="counter-label">Faculty Members</p>
      </div>
    </div>
  </div>
);

export default Counter;
