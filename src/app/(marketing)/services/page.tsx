import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="flex-grow w-full py-20 flex flex-col justify-center items-center text-center"
        id="services"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          My Services
        </h2>
        <ul className="text-lg md:text-2xl text-gray-700">
          <li>Responsive Web Design</li>
          <li>Front-end Development</li>
          <li>Debugging</li>
        </ul>
      </section>
  
    </div>
  );
};

export default Services;
