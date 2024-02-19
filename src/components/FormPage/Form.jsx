import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    emailSubject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.id]: '', // Clear the specific error for the current input
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    const validationErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      validationErrors.fullName = 'Full name is required';
    }

    // Email Address validation
    if (!validator.isEmail(formData.emailAddress)) {
      validationErrors.emailAddress = 'Please enter a valid email address';
    }

    // Phone Number validation
    if (!validator.isMobilePhone(formData.phoneNumber, 'any', { strictMode: false })) {
      validationErrors.phoneNumber = 'Please enter a valid phone number';
    }

    // Email Subject validation
    if (!formData.emailSubject.trim()) {
      validationErrors.emailSubject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Handle successful form submission (e.g., send email)
      console.log('Form submitted successfully:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Let's Work <span>Together</span></h2>
      <div className="form-container">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={errors.fullName ? 'error' : ''}
            />
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              className={errors.emailAddress ? 'error' : ''}
            />
            {errors.emailAddress && <p className="error-message">{errors.emailAddress}</p>}
          </div>
          <div className="input-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className={errors.phoneNumber ? 'error' : ''}
            />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
            <label htmlFor="emailSubject">Subject</label>
            <input
              type="text"
              id="emailSubject"
              value={formData.emailSubject}
              onChange={handleChange}
              placeholder="Email Subject"
              className={errors.emailSubject? 'error' : ''}
            />
            {errors.emailSubject && <p className="error-message">{errors.emailSubject}</p>}
          </div> 
          <div className="input-box">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              cols={"30"}
              rows={"10"}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={errors.message ? 'error' : ''}
            >
            </textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          
          </div>
          {/* ... rest of the form fields ... */}
          <input type="submit" value="Message Me" className="btn-1" />
        </form>
      </div>
    </section>
  );
}
