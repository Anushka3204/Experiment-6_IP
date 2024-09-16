import React from 'react';
import './index.css'; // Import CSS

const Contact = () => (
  <div className="container my-5" id="contact">
    <h2 className="section-heading text-center">Get in Touch</h2>
    <p className="text-center">Have any questions? We're here to help. Contact us to learn more about our programs, admissions, and campus life.</p>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
