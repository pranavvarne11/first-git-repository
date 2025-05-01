import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/submit", formData);
    alert("User submitted");
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
