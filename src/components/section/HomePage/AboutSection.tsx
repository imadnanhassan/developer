
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className=" text-white adnan_container mx-auto bg-[#070707] h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            About me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Professional Problem <br />
            <span className="text-primary">Solutions</span> For Digital Products
          </h1>
          <p className="text-gray-400 mt-4 mb-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            praesentium voluptatum corrupti quos dolores quas molestias
            excepturi sint occaecati cupiditate provident qui officia deserunt
            mollitia animi, id est laborum et dolorum.
          </p>

          {/* Skills List */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <span className="text-primary mr-2">✔</span>
              <p>Search Engine optimizer</p>
            </div>
            <div className="flex items-center">
              <span className="text-primary mr-2">✔</span>
              <p>MERN Stack</p>
            </div>
            <div className="flex items-center">
              <span className="text-primary mr-2">✔</span>
              <p>WordPress Developer</p>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="flex items-center bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition">
              <span className="mr-2">📧</span> Email Us
              <span className="block text-gray-400 ml-2">
                abulhassan.dev@gmail.com
              </span>
            </button>
            <button className="flex items-center bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition">
              <span className="mr-2">📞</span> Make A Call
              <span className="block text-gray-400 ml-2">+880 160 212 038</span>
            </button>
          </div>
        </div>

        {/* Right Side: Placeholder for Image */}
        <div className="mt-8 md:mt-0">
          <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            <img
              src="https://codehaven.io/wp-content/uploads/2024/03/adnan-seo-expert.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;