import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { db } from '../../config/firebase.js'; 
import { collection, addDoc } from 'firebase/firestore';
import image2 from '../../assets/icons-mail.svg';
import image1 from '../../assets/icons-phone.svg';
import Button from '../button/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone) errors.phone = 'Phone is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        // Add form data to Firestore
        await addDoc(collection(db, 'messages'), formData);
        
        setErrors({});
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
        toast.success('Message sent successfully!');
      } catch (error) {
        toast.error('Failed to send message. Please try again.');
        console.error('Error adding document: ', error);
      }
    }
  };

  return (
    <>
      <section className="flex gap-2 p-20 py-40 justify-around">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src={image1} alt="Phone Icon" />
              <h1 className="font-poppins font-medium text-base">Call To Us</h1>
            </div>
            <h3 className="font-poppins font-normal text-sm">
              We are available 24/7, 7 days a week.
            </h3>
            <h3 className="font-poppins font-normal text-sm">
              Phone: +8801611112222
            </h3>
          </div>
          <hr className="" />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src={image2} alt="Mail Icon" />
              <h1 className="font-poppins font-medium text-base">Write To Us</h1>
            </div>
            <h3 className="font-poppins font-normal text-sm">
              Fill out our form and we will contact you within 24 hours.
            </h3>
            <h3 className="font-poppins font-normal text-sm">
              Emails: customer@exclusive.com
            </h3>
            <h3 className="font-poppins font-normal text-sm">
              Emails: support@exclusive.com
            </h3>
          </div>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <div>
              <input
                className="bg-Secondary py-4 px-3 rounded"
                placeholder="Your Name *"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="text-Secondary2">{errors.name}</div>}
            </div>
            <div>
              <input
                className="bg-Secondary py-4 px-3 rounded"
                placeholder="Your Email *"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="text-Secondary2">{errors.email}</div>}
            </div>
            <div>
              <input
                className="bg-Secondary py-4 px-3 rounded"
                placeholder="Your Phone *"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="text-Secondary2">{errors.phone}</div>}
            </div>
          </div>
          <div>
            <textarea
              className="bg-Secondary py-4 px-3 w-full rounded max-h-52 min-h-40"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <div className="text-Secondary2">{errors.message}</div>}
          </div>
          <div className="flex justify-end">
            <Button className="bg-Secondary2 text-Text" type="submit">Send Message</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
