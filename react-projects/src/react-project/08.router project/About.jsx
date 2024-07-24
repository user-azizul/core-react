import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <img
        src="/images/about.jpg"
        alt="About"
        className="mx-auto rounded-lg shadow-lg"
      />
      <p className="mt-4">This is the About page.</p>
    </div>
  );
};

export default About;
