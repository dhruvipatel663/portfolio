import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel/Carousel";
import Certificates from "@/components/Certifications/Certificates";
import Skills from "@/components/Skills/Skills";
import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
  const HomeBanner = {
    title: "I'm Dhruvi Patel - DX Enginner",
    description: `I am a dedicated backend developer with a strong expertise in Sitecore development. I am certified in Sitecore 10 and Sitecore XM Cloud, showcasing my commitment to mastering the latest advancements in the Sitecore ecosystem. With a deep understanding of content management systems and scalable backend solutions, I thrive on building robust, efficient, and innovative digital experiences. Whether optimizing performance, integrating APIs, or crafting custom solutions, I am passionate about leveraging my skills to deliver exceptional results.
  Let's build something amazing together!`,
    // "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et soluta labore odio cum. Possimus necessitatibus cupiditate perspiciatis illum aspernatur facere rem ratione, ad molestias deserunt at, officiis, accusantium libero unde?",
    image: "/images/IMG_20240725_230252.jpg",
  };
  const sliderData = {
    slide: [
      {
        title: "Associate Backend Developer Intern",
        description: `Throughout my internship, I honed my technical abilities in C#, .NET MVC, MS SQL, and Sitecore, while also developing strong soft skills such as time management, communication, and understanding corporate culture`,
        image: "/images/developer1.jpg",
      },
      {
        title: "Associate Backend Developer",
        description: `In my capacity as a full-time developer, I actively engaged in live projects to demonstrate proficiency in C#, .NET MVC, MS SQL, and Sitecore (XP, XM) technologies`,
        image: "/images/developer1.jpg",
      },
      {
        title: "Backend Developer",
        description: `I acquired knowledge in Sitecore XM Cloud and successfully integrated advanced Sitecore concepts into my work`,
        image: "/images/developer1.jpg",
      },
      {
        title: "DX Engineer",
        description: ` In my role as a Digital eXperience Engineer, I focused on constructing Sitecore JSS and Headless websites, utilizing frontend technologies such as ReactJs, NextJs, Typescript, and Tailwind CSS. For backend development, I leveraged C#, .NET MVC, and Sitecore (XM Cloud)`,
        image: "/images/developer1.jpg",
      },
    ],
  };
  const workExperienceData = {
    education: [
      {
        id: 0,
        year: "2022",
        title: "Bachelor of Engineering - Computer Engineering",
        location: "MBIT, New Vidyanagar",
        icon: "",
      },
      {
        id: 1,
        year: "2018",
        title: "HSC - Science",
        location: "Jawahar Navodaya Vidyalaya, Gandhinagar",
        icon: "",
      },
      {
        id: 2,
        year: "2016",
        title: "SSC",
        location: "Jawahar Navodaya Vidyalaya, Bharuch",
        icon: "",
      },
    ],
  };
  const technicalSkillsData = {
    skillDetail: [
      {
        id: 1,
        frontImage: "/images/frontend.png",
        frontTitle: "Front end",
        backImage: "/images/frontend.png",
        backTitle: "Front end",
        skills: [
          {
            skillImage: "/images/div.png",
            skillTitle: "HTML",
          },
          {
            skillImage: "/images/folder.png",
            skillTitle: "CSS",
          },
          {
            skillImage: "/images/javascript.png",
            skillTitle: "Javascript",
          },
          {
            skillImage: "/images/sciene.png",
            skillTitle: "React",
          },
          {
            skillImage: "/images/nextjs.png",
            skillTitle: "Next",
          },
          {
            skillImage: "/images/typescript.png",
            skillTitle: "TypeScript",
          },
          {
            skillImage: "/images/tailwind.png",
            skillTitle: "Tailwind",
          },
        ],
      },
      {
        id: 2,
        frontImage: "/images/back-end.png",
        frontTitle: "Back end",
        backImage: "/images/back-end.png",
        backTitle: "Back end",
        skills: [
          {
            skillImage: "/images/dot-net.png",
            skillTitle: ".Net",
          },
          {
            skillImage: "/images/asp-net-mvc.png",
            skillTitle: ".Net MVC",
          },
          {
            skillImage: "/images/letter-c (1).png",
            skillTitle: "C",
          },
          {
            skillImage: "/images/hashtag.png",
            skillTitle: "C#",
          },
          {
            skillImage: "/images/c.png",
            skillTitle: "C++",
          },
        ],
      },
      {
        id: 3,
        frontImage: "/images/database-icon.png",
        frontTitle: "Database",
        backImage: "/images/database-icon.png",
        backTitle: "Database",
        skills: [
          {
            skillImage: "/images/database.png",
            skillTitle: "MSSQL",
          },
        ],
      },
      {
        id: 4,
        frontImage: "/images/cms.png",
        frontTitle: "CMS",
        backImage: "/images/cms.png",
        backTitle: "CMS",
        skills: [
          {
            skillImage: "/images/sitecore-icon.png",
            skillTitle: "Sitecore",
          },
          {
            skillImage: "/images/wordpress.png",
            skillTitle: "Wordpress",
          },
        ],
      },
    ],
  };
  return (
    <>
      <Banner fields={HomeBanner} />
      <Carousel
        sliderData={sliderData}
        autoSlide={false}
        autoSlideInterval={3000}
      />
      <Certificates />
      <Timeline workExperienceData={workExperienceData} />
      <Skills technicalSkillsData={technicalSkillsData} />
    </>
  );
}
