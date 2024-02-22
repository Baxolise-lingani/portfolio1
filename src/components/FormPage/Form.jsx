// TODO: adding firebase as my backend


import React, { useState } from 'react';
import * as validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';

//'Y6LevMnspAAAAAIY7MkzL9m9TY_IbVXjGrjEb_RUn'

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    emailSubject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '', // Clear the specific error for the current input
    }));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      recaptcha: '', // Clear the reCAPTCHA error
    }));
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

    // reCAPTCHA validation
    if (!recaptchaValue) {
      validationErrors.recaptcha = 'Please complete the reCAPTCHA';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Handle successful form submission (e.g., send email)
      console.log('Form submitted successfully:', formData);
    } else {
      setErrors(validationErrors);
    }

    const handleSubmit = async(event) => {
      event.preventDefault();

      //Validate form fiels

      if (Object.keys(validationErrors).length === 0) {
        try{
          const response = await fetch(
            'https://portfolio-2ff8e.cloudfunctions.net/sendEmail',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            }
          );

          if (response.ok) {
            console.log('Form Submitted successfully:', formDate);
          } else{
            console.error('Failed to submit form:', response.statusText);
          }
        
        } catch (error) {
          console.error('Error Submitting form', error);
        }
      } else {
        setErrors(validationErrors);
      }
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
              className={`input ${errors.fullName ? 'error' : ''}`}
            />
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}
          </div>
          <div className="input-box">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              className={`input ${errors.emailAddress ? 'error' : ''}`}
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
              className={`input ${errors.phoneNumber ? 'error' : ''}`}
            />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
          </div>
          <div className="input-box">
            <label htmlFor="emailSubject">Subject</label>
            <input
              type="text"
              id="emailSubject"
              value={formData.emailSubject}
              onChange={handleChange}
              placeholder="Email Subject"
              className={`input ${errors.emailSubject ? 'error' : ''}`}
            />
            {errors.emailSubject && <p className="error-message">{errors.emailSubject}</p>}
          </div>
          <div className="input-box">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols={30}
              rows={10}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`input ${errors.message ? 'error' : ''}`}
            />
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>
          <div className="input-box">
            <ReCAPTCHA
              sitekey="6LevMnspAAAAAIY7MkzL9m9TY_IbVXjGrjEb_RUn"
              onChange={handleRecaptchaChange}
            />
            {errors.recaptcha && <p className="error-message">{errors.recaptcha}</p>}
          </div>
          <input disabled={!recaptchaValue} type="submit" value="Message Me" className="btn-1" />
        </form>
      </div>
    </section>
  );
}
