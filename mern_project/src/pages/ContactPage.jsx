import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
   
      const response = await axios.post("http://localhost:3001/api/contact", formData);
      
      setSuccessMessage("Message sent successfully!");
      setErrorMessage(""); 
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Error sending message, please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        
        {errorMessage && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}
        
        {successMessage && (
          <div className="alert alert-success text-center" role="alert">
            {successMessage}
          </div>
        )}

        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

