import React from 'react';
import { Link } from 'react-router-dom';

const Learn = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card text-center" style={{ maxWidth: '600px', border: '2px solid #0B7D7D', borderRadius: '15px', transition: 'transform 0.2s', backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-5">
                    <h2 className="mb-4">Learn More About Our College</h2>
                    <p className="lead mb-4">
                        Our college offers a wide variety of programs, world-class faculty, and state-of-the-art facilities. We believe in holistic development, ensuring that students receive the best educational experience.
                    </p>
                    
                    {/* Additional Content */}
                    <h4 className="mt-4">Programs Offered</h4>
                    <ul className="list-unstyled">
                        <li><strong>Engineering:</strong> Cutting-edge technology and research.</li>
                        <li><strong>Arts:</strong> Explore your creativity and talent.</li>
                        <li><strong>Science:</strong> Engage in groundbreaking research.</li>
                    </ul>
                    


                    <Link to="/">
                        <button className="btn btn-primary mt-4" style={{ transition: 'background-color 0.3s', borderRadius: '25px' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0a5e5e'} onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0B7D7D'}>
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Learn;
