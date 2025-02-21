"use client";
import React, { useState, useEffect } from "react";
import Certificate from "./Certificate";
import Link from "next/link";
import Image from "next/image";
import "material-symbols";

const CertificateLanding = () => {
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

  const [viewMode, setViewMode] = useState("card"); // Default view mode is 'card'
  const [isMounted, setIsMounted] = useState(false); // To track if the component is mounted

  // On mount, check if there's a saved viewMode in sessionStorage
  useEffect(() => {
    setIsMounted(true); // Component is mounted on the client
    const savedViewMode = sessionStorage.getItem("viewMode");
    if (savedViewMode) {
      setViewMode(savedViewMode); // Use saved viewMode if available
    }
  }, []);

  // Save the selected viewMode to sessionStorage whenever it changes
  useEffect(() => {
    if (isMounted) {
      sessionStorage.setItem("viewMode", viewMode);
    }
  }, [viewMode, isMounted]);

  // Clear sessionStorage on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const iconStyle = (mode: string) => ({
    backgroundColor: viewMode === mode ? "rgb(18 32 46 / 1)" : "", // Blue if selected, white otherwise
    color: viewMode === mode ? "white" : "rgb(18 32 46 / 1)", // White text if selected, black otherwise
  });

  // Prevent rendering until component is mounted on the client
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="lg:py-10 lg:px-20 lg:pt-10 lg:my-10 lg:mx-10 box-border m-10">
        <div className="icons">
          <span
            className={`material-symbols-outlined transition-colors duration-300`}
            onClick={() => setViewMode("card")}
            title="card view"
            style={iconStyle("card")}
          >
            cards
          </span>
          <span
            className="material-symbols-outlined transition-colors duration-300"
            onClick={() => setViewMode("list")}
            title="list view"
            style={iconStyle("list")}
          >
            list
          </span>
        </div>
        {viewMode === "card" ? (
          <div
            className={`certificate-cards grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm-grid-cols-1`}
          >
            {certificateData.map((data) => (
              <Certificate
                key={data.id}
                id={data.id}
                title={data.title}
                description={data.description}
                image={data.image}
              />
            ))}
          </div>
        ) : (
          <div className={`certificate-landing-container`}>
            {certificateData.map((data) => (
              <div className="cl-card-container flex rounded-3xl" key={data.id}>
                <div className="cl-image certificate-img px-[15px]">
                  <Image
                    src={data.image}
                    alt={data.title}
                    height={250}
                    width={250}
                    priority
                  />
                </div>
                <div className="cl-card-details">
                  <Link href={`/certificates/${data.id}`}>
                    <h2>{data.title}</h2>
                  </Link>
                  <p>{data.description}</p>
                  <Link
                    href={`/certificates/${data.id}`}
                    className="cl-see-more-btn primary-button"
                  >
                    <button>See more</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CertificateLanding;
