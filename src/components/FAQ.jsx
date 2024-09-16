import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => (
  <div className="container my-5" id="faq">
    <h2 className="section-heading text-center">Frequently Asked Questions</h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are the admission requirements?</Accordion.Header>
        <Accordion.Body>
          Our college requires a high school diploma or equivalent, along with standardized test scores and a completed application form.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What financial aid options are available?</Accordion.Header>
        <Accordion.Body>
          We offer a variety of scholarships, grants, and student loan options to help make education affordable.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How can I apply for on-campus housing?</Accordion.Header>
        <Accordion.Body>
          To apply for on-campus housing, please submit a housing application through our student portal after your admission is confirmed.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
);

export default FAQ;
