"use client";
import Banner from "@/components/Banner/Banner";
import RTE from "@/components/RTE/RTE";
import React from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

const CertificateDetail = () => {
  const params = useParams();
  const certificateData = [
    {
      id: 1,
      title: "Sitecore 10 .Net Developer Certification",
      description:
        "Gained deep expertise in Sitecore's CMS platform, including its architecture, APIs, and customization capabilities. Skilled in delivering scalable, secure, and high-performance solutions for complex web applications.",
      image: "/images/sitecore.png",
      issuingOrganizationText: "Issuing organization",
      issuingOrganization: "Sitecore",
      issuedOnText: "Issued on",
      issuedOn: "December 2022",
      credintialUrlText: "Credintial URL",
      credintialUrl: "",
      skills: [
        {
          title: "Sitecore",
        },
      ],
      certificateImage: "/images/sitecore-10.png",
      details:
        "I have developed deep expertise in Sitecore's CMS platform, gaining an in-depth understanding of its architecture, APIs, and extensive customization capabilities. Sitecore’s powerful content management system allows for seamless integration with various web technologies, and I have experience leveraging its flexible architecture to build scalable, secure, and high-performance solutions. My expertise extends to configuring Sitecore’s core components, such as templates, workflows, and content pipelines, to meet the specific needs of complex web applications. Furthermore, I have hands-on experience in extending and customizing Sitecore to enhance its functionality, from creating custom modules and components to implementing unique business logic. Throughout my work, I have focused on delivering solutions that ensure optimal performance, security, and scalability, all while maintaining a smooth user experience. My knowledge of Sitecore allows me to design and implement enterprise-level web applications that can handle large volumes of content and traffic, while remaining flexible to evolving business requirements.",
    },
    {
      id: 2,
      title: "React basic to advanced",
      description:
        "Developed a solid foundation in React.js, understanding core principles such as components, JSX, state, and props. Gained hands-on experience in building simple, dynamic user interfaces and managing application data flow effectively.",
      image: "/images/udemy.jpg",
      issuingOrganizationText: "Issuing organization",
      issuingOrganization: "Udemy",
      issuedOnText: "Issued on",
      issuedOn: "March 2024",
      credintialUrlText: "Credintial URL",
      credintialUrl:
        "https://www.udemy.com/certificate/UC-871a62bd-c4e2-41d6-b919-3e0da8456563/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      skills: [
        {
          title: "React.js",
        },
      ],
      certificateImage: "/images/reactjs.png",
      details:
        "I have developed a strong foundation in React.js, gaining a thorough understanding of its core principles, including components, JSX, state, and props. I have mastered the concept of components, which serve as the building blocks of React applications, enabling the creation of reusable and modular user interface elements. By using JSX, I have learned how to write HTML-like syntax directly in JavaScript, allowing for more intuitive and seamless integration of structure and logic within the UI code. I am well-versed in managing dynamic data within applications through React's state mechanism, ensuring that user interactions or changes in data are reflected in the interface in real-time. Additionally, I have gained proficiency in working with props to efficiently pass data and functionality between components, facilitating communication and promoting reusability. ",
    },
    {
      id: 3,
      title: "Responsive web design",
      description:
        "Gained skills in creating mobile-first, adaptive web designs using HTML5, CSS3, and media queries for seamless user experiences.",
      image: "/images/FreeCodeCamp_logo.png",
      issuingOrganizationText: "Issuing organization",
      issuingOrganization: "FreeCodeCamp",
      issuedOnText: "Issued on",
      issuedOn: "May 2024",
      credintialUrlText: "Credintial URL",
      credintialUrl:
        "https://freecodecamp.org/certification/fcc2ea9475e-1b5f-4686-be02-dd632a19e853/responsive-web-design",
      skills: [
        {
          title: "HTML",
        },
        {
          title: "CSS",
        },
      ],
      certificateImage: "/images/responsive-web-design.png",
      details:
        "I have honed my skills in creating mobile-first, adaptive web designs by utilizing HTML5, CSS3, and media queries to ensure seamless and responsive user experiences across a variety of devices. By adopting a mobile-first approach, I prioritize the design and functionality of the mobile version of a website, and then progressively enhance it for larger screens, ensuring optimal performance and usability regardless of the device size. My expertise in HTML5 and CSS3 allows me to structure content effectively while implementing modern design features such as flexible grids and responsive images. I leverage media queries to adjust the layout, typography, and other visual elements based on the device's screen size, resolution, and orientation, ensuring a consistent and user-friendly experience. This approach enables me to deliver web applications that are both visually appealing and highly functional across smartphones, tablets, and desktops. My focus on accessibility and usability ensures that users have a smooth and engaging interaction with the site, regardless of the platform or screen size they are using. ",
    },
    {
      id: 4,
      title: "Sitecore XM Cloud",
      description:
        "Demonstrated proficiency in implementing headless architectures with Sitecore XM Cloud, integrating modern front-end frameworks with Sitecore's robust backend for seamless digital experiences.",
      image: "/images/sitecore.png",
      issuingOrganizationText: "Issuing organization",
      issuingOrganization: "Sitecore",
      issuedOnText: "Issued on",
      issuedOn: "March 2024",
      credintialUrlText: "Credintial URL",
      credintialUrl:
        "https://www.credly.com/badges/dd8b9df3-73e4-48d3-8c44-a59f15b0d732/linked_in_profile",
      skills: [
        {
          title: "Sitecore",
        },
      ],
      certificateImage: "/images/sitecore-xm-cloud.png",
      details:
        "I have demonstrated proficiency in implementing headless architectures with Sitecore XM Cloud, effectively integrating modern front-end frameworks like React and Next.js with Sitecore's powerful backend to deliver seamless and dynamic digital experiences. By leveraging Sitecore XM Cloud's headless capabilities, I am able to decouple the content management system from the front-end presentation, enabling the creation of highly flexible, scalable, and customizable web applications. I utilize React, a popular JavaScript library, to build interactive user interfaces that are both dynamic and responsive. Alongside React, I integrate Next.js to optimize the development process with its powerful features such as server-side rendering (SSR) and static site generation (SSG), ensuring fast load times and improved SEO performance. To further enhance the visual and layout experience, I incorporate Tailwind CSS, a utility-first CSS framework, to rapidly design and style components while maintaining a consistent, clean, and responsive design system. Additionally, I use TypeScript to ensure type safety and improved code quality, making the development process more efficient and reducing the likelihood of runtime errors. This combination of Sitecore XM Cloud with modern frameworks and technologies allows me to create headless, scalable digital experiences that are highly performant, maintainable, and adaptable to the evolving needs of users and businesses.",
    },
  ];

  const matchingCertificate = certificateData.find(
    (x) => x.id.toString() === params.certificateId?.toString()
  );

  console.log("matchingCertificate:", matchingCertificate);

  const certificateDetailBanner = {
    title: matchingCertificate?.title,
    description: matchingCertificate?.description,
    image: matchingCertificate?.image,
  };

  if (!matchingCertificate) {
    notFound();
  }

  return (
    <>
      <Banner fields={certificateDetailBanner} />
      <RTE certificate={matchingCertificate} />
    </>
  );
};

export default CertificateDetail;
