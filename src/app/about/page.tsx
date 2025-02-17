import Banner from "@/components/Banner/Banner";
import Promo from "@/components/Promo/Promo";
import React from "react";

const about = () => {
  const AboutBanner = {
    title: "About me",
    description: "",
    image: "",
  };
  const PromoData1 = {
    title: "DX Enginner",
    description: `I am Dhruvi Patel, a certified Digital Experience (DX) Engineer with over 2 years of hands-on experience in developing scalable and efficient digital solutions using Sitecore JSS and Headless architectures. My expertise spans backend development with C# and .NET MVC, as well as frontend technologies such as React, Next.js, TypeScript, and Tailwind CSS, combined with advanced Sitecore concepts (XP, XM, XM Cloud) to deliver exceptional user experiences.

I have a strong academic foundation in Computer Engineering and have progressively advanced my career from an Associate Backend Developer Intern to a DX Engineer. My journey reflects my adaptability, technical proficiency, and a steadfast commitment to quality.

I thrive in collaborative environments, excelling in time management and problem-solving, while driving innovation to enhance digital experiences. I’m also passionate about sharing knowledge, mentoring, and troubleshooting complex Sitecore challenges.

When I’m not coding, I contribute to the tech community through my blog and engage with professionals on LinkedIn.

Feel free to reach out for any collaboration opportunities or to discuss your next big idea!`,
    alignImage: "right",
    image: "/images/sitecore.png",
    primaryCTALink: "https://www.linkedin.com/in/dhruvi-patel-565285190",
    primaryCTAText: "LinkedIn",
    secondaryCTALink: "https://dhruvipatelblog9.wordpress.com/",
    secondaryCTAText: "Blogs",
  };
  // const PromoData2 = {
  //   title: "About me",
  //   description:
  //     "I am a dedicated backend developer with a strong expertise in Sitecore development. I am certified in Sitecore 10 and Sitecore XM Cloud, showcasing my commitment to mastering the latest advancements in the Sitecore ecosystem. With a deep understanding of content management systems and scalable backend solutions, I thrive on building robust, efficient, and innovative digital experiences. Whether optimizing performance, integrating APIs, or crafting custom solutions, I am passionate about leveraging my skills to deliver exceptional results. Let's build something amazing together!",
  //   alignImage: "left",
  //   image: "/images/sitecore.png",
  // };
  return (
    <>
      <Banner fields={AboutBanner} />
      <Promo fields={PromoData1} />
      {/* <Promo
        title={PromoData2.title}
        description={PromoData2.description}
        image={PromoData2.image}
        alignImage={PromoData2.alignImage}
      /> */}
    </>
  );
};

export default about;
