"use client";

import { useState } from "react";
import { sendWelcomeEmail } from "@/app/contact/email";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let valid = true;
    const errors = { email: "", phoneNumber: "", message: "" };

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
      valid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission

      try {
        await sendWelcomeEmail(
          formData.email,
          formData.phoneNumber,
          formData.message
        );

        // Reset form
        setFormData({
          email: "",
          phoneNumber: "",
          message: "",
        });

        alert("Email sent successfully!");
      } catch (error) {
        alert("Failed to send email. Please try again later.");
        console.error(error);
      }
    }
  };

  return (
    <main className="px-standard w-full md:max-w-[750px] md:mx-auto md:px-0  space-y-block">
      <form onSubmit={handleSubmit} className="text-faded space-y-small">
        <h2 className="text-mid-title font-bold text-black-mid">
          Send a message
        </h2>
        <div className="emailSection space-y-small">
          <p className="text-sub-para">Email</p>
          <input
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex: contact@cosognepal.org"
            className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="phoneNumberSection space-y-small">
          <p className="text-sub-para">Phone Number</p>
          <input
            required
            name="phoneNumber"
            type="text"
            onChange={handleChange}
            value={formData.phoneNumber}
            placeholder="Ex: 9866776670"
            className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="textAreaSection space-y-small">
          <p className="text-sub-para">Message</p>
          <textarea
            rows={60}
            cols={30}
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-md w-full h-44 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
            placeholder="Ex: Hey CoSoG Nepal thank you for your work I love what you are doing keep doing the same work..."
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        <div className="btn w-full flex text-para">
          <button
            type="submit"
            className={` h-12 rounded-md w-full md:w-[40%] overflow-hidden px-5 py-3 bg-blue-blue text-white hover:bg-primary transition `}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="socialsSection text-faded space-y-small">
        <h2 className="text-mid-title font-bold text-black-mid">Our Socials</h2>
        <p className="text-sub-para font-medium text-black-light space-x-[5px]">
          You can connect with us via our&nbsp;
          <a
            href="https://www.facebook.com/cosognepal"
            className="text-blue-blue"
            target="blank"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/cosognepal"
            className=" text-blue-blue"
            target="blank"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/cosognepal/"
            className=" text-blue-blue"
            target="blank"
          >
            Linkedin
          </a>
          &nbsp;and
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cosognepal@gmail.com"
            className="text-blue-blue"
            target="_blank"
          >
            Gmail
          </a>
          .
        </p>
      </div>

      <div className="contactSection space-y-small">
        <h2 className="text-mid-title font-bold text-black-mid">
          Contact Number
        </h2>
        <p className="text-sub-para font-medium text-black-light">
          You can connect with us via our&nbsp;
          <a
            href="tel:+9779863196247"
            className="text-blue-blue"
            target="blank"
          >
            +977 9863196247
          </a>
          , this contact number is available for contact during office time of
          Nepal.
        </p>
      </div>

      <div className="organizationalMailSection space-y-small">
        <h2 className="text-mid-title font-bold text-black-mid">
          Organization Email
        </h2>
        <p className="text-sub-para font-medium text-black-light">
          You can get in touch by mailing us at:
          <a
            href="mailto:contact@cosognepal.org"
            className="text-blue-blue"
            target="blank"
          >
            &nbsp;contact@cosognepal.org
          </a>
        </p>
      </div>
    </main>
  );
};

export default ContactPage;
