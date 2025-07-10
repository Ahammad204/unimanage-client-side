import React from "react";
import SectionTitle from "../../Component/SectionTitle";
import banner from "../../assets/Banner/aboutUs.png"

const About = () => {
  const features = [
    "📅 Manage Courses & Routines",
    "📢 Stay Updated on Notices",
    "🧑‍💻 Student-Friendly Interface",
    "🚀 Event & Activity Tracker",
  ];
  return (
    <section id="about" className="bg-white py-16 px-4 md:px-12">
      {/* Section heading */}
      <SectionTitle
        title="Smarter Campus. Simpler Life."
        subtitle="We simplify academic life by connecting students, teachers, and admins in one smart platform."
      />

      {/* Content layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <ul className="space-y-6">
            {features.map((item, i) => (
              <li
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-md
                 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer text-xl text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={banner}
            alt="About Us"
            className="rounded-lg shadow-md hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
