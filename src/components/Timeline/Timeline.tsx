"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

type EducationDataType = {
  education: Education[];
};
type Education = {
  id: number;
  title: string;
  year: string;
  location: string;
  icon: string;
};

const Timeline = ({
  workExperienceData,
}: {
  workExperienceData: EducationDataType;
}) => {
  if (!workExperienceData) return null;
  return (
    <>
      <div className="timeline-container bg-black mt-8 mb-8 pb-8 text-white">
        <div className="text-center pt-8 pb-8">
          <h2 className="text-4xl font-black">Education</h2>
        </div>
        {workExperienceData && (
          <VerticalTimeline>
            {workExperienceData?.education.map(
              (data: Education, index: number) => {
                return (
                  // <>
                  <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date={data.year}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={
                      <Image
                        src="/images/graduation-cap-solid.svg"
                        alt="graduation-cap-img"
                        width={50}
                        height={50}
                        className="grad-cap-img"
                        priority
                      />
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      {data.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {data.location}
                    </h4>
                  </VerticalTimelineElement>
                  // </>
                );
              }
            )}
          </VerticalTimeline>
        )}
      </div>
    </>
  );
};

export default Timeline;
