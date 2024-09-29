import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are imported
import '../components/Navbar.css'; // Import custom styles

const Navbar = () => {
    const navbarStyle = {
        backgroundColor: '#110b7d', // Teal color
        padding: '1rem',
        fontFamily: 'Poppins, sans-serif' // Use Poppins font
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        padding: '0.5rem 1rem', // Add padding to links
    };

    const linkHoverStyle = {
        color: '#0B7D7D' // Light hover color
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={navbarStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={linkStyle}>
                    Vivekanand Education Society's Institute of Technology
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> {/* Align items to the right */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                                style={linkStyle}
                                onMouseOver={e => e.target.style.color = linkHoverStyle.color}
                                onMouseOut={e => e.target.style.color = linkStyle.color}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/learn"
                                style={linkStyle}
                                onMouseOver={e => e.target.style.color = linkHoverStyle.color}
                                onMouseOut={e => e.target.style.color = linkStyle.color}
                            >
                                Learn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
