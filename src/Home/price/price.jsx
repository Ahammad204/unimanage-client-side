import React from "react";
import SectionTitle from "../../Component/SectionTitle";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "per month",
      features: [
        "Access to basic features",
        "Course routine viewing",
        "Public event listing",
      ],
      isPopular: false,
    },
    {
      name: "Standard",
      price: "$9",
      period: "per month",
      features: [
        "Full access to all courses",
        "Notice board integration",
        "Student dashboard",
        "Join private events",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      price: "$19",
      period: "per month",
      features: [
        "Everything in Standard",
        "Admin tools access",
        "Analytics dashboard",
        "Priority support",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="price" className="bg-white py-16 px-4 md:px-12">
      <SectionTitle
        title="Flexible Pricing for Every Need"
        subtitle="Whether you're a student, faculty, or institution — we have a plan for you."
      />

      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border  shadow-md p-8 transition-transform hover:scale-105 ${
              plan.isPopular
                ? "border-blue-500 shadow-lg"
                : "border-gray-200"
            }`}
          >
            {plan.isPopular && (
              <p className="text-sm text-blue-600 font-semibold mb-2">
                Most Popular
              </p>
            )}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
            <div className="text-4xl font-extrabold text-blue-500 mb-1">
              {plan.price}
              <span className="text-base font-normal text-gray-600">/{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-3 text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i}>✔️ {feature}</li>
              ))}
            </ul>
            <button
              className="mt-6 cursor-pointer w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {plan.name === "Free" ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
