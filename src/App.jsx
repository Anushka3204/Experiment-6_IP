import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn'; // Make sure this path is correct
import Navbar from './components/Navbar'; // Assuming you have a Navbar component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
            </Routes>
        </Router>
    );
};

export default App;
