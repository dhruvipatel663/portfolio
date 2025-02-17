"use client";
import Image from "next/image";
import Link from "next/link";

type CertificateProps = {
  certificate: Certificate | undefined;
};

type Certificate = {
  id: number;
  title: string;
  description: string;
  image: string;
  certificateImage: string;
  issuingOrganizationText: string;
  issuingOrganization: string;
  issuedOnText: string;
  issuedOn: string;
  credintialUrl: string;
  credintialUrlText: string;
  details: string;
  skills: Skill[];
};

type Skill = {
  title: string;
};

const RTE = ({ certificate }: CertificateProps) => {
  if (!certificate) return null;
  const {
    title,
    certificateImage,
    issuingOrganizationText,
    issuingOrganization,
    issuedOnText,
    issuedOn,
    credintialUrl,
    credintialUrlText,
    skills,
    details,
  } = certificate;
  return (
    <>
      <div className="border border-black md:mx-40 my-20 rte-container mx-10">
        <div className="rte-inner">
          <div className="rte-img shadow-xl">
            <center>
              <Image
                src={certificateImage}
                alt="certificate-img"
                width={500}
                height={500}
                priority
              />
            </center>
          </div>
          <div className="rte-details p-[20px] text-lg">
            <h2 className="md:text-4xl font-black text-3xl">{title}</h2>
            <p className="py-5">{details}</p>
            <p>
              {issuingOrganizationText}: {issuingOrganization}
            </p>
            <p>
              {issuedOnText}: {issuedOn}
            </p>
            <p>
              <Link href={credintialUrl} target="_blank">
                {credintialUrlText}
              </Link>
            </p>
            Skills:
            <ul>
              {skills &&
                skills.map((skill: Skill, index: number) => {
                  return <li key={index}>{skill?.title}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RTE;
