import React, { useState } from "react";
import SectionTitle from "../../Component/SectionTitle";

const JoinWaitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Student",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("http://localhost:5000/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Successfully joined the waitlist!");
        setFormData({ name: "", email: "", role: "Student" });
      } else {
        setMessage("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error.");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-12 bg-gray-50">
      <SectionTitle
        title="Join Our Waitlist"
        subtitle="Be the first to experience the smart university platform."
      />

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8 space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-lg"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-lg"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="role"
          className="w-full border border-gray-300 p-3 rounded-lg"
          value={formData.role}
          onChange={handleChange}
        >
          <option>Student</option>
          <option>Faculty</option>
          <option>Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500
           text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Join Waitlist
        </button>

        {message && <p className="text-center mt-4 text-gray-700">{message}</p>}
      </form>
    </section>
  );
};

export default JoinWaitlist;
