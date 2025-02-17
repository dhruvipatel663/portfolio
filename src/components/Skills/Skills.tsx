"use client";
import Image from "next/image";

type SkillsProps = {
  skillDetail: SkillDetail[];
};
type SkillDetail = {
  id: number;
  frontImage: string;
  frontTitle: string;
  backImage: string;
  backTitle: string;
  skills: Skill[];
};

type Skill = {
  skillImage: string;
  skillTitle: string;
};
const Skills = ({
  technicalSkillsData,
}: {
  technicalSkillsData: SkillsProps;
}) => {
  if (!technicalSkillsData) return null;
  return (
    <>
      <div className="w-full my-8">
        <div className="flex justify-center items-center">
          <h2 className="font-black text-4xl my-5">Technical Skills</h2>
        </div>

        <div className="relative skills-container flex gap-8 justify-center items-center flex-wrap">
          {technicalSkillsData?.skillDetail?.map(
            (skill: SkillDetail, index: number) => {
              return (
                <div className="box" key={index}>
                  <div className="front">
                    <div className="center flex flex-col justify-center items-center w-full h-full">
                      <Image
                        src={skill.frontImage}
                        className="border rounded"
                        alt="front-img"
                        width={200}
                        height={200}
                        priority
                      />
                      <h3 className="text-white !important font-black text-2xl">
                        {skill.frontTitle}
                      </h3>
                    </div>
                  </div>
                  <div className="back">
                    <div className="row">
                      <Image
                        src={skill.backImage}
                        alt="back-img"
                        width={100}
                        height={100}
                        priority
                      />
                      <h3>{skill.backTitle}</h3>
                    </div>
                    <div className="row grid grid-cols-2">
                      {skill?.skills?.map((s: Skill, index: number) => {
                        return (
                          <span key={index}>
                            <Image
                              src={s.skillImage}
                              className="skill-img"
                              alt="skill-img"
                              width={25}
                              height={25}
                              priority
                            />
                            {s.skillTitle}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
