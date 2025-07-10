import React from "react";
import SectionTitle from "../../Component/SectionTitle";
import {
  FaCalendarAlt,
  FaBullhorn,
  FaChalkboardTeacher,
  FaUserShield,
  FaChartLine,
  FaClipboardList,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Course Routine Management",
      description:
        "Easily create and access course schedules with real-time updates.",
      icon: <FaClipboardList className="text-3xl text-blue-500" />,
    },
    {
      title: "Notices & Announcements",
      description:
        "Stay updated with the latest news and alerts from your university.",
      icon: <FaBullhorn className="text-3xl text-blue-500" />,
    },
    {
      title: "Event Scheduling",
      description:
        "Plan, manage, and get reminded about upcoming university events.",
      icon: <FaCalendarAlt className="text-3xl text-blue-500" />,
    },
    {
      title: "Faculty Dashboard",
      description:
        "Dedicated tools for faculty to manage students and academic tasks.",
      icon: <FaChalkboardTeacher className="text-3xl text-blue-500" />,
    },
    {
      title: "Student Progress Tracking",
      description:
        "Monitor academic performance and track achievements easily.",
      icon: <FaChartLine className="text-3xl text-blue-500" />,
    },
    {
      title: "Secure Access Control",
      description:
        "Role-based login for students, teachers, and admins with data safety.",
      icon: <FaUserShield className="text-3xl text-blue-500" />,
    },
  ];

  return (
    <section id="features" className=" py-16 px-4 md:px-12">
      <SectionTitle
        title="Powerful Features for Every Campus Need"
        subtitle="Simplifying academics, events, and communication in one smart system."
      />

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:transition scale-105 border border-gray-200"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
