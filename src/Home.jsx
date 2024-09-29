import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/Contactform'; // Import ContactForm

// Import carousel images
import carousel1 from './assets/carousel1.png';
import carousel2 from './assets/carousel2.jpg';
import carousel3 from './assets/carousel3.jpg';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const programs = [
        { id: 1, title: "Engineering", description: "Our engineering programs are world-class with hands-on projects." },
        { id: 2, title: "Arts", description: "Explore creative and performing arts programs." },
        { id: 3, title: "Science", description: "Our science programs foster innovation and research." }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent from ${formData.name} with email ${formData.email}: ${formData.message}`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Navbar />
            <div
                className="container my-5"
                style={{
                    paddingTop: '80px',
                    fontFamily: 'Poppins, sans-serif',
                    backgroundColor: '#e0f7fa' // Very light blue color
                }}
            >
                {/* Carousel Section */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carousel1} className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel2} className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel3} className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* About Section */}
                <h2 id="about" className="mt-5 text-center">About Our College</h2>
                <p className="text-center">Our college is dedicated to providing a top-notch education and fostering a community of growth and learning...</p>
                <div className="text-center">
                    <Link to="/learn">
                        <button className="btn btn-primary">Learn More</button>
                    </Link>
                </div>

                {/* Programs Section */}
                <h2 id="programs" className="mt-5 text-center">Our Programs</h2>
                <div className="row">
                    {programs.map((program) => (
                        <div className="col-md-4 mb-3" key={program.id}>
                            <div className="card text-center">
                                <img src="src/assets/file (2).jpg" className="card-img-top" alt={program.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{program.title}</h5>
                                    <p className="card-text">{program.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <h2 id="contact" className="mt-5 text-center">Contact Us</h2>
                <ContactForm formData={formData} handleSubmit={handleSubmit} setFormData={setFormData} /> {/* Use ContactForm */}
            </div>
            <Footer />
        </>
    );
};

export default Home;
