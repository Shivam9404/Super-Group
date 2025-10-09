"use client";

import React, { useState, useEffect } from 'react';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your enquiry!');
  };

  return (
    <div className="bg-[#0067B1] text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          
          {/* Left Info Section */}
          <div className="lg:w-2/5 mb-12 lg:mb-0">
            <h1 className="text-4xl font-light mb-8">Get in touch</h1>
            <div className="w-1/4 h-0.5 bg-white mb-8"></div>
            <p className="text-xl font-light mb-10">For general enquiries</p>
            <div className="space-y-6 text-lg font-light">
              <p>
                <span className="font-medium block mb-1">Address :</span>
                110, 16th Road, Chembur, Mumbai - 400071
              </p>
              <p>
                <span className="font-medium block mb-1">Phone :</span>
                +91 22 25208822
              </p>
              <p>
                <span className="font-medium block mb-1">Email :</span>
                <a href="mailto:info@supremegroup.co.in" className="hover:text-blue-200 transition">
                  info@supremegroup.co.in
                </a>
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <FormField 
                name="fullName" 
                placeholder="Full name" 
                value={formData.fullName} 
                onChange={handleChange}
              />
              <FormField 
                name="email" 
                placeholder="Email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange}
              />
              <FormField 
                name="company" 
                placeholder="Company" 
                value={formData.company} 
                onChange={handleChange}
              />
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-white text-white focus:outline-none focus:border-blue-400 pb-2 text-xl bg-transparent resize-none"
                  rows={4}
                />
                
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-800 transition duration-300 font-medium"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

// FormField Component with client-safe floating label
interface FormFieldProps {
  name: keyof FormData;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ name, placeholder, type = 'text', value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures we are on client
  }, []);

  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent border-b border-white text-white focus:outline-none focus:border-blue-400 pb-2 placeholder-transparent text-xl font-light peer"
      />
      <label
        htmlFor={name}
        className="absolute left-0 text-xl font-light text-white transition-all duration-300
                   -top-5 peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-white"
        style={{
          top: value || (isClient && isFocused) ? '-20px' : '0',
          fontSize: value || (isClient && isFocused) ? '0.875rem' : '1.25rem',
        }}
      >
        {placeholder}
      </label>
    </div>
  );
};
