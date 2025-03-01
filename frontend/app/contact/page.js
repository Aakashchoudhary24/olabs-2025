'use client';
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import '../../styles/contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        try {
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>Have questions about our online labs? We're here to help!</p>
                </div>
                
                <div className="contact-content">
                    <div className="contact-form-container">
                        <h2>Send Us a Message</h2>
                        {submitStatus === 'success' && (
                            <div className="success-message">
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="error-message">
                                There was an error sending your message. Please try again.
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>
                    
                    <div className="contact-info">
                        <h2>Other Ways to Reach Us</h2>
                        
                        <div className="info-item">
                            <h3>Email</h3>
                            <p>support@olabs.edu</p>
                        </div>
                        
                        <div className="info-item">
                            <h3>Response Time</h3>
                            <p>We aim to respond to all inquiries within 24-48 hours during business days.</p>
                        </div>
                        
                        <div className="info-item">
                            <h3>Frequently Asked Questions</h3>
                            <ul className="faq-list">
                                <li>
                                    <details>
                                        <summary>How do I access the virtual labs?</summary>
                                        <p>You can access all labs directly through our platform after logging in. Click on the subject card from the homepage.</p>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>Are the labs free to use?</summary>
                                        <p>Yes, all of our basic labs are free to use. Premium features may require a subscription.</p>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>Can I use OLabs for my classroom?</summary>
                                        <p>Absolutely! We offer special packages for educators and institutions. Contact us for more details.</p>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}