// TODO: adding firebase as my backend


import React, { useState, useRef } from 'react';
import * as validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';



export default function Form() {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    emailSubject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!form.fullName.trim()) {
      validationErrors.fullName = 'Full name is required';
    }

    if (!validator.isEmail(form.emailAddress)) {
      validationErrors.emailAddress = 'Please enter a valid email address';
    }

    if (!validator.isMobilePhone(form.phoneNumber, 'any', { strictMode: false })) {
      validationErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!form.emailSubject.trim()) {
      validationErrors.emailSubject = 'Subject is required';
    }

    if (!form.message.trim()) {
      validationErrors.message = 'Message is required';
    }

    if (!recaptchaValue) {
      validationErrors.recaptcha = 'Please complete the reCAPTCHA';
    }

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        console.log('Sending email...');

        // Use Email.js to send the email
        await emailjs.send(
          'service_qooifte', // Your Email.js service ID
          'template_123tdng', // Your Email.js template ID
          {
            from_fullName: form.fullName,
            to_fullName: 'Baxolise Lingani',
            from_emailAddress: form.emailAddress,
            to_emailAddress: 'baxoliselingani22@gmail.com', // Recipient's email address
            phoneNumber: form.phoneNumber,
            emailSubject: form.emailSubject,
            message: form.message,
          },
          'mA9CDDXbQC9tDPKB3' // Your Email.js user ID
        );

        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          fullName: '',
          emailAddress: '',
          phoneNumber: '',
          emailSubject: '',
          message: '',
        });
      } catch (error) {
        setLoading(false);
        console.error('Error submitting form:', error);
        alert('Something went wrong. Please try again.');
      }
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
              value={form.fullName}
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
              value={form.emailAddress}
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
              value={form.phoneNumber}
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
              value={form.emailSubject}
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
              value={form.message}
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

