"use client";
import React from "react";
import Certificate from "./Certificate";
import Link from "next/link";

const Certificates = () => {
  const certificateData = [
    {
      id: 1,
      title: "Sitecore 10 .Net Developer Certification",
      description:
        "Gained deep expertise in Sitecore's CMS platform, including its architecture, APIs, and customization capabilities. Skilled in delivering scalable, secure, and high-performance solutions for complex web applications.",
      image: "/images/sitecore.png",
    },
    {
      id: 2,
      title: "React basic to advanced",
      description:
        "Developed a solid foundation in React.js, understanding core principles such as components, JSX, state, and props. Gained hands-on experience in building simple, dynamic user interfaces and managing application data flow effectively.",
      image: "/images/udemy.jpg",
    },
    {
      id: 3,
      title: "Responsive web design",
      description:
        "Gained skills in creating mobile-first, adaptive web designs using HTML5, CSS3, and media queries for seamless user experiences.",
      image: "/images/FreeCodeCamp_logo.png",
    },
    {
      id: 4,
      title: "Sitecore XM Cloud",
      description:
        "Demonstrated proficiency in implementing headless architectures with Sitecore XM Cloud, integrating modern front-end frameworks with Sitecore's robust backend for seamless digital experiences.",
      image: "/images/sitecore.png",
    },
  ];

  return (
    <div className="certificates-container lg:mt-25 lg:mx-200 lg:mb-25 m-10 w-auto">
      <div className="certificates-details">
        <div className="certificates-text">
          <h2 className="title text-4xl font-black">Certificates</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            voluptatum consectetur! Neque, asperiores. Quos, eius reiciendis
            officia distinctio vitae placeat facilis laborum sit, suscipit
            exercitationem temporibus repudiandae. Provident, voluptates sit?
          </p> */}
        </div>
      </div>
      <div
        className={`certificate-cards grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm-grid-cols-1`}
      >
        {certificateData.map((data) => {
          return (
            <Certificate
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
              image={data.image}
            />
          );
        })}
      </div>
      <div className="view-all-btn">
        <Link href="/certificates" className="view-all-btn primary-button">
          <button>View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Certificates;
