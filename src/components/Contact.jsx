import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to the backend server
      await axios.post('http://localhost:5000/api/send-email', { name, email, message });
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('An error occurred while sending the email. Please try again later.');
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <p className='Email'>amritadhikari.dev@gmail.com</p>
      <p className='Comment'>Feel free to contact me with any inquiries or questions!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you for your message! We'll get back to you soon.</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Contact;
