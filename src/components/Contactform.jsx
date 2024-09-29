// src/components/ContactForm.js

import React from 'react';

const ContactForm = ({ formData, handleSubmit, setFormData }) => {
    return (
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                    className="form-control"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default ContactForm;
